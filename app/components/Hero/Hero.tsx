import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.eyebrow}>Your AI co-pilot for Instagram sales</div>
        <h1 className={styles.title}>
          Stop guessing
          <br />
          what to post.
          <br />
          <span className={styles.gradientText}>Create reels that sell.</span>
        </h1>
        <p className={styles.heroSub}>
          Get scripts built for YOUR audience and offer based on proven formats.
          Ready to film every week.
        </p>
        <a href="#pricing" className={styles.ctaPrimary}>
          Join Early Access — $29/mo
        </a>
        <p className={styles.trustLine}>Be one of the first 50 creators to try</p>
      </div>
    </section>
  );
}
