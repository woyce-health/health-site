function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function TrustSection() {
  return (
    <section className="section" id="trust">
      <div className="container">
        <div className="trust-card reveal">
          <div>
            <div className="section-label">
              <span className="section-label-num">03 /</span> Built for trust
            </div>
            <h2>
              Your records
              <br />
              are <em>yours.</em>
              <br />
              Always.
            </h2>
            <p
              style={{
                color: 'var(--ink-soft)',
                fontSize: '16px',
                marginTop: '16px',
                lineHeight: '1.65',
              }}
            >
              Healthcare has been careless with personal data for too long. We do the opposite — and
              we&apos;d rather lose features than your trust.
            </p>
          </div>
          <ul className="trust-list">
            <li>
              <span className="trust-check">
                <CheckIcon />
              </span>
              <div>
                <strong>End-to-end encryption</strong>
                Records encrypted at rest and in transit. We can&apos;t read them, and neither can
                anyone else.
              </div>
            </li>
            <li>
              <span className="trust-check">
                <CheckIcon />
              </span>
              <div>
                <strong>One-click export</strong>
                Take everything with you, anytime. PDF, FHIR, JSON — your choice.
              </div>
            </li>
            <li>
              <span className="trust-check">
                <CheckIcon />
              </span>
              <div>
                <strong>Doctor-verified AI</strong>
                Every AI suggestion shows its reasoning and confidence. Real doctors review the
                rest.
              </div>
            </li>
            <li>
              <span className="trust-check">
                <CheckIcon />
              </span>
              <div>
                <strong>DPDP Act compliant</strong>
                Privacy by design, audited quarterly, transparent forever.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
