const cards = [
  {
    num: 'i.',
    cat: 'Before visit',
    color: '',
    icon: (
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
        <line x1="9" y1="15" x2="15" y2="15" />
      </svg>
    ),
    title: 'Pre-visit prep.',
    body: 'Two days before your appointment, AI sends 5–7 smart questions to ask your doctor — based on your history.',
    meta: '2 days ahead',
  },
  {
    num: 'ii.',
    cat: 'Booking',
    color: 'amber',
    icon: (
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
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: 'Cost transparency.',
    body: 'See estimated total cost before you book — consultation, likely tests, and probable medication ranges.',
    meta: 'No surprises',
  },
  {
    num: 'iii.',
    cat: 'Education',
    color: '',
    icon: (
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
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    title: '"Explain like I\'m 5."',
    body: 'Every report, term, or prescription has a button for a simple, visual, plain-language explanation.',
    meta: '5 reading levels',
  },
  {
    num: 'iv.',
    cat: 'Tracking',
    color: 'green',
    icon: (
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
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: 'Symptom journal.',
    body: 'Log how you feel each day. AI summarizes the pattern into a one-page brief your doctor will actually read.',
    meta: 'Daily nudge',
  },
  {
    num: 'v.',
    cat: 'Safety',
    color: '',
    icon: (
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
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    title: 'Pill identifier.',
    body: "Snap a photo of any pill or strip. AI tells you what it is, what it's for, and flags interactions.",
    meta: 'Counterfeit-safe',
  },
  {
    num: 'vi.',
    cat: 'Recovery',
    color: 'amber',
    icon: (
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
    ),
    title: 'Post-discharge care.',
    body: 'The 72 hours after hospital are critical. Daily check-ins, milestone tracking, and red-flag detection.',
    meta: '72-hour window',
  },
  {
    num: 'vii.',
    cat: 'Triage',
    color: '',
    icon: (
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
        <path d="M9 12l2 2 4-4" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 5c0 1.66 4 3 9 3s9-1.34 9-3-4-3-9-3-9 1.34-9 3" />
      </svg>
    ),
    title: 'Smart triage bot.',
    body: '24/7 AI that helps you decide: self-care, see a doctor soon, urgent care, or call an ambulance now.',
    meta: '24 / 7 available',
  },
  {
    num: 'viii.',
    cat: 'Adherence',
    color: 'green',
    icon: (
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
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Refill reminders.',
    body: "AI predicts when you'll run out of meds and offers refills — one tap, your pharmacy, generic options too.",
    meta: 'One-tap refill',
  },
  {
    num: 'ix.',
    cat: 'Privacy',
    color: 'pink',
    icon: (
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
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 11l-3 3-2-2" />
      </svg>
    ),
    title: 'Anonymous mode.',
    body: 'For mental health, sexual health, or anything sensitive — consult a verified doctor without using your real identity.',
    meta: 'Pseudonym safe',
  },
];

const ArrowIcon = () => (
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
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export function SmallFeaturesSection() {
  return (
    <section className="section" id="impact" style={{ paddingTop: '60px' }}>
      <div className="container">
        <div className="section-header reveal">
          <div>
            <div className="section-label">
              <span className="section-label-num">02 /</span> Quiet improvements
            </div>
            <h2 className="section-title">
              Small things that <em>compound daily.</em>
            </h2>
          </div>
          <p className="section-intro">
            Tiny features that make outsized differences. The kind of help you didn&rsquo;t know you
            needed &mdash; until you have it.
          </p>
        </div>

        <div className="small-features">
          {cards.map((card) => (
            <div key={card.num} className={`sf-card reveal${card.color ? ` ${card.color}` : ''}`}>
              <div className="sf-card-num">{card.num}</div>
              <span className="sf-card-cat">{card.cat}</span>
              <div className="sf-card-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
              <div className="sf-card-foot">
                <span className="sf-card-meta">{card.meta}</span>
                <span className="sf-card-arrow">
                  <ArrowIcon />
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="sf-footnote reveal">
          <strong>Nine quiet wins.</strong> None of them shouted from the rooftops. All of them
          measured, week after week, in the difference they make.
        </div>
      </div>
    </section>
  );
}
