import { Link } from '@/libs/I18nNavigation';

export function HeroSection() {
  return (
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
              An AI-powered care platform built for the way India actually lives — across languages,
              families, and providers. No app required. Just better health, every day.
            </p>

            <div className="hero-cta fade-up delay-3">
              <Link href="/patients" className="btn btn-primary">
                Start free →
              </Link>
              <Link href="/doctors" className="btn btn-ghost">
                For doctors
              </Link>
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
  );
}
