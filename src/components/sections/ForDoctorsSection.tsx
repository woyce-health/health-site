import { Link } from '@/libs/I18nNavigation';

export function ForDoctorsSection() {
  return (
    <section className="priorities-section" id="doctors">
      <div className="container">
        <div className="section-header reveal">
          <div>
            <div className="section-label">
              <span className="section-label-num">04 /</span> For doctors
            </div>
            <h2 className="section-title">
              Get your <em>day back.</em>
            </h2>
          </div>
          <p className="section-intro">
            If documentation is what stands between you and your patients, we&apos;re here to take
            it on. AI scribe, smart workflows, and clinical decision support &mdash; built with
            doctors who refused to compromise.
          </p>
        </div>

        <div className="audience-pills reveal">
          <Link href="#patients" className="audience-pill">
            For patients
          </Link>
          <Link href="#doctors" className="audience-pill active">
            <span className="audience-pill-dot"></span>
            For doctors
          </Link>
        </div>

        <div className="priorities-list">
          {/* Pillar One: AI Scribe */}
          <div className="priority-block reveal">
            <div className="priority-side">
              <div className="priority-marker">Pillar One</div>
              <div className="priority-bignum">
                <em>i.</em>
              </div>
              <div className="priority-tagline">AI Scribe</div>

              <div className="priority-mock">
                <div className="priority-mock-head">
                  <span className="priority-mock-title">&mdash; Scribe drafting</span>
                  <span className="priority-mock-live">REC</span>
                </div>
                <div className="mock-soap">
                  <div className="mock-soap-row">
                    <div className="mock-soap-letter">S</div>
                    <div className="mock-soap-text">
                      <strong>Subjective</strong>
                      Fever 3 days, body ache
                    </div>
                  </div>
                  <div className="mock-soap-row">
                    <div className="mock-soap-letter">O</div>
                    <div className="mock-soap-text">
                      <strong>Objective</strong>
                      Temp 101&deg;F &middot; BP 120/80
                    </div>
                  </div>
                  <div className="mock-soap-row">
                    <div className="mock-soap-letter">A</div>
                    <div className="mock-soap-text">
                      <strong>Assessment</strong>
                      Viral fever &middot; ICD: B34.9
                    </div>
                  </div>
                  <div className="mock-soap-row">
                    <div className="mock-soap-letter">P</div>
                    <div className="mock-soap-text">
                      <strong>Plan</strong>
                      Paracetamol &middot; Hydration
                    </div>
                  </div>
                </div>
                <div className="mock-saved">
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
                  <span>
                    Saved <strong>4:32</strong> on this note
                  </span>
                </div>
              </div>
            </div>

            <div className="priority-content">
              <h3>
                The scribe that <em>just listens.</em>
              </h3>
              <p className="priority-vision">
                Doctors spend 30&ndash;40% of every consultation typing instead of treating. Aarogya
                listens with patient consent, transcribes in real time, and drafts notes and
                prescriptions for your review.
              </p>

              <div className="priority-features">
                <div className="priority-feat">
                  <div className="priority-feat-icon">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                    </svg>
                  </div>
                  <div>
                    <strong>Multilingual ASR</strong>
                    <span>
                      Hindi, English, and 5 regional languages &mdash; code-switching supported.
                    </span>
                  </div>
                </div>
                <div className="priority-feat">
                  <div className="priority-feat-icon">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                  </div>
                  <div>
                    <strong>SOAP auto-structure</strong>
                    <span>
                      Subjective, Objective, Assessment, Plan &mdash; drafted as you speak.
                    </span>
                  </div>
                </div>
                <div className="priority-feat">
                  <div className="priority-feat-icon">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="9 11 12 14 22 4" />
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                  </div>
                  <div>
                    <strong>ICD-10 auto-coding</strong>
                    <span>Diagnosis codes suggested with confidence scores you can verify.</span>
                  </div>
                </div>
                <div className="priority-feat">
                  <div className="priority-feat-icon">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div>
                    <strong>Speaker diarization</strong>
                    <span>Knows when you&apos;re talking vs the patient. 98%+ accuracy.</span>
                  </div>
                </div>
              </div>

              <div className="priority-stats">
                <div className="priority-stat-item">
                  <div className="priority-stat-num">
                    2<span style={{ fontSize: '0.6em' }}>hrs</span>
                  </div>
                  <div className="priority-stat-label">Saved daily</div>
                </div>
                <div className="priority-stat-item">
                  <div className="priority-stat-num">
                    95<span style={{ fontSize: '0.6em' }}>%</span>
                  </div>
                  <div className="priority-stat-label">Scribe accuracy</div>
                </div>
                <div className="priority-stat-item">
                  <div className="priority-stat-num">
                    5+<span style={{ fontSize: '0.6em' }}>min</span>
                  </div>
                  <div className="priority-stat-label">Per consultation</div>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar Two: Decision Support */}
          <div className="priority-block reveal">
            <div className="priority-side">
              <div className="priority-marker">Pillar Two</div>
              <div className="priority-bignum">
                <em>ii.</em>
              </div>
              <div className="priority-tagline">Decision Support</div>

              <div className="priority-mock">
                <div className="priority-mock-head">
                  <span className="priority-mock-title">&mdash; Active prescriptions</span>
                </div>
                <div className="mock-decision">
                  <div className="mock-rx-line">
                    <span className="mock-rx-name">Metformin</span>
                    <span className="mock-rx-dose">500mg &middot; BD</span>
                  </div>
                  <div className="mock-rx-line warn">
                    <span className="mock-rx-name">Atorvastatin</span>
                    <span className="mock-rx-dose">10mg &middot; OD</span>
                  </div>
                  <div className="mock-alert">
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
                      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                      <line x1="12" y1="9" x2="12" y2="13" />
                      <line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                    <span>
                      <strong>Interaction:</strong> Atorvastatin &times; Losartan (Dr. Patel, last
                      month).
                    </span>
                  </div>
                  <div className="mock-source">ICMR Guidelines &middot; 2024</div>
                </div>
              </div>
            </div>

            <div className="priority-content">
              <h3>
                A second opinion <em>at your elbow.</em>
              </h3>
              <p className="priority-vision">
                Modern medicine moves faster than any single doctor can keep up with. Quiet,
                contextual AI that surfaces drug interactions, flags contraindications, and pulls
                guidelines &mdash; only when it adds value.
              </p>

              <div className="priority-features">
                <div className="priority-feat">
                  <div className="priority-feat-icon">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div>
                    <strong>Drug interaction checks</strong>
                    <span>Across all the patient&apos;s prescribers &mdash; not just yours.</span>
                  </div>
                </div>
                <div className="priority-feat">
                  <div className="priority-feat-icon">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                  </div>
                  <div>
                    <strong>Differential suggestions</strong>
                    <span>Surfaced quietly, dismissable, never blocking your flow.</span>
                  </div>
                </div>
                <div className="priority-feat">
                  <div className="priority-feat-icon">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                  <div>
                    <strong>Guideline RAG</strong>
                    <span>Searches ICMR, WHO, and your specialty&apos;s literature.</span>
                  </div>
                </div>
                <div className="priority-feat">
                  <div className="priority-feat-icon">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <strong>Confidence + sources</strong>
                    <span>Every suggestion shows reasoning. You stay in charge.</span>
                  </div>
                </div>
              </div>

              <div className="priority-stats">
                <div className="priority-stat-item">
                  <div className="priority-stat-num">
                    99<span style={{ fontSize: '0.6em' }}>%</span>
                  </div>
                  <div className="priority-stat-label">Drug interaction catch</div>
                </div>
                <div className="priority-stat-item">
                  <div className="priority-stat-num">
                    90<span style={{ fontSize: '0.6em' }}>%</span>
                  </div>
                  <div className="priority-stat-label">Triage accuracy</div>
                </div>
                <div className="priority-stat-item">
                  <div className="priority-stat-num">
                    &lt;15<span style={{ fontSize: '0.6em' }}>%</span>
                  </div>
                  <div className="priority-stat-label">Doctor override</div>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar Three: Practice OS */}
          <div className="priority-block reveal">
            <div className="priority-side">
              <div className="priority-marker">Pillar Three</div>
              <div className="priority-bignum">
                <em>iii.</em>
              </div>
              <div className="priority-tagline">Practice OS</div>

              <div className="priority-mock">
                <div className="priority-mock-head">
                  <span className="priority-mock-title">&mdash; Today&apos;s practice</span>
                </div>
                <div className="mock-dash">
                  <div className="mock-dash-stats">
                    <div className="mock-dash-stat">
                      <div className="mock-dash-stat-label">Patients</div>
                      <div className="mock-dash-stat-num">
                        14<span>/16</span>
                      </div>
                      <div className="mock-dash-stat-trend">&#8593; Filled</div>
                    </div>
                    <div className="mock-dash-stat">
                      <div className="mock-dash-stat-label">Revenue</div>
                      <div className="mock-dash-stat-num">
                        &#8377;42<span>k</span>
                      </div>
                      <div className="mock-dash-stat-trend">&#8593; +18%</div>
                    </div>
                  </div>
                  <div className="mock-dash-bar">
                    <div className="mock-dash-bar-label">
                      <span>Follow-ups sent</span>
                      <span>8 / 10</span>
                    </div>
                    <div className="mock-dash-bar-track">
                      <div className="mock-dash-bar-fill" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  <div className="mock-dash-bar">
                    <div className="mock-dash-bar-label">
                      <span>Pending payments</span>
                      <span>&#8377;2.4k</span>
                    </div>
                    <div className="mock-dash-bar-track">
                      <div className="mock-dash-bar-fill warn" style={{ width: '32%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="priority-content">
              <h3>
                Your practice, <em>simply run.</em>
              </h3>
              <p className="priority-vision">
                Most EMRs feel like punishment. The whole back-end of running a clinic &mdash;
                appointments, payments, follow-ups, analytics &mdash; handled by a clean interface
                and an AI that quietly nudges what matters most.
              </p>

              <div className="priority-features">
                <div className="priority-feat">
                  <div className="priority-feat-icon">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </div>
                  <div>
                    <strong>Smart scheduling</strong>
                    <span>AI fills no-show gaps from your waitlist automatically.</span>
                  </div>
                </div>
                <div className="priority-feat">
                  <div className="priority-feat-icon">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="12" y1="1" x2="12" y2="23" />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </div>
                  <div>
                    <strong>UPI + insurance</strong>
                    <span>Native support for Indian payment rails and TPA claims.</span>
                  </div>
                </div>
                <div className="priority-feat">
                  <div className="priority-feat-icon">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                  </div>
                  <div>
                    <strong>Auto follow-ups</strong>
                    <span>WhatsApp nudges based on each patient&apos;s care plan.</span>
                  </div>
                </div>
                <div className="priority-feat">
                  <div className="priority-feat-icon">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="20" x2="18" y2="10" />
                      <line x1="12" y1="20" x2="12" y2="4" />
                      <line x1="6" y1="20" x2="6" y2="14" />
                    </svg>
                  </div>
                  <div>
                    <strong>Practice analytics</strong>
                    <span>Patient mix, revenue trends, and outcomes &mdash; at a glance.</span>
                  </div>
                </div>
              </div>

              <div className="priority-stats">
                <div className="priority-stat-item">
                  <div className="priority-stat-num">
                    80<span style={{ fontSize: '0.6em' }}>%</span>
                  </div>
                  <div className="priority-stat-label">Doctor retention</div>
                </div>
                <div className="priority-stat-item">
                  <div className="priority-stat-num">
                    60<span style={{ fontSize: '0.6em' }}>+</span>
                  </div>
                  <div className="priority-stat-label">Doctor NPS</div>
                </div>
                <div className="priority-stat-item">
                  <div className="priority-stat-num">UPI</div>
                  <div className="priority-stat-label">Native support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="doctors-cta reveal">
          <div className="doctors-cta-text">
            <div className="doctors-cta-eyebrow">&mdash; Try Aarogya Pro</div>
            <div className="doctors-cta-title">
              10 free consultations. <em>No commitment.</em>
            </div>
            <div className="doctors-cta-meta">
              Sign up with your medical registration. Pay only after you&apos;ve tried it.
            </div>
          </div>
          <div className="doctors-cta-buttons">
            <a href="#" className="btn btn-primary">
              Start free trial
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
              Book a demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
