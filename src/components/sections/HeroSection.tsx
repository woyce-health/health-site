import { Link } from '@/libs/I18nNavigation';

export function HeroSection() {
  return (
    <header className="hero">
      <div className="container">
        <div className="hero-grid">
          {/* Left — content */}
          <div className="hero-content">
            {/* Multi-pill eyebrow row */}
            <div className="hero-eyebrow-row fade-up">
              <span className="eyebrow">
                <span className="pulse-dot" /> Private Beta &mdash; Live in 3 cities
              </span>
              <span className="eyebrow-divider" />
              <span className="eyebrow-mini">
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
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                ABDM Certified
              </span>
            </div>

            <h1 className="display fade-up delay-1">
              Built for the
              <br />
              two people <em className="underline-mark">who matter most.</em>
            </h1>

            <p className="hero-sub fade-up delay-2">
              Aarogya is an AI-powered care platform for patients who deserve to be understood, and
              the doctors who deserve their day back.{' '}
              <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>
                One tool. Two perspectives.
              </strong>{' '}
              Better health on both sides of the consultation.
            </p>

            {/* Trust strip */}
            <div className="hero-trust fade-up delay-2">
              <div className="hero-avatars">
                <div className="hero-avatar">P</div>
                <div className="hero-avatar">R</div>
                <div className="hero-avatar">S</div>
                <div className="hero-avatar">+</div>
              </div>
              <div className="hero-trust-text">
                <strong>2,400+ patients &amp; doctors</strong> already on the waitlist
                <div className="hero-trust-stars">&#9733; &#9733; &#9733; &#9733; &#9733;</div>
              </div>
            </div>

            {/* Audience toggle CTA */}
            <div className="hero-cta fade-up delay-3">
              <div className="audience-toggle">
                <Link href="#patients" className="active">
                  I&rsquo;m a patient
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
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
                <Link href="#doctors">I&rsquo;m a doctor</Link>
              </div>
              <span className="hero-cta-meta">
                <span className="check-icon">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                Free forever
              </span>
            </div>

            {/* Metrics with progress bars */}
            <div className="hero-metrics fade-up delay-4">
              <div className="metric">
                <div className="metric-num">
                  12<span>+</span>
                </div>
                <div className="metric-label">Languages</div>
                <div className="metric-bar">
                  <div className="metric-bar-fill" />
                </div>
              </div>
              <div className="metric">
                <div className="metric-num">
                  2<span>hrs</span>
                </div>
                <div className="metric-label">Saved daily</div>
                <div className="metric-bar">
                  <div className="metric-bar-fill" />
                </div>
              </div>
              <div className="metric">
                <div className="metric-num">24/7</div>
                <div className="metric-label">Triage</div>
                <div className="metric-bar">
                  <div className="metric-bar-fill" />
                </div>
              </div>
              <div className="metric">
                <div className="metric-num">ABDM</div>
                <div className="metric-label">Integrated</div>
                <div className="metric-bar">
                  <div className="metric-bar-fill" />
                </div>
              </div>
            </div>
          </div>

          {/* Right — AI pipeline visual */}
          <div className="hero-visual fade-up delay-3">
            <svg
              className="hero-orbits"
              viewBox="0 0 720 720"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle
                cx="360"
                cy="360"
                r="350"
                stroke="#4338ca"
                strokeOpacity="0.08"
                strokeDasharray="2 6"
              />
              <circle
                cx="360"
                cy="360"
                r="280"
                stroke="#4338ca"
                strokeOpacity="0.1"
                strokeDasharray="2 4"
              />
              <circle cx="360" cy="360" r="210" stroke="#4338ca" strokeOpacity="0.12" />
              <circle cx="360" cy="360" r="140" stroke="#4338ca" strokeOpacity="0.18" />
              <circle cx="360" cy="10" r="3" fill="#4338ca" opacity="0.4" />
              <circle cx="710" cy="360" r="2" fill="#6366f1" opacity="0.5" />
              <circle cx="360" cy="710" r="3" fill="#4338ca" opacity="0.3" />
            </svg>

            {/* AI Pipeline Stack */}
            <div className="ai-stack">
              {/* Card 1 — Listening */}
              <div className="ai-card ai-card-listen">
                <div className="ai-card-head">
                  <span className="ai-card-step">01</span>
                  <span className="ai-card-title">Listening</span>
                  <span className="ai-card-tag">&#2361;&#2367;&#2306;&#2342;&#2368;</span>
                </div>
                <div className="voice-waveform">
                  {Array.from({ length: 30 }).map((_, i) => (
                    <span key={i} />
                  ))}
                </div>
                <div className="voice-transcript">
                  &ldquo;&#2350;&#2369;&#2334;&#2375;{' '}
                  <em>
                    3 &#2342;&#2367;&#2344; &#2360;&#2375; &#2348;&#2369;&#2326;&#2366;&#2352;
                  </em>{' '}
                  &#2361;&#2376;, body pain &#2349;&#2368; &#2361;&#2376;&rdquo;
                </div>
              </div>

              {/* Connector */}
              <div className="ai-connector">
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
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <polyline points="19 12 12 19 5 12" />
                </svg>
              </div>

              {/* Card 2 — Understanding */}
              <div className="ai-card ai-card-extract">
                <div className="ai-card-head">
                  <span className="ai-card-step">02</span>
                  <span className="ai-card-title">Understanding</span>
                  <span className="ai-card-tag pulse">Processing</span>
                </div>
                <div className="entity-grid">
                  <div className="entity-chip symptom">
                    <span className="entity-label">SYMPTOM</span>
                    <span className="entity-value">Fever &middot; 3d</span>
                  </div>
                  <div className="entity-chip vital">
                    <span className="entity-label">SEVERITY</span>
                    <span className="entity-value">Moderate</span>
                  </div>
                  <div className="entity-chip symptom">
                    <span className="entity-label">SYMPTOM</span>
                    <span className="entity-value">Body pain</span>
                  </div>
                  <div className="entity-chip flag">
                    <span className="entity-label">RED FLAG</span>
                    <span className="entity-value">None</span>
                  </div>
                </div>
                <div className="ai-confidence">
                  <span className="ai-conf-label">AI confidence</span>
                  <div className="ai-conf-bar">
                    <div className="ai-conf-fill" />
                  </div>
                  <span className="ai-conf-num">94%</span>
                </div>
              </div>

              {/* Connector */}
              <div className="ai-connector">
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
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <polyline points="19 12 12 19 5 12" />
                </svg>
              </div>

              {/* Card 3 — Recommended action */}
              <div className="ai-card ai-card-output">
                <div className="ai-card-head">
                  <span className="ai-card-step">03</span>
                  <span className="ai-card-title">Recommended action</span>
                  <span className="ai-card-tag green">&#10003; Ready</span>
                </div>
                <div className="output-rows">
                  <div className="output-row">
                    <div className="output-icon">
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
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                    </div>
                    <div className="output-text">
                      <strong>Book General Physician</strong>
                      <span>Dr. Sharma &middot; Today 4:00 PM &middot; &#8377;300</span>
                    </div>
                  </div>
                  <div className="output-row">
                    <div
                      className="output-icon"
                      style={{ background: '#fef3c7', color: '#d97706' }}
                    >
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
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                        <line x1="12" y1="9" x2="12" y2="13" />
                        <line x1="12" y1="17" x2="12.01" y2="17" />
                      </svg>
                    </div>
                    <div className="output-text">
                      <strong>Self-care until visit</strong>
                      <span>Hydration &middot; Rest &middot; Monitor temp every 4h</span>
                    </div>
                  </div>
                  <div className="output-row">
                    <div
                      className="output-icon"
                      style={{ background: '#dcfce7', color: '#16a34a' }}
                    >
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
                    <div className="output-text">
                      <strong>Doctor-verified</strong>
                      <span>Dr. P. Mehta &middot; Reviewed 2 min ago</span>
                    </div>
                  </div>
                </div>
                <button className="output-cta" type="button">
                  Send to my doctor
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
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="hero-scroll">
        <span>Scroll to explore</span>
        <div className="hero-scroll-line" />
      </div>
    </header>
  );
}
