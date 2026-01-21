import styles from "./Footer.module.css";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <span className={styles.logo}>InstaGrow</span>
          <p className={styles.tagline}>AI-powered scripts for Instagram creators</p>
        </div>

        <nav className={styles.links}>
          <a href="#pricing">Pricing</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#faq">FAQ</a>
        </nav>

        <div className={styles.contact}>
          <a href="mailto:team@insta-grow.com" className={styles.email}>
            team@insta-grow.com
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>&copy; {currentYear} InstaGrow. All rights reserved.</p>
      </div>
    </footer>
  );
}
