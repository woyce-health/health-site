export function AiTransparencySection() {
  return (
    <section
      className="section"
      id="transparency"
      style={{ paddingTop: '60px', paddingBottom: '60px' }}
    >
      <div className="container">
        <div className="section-header reveal">
          <div>
            <div className="section-label">
              <span className="section-label-num">05.5 /</span> How we earn trust
            </div>
            <h2 className="section-title">
              Every AI suggestion <em>shows its work.</em>
            </h2>
          </div>
          <p className="section-intro">
            No black boxes. Every recommendation comes with a confidence score, the reasoning behind
            it, the evidence sources, and a clear path to a human doctor&apos;s verification.
          </p>
        </div>

        <div className="confidence-section reveal">
          {/* Left: AI Suggestion mockup with reasoning */}
          <div className="conf-card">
            <div className="conf-label">Sample AI suggestion</div>
            <h4>
              The way <em>every</em> recommendation looks.
            </h4>

            <div className="conf-suggestion">
              <div className="conf-suggestion-head">
                <span className="conf-suggestion-tag">Health Insight</span>
                <span className="conf-suggestion-time">Just now &middot; For Rajesh K.</span>
              </div>

              <div className="conf-suggestion-body">
                <p className="conf-suggestion-text">
                  Based on your recent fasting glucose (126 mg/dL) and HbA1c (6.8%), there are
                  indicators consistent with <strong>Type 2 diabetes.</strong> Please discuss with
                  your doctor.
                </p>

                <div className="conf-reasoning">
                  <div className="conf-reasoning-label">How AI reached this</div>
                  <div className="conf-step">
                    <span className="conf-step-num">1</span>
                    <div>
                      Fasting glucose <strong>126 mg/dL</strong> &mdash; above ICMR threshold of
                      126.
                    </div>
                  </div>
                  <div className="conf-step">
                    <span className="conf-step-num">2</span>
                    <div>
                      HbA1c <strong>6.8%</strong> &mdash; between 6.5% and 7.0% (pre-diabetic to
                      diabetic range).
                    </div>
                  </div>
                  <div className="conf-step">
                    <span className="conf-step-num">3</span>
                    <div>
                      Pattern stable across <strong>3 readings</strong> over 6 months.
                    </div>
                  </div>
                </div>

                <div className="conf-bar">
                  <span className="conf-bar-label">Confidence</span>
                  <div className="conf-bar-track">
                    <div className="conf-bar-fill"></div>
                  </div>
                  <span className="conf-bar-num">78%</span>
                </div>

                <div className="conf-source">
                  <span>
                    <strong>Source</strong> ICMR Guidelines 2024
                  </span>
                  <span>
                    <strong>Cases</strong> 12,400 profiles
                  </span>
                  <span>
                    <strong>Reviewed</strong> Dr. Mehta &middot; 2d ago
                  </span>
                </div>
              </div>

              <div className="conf-actions">
                <button className="conf-action-btn primary">Share with my doctor</button>
                <button className="conf-action-btn">Why this?</button>
              </div>
            </div>

            <div className="conf-disclaimer">
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
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
              <span>
                <strong>We never claim to diagnose.</strong> AI surfaces evidence-based questions.
                Your doctor decides.
              </span>
            </div>
          </div>

          {/* Right: Access log + privacy controls */}
          <div className="conf-card">
            <div className="conf-label">Your access log</div>
            <h4>
              See exactly <em>who&rsquo;s seen what.</em>
            </h4>

            <div className="access-log-head">
              <span className="access-log-count">
                <strong>4 events</strong> &middot; last 7 days
              </span>
              <a href="#" className="access-log-view">
                View all
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
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>

            <ul className="access-log">
              <li>
                <div className="access-log-icon green">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div className="access-log-who">
                  <strong>Dr. Sharma viewed your records</strong>
                  <span>Cardiology &middot; Mumbai</span>
                </div>
                <span className="access-log-time">2h ago</span>
              </li>
              <li>
                <div className="access-log-icon">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div className="access-log-who">
                  <strong>AI generated lab summary</strong>
                  <span>HbA1c report &middot; Auto-explained</span>
                </div>
                <span className="access-log-time">Yesterday</span>
              </li>
              <li>
                <div className="access-log-icon amber">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div className="access-log-who">
                  <strong>Daughter (caregiver) checked vitals</strong>
                  <span>View-only &middot; Bengaluru</span>
                </div>
                <span className="access-log-time">3d ago</span>
              </li>
              <li>
                <div className="access-log-icon green">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </div>
                <div className="access-log-who">
                  <strong>Records exported to PDF</strong>
                  <span>Full history &middot; You requested</span>
                </div>
                <span className="access-log-time">1w ago</span>
              </li>
            </ul>

            <div className="privacy-controls">
              <div className="privacy-controls-label">Your AI permissions</div>
              <div className="privacy-toggle">
                <span className="privacy-toggle-text">AI summaries on lab reports</span>
                <span className="privacy-toggle-switch"></span>
              </div>
              <div className="privacy-toggle">
                <span className="privacy-toggle-text">Pre-visit question generation</span>
                <span className="privacy-toggle-switch"></span>
              </div>
              <div className="privacy-toggle off">
                <span className="privacy-toggle-text">Anonymized research contribution</span>
                <span className="privacy-toggle-switch"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
