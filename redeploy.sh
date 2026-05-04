#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────
# Aarogya — Redeploy to existing S3 + CloudFront
# Usage:  ./redeploy.sh
# Needs:  aws-cli v2, npm, .deploy-info (created by deploy.sh)
# ─────────────────────────────────────────────────────────────
set -euo pipefail

if [[ ! -f .deploy-info ]]; then
  echo "✗ .deploy-info not found. Run ./deploy.sh first." && exit 1
fi

# shellcheck source=.deploy-info
source .deploy-info

echo "▶ Building..."
npm run build

echo "▶ Syncing to s3://$BUCKET_NAME..."

aws s3 sync out/ "s3://$BUCKET_NAME/" \
  --delete \
  --cache-control "public,max-age=31536000,immutable" \
  --exclude "*.html" \
  --no-cli-pager

aws s3 sync out/ "s3://$BUCKET_NAME/" \
  --cache-control "public,max-age=0,must-revalidate" \
  --exclude "*" --include "*.html" \
  --no-cli-pager

echo "▶ Invalidating CloudFront cache..."
INVALIDATION_ID=$(aws cloudfront create-invalidation \
  --distribution-id "$DIST_ID" \
  --paths "/*" \
  --query 'Invalidation.Id' --output text \
  --no-cli-pager)

echo ""
echo "✅ Redeployed!"
echo "   URL:           https://$DIST_DOMAIN"
echo "   Invalidation:  $INVALIDATION_ID"
