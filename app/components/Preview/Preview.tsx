import Image from "next/image";
import styles from "./Preview.module.css";

export function Preview() {
  return (
    <section className={styles.previewSection}>
      <div className={styles.container}>
        <div className={styles.previewContent}>
          <div className={styles.previewLabel}>Sneak Peek</div>
          <h2 className={styles.previewHeadline}>
            Here&apos;s what a template <span>actually looks like</span>
          </h2>

          <div className={styles.screenshotWrapper}>
            <div className={styles.screenshotGlow}></div>
            <div className={styles.screenshotCard}>
              <Image
                src="/images/script-preview.png"
                alt="Script Template Example"
                width={680}
                height={510}
                priority
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>

          <p className={styles.previewCaption}>
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
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Hook, body, CTA — based on a top-performing video
          </p>
        </div>
      </div>
    </section>
  );
}
