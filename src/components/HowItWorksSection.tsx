export function HowItWorksSection() {
  return (
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
            From sign-up to your first AI-summarized lab report in under five minutes. No friction,
            no fuss.
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
              Link your ABHA ID and we&apos;ll quietly pull your records together — past
              prescriptions, lab reports, and hospital visits, all in one place.
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
              Smart reminders, refill alerts, follow-through after discharge, and gentle nudges when
              something deserves a second look.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
