import styles from "./Pricing.module.css";

export function Pricing() {
  return (
    <section className={styles.pricing} id="pricing">
      <div className={styles.container}>
        <div className={styles.sectionTitle}>Paid Early Access</div>
        <div className={styles.priceBox}>
          <div className={styles.price}>
            <span className={styles.priceOld}>$49</span>$29
            <span className={styles.priceMo}>/mo</span>
          </div>
          <div className={styles.pricePeriod}>early adopter price</div>

          <div className={styles.processSteps}>
            <div className={styles.processLabel}>After you join:</div>
            <div className={styles.processStep}>
              <span className={styles.processNum}>1</span>
              <div>
                <strong>Receive a Quick form</strong>
                <span>Tell us about your niche &amp; product</span>
              </div>
            </div>
            <div className={styles.processStep}>
              <span className={styles.processNum}>2</span>
              <div>
                <strong>Your strategy report</strong>
                <span>
                  Delivered within 48 hours to your inbox after you fill out the
                  form
                </span>
              </div>
            </div>
            <div className={styles.processStep}>
              <span className={styles.processNum}>3</span>
              <div>
                <strong>Weekly scripts to your inbox</strong>
                <span>5 ready-to-film templates</span>
              </div>
            </div>
          </div>

          <p className={styles.pricingNote}>
            We&apos;re building the automated platform. Until it&apos;s ready,
            you get <strong>personal service</strong> — everything delivered
            straight to your inbox. Early members keep this price forever + get
            first access when we launch.
          </p>

          <a href="#pricing" className={styles.ctaPrimary}>
            Join Early Access
          </a>
          <p className={styles.guarantee}>7-day money back guarantee</p>
        </div>
      </div>
    </section>
  );
}
