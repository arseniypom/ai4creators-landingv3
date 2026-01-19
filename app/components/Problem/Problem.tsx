import styles from "./Problem.module.css";

export function Problem() {
  return (
    <section className={styles.problem}>
      <div className={styles.container}>
        <p className={styles.problemText}>
          You post consistently. But consistency won&apos;t bring clients if{" "}
          <strong>your content is missing the conversion structure</strong>
        </p>
      </div>
    </section>
  );
}
