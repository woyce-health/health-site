import { Link } from '@/libs/I18nNavigation';

export function RoadmapSection() {
  return (
    <section className="section" id="roadmap" style={{ paddingTop: '60px' }}>
      <div className="container">
        <div className="section-header reveal">
          <div>
            <div className="section-label">
              <span className="section-label-num">07 /</span> What&apos;s next
            </div>
            <h2 className="section-title">
              A 24-month <em>plan,</em> in five chapters.
            </h2>
          </div>
          <p className="section-intro">
            Where we are, where we&apos;re going, and how we&apos;ll get there. No vapor &mdash;
            just honest milestones, doctor by doctor, patient by patient.
          </p>
        </div>

        <div className="roadmap-progress reveal">
          <div className="roadmap-progress-status">
            <span className="roadmap-progress-dot"></span>
            <span className="roadmap-progress-text">
              Currently in <strong>Phase i</strong>
            </span>
          </div>
          <div className="roadmap-progress-bar">
            <div className="roadmap-progress-fill"></div>
          </div>
          <span className="roadmap-progress-meta">Month 3 of 24</span>
        </div>

        <div className="roadmap reveal">
          <div className="roadmap-track">
            <div className="phase current">
              <div className="phase-marker">i</div>
              <div className="phase-card">
                <div className="phase-time">
                  <span className="phase-time-status">Live now</span>
                  <span className="phase-time-range">Months 1&ndash;4</span>
                </div>
                <div>
                  <h4>Foundation</h4>
                  <p>
                    MVP for patients and doctors. Booking, prescriptions, basic AI scribe,
                    medication reminders.
                  </p>
                </div>
                <div className="phase-goal">
                  Goal
                  <strong>100 doctors, 5K patients</strong>
                </div>
              </div>
            </div>

            <div className="phase next">
              <div className="phase-marker">ii</div>
              <div className="phase-card">
                <div className="phase-time">
                  <span className="phase-time-status">Up next</span>
                  <span className="phase-time-range">Months 5&ndash;8</span>
                </div>
                <div>
                  <h4>AI depth</h4>
                  <p>
                    Hindi + 2 regional languages. WhatsApp integration. Caregiver mode. Continuity
                    timeline.
                  </p>
                </div>
                <div className="phase-goal">
                  Goal
                  <strong>500 doctors, 50K patients</strong>
                </div>
              </div>
            </div>

            <div className="phase">
              <div className="phase-marker">iii</div>
              <div className="phase-card">
                <div className="phase-time">
                  <span className="phase-time-status">Planned</span>
                  <span className="phase-time-range">Months 9&ndash;12</span>
                </div>
                <div>
                  <h4>Scale</h4>
                  <p>
                    5 more languages. ICD-10 coding. Image analysis (X-ray, ECG). Insurance + lab
                    integrations.
                  </p>
                </div>
                <div className="phase-goal">
                  Goal
                  <strong>2K doctors, 200K patients</strong>
                </div>
              </div>
            </div>

            <div className="phase">
              <div className="phase-marker">iv</div>
              <div className="phase-card">
                <div className="phase-time">
                  <span className="phase-time-status">Planned</span>
                  <span className="phase-time-range">Months 13&ndash;18</span>
                </div>
                <div>
                  <h4>Specialties</h4>
                  <p>
                    Specialty-specific workflows. Hospital partnerships. ABDM full integration.
                    Advanced analytics.
                  </p>
                </div>
                <div className="phase-goal">
                  Goal
                  <strong>10K doctors, 1M patients</strong>
                </div>
              </div>
            </div>

            <div className="phase">
              <div className="phase-marker">v</div>
              <div className="phase-card">
                <div className="phase-time">
                  <span className="phase-time-status">Future</span>
                  <span className="phase-time-range">Months 19&ndash;24</span>
                </div>
                <div>
                  <h4>Platform</h4>
                  <p>
                    Open API. Marketplace. Predictive insights. Population health. International
                    expansion prep.
                  </p>
                </div>
                <div className="phase-goal">
                  Goal
                  <strong>Sustainable revenue</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="roadmap-note reveal">
          <div className="roadmap-note-icon">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          </div>
          <div className="roadmap-note-text">
            <strong>This roadmap will change.</strong> We update it quarterly based on what doctors
            and patients actually need &mdash; not what we projected twelve months ago. Subscribe to{' '}
            <Link href="#" className="roadmap-note-link">
              The Aarogya Letter
            </Link>{' '}
            to follow along.
          </div>
        </div>
      </div>
    </section>
  );
}
