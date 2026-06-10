import { Link } from '@/libs/I18nNavigation';

export function SiteFooter() {
  return (
    <footer>
      <div className="container">
        <div className="footer-newsletter">
          <div className="newsletter-text">
            <h3>
              The <em>Aarogya Letter.</em>
            </h3>
            <p>
              One thoughtful note a month &mdash; on AI in healthcare, what we&apos;re learning, and
              quiet wins from our doctors and patients. No spam, ever.
            </p>
          </div>
          <div>
            <form className="newsletter-form">
              <input type="email" placeholder="your@email.com" aria-label="Email address" />
              <button type="submit" className="newsletter-btn">
                Subscribe
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
              </button>
            </form>
            <div className="newsletter-meta">
              <span>~12,000 readers</span>
              <span className="newsletter-meta-dot" />
              <span>Once a month</span>
              <span className="newsletter-meta-dot" />
              <span>Unsubscribe anytime</span>
            </div>
          </div>
        </div>

        <div className="footer-main">
          <div className="footer-brand-col">
            <Link href="/" className="logo">
              <span className="logo-mark" /> Aarogya
            </Link>
            <p>
              An AI-powered care platform for the patients who deserve to be understood &mdash; and
              the doctors who deserve their day back.
            </p>

            <Link href="#" className="footer-status">
              <span className="status-dot" />
              <span>All systems operational</span>
            </Link>

            <div className="footer-stores">
              <Link href="#" className="store-badge" aria-label="Download on the App Store">
                <svg
                  className="store-badge-icon"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <div className="store-badge-text">
                  <span className="store-badge-small">Download on</span>
                  <span className="store-badge-big">App Store</span>
                </div>
              </Link>
              <Link href="#" className="store-badge" aria-label="Get it on Google Play">
                <svg
                  className="store-badge-icon"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3 20.5V3.5c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.25-.84-.76-.84-1.35zM16.81 15.12L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31c.34.27.54.69.54 1.19s-.2.92-.54 1.19l-2.29 1.32-2.5-2.5 2.5-2.5 2.29 1.3zM6.05 2.66l10.76 6.22-2.27 2.27L6.05 2.66z" />
                </svg>
                <div className="store-badge-text">
                  <span className="store-badge-small">Get it on</span>
                  <span className="store-badge-big">Google Play</span>
                </div>
              </Link>
            </div>
          </div>

          <div className="footer-col">
            <h4>For patients</h4>
            <ul>
              <li>
                <Link href="#">Get started</Link>
              </li>
              <li>
                <Link href="#">WhatsApp setup</Link>
              </li>
              <li className="new">
                <Link href="#">Family caregivers</Link>
              </li>
              <li>
                <Link href="#">AI Second Opinion</Link>
              </li>
              <li>
                <Link href="#">Anonymous mode</Link>
              </li>
              <li>
                <Link href="#">Help center</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>For doctors</h4>
            <ul>
              <li>
                <Link href="#">AI scribe</Link>
              </li>
              <li>
                <Link href="#">Decision support</Link>
              </li>
              <li>
                <Link href="#">Practice OS</Link>
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
              <li className="beta">
                <Link href="#">API access</Link>
              </li>
              <li>
                <Link href="#">Refer a colleague</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li>
                <Link href="#">The Aarogya Letter</Link>
              </li>
              <li>
                <Link href="#">Doctor stories</Link>
              </li>
              <li>
                <Link href="#">Clinical research</Link>
              </li>
              <li>
                <Link href="/press">Press kit</Link>
              </li>
              <li>
                <Link href="#">Brand guidelines</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>
                <Link href="/about">About us</Link>
              </li>
              <li>
                <Link href="/careers">Careers</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy</Link>
              </li>
              <li>
                <Link href="/dpdp">DPDP notice</Link>
              </li>
              <li>
                <Link href="/terms">Terms of service</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-badges">
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <span className="badges-label">&mdash; Compliant with</span>
            <div className="badges-row">
              <span className="badge">
                <svg
                  className="badge-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                DPDP Act
              </span>
              <span className="badge">
                <svg
                  className="badge-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                ABDM
              </span>
              <span className="badge">
                <svg
                  className="badge-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                ISO 27001
              </span>
              <span className="badge">
                <svg
                  className="badge-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 12l2 2 4-4" />
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                  <path d="M3 5c0 1.66 4 3 9 3s9-1.34 9-3-4-3-9-3-9 1.34-9 3" />
                </svg>
                FHIR R4
              </span>
              <span className="badge">
                <svg
                  className="badge-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
                HL7
              </span>
            </div>
          </div>

          <div className="footer-social">
            <Link href="#" className="social-link" aria-label="LinkedIn">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </Link>
            <Link href="#" className="social-link" aria-label="Twitter / X">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>
            <Link href="#" className="social-link" aria-label="YouTube">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
              </svg>
            </Link>
            <Link href="#" className="social-link" aria-label="Instagram">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </Link>
            <Link href="#" className="social-link" aria-label="GitHub">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="footer-watermark">
          Aarogya<em style={{ fontStyle: 'italic' }}>.</em>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <span>&copy; 2026 Aarogya Health Technologies</span>
            <span className="footer-bottom-divider" />
            <Link href="/privacy" style={{ color: 'inherit', textDecoration: 'none' }}>
              Privacy
            </Link>
            <Link href="/terms" style={{ color: 'inherit', textDecoration: 'none' }}>
              Terms
            </Link>
            <Link href="#" style={{ color: 'inherit', textDecoration: 'none' }}>
              Cookies
            </Link>
          </div>
          <div className="footer-bottom-right">
            <Link href="#" className="lang-switcher">
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
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              English (IN)
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="footer-care">
          Made in India <span className="heart">&#9829;</span> with care for everyone.
        </div>
      </div>
    </footer>
  );
}
