'use client';

import posthog from 'posthog-js';
import styles from './FloatingNav.module.css';

export function FloatingNav() {
  const handleCtaClick = () => {
    posthog.capture('cta_clicked', {
      location: 'floating_nav',
      cta_text: 'Join',
    });
  };

  return (
    <nav className={styles.nav}>
      <span className={styles.brand}>InstaGrow</span>
      <a href="#pricing" className={styles.cta} onClick={handleCtaClick}>Join</a>
    </nav>
  );
}
