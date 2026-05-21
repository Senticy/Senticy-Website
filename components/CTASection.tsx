import styles from './CTASection.module.css'

export default function CTASection() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Get Started</p>
        <h2 className={styles.title}>Ready to Run on AI?</h2>
        <p className={styles.sub}>Book a free IT &amp; security audit. We&apos;ll show you exactly how much you&apos;re overpaying and what AI can replace.</p>
        <div className={styles.ctas}>
          <a href="https://www.senticy.com/appointments" className={styles.btnPrimary}>Book a Free AI Audit</a>
          <a href="tel:4243023353" className={styles.btnSecondary}>Call (424) 302-3353</a>
        </div>
        <p className={styles.note}>No contracts. No hidden fees. No lock-in.</p>
      </div>
    </section>
  )
}
