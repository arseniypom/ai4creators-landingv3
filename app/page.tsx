export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="eyebrow">Your AI co-pilot for Instagram sales</div>
          <h1>Stop guessing<br />what to post.<br /><span className="gradient-text">Create reels that sell.</span></h1>
          <p className="hero-sub">Get scripts built for YOUR audience and offer based on proven formats. Ready to film every week.</p>
          <a href="#pricing" className="cta-primary">Join Early Access — $29/mo</a>
          <p className="trust-line">Be one of the first 50 creators to try</p>
        </div>
      </section>

      {/* Problem */}
      <section className="problem">
        <div className="container">
          {/* <p className="problem-text">You post Reels and carousels. But <strong>generic content doesn&apos;t bring clients</strong> because it wasn&apos;t made for YOUR specific audience.</p> */}

          <p className="problem-text">You post consistently. But consistency won&apos;t bring clients if <strong>your content is missing the conversion structure</strong></p>
        </div>
      </section>

      {/* VS Comparison */}
      <section className="vs-section">
        <div className="container">
          <div className="vs-container">
            {/* Without */}
            <div className="vs-card vs-without">
              <div className="vs-label">Without strategy<br/>you get <strong>likes</strong></div>
              <div className="vs-metric">
                <span className="vs-icon">❤️</span>
                <span className="vs-number">2,847</span>
              </div>
            </div>

            {/* Arrow */}
            <div className="vs-arrow">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>

            {/* With */}
            <div className="vs-card vs-with">
              <div className="vs-label">With strategy<br/>you get <strong>sales</strong></div>
              <div className="vs-metric">
                <span className="vs-icon">💰</span>
                <span className="vs-number">$4,200</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="container">
          <div className="section-title">How it works</div>

          <div className="how-steps">
            <div className="how-step" data-number="01">
              <h3>We Analyze Your Market First</h3>
              <p className="step-subtitle">Answer a short questionnaire → get a clear marketing report</p>
              <p>Niche, ideal client, pain points, buying triggers. Not guesswork — real strategy.</p>
            </div>

            <div className="how-step" data-number="02">
              <h3>You Get Proven Scripts</h3>
              <p>Every week you get 5 proven Reels templates — the same formats other creators used to get clients and thousands in sales.
              Just plug in your offer — the structure is already built to convert.</p>
            </div>

            <div className="how-step" data-number="03">
              <h3>Tailor It in One Click</h3>
              <p>Pick any template and tailor it to your product or service in one click.
              Hook, main points, CTA — instantly rewritten in your voice for your exact audience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="preview-section">
        <div className="container">
          <div className="preview-content">
            <div className="preview-label">Sneak Peek</div>
            <h2 className="preview-headline">
              Here&apos;s what a template <span>actually looks like</span>
            </h2>

            <div className="screenshot-wrapper">
              <div className="screenshot-glow"></div>
              <div className="screenshot-card">
                <img src="/images/script-preview.png" alt="Script Template Example" />
              </div>
            </div>

            <p className="preview-caption">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Hook, body, CTA — based on a top-performing video
            </p>
          </div>
        </div>
      </section>

      {/* Features - Hidden for now
      <section className="features">
        <div className="container">
          <div className="section-title">What You Actually Get</div>

          <div className="features-grid">
            <div className="feature-card">
              <h3><span className="feature-icon">📊</span> Your Marketing Strategy Report</h3>
              <p>In-depth analysis of your niche, target client, pain points, and messaging angles that convert. This is what separates you from people posting random content.</p>
            </div>

            <div className="feature-card">
              <h3><span className="feature-icon">📝</span> 5 Personalized Scripts/Week</h3>
              <p>Not generic ideas. Scripts built specifically for YOUR audience based on formats that already convert. Each includes hook, structure, CTA, and why it works.</p>
            </div>

            <div className="feature-card">
              <h3><span className="feature-icon">🎬</span> Any Format You Want</h3>
              <p>Talking head, voiceover, B-roll, or text carousel. Same strategy, your comfort zone. One-click switch between formats.</p>
            </div>

            <div className="feature-card">
              <h3><span className="feature-icon">✨</span> 5 Custom Generations</h3>
              <p>Have your own content ideas? We adapt them to your strategy and format them properly with all the hooks and CTAs.</p>
            </div>

            <div className="feature-card">
              <h3><span className="feature-icon">🎯</span> Zero Guesswork</h3>
              <p>Every piece includes montage tips, purpose explanation, and why this specific content matters for YOUR growth right now.</p>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Pricing */}
      <section className="pricing" id="pricing">
        <div className="container">
          <div className="section-title">Paid Early Access</div>
          <div className="price-box">
            <div className="price"><span className="price-old">$49</span>$29<span className="price-mo">/mo</span></div>
            <div className="price-period">early adopter price</div>

            <div className="process-steps">
              <div className="process-label">After you join:</div>
              <div className="process-step">
                <span className="process-num">1</span>
                <div>
                  <strong>Receive a Quick form</strong>
                  <span>Tell us about your niche &amp; product</span>
                </div>
              </div>
              <div className="process-step">
                <span className="process-num">2</span>
                <div>
                  <strong>Your strategy report</strong>
                  <span>Delivered within 48 hours to your inbox after you fill out the form</span>
                </div>
              </div>
              <div className="process-step">
                <span className="process-num">3</span>
                <div>
                  <strong>Weekly scripts to your inbox</strong>
                  <span>5 ready-to-film templates</span>
                </div>
              </div>
            </div>

            <p className="pricing-note">We&apos;re building the automated platform. Until it&apos;s ready, you get <strong>personal service</strong> — everything delivered straight to your inbox. Early members get first access when we launch.</p>

            <a href="#" className="cta-primary">Join Early Access</a>
            <p className="guarantee">7-day money back guarantee</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <div className="container">
          <div className="section-title">FAQ</div>

          <div className="faq-list">
            <details className="faq-item">
              <summary>What if I hate being on camera?</summary>
              <p>Every script works as voiceover, B-roll footage, or text carousel. You choose what fits your style.</p>
            </details>

            <details className="faq-item">
              <summary>How is this different from AI tools or content templates?</summary>
              <p>This isn&apos;t generic. We analyze YOUR niche and audience first, then create scripts based on proven content formats that already convert in your space.</p>
            </details>

            <details className="faq-item">
              <summary>How personalized is this really?</summary>
              <p>You fill out a detailed questionnaire about your niche, ideal client, and current positioning. Everything is built from that foundation — not copy-pasted templates.</p>
            </details>

            <details className="faq-item">
              <summary>What if the content doesn&apos;t work for me?</summary>
              <p>Cancel anytime. You keep the strategy report and all scripts. But if the content is built for your specific audience and based on proven formats, it works.</p>
            </details>

            <details className="faq-item">
              <summary>What&apos;s &quot;early access&quot; mean?</summary>
              <p>We&apos;re in pilot phase — scripts are personally crafted, not fully automated yet. That means more hands-on attention for you while we refine the system. You get better results, we get feedback. Win-win.</p>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}
