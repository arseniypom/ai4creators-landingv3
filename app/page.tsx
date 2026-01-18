export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="eyebrow">For US-Based Experts</div>
          <h1>Stop Creating Content That Gets Views But Zero Clients</h1>
          <p className="hero-sub">Get scripts built for YOUR audience — not random templates. Based on proven winners. Ready to film every week.</p>
          <a href="#pricing" className="cta-primary">Start Week 1 — $29</a>
          <p className="trust-line">Cancel anytime. No BS.</p>
        </div>
      </section>

      {/* Problem */}
      <section className="problem">
        <div className="container">
          <p className="problem-text">You post Reels. You try carousels. But <strong>generic content advice doesn&apos;t bring clients</strong> because it wasn&apos;t made for YOUR specific audience.</p>
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
          <div className="section-title">Start Today</div>
          <div className="price-box">
            <div className="price">$29</div>
            <div className="price-period">First Week</div>
            <a href="#" className="cta-primary">Get Your Strategy + Week 1</a>
            <p className="guarantee">Then $49/week. Cancel anytime. Keep all materials.</p>
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
          </div>
        </div>
      </section>
    </>
  );
}
