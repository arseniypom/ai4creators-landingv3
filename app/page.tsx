export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="eyebrow">For US-Based Experts</div>
          <h1>Stop guessing what to post.<br /><span className="gradient-text">Start getting sales.</span></h1>
          <p className="hero-sub">Get scripts built for YOUR audience based on proven winners. Ready to film every week.</p>
          <a href="#pricing" className="cta-primary">Join Early Access — $29/mo</a>
          <p className="trust-line">Be one of the first 50 clients to try</p>
        </div>
      </section>

      {/* Problem */}
      <section className="problem">
        <div className="container">
          <p className="problem-text">You post Reels and carousels. But <strong>generic content doesn&apos;t bring clients</strong> because it wasn&apos;t made for YOUR specific audience.</p>
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
              <p>5 ready-to-use content scripts based on formats that already convert and tailored to YOUR specific niche and audience (that&apos;s why we need to make the analysis first).</p>
            </div>

            <div className="how-step" data-number="03">
              <h3>Choose Your Format</h3>
              <p>Every script works as: Reels (talking head/voiceover/B-roll) OR Carousel. Hook, structure, CTA, editing tips — ready to film.</p>
            </div>
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
            <div className="price"><span className="price-old">$49</span>$29</div>
            <div className="price-period">per month — locked in forever</div>

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

            <a href="#" className="cta-primary">Join Early Access</a>
            <p className="guarantee">Cancel anytime. Keep everything.</p>
            <p className="transparency-note">You&apos;re getting personal attention, not an automated tool — that&apos;s the pilot advantage.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <div className="container">
          <div className="section-title">Questions</div>

          <div className="faq-list">
            <div className="faq-item">
              <h3>What if I hate being on camera?</h3>
              <p>Every script works as voiceover, B-roll footage, or text carousel. You choose what fits your style.</p>
            </div>

            <div className="faq-item">
              <h3>How is this different from AI tools or content templates?</h3>
              <p>This isn&apos;t generic. We analyze YOUR niche and audience first, then create scripts based on proven content formats that already convert in your space.</p>
            </div>

            <div className="faq-item">
              <h3>How personalized is this really?</h3>
              <p>You fill out a detailed questionnaire about your niche, ideal client, and current positioning. Everything is built from that foundation — not copy-pasted templates.</p>
            </div>

            <div className="faq-item">
              <h3>What if the content doesn&apos;t work for me?</h3>
              <p>Cancel anytime. You keep the strategy report and all scripts. But if the content is built for your specific audience and based on proven formats, it works.</p>
            </div>

            <div className="faq-item">
              <h3>What&apos;s &quot;early access&quot; mean?</h3>
              <p>We&apos;re in pilot phase — scripts are personally crafted, not fully automated yet. That means more hands-on attention for you while we refine the system. You get better results, we get feedback. Win-win.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
