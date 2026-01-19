import styles from "./FAQ.module.css";

export function FAQ() {
  return (
    <section className={styles.faq}>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>FAQ</div>

        <div className={styles.faqList}>
          <details className={styles.faqItem}>
            <summary>What if I hate being on camera?</summary>
            <p>
              Every script works as voiceover, B-roll footage, or text carousel.
              You choose what fits your style.
            </p>
          </details>

          <details className={styles.faqItem}>
            <summary>
              How is this different from AI tools or content templates?
            </summary>
            <p>
              This isn&apos;t generic. We analyze YOUR niche and audience first,
              then create scripts based on proven content formats that already
              convert in your space.
            </p>
          </details>

          <details className={styles.faqItem}>
            <summary>How personalized is this really?</summary>
            <p>
              You fill out a detailed questionnaire about your niche, ideal
              client, and current positioning. Everything is built from that
              foundation — not copy-pasted templates.
            </p>
          </details>

          <details className={styles.faqItem}>
            <summary>What if the content doesn&apos;t work for me?</summary>
            <p>
              Cancel anytime. You keep the strategy report and all scripts. But
              if the content is built for your specific audience and based on
              proven formats, it works.
            </p>
          </details>

          <details className={styles.faqItem}>
            <summary>What&apos;s &quot;early access&quot; mean?</summary>
            <p>
              We&apos;re in pilot phase — scripts are personally crafted, not
              fully automated yet. That means more hands-on attention for you
              while we refine the system. You get better results, we get
              feedback. Win-win.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
