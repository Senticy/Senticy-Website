import styles from './ServicesSection.module.css'

const services = [
  { icon: '🤖', title: 'AI Agents', desc: 'Autonomous agents that handle intake, billing, compliance — 24/7 without human intervention.' },
  { icon: '🛡️', title: 'Cybersecurity', desc: 'AI-powered threat detection, zero-trust architecture, and real-time incident response.' },
  { icon: '☁️', title: 'Cloud & Infra', desc: '99.999% uptime cloud infrastructure with secure remote access and disaster recovery.' },
  { icon: '📞', title: 'IT Help Desk', desc: 'Round-the-clock support with sub-5-minute response times and proactive monitoring.' },
  { icon: '⚖️', title: 'Legal Compliance', desc: 'ABA, HIPAA, and SOC2 compliance with automated audit trails and policy enforcement.' },
  { icon: '💾', title: 'Data Recovery', desc: 'Automated encrypted backups with point-in-time recovery. Your data is never at risk.' },
]

export default function ServicesSection() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>What We Do</p>
        <h2 className={styles.title}>Everything Your Firm Needs.<br /><span>Nothing You Don&apos;t.</span></h2>
        <div className={styles.grid}>
          {services.map((s, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.icon}>{s.icon}</div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
