import styles from './StatsSection.module.css'

const stats = [
  { num: '3×', label: 'Cost savings vs in-house IT' },
  { num: '< 5min', label: 'Average response time' },
  { num: '99.9%', label: 'Uptime guarantee' },
  { num: '0', label: 'Contracts or lock-ins' },
]

export default function StatsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {stats.map((s, i) => (
          <div key={i} className={styles.stat}>
            <div className={styles.num}>{s.num}</div>
            <div className={styles.label}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
