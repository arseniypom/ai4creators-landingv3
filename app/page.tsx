export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="eyebrow">For US-Based Experts</div>
          <h1>Stop guessing.<br /><span className="gradient-text">Get sales with content</span></h1>
          <p className="hero-sub">Get scripts built for YOUR audience — not random templates. Based on proven winners. Ready to film every week.</p>
          <a href="#pricing" className="cta-primary">Join Early Access — $29/mo</a>
          <p className="trust-line">Limited spots. Cancel anytime.</p>
        </div>
      </section>

      {/* Problem */}
      <section className="problem">
        <div className="container">
          <p className="problem-text">You post Reels. You try carousels. But <strong>generic content doesn&apos;t bring clients</strong> because it wasn&apos;t made for YOUR specific audience.</p>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="container">
          <div className="section-title">Here&apos;s The Difference</div>

          <div className="how-steps">
            <div className="how-step" data-number="01">
              <h3>We Analyze YOUR Market First</h3>
              <p>Deep dive into your niche, ideal client profile, their actual pain points, and buying triggers. Not guesswork — real strategy.</p>
            </div>

            <div className="how-step" data-number="02">
              <h3>You Get Scripts That Already Worked</h3>
              <p>5 content ideas per week based on proven formats that convert. Not made up from scratch — reverse-engineered from content that actually gets clients.</p>
            </div>

            <div className="how-step" data-number="03">
              <h3>Choose Your Format. We Handle The Rest.</h3>
              <p>Every script works as: Reels (talking head/voiceover/B-roll) OR Carousel. Hook, structure, CTA, montage tips — ready to execute.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
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

      {/* Pricing */}
      <section className="pricing" id="pricing">
        <div className="container">
          <div className="section-title">Founding Member Access</div>
          <div className="price-box">
            <div className="price"><span className="price-old">$49</span>$29</div>
            <div className="price-period">per month — locked in</div>
            <ul className="price-benefits">
              <li>Personal strategy report<span className="benefit-sub">right after onboarding</span></li>
              <li>5 converting reel templates<span className="benefit-sub">weekly</span></li>
              <li>Direct feedback during pilot phase<span className="benefit-sub">you shape the product</span></li>
            </ul>
            <a href="#" className="cta-primary">Join Early Access</a>
            <p className="guarantee">Cancel anytime. Keep all materials.</p>
            <p className="transparency-note">You&apos;re joining before full automation — which means more personal attention while we build.</p>
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
