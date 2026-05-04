import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { AarogyaInteractive } from '@/components/AarogyaInteractive';

export const metadata: Metadata = {
  title: 'Aarogya — Healthcare, reimagined for India',
  description:
    'An AI-powered care platform built for the way India actually lives — across languages, families, and providers.',
};

export default async function IndexPage(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <>
      <AarogyaInteractive />

      {/* ── Nav ── */}
      <nav id="nav">
        <div className="nav-inner container">
          {/* Brand zone */}
          <div className="nav-brand-zone">
            <a href="#" className="logo">
              <span className="logo-mark" /> Aarogya
            </a>
            <span className="nav-version">v 2.0</span>
          </div>

          {/* Center capsule with mega menu links */}
          <div className="nav-capsule">
            <ul className="nav-links">
              <li className="nav-item">
                <a href="#patients" className="nav-link has-menu">
                  For patients
                </a>
                <div className="nav-mega">
                  <div className="nav-mega-grid">
                    <a href="#patients" className="nav-mega-item">
                      <div className="nav-mega-icon">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                        </svg>
                      </div>
                      <div className="nav-mega-content">
                        <div className="nav-mega-title">
                          Voice-first care
                          <svg
                            className="nav-mega-arrow"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="7" y1="17" x2="17" y2="7" />
                            <polyline points="7 7 17 7 17 17" />
                          </svg>
                        </div>
                        <div className="nav-mega-desc">Speak naturally in 12 Indian languages.</div>
                      </div>
                    </a>

                    <a href="#patients" className="nav-mega-item">
                      <div className="nav-mega-icon">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                        </svg>
                      </div>
                      <div className="nav-mega-content">
                        <div className="nav-mega-title">
                          WhatsApp setup
                          <svg
                            className="nav-mega-arrow"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="7" y1="17" x2="17" y2="7" />
                            <polyline points="7 7 17 7 17 17" />
                          </svg>
                        </div>
                        <div className="nav-mega-desc">No app to download. It just works.</div>
                      </div>
                    </a>

                    <a href="#patients" className="nav-mega-item">
                      <div className="nav-mega-icon">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                      </div>
                      <div className="nav-mega-content">
                        <div className="nav-mega-title">
                          Family caregiver
                          <span className="nav-mega-badge new">NEW</span>
                        </div>
                        <div className="nav-mega-desc">Care for parents and kids in one place.</div>
                      </div>
                    </a>

                    <a href="#timeline" className="nav-mega-item">
                      <div className="nav-mega-icon">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14 2 14 8 20 8" />
                          <line x1="16" y1="13" x2="8" y2="13" />
                        </svg>
                      </div>
                      <div className="nav-mega-content">
                        <div className="nav-mega-title">
                          Unified timeline
                          <svg
                            className="nav-mega-arrow"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="7" y1="17" x2="17" y2="7" />
                            <polyline points="7 7 17 7 17 17" />
                          </svg>
                        </div>
                        <div className="nav-mega-desc">
                          Every doctor&apos;s records, in one view.
                        </div>
                      </div>
                    </a>

                    <a href="#patients" className="nav-mega-item">
                      <div className="nav-mega-icon">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      </div>
                      <div className="nav-mega-content">
                        <div className="nav-mega-title">
                          AI Second Opinion
                          <svg
                            className="nav-mega-arrow"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="7" y1="17" x2="17" y2="7" />
                            <polyline points="7 7 17 7 17 17" />
                          </svg>
                        </div>
                        <div className="nav-mega-desc">Smart questions for your next visit.</div>
                      </div>
                    </a>

                    <a href="#patients" className="nav-mega-item">
                      <div className="nav-mega-icon">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <line x1="2" y1="12" x2="22" y2="12" />
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                      </div>
                      <div className="nav-mega-content">
                        <div className="nav-mega-title">
                          Anonymous mode
                          <span className="nav-mega-badge">PRIVATE</span>
                        </div>
                        <div className="nav-mega-desc">
                          For mental and sexual health, privately.
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="nav-mega-footer">
                    <span>FREE FOREVER · NO APP DOWNLOAD</span>
                    <a href="#patients" className="nav-mega-cta">
                      Explore patient features{' '}
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
                    </a>
                  </div>
                </div>
              </li>

              <li className="nav-item">
                <a href="#doctors" className="nav-link has-menu">
                  For doctors
                </a>
                <div className="nav-mega">
                  <div className="nav-mega-grid">
                    <a href="#doctors" className="nav-mega-item">
                      <div className="nav-mega-icon">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                        </svg>
                      </div>
                      <div className="nav-mega-content">
                        <div className="nav-mega-title">
                          AI Scribe
                          <svg
                            className="nav-mega-arrow"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="7" y1="17" x2="17" y2="7" />
                            <polyline points="7 7 17 7 17 17" />
                          </svg>
                        </div>
                        <div className="nav-mega-desc">Save 2+ hours daily on documentation.</div>
                      </div>
                    </a>

                    <a href="#doctors" className="nav-mega-item">
                      <div className="nav-mega-icon">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                      </div>
                      <div className="nav-mega-content">
                        <div className="nav-mega-title">
                          Decision support
                          <svg
                            className="nav-mega-arrow"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="7" y1="17" x2="17" y2="7" />
                            <polyline points="7 7 17 7 17 17" />
                          </svg>
                        </div>
                        <div className="nav-mega-desc">
                          Drug interactions, guidelines, differentials.
                        </div>
                      </div>
                    </a>

                    <a href="#doctors" className="nav-mega-item">
                      <div className="nav-mega-icon">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                      </div>
                      <div className="nav-mega-content">
                        <div className="nav-mega-title">
                          Practice OS
                          <svg
                            className="nav-mega-arrow"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="7" y1="17" x2="17" y2="7" />
                            <polyline points="7 7 17 7 17 17" />
                          </svg>
                        </div>
                        <div className="nav-mega-desc">
                          Schedules, payments, follow-ups, analytics.
                        </div>
                      </div>
                    </a>

                    <a href="#" className="nav-mega-item">
                      <div className="nav-mega-icon">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="16 18 22 12 16 6" />
                          <polyline points="8 6 2 12 8 18" />
                        </svg>
                      </div>
                      <div className="nav-mega-content">
                        <div className="nav-mega-title">
                          API access
                          <span className="nav-mega-badge">BETA</span>
                        </div>
                        <div className="nav-mega-desc">Integrate Aarogya into your stack.</div>
                      </div>
                    </a>

                    <a href="#pricing" className="nav-mega-item">
                      <div className="nav-mega-icon">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="12" y1="1" x2="12" y2="23" />
                          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                        </svg>
                      </div>
                      <div className="nav-mega-content">
                        <div className="nav-mega-title">
                          Pricing
                          <svg
                            className="nav-mega-arrow"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="7" y1="17" x2="17" y2="7" />
                            <polyline points="7 7 17 7 17 17" />
                          </svg>
                        </div>
                        <div className="nav-mega-desc">Free for 10 consultations / month.</div>
                      </div>
                    </a>

                    <a href="#" className="nav-mega-item">
                      <div className="nav-mega-icon">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M22 11l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                      </div>
                      <div className="nav-mega-content">
                        <div className="nav-mega-title">
                          Refer a colleague
                          <svg
                            className="nav-mega-arrow"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="7" y1="17" x2="17" y2="7" />
                            <polyline points="7 7 17 7 17 17" />
                          </svg>
                        </div>
                        <div className="nav-mega-desc">Both of you get 3 months Pro, free.</div>
                      </div>
                    </a>
                  </div>

                  <div className="nav-mega-footer">
                    <span>10 FREE CONSULTATIONS · NO COMMITMENT</span>
                    <a href="#doctors" className="nav-mega-cta">
                      See doctor tools{' '}
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
                    </a>
                  </div>
                </div>
              </li>

              <li className="nav-item">
                <a href="#pricing" className="nav-link">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a href="#trust" className="nav-link">
                  Trust
                </a>
              </li>
              <li className="nav-item">
                <a href="#faq" className="nav-link">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Right action zone */}
          <div className="nav-actions">
            <a href="#" className="nav-status-pill" title="System status">
              <span className="nav-status-dot" />
              <span>Beta</span>
            </a>
            <a href="#" className="btn btn-ghost">
              Sign in
            </a>
            <a href="#" className="btn btn-primary">
              Get started
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
            <button className="nav-toggle" id="navToggle" aria-label="Toggle menu" type="button">
              <div className="nav-toggle-icon">
                <span />
                <span />
                <span />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile menu ── */}
      <div className="mobile-menu" id="mobileMenu">
        <ul className="mobile-menu-list">
          <li>
            <a href="#patients">
              <span>For patients</span>
              <span>01</span>
            </a>
          </li>
          <li>
            <a href="#doctors">
              <span>For doctors</span>
              <span>02</span>
            </a>
          </li>
          <li>
            <a href="#pricing">
              <span>Pricing</span>
              <span>03</span>
            </a>
          </li>
          <li>
            <a href="#trust">
              <span>Trust</span>
              <span>04</span>
            </a>
          </li>
          <li>
            <a href="#faq">
              <span>FAQ</span>
              <span>05</span>
            </a>
          </li>
        </ul>
        <div className="mobile-menu-actions">
          <a href="#" className="btn btn-ghost">
            Sign in
          </a>
          <a href="#" className="btn btn-primary">
            Get started
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
        </div>
        <div className="mobile-menu-footer">Made in India · Care for everyone.</div>
      </div>

      {/* ── Hero ── */}
      <header className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <span className="eyebrow fade-up">
                <span className="pulse-dot" /> Private Beta · Mumbai · Bengaluru · Pune
              </span>

              <h1 className="display fade-up delay-1">
                Healthcare,
                <br />
                gently <em className="underline-mark">made smarter.</em>
              </h1>

              <p className="hero-sub fade-up delay-2">
                An AI-powered care platform built for the way India actually lives — across
                languages, families, and providers. No app required. Just better health, every day.
              </p>

              <div className="hero-cta fade-up delay-3">
                <a href="#" className="btn btn-primary">
                  Start free →
                </a>
                <a href="#" className="btn btn-ghost">
                  For doctors
                </a>
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
                  Free forever for individuals
                </span>
              </div>

              <div className="hero-metrics fade-up delay-4">
                <div className="metric">
                  <div className="metric-num">
                    12<span>+</span>
                  </div>
                  <div className="metric-label">Languages</div>
                </div>
                <div className="metric">
                  <div className="metric-num">
                    2<span>hrs</span>
                  </div>
                  <div className="metric-label">Saved daily</div>
                </div>
                <div className="metric">
                  <div className="metric-num">24/7</div>
                  <div className="metric-label">Triage</div>
                </div>
                <div className="metric">
                  <div className="metric-num">ABDM</div>
                  <div className="metric-label">Integrated</div>
                </div>
              </div>
            </div>

            <div className="hero-visual fade-up delay-3">
              <svg
                className="hero-orbits"
                viewBox="0 0 700 700"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <circle
                  cx="350"
                  cy="350"
                  r="340"
                  stroke="#4338ca"
                  strokeOpacity="0.08"
                  strokeDasharray="2 6"
                />
                <circle
                  cx="350"
                  cy="350"
                  r="270"
                  stroke="#4338ca"
                  strokeOpacity="0.1"
                  strokeDasharray="2 4"
                />
                <circle cx="350" cy="350" r="200" stroke="#4338ca" strokeOpacity="0.12" />
                <circle cx="350" cy="350" r="130" stroke="#4338ca" strokeOpacity="0.18" />
              </svg>

              <div className="float-card float-card-1">
                <div className="float-icon">
                  <svg
                    width="18"
                    height="18"
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
                <div>
                  <strong>Appointment booked</strong>
                  <span>DR. SHARMA · TUE 10:00</span>
                </div>
              </div>

              <div className="device-mock">
                <div className="device-screen">
                  <div className="device-notch" />
                  <div className="chat-header">
                    <div className="chat-avatar">A</div>
                    <div>
                      <div className="chat-name">Aarogya Assistant</div>
                      <div className="chat-status">ONLINE · हिंदी</div>
                    </div>
                  </div>
                  <div className="chat-msg user">मुझे बुखार है 3 दिन से</div>
                  <div className="chat-msg bot">समझ गई। बुखार कितना है?</div>
                  <div className="chat-msg user">101°F</div>
                  <div className="chat-msg bot suggestion">
                    ✓ General physician se baat karein.
                    <br />
                    Dr. Sharma · ₹300 · 30 min
                  </div>
                  <div className="chat-input">
                    <span>Type or speak...</span>
                    <div className="mic-btn">
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
                        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="float-card float-card-2">
                <div className="float-icon" style={{ background: '#dcfce7', color: '#16a34a' }}>
                  <svg
                    width="18"
                    height="18"
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
                <div>
                  <strong>Records synced</strong>
                  <span>FROM APOLLO · ABDM</span>
                </div>
              </div>

              <div className="float-card float-card-3">
                <div className="float-icon" style={{ background: '#fef3c7', color: '#d97706' }}>
                  <svg
                    width="18"
                    height="18"
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
                <div>
                  <strong>Refill reminder</strong>
                  <span>METFORMIN · 3 DAYS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── Trusted marquee ── */}
      <section className="trusted reveal">
        <div className="trusted-label container">
          — Trusted by leading clinicians & hospital networks —
        </div>
        <div className="marquee">
          <div className="marquee-track">
            <span className="logo-placeholder">Apollo Health</span>
            <span className="logo-placeholder alt-1">Fortis</span>
            <span className="logo-placeholder">Manipal</span>
            <span className="logo-placeholder alt-2">/medanta</span>
            <span className="logo-placeholder alt-1">Narayana</span>
            <span className="logo-placeholder">AIIMS Partners</span>
            <span className="logo-placeholder alt-2">{'{ kokilaben }'}</span>
            <span className="logo-placeholder">MaxCare</span>
            <span className="logo-placeholder">Apollo Health</span>
            <span className="logo-placeholder alt-1">Fortis</span>
            <span className="logo-placeholder">Manipal</span>
            <span className="logo-placeholder alt-2">/medanta</span>
            <span className="logo-placeholder alt-1">Narayana</span>
            <span className="logo-placeholder">AIIMS Partners</span>
            <span className="logo-placeholder alt-2">{'{ kokilaben }'}</span>
            <span className="logo-placeholder">MaxCare</span>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
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
                No app to download. Book appointments, get prescriptions, ask follow-ups, and
                receive lab reports — all on the chat your family already uses.
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
                Every doctor, every prescription, every lab. We pull it all together via ABDM and
                flag conflicts before they hurt you.
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

      {/* ── How it works ── */}
      <section className="how-section" id="how">
        <div className="container">
          <div className="section-header reveal">
            <div>
              <div className="section-label">
                <span className="section-label-num">02 /</span> How it works
              </div>
              <h2 className="section-title">
                Three steps to <em>better care.</em>
              </h2>
            </div>
            <p className="section-intro">
              From sign-up to your first AI-summarized lab report in under five minutes. No
              friction, no fuss.
            </p>
          </div>

          <div className="steps">
            <div className="step reveal">
              <div className="step-num">
                <span className="step-num-badge">i</span> Step One
              </div>
              <div className="step-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
              </div>
              <h3>Connect once.</h3>
              <p>
                Link your ABHA ID and we'll quietly pull your records together — past prescriptions,
                lab reports, and hospital visits, all in one place.
              </p>
            </div>

            <div className="step reveal">
              <div className="step-num">
                <span className="step-num-badge">ii</span> Step Two
              </div>
              <div className="step-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h3>Talk to us.</h3>
              <p>
                Type, tap, or just speak. We understand symptoms, schedule appointments, and explain
                reports in language that actually makes sense.
              </p>
            </div>

            <div className="step reveal">
              <div className="step-num">
                <span className="step-num-badge">iii</span> Step Three
              </div>
              <div className="step-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <h3>Stay ahead of it.</h3>
              <p>
                Smart reminders, refill alerts, follow-through after discharge, and gentle nudges
                when something deserves a second look.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quote ── */}
      <section className="quote-section reveal">
        <div className="container">
          <div className="quote-mark">&ldquo;</div>
          <p className="quote">
            Aarogya is the first health app my mother actually uses. She speaks Marathi to it, and
            it just <em>understands.</em> That alone changed everything.
          </p>
          <div className="attribution">
            <div className="attribution-avatar">P</div>
            <div style={{ textAlign: 'left' }}>
              <span className="attribution-name">Priya Deshmukh</span>
              <span className="attribution-title">SOFTWARE ENGINEER · PUNE</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust ── */}
      <section className="section" id="trust">
        <div className="container">
          <div className="trust-card reveal">
            <div>
              <div className="section-label">
                <span className="section-label-num">03 /</span> Built for trust
              </div>
              <h2>
                Your records
                <br />
                are <em>yours.</em>
                <br />
                Always.
              </h2>
              <p
                style={{
                  color: 'var(--ink-soft)',
                  fontSize: '16px',
                  marginTop: '16px',
                  lineHeight: '1.65',
                }}
              >
                Healthcare has been careless with personal data for too long. We do the opposite —
                and we'd rather lose features than your trust.
              </p>
            </div>
            <ul className="trust-list">
              <li>
                <span className="trust-check">
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <div>
                  <strong>End-to-end encryption</strong>
                  Records encrypted at rest and in transit. We can't read them, and neither can
                  anyone else.
                </div>
              </li>
              <li>
                <span className="trust-check">
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <div>
                  <strong>One-click export</strong>
                  Take everything with you, anytime. PDF, FHIR, JSON — your choice.
                </div>
              </li>
              <li>
                <span className="trust-check">
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <div>
                  <strong>Doctor-verified AI</strong>
                  Every AI suggestion shows its reasoning and confidence. Real doctors review the
                  rest.
                </div>
              </li>
              <li>
                <span className="trust-check">
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <div>
                  <strong>DPDP Act compliant</strong>
                  Privacy by design, audited quarterly, transparent forever.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card reveal">
            <span className="cta-eyebrow">
              <span className="pulse-dot" style={{ background: '#a5b4fc' }} /> Now Onboarding ·
              Limited Spots
            </span>
            <h2>
              Care that <em>finally</em> feels human.
            </h2>
            <p>
              Join the early waitlist. We're onboarding new families every week, starting with
              Mumbai, Bengaluru, and Pune.
            </p>
            <a href="#" className="btn btn-primary">
              Join the waitlist →
            </a>
            <div className="cta-trust">
              <span>No credit card</span>
              <span className="cta-trust-dot" />
              <span>Free forever</span>
              <span className="cta-trust-dot" />
              <span>Privacy-first</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#" className="logo">
                <span className="logo-mark" /> Aarogya
              </a>
              <p>
                An AI-powered healthcare platform built for India — and the families who hold it
                together.
              </p>
            </div>
            <div className="footer-col">
              <h4>Platform</h4>
              <ul>
                <li>
                  <a href="#">For patients</a>
                </li>
                <li>
                  <a href="#">For doctors</a>
                </li>
                <li>
                  <a href="#">For hospitals</a>
                </li>
                <li>
                  <a href="#">For caregivers</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Press</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Legal</h4>
              <ul>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">DPDP notice</a>
                </li>
                <li>
                  <a href="#">Security</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-watermark">
            Aarogya
            <em style={{ fontStyle: 'italic' }}>.</em>
          </div>

          <div className="footer-bottom">
            <span>© 2026 AAROGYA HEALTH TECH</span>
            <span>MADE IN INDIA · CARE FOR EVERYONE</span>
          </div>
        </div>
      </footer>
    </>
  );
}
