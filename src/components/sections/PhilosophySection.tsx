const principles = [
  {
    num: 'i.',
    title: 'AI augments.',
    titleEm: 'Never replaces.',
    body: 'Every recommendation goes to a doctor, not around them. Decision support, never decision making.',
    tag: 'Doctor-in-the-loop',
  },
  {
    num: 'ii.',
    title: 'Trust is the',
    titleEm: 'real product.',
    body: "Every AI output shows confidence and sources. We'd rather lose features than your trust in us.",
    tag: 'Explainable by default',
  },
  {
    num: 'iii.',
    title: 'Mobile for patients.',
    titleEm: 'Web for doctors.',
    body: 'Two audiences, two clean experiences. Built where each one already lives and works.',
    tag: 'Audience-first',
  },
  {
    num: 'iv.',
    title: 'Regional language is a',
    titleEm: 'moat.',
    body: "Generic Hindi isn't enough. Twelve languages, accent-resilient, with proper medical vocabulary.",
    tag: '12 languages live',
  },
  {
    num: 'v.',
    title: 'Doctor experience leads',
    titleEm: 'patient outcomes.',
    body: "If doctors hate the tool, patients lose. So we obsess over the clinician's day, first.",
    tag: 'Doctor-first design',
  },
];

export function PhilosophySection() {
  return (
    <section
      className="section"
      id="philosophy"
      style={{ paddingTop: '100px', paddingBottom: '60px' }}
    >
      <div className="container">
        <div className="section-header reveal">
          <div>
            <div className="section-label">
              <span className="section-label-num">00 /</span> What we believe
            </div>
            <h2 className="section-title">
              Five principles, <em>quietly held.</em>
            </h2>
          </div>
          <p className="section-intro">
            Healthcare apps have become loud, cluttered, and impersonal. We&rsquo;re building the
            opposite — a quiet, careful tool that earns trust one consultation at a time.
          </p>
        </div>

        <div className="philosophy-grid reveal">
          {principles.map((p) => (
            <div className="philosophy-item" key={p.num}>
              <div className="philosophy-num">{p.num}</div>
              <h4>
                {p.title} <em>{p.titleEm}</em>
              </h4>
              <p>{p.body}</p>
              <span className="philosophy-tag">{p.tag}</span>
            </div>
          ))}
        </div>

        <div className="philosophy-signature">
          <div className="philosophy-signature-text">
            <strong>We won&rsquo;t build everything.</strong> We won&rsquo;t move fast and break
            things. Healthcare deserves better — and so do you.
          </div>
          <div className="philosophy-signature-meta">Aarogya · Est. 2026</div>
        </div>
      </div>
    </section>
  );
}
