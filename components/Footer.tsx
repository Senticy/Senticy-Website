import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.logo}>SentiCy</span>
          <p className={styles.tagline}>AI-Powered IT &amp; Cybersecurity for Law Firms</p>
        </div>
        <div className={styles.links}>
          <a href="#ai-agents">AI Agents</a>
          <a href="#security">Cybersecurity</a>
          <a href="#services">Services</a>
          <a href="https://www.instagram.com/senticyitsolutions/">Instagram</a>
        </div>
        <div className={styles.contact}>
          <p>Info@Senticy.com</p>
          <p>(424) 302-3353</p>
        </div>
      </div>
      <div className={styles.bottom}><p>© 2025 SentiCy. All rights reserved.</p></div>
    </footer>
  )
}
