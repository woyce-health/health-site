#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────
# Aarogya — First-time deploy to S3 + CloudFront
# Usage:  ./deploy.sh
# Needs:  aws-cli v2, jq, npm
# ─────────────────────────────────────────────────────────────
set -euo pipefail

# ── Config ────────────────────────────────────────────────────
REGION="us-east-1"
BUCKET_NAME="aarogya-site-$(openssl rand -hex 4)"
ORIGIN_ID="aarogya-s3-origin"
FUNCTION_NAME="aarogya-url-rewriter"

# ── Prerequisites ──────────────────────────────────────────────
for cmd in aws jq npm; do
  if ! command -v "$cmd" &> /dev/null; then
    echo "✗ '$cmd' is required but not installed." && exit 1
  fi
done

echo "▶ Checking AWS credentials..."
aws sts get-caller-identity --no-cli-pager > /dev/null

ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text --no-cli-pager)
FUNCTION_ARN="arn:aws:cloudfront::${ACCOUNT_ID}:function/${FUNCTION_NAME}"

# ── 1. Build ───────────────────────────────────────────────────
echo "▶ Building..."
npm run build

# ── 2. S3 Bucket ───────────────────────────────────────────────
echo "▶ Creating S3 bucket: $BUCKET_NAME"
aws s3api create-bucket \
  --bucket "$BUCKET_NAME" \
  --region "$REGION" \
  --no-cli-pager

aws s3api put-public-access-block \
  --bucket "$BUCKET_NAME" \
  --public-access-block-configuration \
    "BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true" \
  --no-cli-pager

# ── 3. Upload files ────────────────────────────────────────────
echo "▶ Uploading to S3..."

# Assets: long-lived cache
aws s3 sync out/ "s3://$BUCKET_NAME/" \
  --delete \
  --cache-control "public,max-age=31536000,immutable" \
  --exclude "*.html" \
  --no-cli-pager

# HTML: always revalidate
aws s3 sync out/ "s3://$BUCKET_NAME/" \
  --cache-control "public,max-age=0,must-revalidate" \
  --exclude "*" --include "*.html" \
  --no-cli-pager

# ── 4. CloudFront Function (URL rewriter) ─────────────────────
echo "▶ Creating CloudFront URL rewriter function..."

TMPFILE=$(mktemp /tmp/cf-function-XXXXXX.js)
cat > "$TMPFILE" <<'EOF'
function handler(event) {
  var uri = event.request.uri;
  if (uri.endsWith('/')) {
    event.request.uri += 'index.html';
  } else if (!uri.split('/').pop().includes('.')) {
    event.request.uri += '/index.html';
  }
  return event.request;
}
EOF

aws cloudfront create-function \
  --name "$FUNCTION_NAME" \
  --function-config "Comment=Rewrite directory paths to index.html,Runtime=cloudfront-js-2.0" \
  --function-code "fileb://$TMPFILE" \
  --no-cli-pager > /dev/null

rm "$TMPFILE"

# Publish to LIVE stage
FUNCTION_ETAG=$(aws cloudfront describe-function \
  --name "$FUNCTION_NAME" \
  --query 'ETag' --output text --no-cli-pager)

aws cloudfront publish-function \
  --name "$FUNCTION_NAME" \
  --if-match "$FUNCTION_ETAG" \
  --no-cli-pager > /dev/null

# ── 5. Origin Access Control ───────────────────────────────────
echo "▶ Creating Origin Access Control..."
OAC_ID=$(aws cloudfront create-origin-access-control \
  --origin-access-control-config \
    "Name=${BUCKET_NAME}-oac,Description=OAC for Aarogya,SigningProtocol=sigv4,SigningBehavior=always,OriginAccessControlOriginType=s3" \
  --query 'OriginAccessControl.Id' --output text \
  --no-cli-pager)

# ── 6. CloudFront Distribution ────────────────────────────────
echo "▶ Creating CloudFront distribution..."

DIST_OUTPUT=$(aws cloudfront create-distribution \
  --no-cli-pager \
  --distribution-config "{
    \"CallerReference\": \"aarogya-$(date +%s)\",
    \"Comment\": \"Aarogya health site\",
    \"DefaultRootObject\": \"index.html\",
    \"Origins\": {
      \"Quantity\": 1,
      \"Items\": [{
        \"Id\": \"$ORIGIN_ID\",
        \"DomainName\": \"${BUCKET_NAME}.s3.${REGION}.amazonaws.com\",
        \"S3OriginConfig\": { \"OriginAccessIdentity\": \"\" },
        \"OriginAccessControlId\": \"$OAC_ID\"
      }]
    },
    \"DefaultCacheBehavior\": {
      \"TargetOriginId\": \"$ORIGIN_ID\",
      \"ViewerProtocolPolicy\": \"redirect-to-https\",
      \"CachePolicyId\": \"658327ea-f89d-4fab-a63d-7e88639e58f6\",
      \"Compress\": true,
      \"AllowedMethods\": {
        \"Quantity\": 2,
        \"Items\": [\"GET\", \"HEAD\"],
        \"CachedMethods\": { \"Quantity\": 2, \"Items\": [\"GET\", \"HEAD\"] }
      },
      \"FunctionAssociations\": {
        \"Quantity\": 1,
        \"Items\": [{
          \"FunctionARN\": \"$FUNCTION_ARN\",
          \"EventType\": \"viewer-request\"
        }]
      }
    },
    \"CustomErrorResponses\": {
      \"Quantity\": 1,
      \"Items\": [{
        \"ErrorCode\": 403,
        \"ResponsePagePath\": \"/index.html\",
        \"ResponseCode\": \"200\",
        \"ErrorCachingMinTTL\": 0
      }]
    },
    \"Enabled\": true,
    \"HttpVersion\": \"http2and3\",
    \"PriceClass\": \"PriceClass_All\",
    \"IsIPV6Enabled\": true
  }")

DIST_ID=$(echo "$DIST_OUTPUT" | jq -r '.Distribution.Id')
DIST_DOMAIN=$(echo "$DIST_OUTPUT" | jq -r '.Distribution.DomainName')

# ── 7. Bucket Policy ───────────────────────────────────────────
echo "▶ Attaching bucket policy..."
aws s3api put-bucket-policy \
  --bucket "$BUCKET_NAME" \
  --policy "{
    \"Version\": \"2012-10-17\",
    \"Statement\": [{
      \"Sid\": \"AllowCloudFrontOAC\",
      \"Effect\": \"Allow\",
      \"Principal\": { \"Service\": \"cloudfront.amazonaws.com\" },
      \"Action\": \"s3:GetObject\",
      \"Resource\": \"arn:aws:s3:::${BUCKET_NAME}/*\",
      \"Condition\": {
        \"StringEquals\": {
          \"AWS:SourceArn\": \"arn:aws:cloudfront::${ACCOUNT_ID}:distribution/${DIST_ID}\"
        }
      }
    }]
  }"

# ── 8. Save deployment info ────────────────────────────────────
cat > .deploy-info <<INFO
BUCKET_NAME=$BUCKET_NAME
DIST_ID=$DIST_ID
DIST_DOMAIN=$DIST_DOMAIN
FUNCTION_NAME=$FUNCTION_NAME
ACCOUNT_ID=$ACCOUNT_ID
REGION=$REGION
INFO

echo ""
echo "✅ Deployed successfully!"
echo "   Bucket:      s3://$BUCKET_NAME"
echo "   Dist ID:     $DIST_ID"
echo "   URL:         https://$DIST_DOMAIN"
echo ""
echo "⏳ CloudFront is propagating globally (~5–15 min)."
echo "   Check status: aws cloudfront get-distribution --id $DIST_ID --query 'Distribution.Status' --output text"
