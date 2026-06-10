export function TrustSection() {
  return (
    <section className="section" id="trust">
      <div className="container">
        <div className="trust-badges reveal">
          <span className="trust-badges-label">Compliant with</span>
          <span className="trust-cert">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            DPDP Act 2023
          </span>
          <span className="trust-cert">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            ABDM Native
          </span>
          <span className="trust-cert">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            ISO 27001
          </span>
          <span className="trust-cert">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 12l2 2 4-4" />
              <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
              <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
              <path d="M3 5c0 1.66 4 3 9 3s9-1.34 9-3-4-3-9-3-9 1.34-9 3" />
            </svg>
            FHIR R4
          </span>
          <span className="trust-cert">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
            HL7
          </span>
          <span className="trust-cert">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
            SOC 2 Type II
          </span>
        </div>

        <div className="trust-card reveal">
          <div>
            <span className="trust-promise">
              <span className="trust-promise-icon">
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </span>
              Built for trust
            </span>
            <h2>
              Your records
              <br />
              are <em>yours.</em>
              <br />
              Always.
            </h2>
            <p className="trust-card-sub">
              Healthcare has been careless with personal data for too long. We do the opposite
              &mdash; and we&apos;d rather lose features than your trust.
            </p>

            <div className="trust-lifecycle">
              <div className="trust-lifecycle-label">Your data lifecycle</div>
              <div className="trust-lifecycle-rail">
                <div className="trust-life-step">
                  Encrypted<span>at rest</span>
                </div>
                <svg
                  className="trust-life-arrow"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
                <div className="trust-life-step">
                  Stored<span>in India</span>
                </div>
                <svg
                  className="trust-life-arrow"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
                <div className="trust-life-step">
                  You can<span>export anytime</span>
                </div>
                <svg
                  className="trust-life-arrow"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
                <div className="trust-life-step">
                  Deleted<span>on request</span>
                </div>
              </div>
            </div>
          </div>

          <ul className="trust-list">
            <li>
              <span className="trust-check">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </span>
              <div>
                <strong>End-to-end encryption</strong>
                Records encrypted at rest and in transit. We can&apos;t read them, and neither can
                anyone else.
              </div>
              <span className="trust-list-tag">AES-256</span>
            </li>
            <li>
              <span className="trust-check">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </span>
              <div>
                <strong>One-click export</strong>
                Take everything with you, anytime. PDF, FHIR, JSON &mdash; your choice. No lock-in,
                ever.
              </div>
              <span className="trust-list-tag">3 formats</span>
            </li>
            <li>
              <span className="trust-check">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </span>
              <div>
                <strong>Doctor-verified AI</strong>
                Every AI suggestion shows its reasoning and confidence. Real doctors review the
                rest.
              </div>
              <span className="trust-list-tag">Always sourced</span>
            </li>
            <li>
              <span className="trust-check">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
              </span>
              <div>
                <strong>DPDP Act compliant</strong>
                Privacy by design, audited quarterly, transparent forever. We publish what we
                collect, and why.
              </div>
              <span className="trust-list-tag">Audited Q1 &apos;26</span>
            </li>
            <li>
              <span className="trust-check">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 11l-3-3m0 0l-3 3m3-3v8" />
                </svg>
              </span>
              <div>
                <strong>Granular consent</strong>
                You decide who sees what &mdash; per doctor, per record, per visit. Revoke access in
                one tap.
              </div>
              <span className="trust-list-tag">Per-record</span>
            </li>
          </ul>
        </div>

        <div className="trust-quote reveal">
          <div className="trust-quote-text">
            &ldquo;We&apos;d rather lose features than your trust.{' '}
            <strong>That&apos;s not marketing &mdash; it&apos;s the rule.</strong>&rdquo;
          </div>
          <div className="trust-quote-attr">Aarogya &middot; Privacy Charter</div>
        </div>
      </div>
    </section>
  );
}
