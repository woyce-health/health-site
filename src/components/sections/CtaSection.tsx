import { Link } from '@/libs/I18nNavigation';

export function CtaSection() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-card reveal">
          <span className="cta-eyebrow">
            <span className="pulse-dot" style={{ background: '#a5b4fc' }} /> Now Onboarding ·
            Limited Spots
          </span>
          <h2>
            Care that <em>finally</em> feels human.
          </h2>
          <p>
            Join the early waitlist. We&apos;re onboarding new families every week, starting with
            Mumbai, Bengaluru, and Pune.
          </p>
          <Link href="/patients" className="btn btn-primary">
            Join the waitlist →
          </Link>
          <div className="cta-trust">
            <span>No credit card</span>
            <span className="cta-trust-dot" />
            <span>Free forever</span>
            <span className="cta-trust-dot" />
            <span>Privacy-first</span>
          </div>
        </div>
      </div>
    </section>
  );
}
