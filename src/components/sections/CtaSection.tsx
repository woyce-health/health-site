import { Link } from '@/libs/I18nNavigation';

function ArrowIcon() {
  return (
    <svg
      width="13"
      height="13"
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
}

export function CtaSection() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-card reveal">
          <div className="cta-counter">
            <span className="cta-counter-dot">
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            <span className="cta-counter-text">
              <strong>1,247</strong> joined this week &middot; 312 spots left
            </span>
          </div>

          <h2>
            Care that <em>finally</em> feels human.
          </h2>
          <p>
            Whether you&apos;re a patient looking for better care, or a doctor looking to give it
            &mdash; we&apos;d love to have you.
          </p>

          <div className="cta-audiences">
            <div className="cta-audience">
              <div className="cta-audience-label">For patients</div>
              <div className="cta-audience-title">
                Better care, <em>finally.</em>
              </div>
              <div className="cta-audience-meta">
                Voice-first &middot; WhatsApp ready &middot; 12 languages &middot; Free forever
              </div>
              <Link href="#" className="cta-audience-btn">
                I&apos;m a patient
                <ArrowIcon />
              </Link>
            </div>

            <div className="cta-or">or</div>

            <div className="cta-audience">
              <div className="cta-audience-label">For doctors</div>
              <div className="cta-audience-title">
                Get your <em>day back.</em>
              </div>
              <div className="cta-audience-meta">
                AI scribe &middot; 14-day trial &middot; Free tier &middot; 10 consults to start
              </div>
              <Link href="#" className="cta-audience-btn">
                I&apos;m a doctor
                <ArrowIcon />
              </Link>
            </div>
          </div>

          <div className="cta-social">
            <div className="cta-social-avatars">
              <span className="cta-social-avatar">P</span>
              <span className="cta-social-avatar">R</span>
              <span className="cta-social-avatar">A</span>
              <span className="cta-social-avatar">S</span>
            </div>
            <div className="cta-social-text">
              <strong>Priya, Dr. Rohan, Anjali</strong> &amp; 2,400 others trust Aarogya
              <span>From Mumbai &middot; Bengaluru &middot; Pune &middot; Delhi</span>
            </div>
          </div>

          <div className="cta-trust">
            <span>No credit card</span>
            <span className="cta-trust-dot" />
            <span>Free forever</span>
            <span className="cta-trust-dot" />
            <span>Privacy-first</span>
            <span className="cta-trust-dot" />
            <span>DPDP compliant</span>
          </div>
        </div>

        <div className="cta-signature reveal">
          <div className="cta-signature-text">
            &ldquo;<strong>Health is the project of a lifetime.</strong> We&apos;re glad you&apos;re
            here for the start of ours.&rdquo;
          </div>
          <div className="cta-signature-mark">&mdash; The Aarogya team &middot; Bengaluru</div>
        </div>
      </div>
    </section>
  );
}
