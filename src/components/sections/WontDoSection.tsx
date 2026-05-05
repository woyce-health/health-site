function XIcon() {
  return (
    <svg
      width="9"
      height="9"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export function WontDoSection() {
  return (
    <section className="section" id="safeguards" style={{ paddingTop: '60px' }}>
      <div className="container">
        <div className="section-header reveal">
          <div>
            <div className="section-label">
              <span className="section-label-num">06 /</span> What we refuse to do
            </div>
            <h2 className="section-title">
              The features we <em>chose to skip.</em>
            </h2>
          </div>
          <p className="section-intro">
            Some shortcuts are tempting but harmful. We say no to them on purpose &mdash; and
            we&apos;ll tell you exactly why.
          </p>
        </div>

        <div className="avoid-grid">
          <div className="avoid-card reveal">
            <div className="avoid-num">i.</div>
            <div className="avoid-head">
              <span className="avoid-warn">
                <span className="avoid-warn-x">
                  <XIcon />
                </span>
                We won&apos;t
              </span>
              <h4>Full diagnosis claims.</h4>
              <p className="avoid-why">
                Even high-accuracy AI shouldn&apos;t claim to diagnose. It creates real liability
                and false confidence. Doctors must always be in the loop.
              </p>
            </div>
            <div className="avoid-instead">
              <strong>Instead</strong>
              We frame everything as &ldquo;questions to discuss with your doctor&rdquo; &mdash;
              never as a diagnosis or alternative.
            </div>
          </div>

          <div className="avoid-card reveal">
            <div className="avoid-num">ii.</div>
            <div className="avoid-head">
              <span className="avoid-warn">
                <span className="avoid-warn-x">
                  <XIcon />
                </span>
                We won&apos;t
              </span>
              <h4>Therapy-replacement chatbots.</h4>
              <p className="avoid-why">
                Conversational AI for emotional support sounds helpful but is dangerous without
                human escalation. Mental health needs real humans.
              </p>
            </div>
            <div className="avoid-instead">
              <strong>Instead</strong>
              Crisis detection with immediate human handoff. Verified therapists. Clear disclaimers.
              Never marketed as therapy.
            </div>
          </div>

          <div className="avoid-card reveal">
            <div className="avoid-num">iii.</div>
            <div className="avoid-head">
              <span className="avoid-warn">
                <span className="avoid-warn-x">
                  <XIcon />
                </span>
                We won&apos;t
              </span>
              <h4>Streaks and gamification.</h4>
              <p className="avoid-why">
                Streaks shame patients who miss days because they&apos;re sick. Healthcare
                isn&apos;t a video game. Compassion beats compulsion.
              </p>
            </div>
            <div className="avoid-instead">
              <strong>Instead</strong>
              Long-term progress framing. Forgive missed days during illness. Celebrate consistency
              without punishing breaks.
            </div>
          </div>

          <div className="avoid-card reveal">
            <div className="avoid-num">iv.</div>
            <div className="avoid-head">
              <span className="avoid-warn">
                <span className="avoid-warn-x">
                  <XIcon />
                </span>
                We won&apos;t
              </span>
              <h4>Patient discussion forums.</h4>
              <p className="avoid-why">
                Medical misinformation spreads fast. Moderation is expensive. Most
                &ldquo;communities&rdquo; become liability hotspots.
              </p>
            </div>
            <div className="avoid-instead">
              <strong>Instead</strong>
              Verified doctor Q&amp;A. Curated, condition-specific content. Anonymous consultation
              when sensitivity matters.
            </div>
          </div>
        </div>

        <div className="avoid-footnote reveal">
          &ldquo;<strong>Saying no</strong> is part of how we earn your trust. Every shortcut we
          refuse is one less way you can be hurt.&rdquo;
          <span className="avoid-footnote-attr">&mdash; Aarogya &middot; Care Charter</span>
        </div>
      </div>
    </section>
  );
}
