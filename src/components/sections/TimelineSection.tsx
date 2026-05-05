const sources = ['ABDM', 'Hospital EMRs', 'Lab portals', 'Pharmacies', 'Insurance', 'Wearables'];

const FlagIcon = () => (
  <svg
    className="mock-flag-icon"
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
);

export function TimelineSection() {
  return (
    <section
      className="section"
      id="timeline"
      style={{ paddingTop: '60px', paddingBottom: '60px' }}
    >
      <div className="container">
        <div className="section-header reveal">
          <div>
            <div className="section-label">
              <span className="section-label-num">02.5 /</span> The hardest problem in healthcare
            </div>
            <h2 className="section-title">
              One <em>timeline,</em> every doctor.
            </h2>
          </div>
          <p className="section-intro">
            Patients see five doctors who don&rsquo;t talk to each other. Records get lost, drug
            interactions slip through, tests get repeated. We fix this.
          </p>
        </div>

        <div className="timeline-sources reveal">
          <span className="timeline-sources-label">Live sources</span>
          {sources.map((s) => (
            <span key={s} className="timeline-source">
              <span className="timeline-source-dot"></span>
              {s}
            </span>
          ))}
        </div>

        <div className="timeline-feature reveal">
          <div className="timeline-content">
            <h3>
              Your <em>whole story,</em> in one place.
            </h3>
            <p>
              We pull from ABDM, hospital EMRs, insurance claims, pharmacy records, and lab portals
              &mdash; and stitch them together into a single chronological view. AI watches for
              conflicts the moment they appear.
            </p>

            <div className="timeline-quickstats">
              <div className="timeline-qstat">
                <div className="timeline-qstat-num">
                  340<span>+</span>
                </div>
                <div className="timeline-qstat-label">Records merged</div>
              </div>
              <div className="timeline-qstat">
                <div className="timeline-qstat-num">12</div>
                <div className="timeline-qstat-label">Conflicts caught</div>
              </div>
              <div className="timeline-qstat">
                <div className="timeline-qstat-num">8</div>
                <div className="timeline-qstat-label">Tests prevented</div>
              </div>
            </div>

            <ul className="timeline-bullets">
              <li>
                <div>
                  <strong>Universal record ingestion</strong> &mdash; accept records from any source
                  via OCR + medical NLP
                </div>
              </li>
              <li>
                <div>
                  <strong>Cross-provider conflict detection</strong> &mdash; flag drug interactions
                  across all your doctors
                </div>
              </li>
              <li>
                <div>
                  <strong>Duplicate test prevention</strong> &mdash; &ldquo;you had this test 2
                  weeks ago, here it is&rdquo;
                </div>
              </li>
              <li>
                <div>
                  <strong>Care gap analysis</strong> &mdash; &ldquo;it&rsquo;s been 18 months since
                  you saw cardiology&rdquo;
                </div>
              </li>
              <li>
                <div>
                  <strong>FHIR-compliant + ABDM-native</strong> &mdash; built on India&rsquo;s
                  health network
                </div>
              </li>
            </ul>
          </div>

          <div className="mock-timeline">
            <div className="mock-timeline-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="mock-timeline-header">
              <div className="mock-timeline-title">Rajesh Kumar &middot; Health Timeline</div>
              <div className="mock-timeline-tag">ABDM verified</div>
            </div>

            <div className="mock-events">
              <div className="mock-event flag">
                <div className="mock-event-src">A</div>
                <div className="mock-event-date">
                  <span>15 March 2026</span>
                  <span className="mock-event-date-divider"></span>
                  <span className="mock-event-date-place">Apollo Hospital</span>
                </div>
                <div className="mock-event-title">Dr. Sharma &middot; Cardiologist</div>
                <div className="mock-event-detail">
                  Annual checkup &middot; Prescribed Atorvastatin 10mg
                </div>
                <div className="mock-event-vitals">
                  <span className="mock-vital warn">
                    <strong>BP</strong>140/90
                  </span>
                  <span className="mock-vital warn">
                    <strong>Chol</strong>220
                  </span>
                  <span className="mock-vital">
                    <strong>HR</strong>72
                  </span>
                </div>
                <div className="mock-flag">
                  <FlagIcon />
                  <div>
                    <div>
                      <strong>Conflict detected.</strong> Atorvastatin interacts with Losartan
                      prescribed by Dr. Patel last month.
                    </div>
                    <div className="mock-flag-action">
                      <button className="mock-flag-btn primary">Notify both doctors</button>
                      <button className="mock-flag-btn">Dismiss</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mock-event">
                <div className="mock-event-src">M</div>
                <div className="mock-event-date">
                  <span>20 February 2026</span>
                  <span className="mock-event-date-divider"></span>
                  <span className="mock-event-date-place">Max Healthcare</span>
                </div>
                <div className="mock-event-title">Dr. Patel &middot; Diabetologist</div>
                <div className="mock-event-detail">
                  Diabetes follow-up &middot; Continued Metformin, Losartan
                </div>
                <div className="mock-event-vitals">
                  <span className="mock-vital">
                    <strong>HbA1c</strong>7.2
                  </span>
                  <span className="mock-vital">
                    <strong>Adherence</strong>85%
                  </span>
                  <span className="mock-vital">
                    <strong>Glucose</strong>142
                  </span>
                </div>
              </div>

              <div className="mock-event">
                <div className="mock-event-src">L</div>
                <div className="mock-event-date">
                  <span>5 January 2026</span>
                  <span className="mock-event-date-divider"></span>
                  <span className="mock-event-date-place">Local Lab</span>
                </div>
                <div className="mock-event-title">Complete blood count</div>
                <div className="mock-event-detail">
                  Routine bloodwork &middot; All values within normal range
                </div>
                <div className="mock-event-vitals">
                  <span className="mock-vital">
                    <strong>WBC</strong>7.4
                  </span>
                  <span className="mock-vital">
                    <strong>Hb</strong>14.2
                  </span>
                  <span className="mock-vital">
                    <strong>Plt</strong>240
                  </span>
                </div>
              </div>

              <div className="mock-event">
                <div className="mock-event-src">P</div>
                <div className="mock-event-date">
                  <span>15 December 2025</span>
                  <span className="mock-event-date-divider"></span>
                  <span className="mock-event-date-place">Apollo Pharmacy</span>
                </div>
                <div className="mock-event-title">Refill &middot; Metformin 500mg</div>
                <div className="mock-event-detail">
                  90-day supply &middot; Auto-renewal scheduled
                </div>
              </div>
            </div>

            <div className="mock-timeline-foot">
              <span>4 events &middot; Last 90 days</span>
              <span className="mock-timeline-foot-live">Syncing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
