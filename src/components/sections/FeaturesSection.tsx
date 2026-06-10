import { Link } from '@/libs/I18nNavigation';

export function FeaturesSection() {
  return (
    <section className="section" id="patients">
      <div className="container">
        <div className="section-header reveal">
          <div>
            <div className="section-label">
              <span className="section-label-num">01 /</span> For patients
            </div>
            <h2 className="section-title">
              Care that <em>finally</em> understands you.
            </h2>
          </div>
          <p className="section-intro">
            Built for the way India actually lives — across languages, families, and providers. No
            app required. Speak naturally, get answers, stay healthy.
          </p>
        </div>

        <div className="audience-pills reveal">
          <Link href="#patients" className="audience-pill active">
            <span className="audience-pill-dot" />
            For patients
          </Link>
          <Link href="#doctors" className="audience-pill">
            For doctors
          </Link>
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

            <div className="mini-viz mini-whatsapp">
              <div className="mini-bubble in">मुझे बुखार है</div>
              <div className="mini-bubble out">Aapka temperature kya hai?</div>
              <div className="mini-bubble in">101°F</div>
            </div>

            <div className="feature-stat">
              <div className="feature-stat-num">
                500<em>M+</em>
              </div>
              <div className="feature-stat-label">WhatsApp users in India</div>
            </div>
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

            <div className="mini-viz mini-family">
              <div className="mini-family-row">
                <div className="mini-fa">M</div>
                <div className="mini-family-text">Mom</div>
                <div className="mini-family-role">Full access</div>
              </div>
              <div className="mini-family-row">
                <div className="mini-fa">D</div>
                <div className="mini-family-text">Dad</div>
                <div className="mini-family-role">Can book</div>
              </div>
              <div className="mini-family-row">
                <div className="mini-fa">B</div>
                <div className="mini-family-text">Brother</div>
                <div className="mini-family-role">View only</div>
              </div>
            </div>

            <div className="feature-stat">
              <div className="feature-stat-num">
                5<em>+</em>
              </div>
              <div className="feature-stat-label">Family members</div>
            </div>
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

            <div className="mini-viz mini-timeline">
              <div className="mini-tl-event">
                <div className="mini-tl-date">15 MAR · APOLLO</div>
                <div className="mini-tl-title">Cardiology · Atorvastatin</div>
              </div>
              <div className="mini-tl-event">
                <div className="mini-tl-date">20 FEB · MAX</div>
                <div className="mini-tl-title">Diabetes follow-up</div>
              </div>
              <div className="mini-tl-event">
                <div className="mini-tl-date">5 JAN · LOCAL LAB</div>
                <div className="mini-tl-title">CBC · All normal</div>
              </div>
            </div>

            <div className="feature-stat">
              <div className="feature-stat-num">ABDM</div>
              <div className="feature-stat-label">Native integration</div>
            </div>
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

            <div className="mini-viz mini-ai">
              <div className="mini-ai-question">
                &ldquo;Have you considered testing for vitamin D deficiency given my
                symptoms?&rdquo;
              </div>
              <div className="mini-ai-conf">
                <span className="mini-ai-conf-label">Confidence</span>
                <div className="mini-ai-conf-bar">
                  <div className="mini-ai-conf-fill" />
                </div>
                <span className="mini-ai-conf-num">78%</span>
              </div>
            </div>

            <div className="feature-stat">
              <div className="feature-stat-num">5–7</div>
              <div className="feature-stat-label">Smart questions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
