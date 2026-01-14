<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stop Creating Content That Doesn't Convert</title>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Space+Mono:wght@700&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --bg: #0a0a0a;
            --text: #f5f5f5;
            --accent: #00ff88;
            --accent-dark: #00cc6a;
            --muted: #666;
            --card-bg: #151515;
        }

        body {
            font-family: 'DM Sans', sans-serif;
            background: var(--bg);
            color: var(--text);
            line-height: 1.6;
            overflow-x: hidden;
        }

        .container {
            max-width: 680px;
            margin: 0 auto;
            padding: 0 24px;
        }

        /* Hero */
        .hero {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 80px 0 60px;
            position: relative;
        }

        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 600px;
            height: 600px;
            background: radial-gradient(circle, rgba(0,255,136,0.08) 0%, transparent 70%);
            pointer-events: none;
            animation: pulse 4s ease-in-out infinite;
        }

        @keyframes pulse {
            0%, 100% { opacity: 0.3; transform: translateX(-50%) scale(1); }
            50% { opacity: 0.5; transform: translateX(-50%) scale(1.1); }
        }

        .eyebrow {
            font-family: 'Space Mono', monospace;
            font-size: 13px;
            letter-spacing: 2px;
            text-transform: uppercase;
            color: var(--accent);
            margin-bottom: 24px;
            animation: slideDown 0.6s ease-out;
        }

        @keyframes slideDown {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        h1 {
            font-size: 52px;
            line-height: 1.1;
            font-weight: 700;
            margin-bottom: 24px;
            animation: slideDown 0.6s ease-out 0.1s both;
        }

        .hero-sub {
            font-size: 20px;
            color: #b0b0b0;
            margin-bottom: 48px;
            max-width: 540px;
            animation: slideDown 0.6s ease-out 0.2s both;
        }

        .cta-primary {
            display: inline-block;
            padding: 18px 40px;
            background: var(--accent);
            color: var(--bg);
            font-size: 18px;
            font-weight: 700;
            text-decoration: none;
            border-radius: 8px;
            transition: all 0.3s ease;
            animation: slideDown 0.6s ease-out 0.3s both;
            position: relative;
            overflow: hidden;
        }

        .cta-primary::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            border-radius: 50%;
            background: rgba(255,255,255,0.2);
            transform: translate(-50%, -50%);
            transition: width 0.6s, height 0.6s;
        }

        .cta-primary:hover::before {
            width: 300px;
            height: 300px;
        }

        .cta-primary:hover {
            background: var(--accent-dark);
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(0,255,136,0.3);
        }

        .trust-line {
            margin-top: 24px;
            font-size: 14px;
            color: var(--muted);
            animation: slideDown 0.6s ease-out 0.4s both;
        }


        /* Problem Section */
        .problem {
            padding: 80px 0;
            border-top: 1px solid #222;
        }

        .problem-text {
            font-size: 28px;
            line-height: 1.5;
            color: #999;
            max-width: 600px;
        }

        .problem-text strong {
            color: var(--text);
            font-weight: 600;
        }

        /* How It Works */
        .how-it-works {
            padding: 80px 0;
            border-top: 1px solid #222;
        }

        .section-title {
            font-size: 14px;
            font-family: 'Space Mono', monospace;
            letter-spacing: 2px;
            text-transform: uppercase;
            color: var(--accent);
            margin-bottom: 40px;
        }

        .how-step {
            margin-bottom: 48px;
            padding-left: 60px;
            position: relative;
        }

        .how-step::before {
            content: attr(data-number);
            position: absolute;
            left: 0;
            top: -4px;
            font-family: 'Space Mono', monospace;
            font-size: 36px;
            font-weight: 700;
            color: var(--accent);
            opacity: 0.3;
        }

        .how-step h3 {
            font-size: 22px;
            margin-bottom: 12px;
        }

        .how-step p {
            color: #999;
            font-size: 16px;
        }

        /* Features */
        .features {
            padding: 80px 0;
            border-top: 1px solid #222;
        }

        .feature-card {
            background: var(--card-bg);
            border: 1px solid #222;
            border-radius: 12px;
            padding: 32px;
            margin-bottom: 20px;
            transition: all 0.3s ease;
        }

        .feature-card:hover {
            border-color: var(--accent);
            transform: translateY(-4px);
            box-shadow: 0 8px 32px rgba(0,255,136,0.1);
        }

        .feature-card h3 {
            font-size: 20px;
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .feature-icon {
            font-size: 24px;
        }

        .feature-card p {
            color: #999;
            font-size: 15px;
        }

        /* Pricing */
        .pricing {
            padding: 80px 0;
            border-top: 1px solid #222;
            text-align: center;
        }

        .price-box {
            background: var(--card-bg);
            border: 2px solid var(--accent);
            border-radius: 16px;
            padding: 48px 40px;
            max-width: 480px;
            margin: 40px auto;
        }

        .price {
            font-size: 64px;
            font-weight: 700;
            color: var(--accent);
            line-height: 1;
            margin-bottom: 8px;
        }

        .price-period {
            font-size: 18px;
            color: var(--muted);
            margin-bottom: 32px;
        }

        .guarantee {
            font-size: 14px;
            color: var(--muted);
            margin-top: 24px;
        }

        /* FAQ */
        .faq {
            padding: 80px 0 120px;
            border-top: 1px solid #222;
        }

        .faq-item {
            margin-bottom: 32px;
        }

        .faq-item h3 {
            font-size: 18px;
            margin-bottom: 12px;
            color: var(--text);
        }

        .faq-item p {
            color: #999;
            font-size: 15px;
            line-height: 1.7;
        }

        @media (max-width: 768px) {
            h1 {
                font-size: 36px;
            }

            .hero-sub {
                font-size: 18px;
            }

            .problem-text {
                font-size: 22px;
            }

            .price {
                font-size: 48px;
            }
        }
    </style>
</head>
<body>

<!-- Hero -->
    <section class="hero">
        <div class="container">
            <div class="eyebrow">For US-Based Experts</div>
            <h1>Stop Creating Content That Gets Views But Zero Clients</h1>
            <p class="hero-sub">Get scripts built for YOUR audience — not random templates. Based on proven winners. Ready to film every week.</p>
            <a href="#pricing" class="cta-primary">Start Week 1 — $29</a>
            <p class="trust-line">Cancel anytime. No BS.</p>
        </div>
    </section>

    <!-- Problem -->
    <section class="problem">
        <div class="container">
            <p class="problem-text">You post Reels. You try carousels. But <strong>generic content advice doesn't bring clients</strong> because it wasn't made for YOUR specific audience.</p>
        </div>
    </section>

    <!-- How It Works -->
    <section class="how-it-works">
        <div class="container">
            <div class="section-title">Here's The Difference</div>
            
            <div class="how-step" data-number="01">
                <h3>We Analyze YOUR Market First</h3>
                <p>Deep dive into your niche, ideal client profile, their actual pain points, and buying triggers. Not guesswork — real strategy.</p>
            </div>

            <div class="how-step" data-number="02">
                <h3>You Get Scripts That Already Worked</h3>
                <p>5 content ideas per week based on proven formats that convert. Not made up from scratch — reverse-engineered from content that actually gets clients.</p>
            </div>

            <div class="how-step" data-number="03">
                <h3>Choose Your Format. We Handle The Rest.</h3>
                <p>Every script works as: Reels (talking head/voiceover/B-roll) OR Carousel. Hook, structure, CTA, montage tips — ready to execute.</p>
            </div>
        </div>
    </section>

    <!-- Features -->
    <section class="features">
        <div class="container">
            <div class="section-title">What You Actually Get</div>

            <div class="feature-card">
                <h3><span class="feature-icon">📊</span> Your Marketing Strategy Report</h3>
                <p>In-depth analysis of your niche, target client, pain points, and messaging angles that convert. This is what separates you from people posting random content.</p>
            </div>

            <div class="feature-card">
                <h3><span class="feature-icon">📝</span> 5 Personalized Scripts/Week</h3>
                <p>Not generic ideas. Scripts built specifically for YOUR audience based on formats that already convert. Each includes hook, structure, CTA, and why it works.</p>
            </div>

            <div class="feature-card">
                <h3><span class="feature-icon">🎬</span> Any Format You Want</h3>
                <p>Talking head, voiceover, B-roll, or text carousel. Same strategy, your comfort zone. One-click switch between formats.</p>
            </div>

            <div class="feature-card">
                <h3><span class="feature-icon">✨</span> 5 Custom Generations</h3>
                <p>Have your own content ideas? We adapt them to your strategy and format them properly with all the hooks and CTAs.</p>
            </div>

            <div class="feature-card">
                <h3><span class="feature-icon">🎯</span> Zero Guesswork</h3>
                <p>Every piece includes montage tips, purpose explanation, and why this specific content matters for YOUR growth right now.</p>
            </div>
        </div>
    </section>


    <!-- Pricing -->
    <section class="pricing" id="pricing">
        <div class="container">
            <div class="section-title">Start Today</div>
            <div class="price-box">
                <div class="price">$29</div>
                <div class="price-period">First Week</div>
                <a href="#" class="cta-primary">Get Your Strategy + Week 1</a>
                <p class="guarantee">Then $49/week. Cancel anytime. Keep all materials.</p>
            </div>
        </div>
    </section>

    <!-- FAQ -->
    <section class="faq">
        <div class="container">
            <div class="section-title">Questions</div>

            <div class="faq-item">
                <h3>What if I hate being on camera?</h3>
                <p>Every script works as voiceover, B-roll footage, or text carousel. You choose what fits your style.</p>
            </div>

            <div class="faq-item">
                <h3>How is this different from AI tools or content templates?</h3>
                <p>This isn't generic. We analyze YOUR niche and audience first, then create scripts based on proven content formats that already convert in your space.</p>
            </div>

            <div class="faq-item">
                <h3>How personalized is this really?</h3>
                <p>You fill out a detailed questionnaire about your niche, ideal client, and current positioning. Everything is built from that foundation — not copy-pasted templates.</p>
            </div>

            <div class="faq-item">
                <h3>What if the content doesn't work for me?</h3>
                <p>Cancel anytime. You keep the strategy report and all scripts. But if the content is built for your specific audience and based on proven formats, it works.</p>
            </div>
        </div>
    </section>

</body>
</html