import styles from './AIAgentsSection.module.css'

const agents = [
  { name: 'Intake Agent', task: 'Automatically onboards new clients, collects documents, runs conflict checks', saving: '40 hrs/mo' },
  { name: 'Compliance Agent', task: 'Monitors regulatory changes, updates policies, generates audit reports automatically', saving: '25 hrs/mo' },
  { name: 'Threat Detection Agent', task: 'Scans network 24/7 for anomalies, isolates threats, alerts your team in milliseconds', saving: '60 hrs/mo' },
  { name: 'Help Desk Agent', task: 'Resolves tier-1 IT tickets autonomously — password resets, access requests, software installs', saving: '50 hrs/mo' },
  { name: 'Billing Agent', task: 'Tracks time entries, generates invoices, follows up on outstanding payments automatically', saving: '20 hrs/mo' },
  { name: 'Backup Agent', task: 'Verifies backups daily, tests restore points, reports anomalies before they become disasters', saving: '15 hrs/mo' },
]

export default function AIAgentsSection() {
  return (
    <section id="ai-agents" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>AI Automation</p>
        <h2 className={styles.title}>Meet Your AI Workforce.<br /><span>Always On. Never Wrong.</span></h2>
        <p className={styles.sub}>Each agent is purpose-built for a single task. Together they replace 3–5 full-time employees at a fraction of the cost.</p>
        <div className={styles.grid}>
          {agents.map((a, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardTop}><div className={styles.agentDot} /><span className={styles.status}>ACTIVE</span></div>
              <h3 className={styles.agentName}>{a.name}</h3>
              <p className={styles.agentTask}>{a.task}</p>
              <div className={styles.saving}><span className={styles.savingLabel}>Saves your firm</span><span className={styles.savingValue}>{a.saving}</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
