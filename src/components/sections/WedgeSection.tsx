const capabilities = [
  'HbA1c tracking',
  'CGM integration',
  'Insulin titration',
  'Foot care reminders',
  'Diet logging',
  'Quarterly lab AI',
];

const milestones = [
  {
    mark: 'ii',
    when: 'Q3 2026',
    title: 'Maternal & pregnancy care',
    size: '25M+ pregnancies / year',
    body: 'Nine months of high-stakes, high-touch care that current apps trivialize.',
  },
  {
    mark: 'iii',
    when: 'Q1 2027',
    title: 'Elderly care',
    size: 'Growing rapidly',
    body: 'Aging parents, multiple conditions, anxious adult children. Voice-first by design.',
  },
  {
    mark: 'iv',
    when: 'Q3 2027',
    title: 'Pediatric care',
    size: 'High parent engagement',
    body: 'Worried parents need answers fast. Vaccinations, milestones, fever protocols.',
  },
  {
    mark: 'v',
    when: 'Q1 2028',
    title: 'Mental health',
    size: 'Massive unmet need',
    body: 'Anonymous, verified, and only ever a handoff away from a real human.',
  },
];

export function WedgeSection() {
  return (
    <section className="section" id="focus" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
      <div className="container">
        <div className="section-header reveal">
          <div>
            <div className="section-label">
              <span className="section-label-num">00.5 /</span> Who we serve first
            </div>
            <h2 className="section-title">
              A wedge, <em>not a horizontal play.</em>
            </h2>
          </div>
          <p className="section-intro">
            Practo, 1mg, and PharmEasy already won &ldquo;everything for everyone.&rdquo; We start
            narrow and earn depth — diabetes care first, then we expand, one population at a time.
          </p>
        </div>

        <div className="wedge-featured reveal">
          <div>
            <div className="wedge-featured-tag">
              <span className="wedge-featured-dot" />
              Live in beta · Starting here
            </div>

            <h3>
              Diabetes <em>management</em>, done quietly.
            </h3>

            <div className="wedge-featured-stats">
              <div className="wedge-fstat">
                <div className="wedge-fstat-num">
                  100<span>M+</span>
                </div>
                <div className="wedge-fstat-label">Indians affected</div>
              </div>
              <div className="wedge-fstat">
                <div className="wedge-fstat-num">4–6</div>
                <div className="wedge-fstat-label">Specialists each</div>
              </div>
              <div className="wedge-fstat">
                <div className="wedge-fstat-num">Daily</div>
                <div className="wedge-fstat-label">Meds + monitoring</div>
              </div>
            </div>

            <p>
              India is the diabetes capital of the world. Patients juggle multiple specialists,
              daily medication, and quarterly lab work. Nobody has built the tool that holds it all
              together — until now.
            </p>

            <div className="wedge-capabilities">
              {capabilities.map((cap) => (
                <span className="wedge-cap" key={cap}>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {cap}
                </span>
              ))}
            </div>
          </div>

          <div className="wedge-featured-visual" aria-hidden="true">
            <div className="wedge-illustration">
              <svg viewBox="0 0 360 360" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle
                  cx="180"
                  cy="180"
                  r="170"
                  stroke="rgba(255,255,255,0.08)"
                  strokeDasharray="3 8"
                />
                <circle cx="180" cy="180" r="130" stroke="rgba(255,255,255,0.1)" />
                <circle cx="180" cy="180" r="90" stroke="rgba(255,255,255,0.12)" />
                <path d="M 40 200 L 320 200 L 320 240 L 40 240 Z" fill="rgba(16,185,129,0.08)" />
                <line
                  x1="40"
                  y1="200"
                  x2="320"
                  y2="200"
                  stroke="rgba(16,185,129,0.3)"
                  strokeDasharray="2 4"
                />
                <line
                  x1="40"
                  y1="240"
                  x2="320"
                  y2="240"
                  stroke="rgba(16,185,129,0.3)"
                  strokeDasharray="2 4"
                />
                <path
                  d="M 40 130 Q 80 145 120 160 T 200 200 T 280 220 L 320 225"
                  stroke="url(#glucoseGrad)"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="40" cy="130" r="4" fill="white" />
                <circle cx="120" cy="160" r="4" fill="white" />
                <circle cx="200" cy="200" r="4" fill="white" />
                <circle cx="280" cy="220" r="4" fill="#a5b4fc" />
                <circle cx="320" cy="225" r="6" fill="#10b981" stroke="white" strokeWidth="2" />
                <circle
                  cx="320"
                  cy="225"
                  r="6"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2"
                  opacity="0.4"
                >
                  <animate attributeName="r" values="6;14;6" dur="2s" repeatCount="indefinite" />
                  <animate
                    attributeName="opacity"
                    values="0.6;0;0.6"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
                <defs>
                  <linearGradient id="glucoseGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#a5b4fc" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="wedge-overlay-card wedge-overlay-1">
              <span className="wedge-overlay-label">HbA1c · Latest</span>
              <span className="wedge-overlay-value">
                6.4<span>%</span>
              </span>
              <span className="wedge-overlay-trend">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="6 15 12 9 18 15" />
                </svg>
                -0.8 in 6mo
              </span>
            </div>

            <div className="wedge-overlay-card wedge-overlay-2">
              <span className="wedge-overlay-label">Adherence</span>
              <span className="wedge-overlay-value">
                94<span>%</span>
              </span>
              <span className="wedge-overlay-trend">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                On track
              </span>
            </div>
          </div>
        </div>

        <div className="wedge-timeline reveal">
          <div className="wedge-timeline-label">Next on the roadmap</div>
          <div className="wedge-track">
            {milestones.map((m) => (
              <div className="wedge-milestone" key={m.mark}>
                <div className="wedge-milestone-mark">{m.mark}</div>
                <div className="wedge-milestone-when">{m.when}</div>
                <h4>{m.title}</h4>
                <div className="wedge-milestone-size">{m.size}</div>
                <p>{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
