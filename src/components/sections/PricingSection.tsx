import { Link } from '@/libs/I18nNavigation';

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export function PricingSection() {
  return (
    <section className="section" id="pricing" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
      <div className="container">
        <div className="section-header reveal">
          <div>
            <div className="section-label">
              <span className="section-label-num">09 /</span> Pricing
            </div>
            <h2 className="section-title">
              Free where it <em>matters most.</em>
            </h2>
          </div>
          <p className="section-intro">
            Care should never have a paywall. Patients use Aarogya for free, forever. Doctors get
            the basics free too &mdash; pay only when you want the AI scribe and analytics that earn
            back hours every day.
          </p>
        </div>

        <div className="pricing-grid reveal">
          {/* Patient pricing card */}
          <div className="pricing-side patient">
            <div className="pricing-side-head">
              <div className="pricing-side-head-left">
                <div className="pricing-label">For patients</div>
                <h3>
                  Free, <em>always.</em>
                </h3>
              </div>
              <span className="pricing-trial-badge">No credit card</span>
            </div>

            <ul className="pricing-tiers">
              <li>
                <div>
                  <span className="tier-name">Aarogya for individuals</span>
                  <span className="tier-detail">
                    Voice + WhatsApp &middot; Unified records &middot; AI explainers &middot; Refill
                    reminders
                  </span>
                </div>
                <div className="tier-price-block">
                  <span className="tier-price free">Free</span>
                  <span className="tier-price-period">Forever</span>
                </div>
              </li>
              <li>
                <div>
                  <span className="tier-name">Family plan &middot; up to 5</span>
                  <span className="tier-detail">
                    Caregiver dashboards &middot; Shared records &middot; Permission tiers &middot;
                    Alert routing
                  </span>
                </div>
                <div className="tier-price-block">
                  <span className="tier-price">
                    <span className="tier-price-currency">&#8377;</span>299
                  </span>
                  <span className="tier-price-period">/month</span>
                </div>
              </li>
              <li className="recommended">
                <div>
                  <span className="tier-recommended">&#9733; Most loved</span>
                  <span className="tier-name">Premium AI</span>
                  <span className="tier-detail">
                    AI Second Opinion &middot; Doctor-verified summaries &middot; Symptom journal AI
                  </span>
                </div>
                <div className="tier-price-block">
                  <span className="tier-price">
                    <span className="tier-price-currency">&#8377;</span>499
                  </span>
                  <span className="tier-price-period">/month</span>
                </div>
              </li>
              <li>
                <div>
                  <span className="tier-name">Pay-per-consultation</span>
                  <span className="tier-detail">
                    Verified doctor &middot; Video or chat &middot; Insurance reimbursable
                  </span>
                </div>
                <div className="tier-price-block">
                  <span className="tier-price">
                    <span className="tier-price-currency">from &#8377;</span>199
                  </span>
                  <span className="tier-price-period">Per visit</span>
                </div>
              </li>
            </ul>

            <Link href="#" className="pricing-cta">
              Start free
              <ArrowIcon />
            </Link>
          </div>

          {/* Doctor pricing card (dark) */}
          <div className="pricing-side doctor">
            <div className="pricing-side-head">
              <div className="pricing-side-head-left">
                <div className="pricing-label">For doctors</div>
                <h3>
                  Earn back <em>two hours a day.</em>
                </h3>
              </div>
              <span className="pricing-trial-badge">14-day trial</span>
            </div>

            <ul className="pricing-tiers">
              <li>
                <div>
                  <span className="tier-name">Free tier</span>
                  <span className="tier-detail">
                    10 AI scribe consultations / month &middot; Basic EMR &middot; Patient
                    management
                  </span>
                </div>
                <div className="tier-price-block">
                  <span className="tier-price free">Free</span>
                  <span className="tier-price-period">Forever</span>
                </div>
              </li>
              <li className="recommended">
                <div>
                  <span className="tier-recommended">&#9733; Most popular</span>
                  <span className="tier-name">Pro</span>
                  <span className="tier-detail">
                    Unlimited AI scribe &middot; Decision support &middot; ICD-10 coding &middot;
                    Practice analytics
                  </span>
                </div>
                <div className="tier-price-block">
                  <span className="tier-price">
                    <span className="tier-price-currency">&#8377;</span>999
                  </span>
                  <span className="tier-price-period">/month</span>
                </div>
              </li>
              <li>
                <div>
                  <span className="tier-name">Clinic &middot; up to 5 doctors</span>
                  <span className="tier-detail">
                    Everything in Pro &middot; Shared scheduling &middot; Multi-doctor analytics
                    &middot; UPI rails
                  </span>
                </div>
                <div className="tier-price-block">
                  <span className="tier-price">
                    <span className="tier-price-currency">&#8377;</span>2,999
                  </span>
                  <span className="tier-price-period">/month</span>
                </div>
              </li>
              <li>
                <div>
                  <span className="tier-name">Hospital &middot; enterprise</span>
                  <span className="tier-detail">
                    Full HMS &middot; ABDM &middot; TPA workflows &middot; Dedicated success manager
                  </span>
                </div>
                <div className="tier-price-block">
                  <span className="tier-price">Custom</span>
                  <span className="tier-price-period">Talk to us</span>
                </div>
              </li>
            </ul>

            <Link href="#" className="pricing-cta">
              Start 14-day trial
              <ArrowIcon />
            </Link>
          </div>
        </div>

        {/* Included in every plan */}
        <div className="pricing-included reveal">
          <span className="pricing-included-label">Included in every plan</span>
          <ul className="pricing-included-list">
            <li>End-to-end encryption</li>
            <li>ABDM integration</li>
            <li>One-click data export</li>
            <li>12 Indian languages</li>
            <li>WhatsApp support</li>
            <li>Doctor-verified AI</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
