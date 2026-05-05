export function HowItWorksSection() {
  return (
    <section className="how-section" id="how">
      <div className="container">
        <div className="section-header reveal">
          <div>
            <div className="section-label">
              <span className="section-label-num">03 /</span> How patients use it
            </div>
            <h2 className="section-title">
              Three steps to <em>better care.</em>
            </h2>
          </div>
          <p className="section-intro">
            From sign-up to your first AI-summarized lab report in under five minutes. No friction,
            no fuss.
          </p>
        </div>

        <div style={{ textAlign: 'center' }} className="reveal">
          <div className="how-time-indicator">
            <div className="how-time-icon">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <span>Total setup</span>
            <span className="how-time-divider"></span>
            <strong>Under 3 minutes</strong>
          </div>
        </div>

        <div className="steps reveal">
          <div className="step-arrow step-arrow-1">
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
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
          <div className="step-arrow step-arrow-2">
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
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>

          <div className="step">
            <div className="step-num">
              <span className="step-num-badge">i</span> Step One
            </div>
            <div className="step-icon">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
            </div>
            <h3>Connect once.</h3>
            <p>
              Link your ABHA ID and we&apos;ll quietly pull your records together &mdash; past
              prescriptions, lab reports, and hospital visits.
            </p>
            <div className="step-mini step-mini-abha">
              <div className="step-mini-abha-id">
                91-3456-<span>&bull;&bull;&bull;</span>-7890
              </div>
              <span className="step-mini-abha-status">Linked</span>
            </div>
            <div className="step-meta">
              <span>One-time setup</span>
              <span className="step-meta-time">~ 60 sec</span>
            </div>
          </div>

          <div className="step">
            <div className="step-num">
              <span className="step-num-badge">ii</span> Step Two
            </div>
            <div className="step-icon">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <h3>Talk to us.</h3>
            <p>
              Type, tap, or just speak. We understand symptoms, schedule appointments, and explain
              reports in plain language.
            </p>
            <div className="step-mini step-mini-voice">
              <div className="step-mini-voice-mic">
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
                  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                </svg>
              </div>
              <div className="step-mini-voice-bars">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className="step-mini-voice-lang">&#2361;&#2367;&#2306;&#2342;&#2368;</span>
            </div>
            <div className="step-meta">
              <span>12 languages</span>
              <span className="step-meta-time">Voice or text</span>
            </div>
          </div>

          <div className="step">
            <div className="step-num">
              <span className="step-num-badge">iii</span> Step Three
            </div>
            <div className="step-icon">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
            <h3>Stay ahead of it.</h3>
            <p>
              Smart reminders, refill alerts, follow-through after discharge, and gentle nudges when
              something deserves a second look.
            </p>
            <div className="step-mini step-mini-notif">
              <div className="step-mini-notif-icon">
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
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div className="step-mini-notif-text">
                <strong>Refill in 3 days</strong>
                <span>Metformin &middot; Apollo</span>
              </div>
            </div>
            <div className="step-meta">
              <span>Always running</span>
              <span className="step-meta-time">No spam</span>
            </div>
          </div>
        </div>

        <div className="how-cta reveal">
          <div className="how-cta-text">
            <strong>Ready to start?</strong> Connect your ABHA ID and you&apos;ll be using Aarogya
            in three minutes.
          </div>
          <div className="how-cta-buttons">
            <a href="#" className="btn btn-primary">
              Connect ABHA ID
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
            </a>
            <a href="#" className="btn btn-ghost">
              Don&apos;t have an ABHA?
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
