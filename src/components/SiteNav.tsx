export function SiteNav() {
  return (
    <>
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

      {/* Mobile menu */}
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
    </>
  );
}
