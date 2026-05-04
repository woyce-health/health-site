import { Link } from '@/libs/I18nNavigation';

export function SiteFooter() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="logo">
              <span className="logo-mark" /> Aarogya
            </Link>
            <p>
              An AI-powered healthcare platform built for India — and the families who hold it
              together.
            </p>
          </div>
          <div className="footer-col">
            <h4>Platform</h4>
            <ul>
              <li>
                <Link href="/patients">For patients</Link>
              </li>
              <li>
                <Link href="/doctors">For doctors</Link>
              </li>
              <li>
                <Link href="/hospitals">For hospitals</Link>
              </li>
              <li>
                <Link href="/caregivers">For caregivers</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/careers">Careers</Link>
              </li>
              <li>
                <Link href="/press">Press</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li>
                <Link href="/privacy">Privacy</Link>
              </li>
              <li>
                <Link href="/terms">Terms</Link>
              </li>
              <li>
                <Link href="/dpdp">DPDP notice</Link>
              </li>
              <li>
                <Link href="/security">Security</Link>
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
  );
}
