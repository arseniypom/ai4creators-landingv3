import styles from './FloatingNav.module.css';

export function FloatingNav() {
  return (
    <nav className={styles.nav}>
      <span className={styles.brand}>InstaGrow</span>
      <a href="#pricing" className={styles.cta}>Join</a>
    </nav>
  );
}
