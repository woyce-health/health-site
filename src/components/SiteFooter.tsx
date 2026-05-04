export function SiteFooter() {
  return (
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
  );
}
