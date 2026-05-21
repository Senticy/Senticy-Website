import type { Metadata } from 'next'
import Link from 'next/link'
import '@/app/page-styles.css'
import InnerNav from '@/components/InnerNav'
import InnerCTA from '@/components/InnerCTA'
import TestimonialsSection from '@/components/TestimonialsSection'

export const metadata: Metadata = {
  title: 'IT & Cybersecurity for Healthcare | SentiCy',
  description: 'HIPAA-compliant IT, AI automation, and cybersecurity for healthcare organizations in California and Nevada.',
}

const painPoints = [
  { icon: '🏥', title: 'HIPAA Compliance', desc: 'PHI protection, BAA management, audit logging, and breach notification requirements are not optional. Non-compliance averages $1.5M per incident.' },
  { icon: '💊', title: 'EHR & EMR Systems', desc: 'Epic, Cerner, Allscripts, athenahealth — your clinical workflows depend on these systems being fast, available, and properly secured.' },
  { icon: '🎯', title: '#1 Ransomware Target', desc: 'Healthcare is the most targeted industry for ransomware. Attackers know that patient care creates urgency to pay. We stop them first.' },
  { icon: '📱', title: 'Telehealth Infrastructure', desc: 'Remote care requires secure, reliable, HIPAA-compliant video and communication platforms that work every time a patient connects.' },
]

const solutions = [
  { icon: '🛡️', title: 'HIPAA-Compliant Security', desc: 'End-to-end encryption, access controls, audit trails, and BAA management built into every layer of your infrastructure.' },
  { icon: '🤖', title: 'Patient Intake Automation', desc: 'AI agents handle appointment scheduling, insurance verification, and intake forms — freeing clinical staff for patient care.' },
  { icon: '☁️', title: 'Secure Cloud & Backup', desc: 'HIPAA-compliant cloud storage, automated encrypted backups, and disaster recovery that protects patient data 24/7.' },
  { icon: '🔍', title: 'Ransomware Prevention', desc: 'Multi-layer endpoint protection, network segmentation, and AI threat detection that stops ransomware before it reaches patient data.' },
  { icon: '💻', title: 'EHR System Support', desc: 'Expert support, integration, and optimization for all major EHR/EMR platforms. Minimal downtime, maximum clinical productivity.' },
  { icon: '📋', title: 'Compliance Management', desc: 'Continuous HIPAA compliance monitoring, staff training, policy management, and breach response planning.' },
]

const stats = [
  { num: '100%', label: 'HIPAA compliant deployments' },
  { num: '0', label: 'successful ransomware attacks' },
  { num: '99.9%', label: 'EHR system uptime' },
  { num: '24/7', label: 'threat monitoring' },
]

export default function HealthcarePage() {
  return (
    <>
      <InnerNav />
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="page-eyebrow">Healthcare</span>
          <h1 className="page-title">HIPAA-Compliant IT<br /><span>That Protects Patients.</span></h1>
          <p className="page-sub">AI-powered IT and cybersecurity for healthcare organizations in California and Nevada. Protect patient data, automate administrative workflows, and eliminate IT overhead.</p>
          <div className="cta-row" style={{ marginTop:36 }}>
            <Link href="/ai-audit" className="btn-primary">Book a Free HIPAA Assessment</Link>
            <Link href="/services/cybersecurity" className="btn-secondary">See Our Security Stack</Link>
          </div>
        </div>
      </div>
      <div className="page-body">
        <div className="divider" />
        <div className="section">
          <p className="page-eyebrow">The Risks</p>
          <h2 className="section-title">Healthcare IT Failures<br /><span>Put Patients at Risk.</span></h2>
          <p className="section-sub">The stakes in healthcare IT are higher than any other industry. We treat them that way.</p>
          <div className="grid-2">{painPoints.map((p,i) => (<div key={i} className="card"><div className="card-icon">{p.icon}</div><h3 className="card-title">{p.title}</h3><p className="card-desc">{p.desc}</p></div>))}</div>
        </div>
        <div className="divider" />
        <div className="section">
          <p className="page-eyebrow">Our Solutions</p>
          <h2 className="section-title">Clinical Operations Powered<br /><span>by Intelligent IT.</span></h2>
          <p className="section-sub">Every solution is HIPAA-compliant by design, not by checkbox.</p>
          <div className="grid-3">{solutions.map((s,i) => (<div key={i} className="card"><div className="card-icon">{s.icon}</div><h3 className="card-title">{s.title}</h3><p className="card-desc">{s.desc}</p></div>))}</div>
        </div>
        <div className="divider" />
        <div style={{ background:'rgba(7,30,38,0.4)', padding:'80px 48px' }}>
          <div style={{ maxWidth:1100, margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:32, textAlign:'center' }}>
            {stats.map((s,i) => (<div key={i}><div style={{ fontSize:'clamp(32px,4vw,52px)', fontWeight:700, background:'linear-gradient(90deg,#FFB800,#fb842c)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', marginBottom:8 }}>{s.num}</div><div style={{ fontSize:13, color:'rgba(255,255,255,0.35)', lineHeight:1.4 }}>{s.label}</div></div>))}
          </div>
        </div>
        <div className="divider" />
        <TestimonialsSection industry="healthcare" />
        <div className="divider" />
        <InnerCTA headline="Protect Your Patients. Protect Your Practice." sub="Book a free HIPAA and cybersecurity assessment. We'll identify every gap before regulators or attackers do." />
      </div>
    </>
  )
}
