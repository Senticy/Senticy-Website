'use client'
import { useRef, useEffect, useState } from 'react'
import styles from './ScrollStory.module.css'

interface Scene {
  id: string
  progress: number
  eyebrow: string
  headline: string
  sub: string
  stat?: { num: string, label: string }[]
}

const scenes: Scene[] = [
  { id:'chaos', progress:0, eyebrow:'Sound familiar?', headline:'Your team is\ndrowning.', sub:'Tickets, invoices, compliance alerts, security warnings — all landing on humans who can only do so much.', stat:[{num:'60%',label:'of IT budget spent on repetitive tasks'},{num:'23%',label:'average human error rate'}] },
  { id:'cost', progress:0.25, eyebrow:'The real cost', headline:'$180,000/year.\nFor tasks AI does\nin seconds.', sub:'Every support ticket, every password reset, every compliance report — your team spends billable hours on work that should be automated.', stat:[{num:'3×',label:'cheaper with AI agents'},{num:'0.3s',label:'average AI response time'}] },
  { id:'agents', progress:0.45, eyebrow:'The shift', headline:'Meet your new\nAI workforce.', sub:'One by one, intelligent agents take over. Intake. Compliance. Help Desk. Billing. Each one purpose-built, always on, never wrong.', stat:[{num:'6',label:'AI agents deployed'},{num:'210hrs',label:'saved per month'}] },
  { id:'transform', progress:0.62, eyebrow:'The transformation', headline:'Chaos becomes\ncalm. Instantly.', sub:'Your firm runs on autopilot. Your team focuses on what matters — serving clients, growing the practice, practicing law.' },
  { id:'shield', progress:0.75, eyebrow:'Always protected', headline:'And while AI runs\nyour firm — we\nguard it.', sub:'Every endpoint. Every login. Every packet. Our AI security layer neutralizes threats before your team even sees them.', stat:[{num:'< 0.3s',label:'threat neutralization time'},{num:'99.9%',label:'uptime guaranteed'}] },
  { id:'cta', progress:0.88, eyebrow:'Your firm. Fully autonomous.', headline:'Ready to free\nyour team?', sub:"Book a free AI audit. We'll show you exactly what we can automate and how much you'll save." },
]

export default function ScrollStory({ onScroll }: { onScroll: (p: number) => void }) {
  const [activeScene, setActiveScene] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight
      const progress = Math.min(1, Math.max(0, window.scrollY / maxScroll))
      onScroll(progress)
      let active = 0
      for (let i = 0; i < scenes.length; i++) { if (progress >= scenes[i].progress) active = i }
      setActiveScene(active)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [onScroll])

  const scene = scenes[activeScene]

  return (
    <>
      <div style={{ height: '700vh', position: 'relative' }}>
        <div className={styles.sticky}>
          <nav className={styles.nav}>
            <span className={styles.logo}>SentiCy</span>
            <div className={styles.navLinks}>
              <a href="#services">AI Agents</a>
              <a href="#services">Cybersecurity</a>
              <a href="#services">Services</a>
            </div>
            <a href="tel:4243023353" className={styles.navCta}>Speak with an Expert</a>
          </nav>
          <div className={styles.sceneText} key={activeScene}>
            <p className={styles.eyebrow}>{scene.eyebrow}</p>
            <h1 className={styles.headline}>
              {scene.headline.split('\n').map((line, i) => (<span key={i}>{line}<br /></span>))}
            </h1>
            <p className={styles.sub}>{scene.sub}</p>
            {scene.stat && (
              <div className={styles.stats}>
                {scene.stat.map((s, i) => (
                  <div key={i} className={styles.stat}>
                    <div className={styles.statNum}>{s.num}</div>
                    <div className={styles.statLabel}>{s.label}</div>
                  </div>
                ))}
              </div>
            )}
            {scene.id === 'cta' && (
              <div className={styles.ctaBtns}>
                <a href="https://www.senticy.com/appointments" className={styles.btnPrimary}>Book a Free AI Audit</a>
                <a href="tel:4243023353" className={styles.btnSecondary}>Call (424) 302-3353</a>
              </div>
            )}
          </div>
          <div className={styles.indicators}>
            {scenes.map((s, i) => (<div key={i} className={`${styles.dot} ${i === activeScene ? styles.dotActive : ''}`} />))}
          </div>
          {activeScene === 0 && (
            <div className={styles.scrollHint}>
              <div className={styles.scrollLine} />
              <span>scroll</span>
            </div>
          )}
        </div>
      </div>
      <div style={{ position: 'relative', zIndex: 10, background: '#010D12' }}>
        <section id="services" style={{ padding: '120px 48px' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <p style={{ fontSize:'11px', letterSpacing:'4px', textTransform:'uppercase', color:'#09A3B2', textAlign:'center', marginBottom:'16px' }}>Full Service Stack</p>
            <h2 style={{ fontSize:'clamp(32px,4vw,52px)', fontWeight:700, color:'#fff', textAlign:'center', marginBottom:'72px', lineHeight:1.2 }}>
              Everything Your Firm Needs.<br />
              <span style={{ background:'linear-gradient(90deg,#FFB800,#fb842c)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>Nothing You Don&apos;t.</span>
            </h2>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'24px' }}>
              {[{icon:'🤖',title:'AI Agents',desc:'Autonomous agents for intake, billing, compliance, help desk — running 24/7 without human intervention.'},{icon:'🛡️',title:'Cybersecurity',desc:'AI-powered zero-trust security. Threats neutralized before your team even knows they exist.'},{icon:'☁️',title:'Cloud & Infra',desc:'99.999% uptime infrastructure. Secure, scalable, always available.'},{icon:'⚖️',title:'Legal Compliance',desc:'ABA, HIPAA, SOC2. Automated audit trails and real-time policy enforcement.'},{icon:'📞',title:'24/7 Help Desk',desc:'Sub-5-minute response times. Most issues resolved by AI before a human is needed.'},{icon:'💾',title:'Data Recovery',desc:'Automated encrypted backups. Point-in-time recovery. Your data is never at risk.'}].map((s,i) => (
                <div key={i} style={{ background:'rgba(7,30,38,0.8)', border:'1px solid rgba(9,163,178,0.1)', borderRadius:'12px', padding:'36px 32px' }}>
                  <div style={{ fontSize:'32px', marginBottom:'16px' }}>{s.icon}</div>
                  <h3 style={{ fontSize:'18px', fontWeight:600, color:'#fff', marginBottom:'12px' }}>{s.title}</h3>
                  <p style={{ fontSize:'14px', color:'rgba(255,255,255,0.4)', lineHeight:1.7 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
