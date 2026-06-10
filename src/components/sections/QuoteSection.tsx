export function QuoteSection() {
  return (
    <section className="quote-section reveal">
      <div className="container">
        <div className="quote-eyebrow">
          <span className="quote-eyebrow-line"></span>
          <span className="quote-eyebrow-text">What patients &amp; doctors say</span>
          <span className="quote-eyebrow-line"></span>
        </div>

        <div className="quote-featured">
          <div className="quote-mark">&ldquo;</div>
          <p className="quote">
            Aarogya is the first health app my mother actually uses. She speaks Marathi to it, and
            it just <em>understands.</em> That alone changed everything.
          </p>

          <div className="quote-stars">&#9733; &#9733; &#9733; &#9733; &#9733;</div>

          <div className="attribution">
            <div className="attribution-avatar">P</div>
            <div style={{ textAlign: 'left' }}>
              <span className="attribution-name">Priya Deshmukh</span>
              <span className="attribution-title">
                Software Engineer &middot; Pune
                <span className="attribution-verified">Verified user</span>
              </span>
            </div>
          </div>

          <div className="quote-outcome">
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
            Used by mom &middot; 6 months
          </div>
        </div>

        <div className="quote-companions">
          <div className="quote-mini">
            <div className="quote-mini-stars">&#9733; &#9733; &#9733; &#9733; &#9733;</div>
            <div className="quote-mini-text">
              &ldquo;The scribe gave me back the part of medicine I love &mdash;{' '}
              <em>actually looking</em> at my patients. Two hours a day, every day.&rdquo;
            </div>
            <div className="quote-mini-attr">
              <div className="quote-mini-avatar">R</div>
              <div className="quote-mini-name">
                <strong>Dr. Rohan Iyer</strong>
                <span>General Physician &middot; Bengaluru</span>
              </div>
              <span className="quote-mini-tag">Doctor</span>
            </div>
          </div>

          <div className="quote-mini">
            <div className="quote-mini-stars">&#9733; &#9733; &#9733; &#9733; &#9733;</div>
            <div className="quote-mini-text">
              &ldquo;I manage care for my parents from another city. Aarogya tells me what I need to
              know &mdash; and <em>only</em> what I need to know.&rdquo;
            </div>
            <div className="quote-mini-attr">
              <div className="quote-mini-avatar">A</div>
              <div className="quote-mini-name">
                <strong>Anjali Mehta</strong>
                <span>Product Designer &middot; Bengaluru</span>
              </div>
              <span className="quote-mini-tag">Caregiver</span>
            </div>
          </div>

          <div className="quote-mini">
            <div className="quote-mini-stars">&#9733; &#9733; &#9733; &#9733; &#9733;</div>
            <div className="quote-mini-text">
              &ldquo;Caught a drug interaction my last cardiologist missed.{' '}
              <em>Quietly. No drama.</em> Just a flag, and a way to act on it.&rdquo;
            </div>
            <div className="quote-mini-attr">
              <div className="quote-mini-avatar">S</div>
              <div className="quote-mini-name">
                <strong>Sanjay Kapoor</strong>
                <span>Diabetes Patient &middot; Mumbai</span>
              </div>
              <span className="quote-mini-tag">Patient</span>
            </div>
          </div>
        </div>

        <div className="quote-source">
          <span className="quote-source-line"></span>
          <span>From 2,400+ reviews &middot; Verified by ABDM</span>
          <span className="quote-source-line"></span>
        </div>
      </div>
    </section>
  );
}
