import styles from "./HowItWorks.module.css";

export function HowItWorks() {
  return (
    <section className={styles.howItWorks}>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>How it works</div>

        <div className={styles.howSteps}>
          <div className={styles.howStep} data-number="01">
            <h3>We Analyze Your Market First</h3>
            <p className={styles.stepSubtitle}>
              Answer a short questionnaire → get a clear marketing report
            </p>
            <p>
              Niche, ideal client, pain points, buying triggers. Not guesswork —
              real strategy.
            </p>
          </div>

          <div className={styles.howStep} data-number="02">
            <h3>You Get Proven Scripts</h3>
            <p>
              Every week you get 5 proven Reels templates — the same formats
              other creators used to get clients and thousands in sales. Just
              plug in your offer — the structure is already built to convert.
            </p>
          </div>

          <div className={styles.howStep} data-number="03">
            <h3>Tailor It in One Click</h3>
            <p>
              Pick any template and tailor it to your product or service in one
              click. Hook, main points, CTA — instantly rewritten in your voice
              for your exact audience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
