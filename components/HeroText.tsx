'use client'
import styles from './HeroText.module.css'

export default function HeroText() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.badge}>AI-Powered IT &amp; Cybersecurity</div>
      <h1 className={styles.headline}>
        Your Firm Runs on<br />
        <span className={styles.gradient}>Autonomous AI.</span><br />
        We Built It.
      </h1>
      <p className={styles.sub}>Replace expensive human overhead with intelligent AI agents. Enterprise-grade cybersecurity that never sleeps.</p>
      <div className={styles.ctas}>
        <a href="#ai-agents" className={styles.btnPrimary}>See the AI Agents</a>
        <a href="#contact" className={styles.btnSecondary}>Book a Free Audit</a>
      </div>
      <div className={styles.nodes}>
        {['AI Agents', 'Cybersecurity', 'Cloud Infra', '24/7 Support', 'Compliance', 'Data Recovery'].map((label, i) => (
          <div key={i} className={styles.node} style={{ animationDelay: `${i * 0.3}s` }}>
            <span className={styles.dot} />{label}
          </div>
        ))}
      </div>
    </div>
  )
}
