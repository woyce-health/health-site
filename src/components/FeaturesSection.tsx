export function FeaturesSection() {
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="section-header reveal">
          <div>
            <div className="section-label">
              <span className="section-label-num">01 /</span> What we do
            </div>
            <h2 className="section-title">
              A quiet revolution in <em>everyday care.</em>
            </h2>
          </div>
          <p className="section-intro">
            Five things existing apps get wrong — and how we get them right. Built around the
            patient, the doctor, and the family that holds them together.
          </p>
        </div>

        <div className="feature-grid">
          {/* Voice-first */}
          <div className="feature large reveal">
            <div>
              <div className="feature-icon-wrap">
                <div className="feature-icon">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                    <line x1="12" y1="19" x2="12" y2="23" />
                    <line x1="8" y1="23" x2="16" y2="23" />
                  </svg>
                </div>
              </div>
              <h3>
                Voice-first, in your <em style={{ fontStyle: 'italic' }}>own</em> language.
              </h3>
              <p>
                Speak naturally — book a doctor, log a symptom, understand a report. Designed for
                parents, grandparents, and anyone the typing-first internet left behind.
              </p>
            </div>
            <div>
              <div className="lang-strip">
                <span className="lang-chip">हिंदी</span>
                <span className="lang-chip">தமிழ்</span>
                <span className="lang-chip">తెలుగు</span>
                <span className="lang-chip">বাংলা</span>
                <span className="lang-chip">मराठी</span>
                <span className="lang-chip">ગુજરાતી</span>
                <span className="lang-chip">ಕನ್ನಡ</span>
                <span className="lang-chip">+ 5 more</span>
              </div>
              <div className="feature-tag" style={{ marginTop: '24px' }}>
                ⌘ 12 LANGUAGES SUPPORTED
              </div>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="feature medium reveal">
            <div className="feature-icon-wrap">
              <div className="feature-icon">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>
            </div>
            <h3>Healthcare on WhatsApp.</h3>
            <p>
              No app to download. Book appointments, get prescriptions, ask follow-ups, and receive
              lab reports — all on the chat your family already uses.
            </p>
            <div className="feature-tag">⌘ ZERO INSTALL</div>
          </div>

          {/* Family mode */}
          <div className="feature small reveal">
            <div className="feature-icon-wrap">
              <div className="feature-icon">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
            </div>
            <h3>Family caregiver mode.</h3>
            <p>
              Manage care for parents, kids, and partners with proper permissions and shared
              dashboards. Built for joint families.
            </p>
          </div>

          {/* Unified timeline */}
          <div className="feature small reveal">
            <div className="feature-icon-wrap">
              <div className="feature-icon">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
              </div>
            </div>
            <h3>One unified timeline.</h3>
            <p>
              Every doctor, every prescription, every lab. We pull it all together via ABDM and flag
              conflicts before they hurt you.
            </p>
          </div>

          {/* AI Second Opinion */}
          <div className="feature small reveal">
            <div className="feature-icon-wrap">
              <div className="feature-icon">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
            </div>
            <h3>AI Second Opinion.</h3>
            <p>
              Upload a diagnosis. Get five thoughtful questions to ask your doctor — never a
              counter-diagnosis. Always doctor-verifiable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
