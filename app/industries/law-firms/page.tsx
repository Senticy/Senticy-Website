import type { Metadata } from 'next'
import Link from 'next/link'
import '@/app/page-styles.css'
import InnerNav from '@/components/InnerNav'
import InnerCTA from '@/components/InnerCTA'
import TestimonialsSection from '@/components/TestimonialsSection'

export const metadata: Metadata = {
  title: 'IT & AI Solutions for Law Firms | SentiCy',
  description: 'AI-powered IT and cybersecurity purpose-built for law firms. Protect client data, automate intake, and eliminate IT overhead.',
}

const painPoints = [
  { icon: '⚖️', title: 'Billable Hours Lost to IT', desc: 'Every minute attorneys spend dealing with slow systems, password resets, or software issues is a minute not billed. We eliminate IT friction entirely.' },
  { icon: '🔒', title: 'Client Confidentiality at Risk', desc: 'A compromised inbox or stolen case file is not just an IT problem — it\'s a bar complaint, a malpractice suit, and a reputation crisis.' },
  { icon: '📋', title: 'ABA & HIPAA Compliance', desc: 'Regulatory obligations around client data, email retention, and security standards are complex and constantly evolving. We handle it.' },
  { icon: '📁', title: 'Case Management Systems', desc: 'Clio, MyCase, NetDocuments, iManage — we support, integrate, and secure every platform your firm relies on.' },
]

const solutions = [
  { icon: '🤖', title: 'Client Intake Agent', desc: 'AI automatically collects new client information, runs conflict checks, generates engagement letters, and routes matters — saving 40+ hours per month.' },
  { icon: '🛡️', title: 'Zero-Trust Security', desc: 'Every access request verified, every endpoint protected, every email scanned. Ransomware and phishing attacks stopped before attorneys ever see them.' },
  { icon: '📊', title: 'Compliance Automation', desc: 'Automated audit trails, ABA Model Rules adherence, HIPAA-compliant storage, and real-time policy enforcement — without manual overhead.' },
  { icon: '💻', title: '24/7 Help Desk', desc: 'Sub-5-minute response times. Most issues resolved by AI before a human is needed. Attorneys never wait.' },
  { icon: '☁️', title: 'Secure Remote Access', desc: 'Work from court, home, or any device. Secure VPN, MDM, and cloud access that keeps client data protected everywhere.' },
  { icon: '💾', title: 'Automated Backups', desc: 'Encrypted backups every 15 minutes. Point-in-time recovery for any file, any case, any date. Client data is never at risk.' },
]

const stats = [
  { num: '40hrs', label: 'saved per month on intake alone' },
  { num: '< 5min', label: 'IT support response time' },
  { num: '99.9%', label: 'system uptime guaranteed' },
  { num: '0', label: 'data breaches in client history' },
]

export default function LawFirmsPage() {
  return (
    <>
      <InnerNav />
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="page-eyebrow">Law Firms</span>
          <h1 className="page-title">IT Built for the Way<br /><span>Law Firms Actually Work.</span></h1>
          <p className="page-sub">AI-powered IT and cybersecurity purpose-built for law firms in California and Nevada. Protect client data, automate intake, eliminate IT overhead, and stay compliant.</p>
          <div className="cta-row" style={{ marginTop:36 }}>
            <Link href="/ai-audit" className="btn-primary">Book a Free AI Audit</Link>
            <Link href="/services/ai-agents" className="btn-secondary">See the AI Agents</Link>
          </div>
        </div>
      </div>
      <div className="page-body">
        <div className="divider" />
        <div className="section">
          <p className="page-eyebrow">The Real Problems</p>
          <h2 className="section-title">What&apos;s Actually Costing<br /><span>Your Firm Money.</span></h2>
          <p className="section-sub">Law firms face IT challenges that generic providers don&apos;t understand. We do.</p>
          <div className="grid-2">
            {painPoints.map((p,i) => (<div key={i} className="card"><div className="card-icon">{p.icon}</div><h3 className="card-title">{p.title}</h3><p className="card-desc">{p.desc}</p></div>))}
          </div>
        </div>
        <div className="divider" />
        <div className="section">
          <p className="page-eyebrow">Our Solutions</p>
          <h2 className="section-title">How SentiCy Fixes It.<br /><span>All of It.</span></h2>
          <p className="section-sub">Every solution is AI-powered, purpose-built for law firms, and deployed without disrupting your practice.</p>
          <div className="grid-3">
            {solutions.map((s,i) => (<div key={i} className="card"><div className="card-icon">{s.icon}</div><h3 className="card-title">{s.title}</h3><p className="card-desc">{s.desc}</p></div>))}
          </div>
        </div>
        <div className="divider" />
        <div style={{ background:'rgba(7,30,38,0.4)', padding:'80px 48px' }}>
          <div style={{ maxWidth:1100, margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:32, textAlign:'center' }}>
            {stats.map((s,i) => (<div key={i}><div style={{ fontSize:'clamp(32px,4vw,52px)', fontWeight:700, background:'linear-gradient(90deg,#FFB800,#fb842c)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', marginBottom:8 }}>{s.num}</div><div style={{ fontSize:13, color:'rgba(255,255,255,0.35)', lineHeight:1.4 }}>{s.label}</div></div>))}
          </div>
        </div>
        <div className="divider" />
        <TestimonialsSection industry="law" />
        <div className="divider" />
        <InnerCTA headline="Ready to Free Your Attorneys?" sub="Book a free AI audit. We'll show you exactly what we can automate, what we'll secure, and how much you'll save." />
      </div>
    </>
  )
}
