import styles from './CybersecuritySection.module.css'

const threats = [
  { type: 'Ransomware Attack', status: 'BLOCKED', time: '0.3s' },
  { type: 'Phishing Attempt', status: 'BLOCKED', time: '0.1s' },
  { type: 'Unauthorized Access', status: 'BLOCKED', time: '0.8s' },
  { type: 'Data Exfiltration', status: 'BLOCKED', time: '0.2s' },
]

export default function CybersecuritySection() {
  return (
    <section id="security" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <p className={styles.eyebrow}>Cybersecurity</p>
          <h2 className={styles.title}>AI That Fights Back<br /><span>Before You Even Know.</span></h2>
          <p className={styles.desc}>Our AI security layer monitors every packet, every login, every file access — in real time. Threats neutralized in milliseconds.</p>
          <ul className={styles.features}>
            <li><span className={styles.check}>✓</span> Zero-trust network architecture</li>
            <li><span className={styles.check}>✓</span> AI-powered anomaly detection</li>
            <li><span className={styles.check}>✓</span> Automated threat isolation</li>
            <li><span className={styles.check}>✓</span> ABA &amp; HIPAA compliance built in</li>
            <li><span className={styles.check}>✓</span> Dark web monitoring 24/7</li>
          </ul>
        </div>
        <div className={styles.right}>
          <div className={styles.terminal}>
            <div className={styles.terminalHeader}>
              <span className={styles.dot} style={{background:'#ff5f57'}} />
              <span className={styles.dot} style={{background:'#febc2e'}} />
              <span className={styles.dot} style={{background:'#28c840'}} />
              <span className={styles.termTitle}>SentiCy Threat Monitor — Live</span>
            </div>
            <div className={styles.terminalBody}>
              <p className={styles.termLine}><span className={styles.prompt}>▶</span> System online. AI monitoring active.</p>
              <p className={styles.termLine}><span className={styles.prompt}>▶</span> 247 endpoints protected</p>
              <p className={styles.termLine}><span className={styles.prompt}>▶</span> Last scan: 0.4 seconds ago</p>
              <div className={styles.divider} />
              {threats.map((t, i) => (
                <div key={i} className={styles.threatRow}>
                  <span className={styles.threatType}>{t.type}</span>
                  <span className={styles.blocked}>{t.status}</span>
                  <span className={styles.time}>{t.time}</span>
                </div>
              ))}
              <div className={styles.divider} />
              <p className={styles.termLine} style={{color:'#09A3B2'}}><span className={styles.prompt}>✓</span> All systems secure. 0 active threats.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
