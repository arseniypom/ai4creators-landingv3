import styles from "./VSComparison.module.css";

export function VSComparison() {
  return (
    <section className={styles.vsSection}>
      <div className={styles.container}>
        <div className={styles.vsContainer}>
          {/* Without */}
          <div className={`${styles.vsCard} ${styles.vsWithout}`}>
            <div className={styles.vsLabel}>
              Without strategy
              <br />
              you get <strong>likes</strong>
            </div>
            <div className={styles.vsMetric}>
              <span className={styles.vsIcon}>❤️</span>
              <span className={styles.vsNumber}>2,847</span>
            </div>
          </div>

          {/* Arrow */}
          <div className={styles.vsArrow}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </div>

          {/* With */}
          <div className={`${styles.vsCard} ${styles.vsWith}`}>
            <div className={styles.vsLabel}>
              With strategy
              <br />
              you get <strong>sales</strong>
            </div>
            <div className={styles.vsMetric}>
              <span className={styles.vsIcon}>💰</span>
              <span className={styles.vsNumber}>$4,200</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
