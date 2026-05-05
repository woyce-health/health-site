const logos = [
  { mark: 'A', name: 'Apollo Hospitals', meta: '14 Cities · India' },
  { mark: 'F', name: 'Fortis Healthcare', meta: 'Multi-specialty' },
  { mark: 'M', name: 'Manipal Hospitals', meta: 'Bengaluru · Pilot' },
  { mark: 'M', name: 'Medanta', meta: 'NCR · Diabetes' },
  { mark: 'N', name: 'Narayana Health', meta: 'Cardiac Network' },
  { mark: 'A', name: 'AIIMS Partners', meta: 'Research' },
  { mark: 'K', name: 'Kokilaben Hospital', meta: 'Mumbai' },
  { mark: 'M', name: 'MaxCare', meta: 'Network · 8 cities' },
];

export function TrustedSection() {
  return (
    <section className="trusted reveal">
      <div className="container">
        <div className="trusted-header">
          <div className="trusted-label-block">
            <span className="trusted-label">Quietly trusted</span>
            <h2 className="trusted-headline">
              Built with <em>2,400+</em> patients and clinicians across India.
            </h2>
          </div>

          <div className="trusted-stats">
            <div className="trusted-stat">
              <div className="trusted-stat-num">
                1.2<span>k</span>
              </div>
              <div className="trusted-stat-label">Active doctors</div>
            </div>
            <div className="trusted-stat">
              <div className="trusted-stat-num">
                38<span>k</span>
              </div>
              <div className="trusted-stat-label">Patients served</div>
            </div>
            <div className="trusted-stat">
              <div className="trusted-stat-num">
                12<span>+</span>
              </div>
              <div className="trusted-stat-label">Languages live</div>
            </div>
            <div className="trusted-stat">
              <div className="trusted-stat-num">
                94<span>%</span>
              </div>
              <div className="trusted-stat-label">Doctor NPS</div>
            </div>
          </div>
        </div>

        <div className="marquee">
          <div className="marquee-track">
            {[...logos, ...logos].map((logo, i) => (
              <div className="logo-card" key={i}>
                <div className="logo-card-mark">{logo.mark}</div>
                <div className="logo-card-text">
                  <span className="logo-card-name">{logo.name}</span>
                  <span className="logo-card-meta">{logo.meta}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="trusted-quotes">
          <div className="quote-chip">
            <div className="quote-chip-stars">★ ★ ★ ★ ★</div>
            <div className="quote-chip-text">
              &ldquo;The AI scribe gave me back <em>two hours every day.</em> I see my patients
              again, not my screen.&rdquo;
            </div>
            <div className="quote-chip-attr">
              <div className="quote-chip-avatar">R</div>
              <div className="quote-chip-name">
                <strong>Dr. Rohan Iyer</strong>
                <span>General Physician · Bengaluru</span>
              </div>
            </div>
          </div>

          <div className="quote-chip">
            <div className="quote-chip-stars">★ ★ ★ ★ ★</div>
            <div className="quote-chip-text">
              &ldquo;My mother speaks Marathi to it and it just <em>understands.</em> She&rsquo;s
              never used a health app before.&rdquo;
            </div>
            <div className="quote-chip-attr">
              <div className="quote-chip-avatar">P</div>
              <div className="quote-chip-name">
                <strong>Priya Deshmukh</strong>
                <span>Software Engineer · Pune</span>
              </div>
            </div>
          </div>

          <div className="quote-chip">
            <div className="quote-chip-stars">★ ★ ★ ★ ★</div>
            <div className="quote-chip-text">
              &ldquo;Caught a drug interaction my last cardiologist missed.{' '}
              <em>Quietly. No drama.</em> Just a flag.&rdquo;
            </div>
            <div className="quote-chip-attr">
              <div className="quote-chip-avatar">S</div>
              <div className="quote-chip-name">
                <strong>Sanjay Kapoor</strong>
                <span>Diabetes Patient · Mumbai</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
