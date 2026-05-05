import { Link } from '@/libs/I18nNavigation';

export function MetricsSection() {
  return (
    <section className="section" id="metrics" style={{ paddingTop: '60px', paddingBottom: '80px' }}>
      <div className="container">
        <div className="section-header reveal">
          <div>
            <div className="section-label">
              <span className="section-label-num">08 /</span> What success looks like
            </div>
            <h2 className="section-title">
              Numbers we <em>track honestly.</em>
            </h2>
          </div>
          <p className="section-intro">
            No vanity metrics. We measure what actually matters: time saved, outcomes improved,
            trust built.
          </p>
        </div>

        <div style={{ textAlign: 'center' }} className="reveal">
          <div className="metrics-promise">
            <div className="metrics-promise-icon">
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <span className="metrics-promise-text">
              <strong>Published quarterly</strong> &middot; Audited externally
            </span>
          </div>
        </div>

        <div className="stack-grid reveal">
          <div className="stack-col">
            <div className="stack-label">Patient outcomes</div>
            <ul className="stack-list">
              <li>
                <strong>30-day retention</strong>
                <span className="stack-tag">40%+</span>
              </li>
              <li>
                <strong>Medication adherence</strong>
                <span className="stack-tag">70%+</span>
              </li>
              <li>
                <strong>NPS score</strong>
                <span className="stack-tag">50+</span>
              </li>
              <li>
                <strong>Consultation completion</strong>
                <span className="stack-tag">85%+</span>
              </li>
            </ul>
          </div>
          <div className="stack-col">
            <div className="stack-label">Doctor experience</div>
            <ul className="stack-list">
              <li>
                <strong>Time saved per visit</strong>
                <span className="stack-tag">5+ min</span>
              </li>
              <li>
                <strong>Doctor NPS</strong>
                <span className="stack-tag">60+</span>
              </li>
              <li>
                <strong>AI scribe usage</strong>
                <span className="stack-tag">70%+</span>
              </li>
              <li>
                <strong>Doctor retention</strong>
                <span className="stack-tag">80%+</span>
              </li>
            </ul>
          </div>
          <div className="stack-col">
            <div className="stack-label">AI quality</div>
            <ul className="stack-list">
              <li>
                <strong>Scribe accuracy</strong>
                <span className="stack-tag">95%+</span>
              </li>
              <li>
                <strong>Hindi voice recognition</strong>
                <span className="stack-tag">92%+</span>
              </li>
              <li>
                <strong>Triage accuracy</strong>
                <span className="stack-tag">90%+</span>
              </li>
              <li>
                <strong>Drug interaction catch</strong>
                <span className="stack-tag">99%+</span>
              </li>
            </ul>
          </div>
          <div className="stack-col">
            <div className="stack-label">Trust signals</div>
            <ul className="stack-list">
              <li>
                <strong>Doctor override rate</strong>
                <span className="stack-tag">&lt;15%</span>
              </li>
              <li>
                <strong>Patient AI trust</strong>
                <span className="stack-tag">4/5+</span>
              </li>
              <li>
                <strong>Data export rate</strong>
                <span className="stack-tag">tracked</span>
              </li>
              <li>
                <strong>Privacy incidents</strong>
                <span className="stack-tag">zero</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="metrics-report reveal">
          <div className="metrics-report-text">
            <strong>Read the full transparency report.</strong> Every quarter we publish progress
            against these numbers &mdash; what hit, what missed, and what we&apos;re changing.
          </div>
          <Link href="#" className="metrics-report-link">
            Q1 2026 report
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
        </div>
      </div>
    </section>
  );
}
