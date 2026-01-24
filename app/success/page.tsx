import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Welcome to InstaGrow! | Payment Successful',
  description: 'Your payment was successful. Welcome to InstaGrow Early Access.',
};

export default function SuccessPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.iconWrapper}>
          <svg
            className={styles.icon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>

        <h1 className={styles.title}>Welcome to InstaGrow!</h1>
        <p className={styles.subtitle}>Your payment was successful</p>

        <div className={styles.nextSteps}>
          <h2 className={styles.stepsTitle}>What happens next?</h2>

          <div className={styles.step}>
            <span className={styles.stepNum}>1</span>
            <div className={styles.stepContent}>
              <strong>Check your inbox</strong>
              <span>
                Within the next few minutes, you&apos;ll receive a welcome email
                with a quick form to fill out.
              </span>
              <p className={styles.spamTip}>
                📬 Don&apos;t forget to check your spam folder!
              </p>
            </div>
          </div>

          <div className={styles.step}>
            <span className={styles.stepNum}>2</span>
            <div className={styles.stepContent}>
              <strong>Tell us about your niche</strong>
              <span>
                Complete the form so we can create your personalized strategy
                report.
              </span>
            </div>
          </div>

          <div className={styles.step}>
            <span className={styles.stepNum}>3</span>
            <div className={styles.stepContent}>
              <strong>Receive your strategy</strong>
              <span>
                Your custom strategy report will be delivered within 48 hours
                after you submit the form.
              </span>
            </div>
          </div>
        </div>

        <p className={styles.note}>
          Didn&apos;t receive an email? Check your spam folder or contact us at <br />
          <a href="mailto:team@insta-grow.com.com" className={styles.link}>
            team@insta-grow.com
          </a>
        </p>

        <Link href="/" className={styles.backLink}>
          Back to homepage
        </Link>
      </div>
    </main>
  );
}
