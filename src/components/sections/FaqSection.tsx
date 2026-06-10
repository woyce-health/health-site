import { Link } from '@/libs/I18nNavigation';

function ChevronIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export function FaqSection() {
  return (
    <section className="section" id="faq" style={{ paddingTop: '60px', paddingBottom: '80px' }}>
      <div className="container">
        <div
          className="section-header reveal"
          style={{ textAlign: 'center', gridTemplateColumns: '1fr', placeItems: 'center' }}
        >
          <div>
            <div className="section-label" style={{ justifyContent: 'center' }}>
              <span className="section-label-num">10 /</span> Frequently asked
            </div>
            <h2 className="section-title" style={{ maxWidth: 'none' }}>
              Questions, <em>answered honestly.</em>
            </h2>
          </div>
        </div>

        <div className="faq-filters reveal">
          <button className="faq-filter active">
            All
            <span className="faq-filter-count">7</span>
          </button>
          <button className="faq-filter">For patients</button>
          <button className="faq-filter">For doctors</button>
          <button className="faq-filter">Privacy</button>
          <button className="faq-filter">Product</button>
        </div>

        <div className="faq-list reveal">
          <details className="faq-item">
            <summary>
              <span className="faq-num">i.</span>
              <span className="faq-q">
                <span className="faq-cat patient">For patients</span>
                <span>Can Aarogya replace my doctor?</span>
              </span>
              <span className="faq-toggle">
                <ChevronIcon />
              </span>
            </summary>
            <div className="faq-answer">
              <p>
                No &mdash; and we wouldn&apos;t want to. Aarogya is decision support for both you
                and your doctor. We frame everything as &ldquo;questions to discuss&rdquo; rather
                than &ldquo;alternative diagnoses.&rdquo; Every AI suggestion shows its confidence
                and sources, and a real doctor verifies anything that matters.
              </p>
              <p>
                Think of us as the careful, well-read friend who reminds you of the right questions
                to ask &mdash; not the one giving you the answers.
              </p>
              <div className="faq-helpful">
                <span className="faq-helpful-text">Was this helpful?</span>
                <div className="faq-helpful-buttons">
                  <button className="faq-helpful-btn">&#8593; Yes</button>
                  <button className="faq-helpful-btn">&#8595; Not really</button>
                </div>
              </div>
            </div>
          </details>

          <details className="faq-item">
            <summary>
              <span className="faq-num">ii.</span>
              <span className="faq-q">
                <span className="faq-cat product">Product</span>
                <span>How does the WhatsApp integration work? Do I need to download anything?</span>
              </span>
              <span className="faq-toggle">
                <ChevronIcon />
              </span>
            </summary>
            <div className="faq-answer">
              <p>
                Nothing to download. You message Aarogya on WhatsApp like you would a friend. Send a
                voice note in Hindi, type in English, share a photo of a lab report &mdash; we
                handle it. Behind the scenes, our system uses the WhatsApp Business API to keep
                conversations contextual across sessions.
              </p>
              <p>
                For richer features (timeline view, family permissions), we have a web app. But the
                core experience works entirely on WhatsApp.
              </p>
              <div className="faq-helpful">
                <span className="faq-helpful-text">Was this helpful?</span>
                <div className="faq-helpful-buttons">
                  <button className="faq-helpful-btn">&#8593; Yes</button>
                  <button className="faq-helpful-btn">&#8595; Not really</button>
                </div>
              </div>
            </div>
          </details>

          <details className="faq-item">
            <summary>
              <span className="faq-num">iii.</span>
              <span className="faq-q">
                <span className="faq-cat product">Product</span>
                <span>Which languages do you actually support well?</span>
              </span>
              <span className="faq-toggle">
                <ChevronIcon />
              </span>
            </summary>
            <div className="faq-answer">
              <p>
                Right now: Hindi, English, Tamil, Telugu, Bengali, Marathi, and Gujarati &mdash; at
                production quality, including regional accents and code-switching (the way Indians
                actually talk: &ldquo;&#2350;&#2375;&#2352;&#2375; head &#2350;&#2375;&#2306; pain
                &#2361;&#2379; &#2352;&#2361;&#2366; &#2361;&#2376;&rdquo;).
              </p>
              <p>
                In active development: Kannada, Malayalam, Punjabi, Odia, Assamese, and Urdu.
                Generic models fail for healthcare &mdash; we&apos;re training accent-resilient
                models with proper medical vocabulary for each region.
              </p>
              <div className="faq-helpful">
                <span className="faq-helpful-text">Was this helpful?</span>
                <div className="faq-helpful-buttons">
                  <button className="faq-helpful-btn">&#8593; Yes</button>
                  <button className="faq-helpful-btn">&#8595; Not really</button>
                </div>
              </div>
            </div>
          </details>

          <details className="faq-item">
            <summary>
              <span className="faq-num">iv.</span>
              <span className="faq-q">
                <span className="faq-cat privacy">Privacy</span>
                <span>What happens to my data? Can I take it with me?</span>
              </span>
              <span className="faq-toggle">
                <ChevronIcon />
              </span>
            </summary>
            <div className="faq-answer">
              <p>
                Your records are yours. Always. End-to-end encryption at rest and in transit. We
                can&apos;t read them, and neither can anyone else without your explicit permission.
              </p>
              <p>
                One-click export &mdash; PDF, FHIR, or JSON, your choice. Delete your account and we
                delete everything. No &ldquo;data lock-in&rdquo; trap. We&apos;re built on this
                promise because the DPDP Act and basic decency both require it.
              </p>
              <div className="faq-helpful">
                <span className="faq-helpful-text">Was this helpful?</span>
                <div className="faq-helpful-buttons">
                  <button className="faq-helpful-btn">&#8593; Yes</button>
                  <button className="faq-helpful-btn">&#8595; Not really</button>
                </div>
              </div>
            </div>
          </details>

          <details className="faq-item">
            <summary>
              <span className="faq-num">v.</span>
              <span className="faq-q">
                <span className="faq-cat doctor">For doctors</span>
                <span>How is the AI scribe different from existing transcription tools?</span>
              </span>
              <span className="faq-toggle">
                <ChevronIcon />
              </span>
            </summary>
            <div className="faq-answer">
              <p>
                Generic transcription gives you a wall of text. Our scribe structures the
                consultation into SOAP format (Subjective, Objective, Assessment, Plan), suggests
                ICD-10 codes, drafts a prescription, and generates a patient-friendly summary
                &mdash; all reviewable in seconds.
              </p>
              <p>
                We&apos;re trained on Indian drug names, regional language medical terms, and
                code-switching speech patterns. Generic tools transcribe; we structure clinical
                thinking.
              </p>
              <div className="faq-helpful">
                <span className="faq-helpful-text">Was this helpful?</span>
                <div className="faq-helpful-buttons">
                  <button className="faq-helpful-btn">&#8593; Yes</button>
                  <button className="faq-helpful-btn">&#8595; Not really</button>
                </div>
              </div>
            </div>
          </details>

          <details className="faq-item">
            <summary>
              <span className="faq-num">vi.</span>
              <span className="faq-q">
                <span className="faq-cat regulation">Regulation</span>
                <span>Are you regulated? Is this safe to use?</span>
              </span>
              <span className="faq-toggle">
                <ChevronIcon />
              </span>
            </summary>
            <div className="faq-answer">
              <p>
                We&apos;re DPDP Act compliant, ABDM-integrated, and audited quarterly by an
                independent third party. We never claim to diagnose &mdash; that&apos;s a
                doctor&apos;s job, and the regulatory line we won&apos;t cross.
              </p>
              <p>
                For mental health and crisis situations, we have clear handoff protocols to human
                professionals. For drug suggestions, we surface evidence-based options for your
                doctor to consider, never specific prescriptions to act on.
              </p>
              <div className="faq-helpful">
                <span className="faq-helpful-text">Was this helpful?</span>
                <div className="faq-helpful-buttons">
                  <button className="faq-helpful-btn">&#8593; Yes</button>
                  <button className="faq-helpful-btn">&#8595; Not really</button>
                </div>
              </div>
            </div>
          </details>

          <details className="faq-item">
            <summary>
              <span className="faq-num">vii.</span>
              <span className="faq-q">
                <span className="faq-cat doctor">For doctors</span>
                <span>I&apos;m a doctor. Why should I switch from my current EMR?</span>
              </span>
              <span className="faq-toggle">
                <ChevronIcon />
              </span>
            </summary>
            <div className="faq-answer">
              <p>
                Honestly? The AI scribe alone. Most of our doctors save 1.5&ndash;2 hours per day on
                documentation &mdash; time that goes back to patients (or back to you).
              </p>
              <p>
                Beyond that: drug interaction checks across your patient&apos;s other prescribers,
                smart scheduling that fills no-show gaps automatically, native UPI and TPA
                workflows, and a clean interface that doesn&apos;t feel like punishment. Free tier
                exists. Try it on 10 consultations and decide.
              </p>
              <div className="faq-helpful">
                <span className="faq-helpful-text">Was this helpful?</span>
                <div className="faq-helpful-buttons">
                  <button className="faq-helpful-btn">&#8593; Yes</button>
                  <button className="faq-helpful-btn">&#8595; Not really</button>
                </div>
              </div>
            </div>
          </details>
        </div>

        <div className="faq-support reveal">
          <div className="faq-support-text">
            <div className="faq-support-eyebrow">&mdash; Still have questions?</div>
            <div className="faq-support-title">
              We&apos;d love to <em>hear from you.</em>
            </div>
            <div className="faq-support-meta">
              Real humans, usually replying within a few hours.
            </div>
          </div>
          <div className="faq-support-buttons">
            <Link href="#" className="faq-support-btn primary">
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
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              WhatsApp us
            </Link>
            <Link href="#" className="faq-support-btn">
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
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Email support
            </Link>
            <Link href="#" className="faq-support-btn">
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
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              Live chat
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
