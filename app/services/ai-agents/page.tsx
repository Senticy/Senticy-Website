import type { Metadata } from 'next'
import Link from 'next/link'
import '@/app/page-styles.css'
import InnerNav from '@/components/InnerNav'
import InnerCTA from '@/components/InnerCTA'

export const metadata: Metadata = {
  title: 'AI Agents for Business Automation | SentiCy',
  description: "Purpose-built AI agents that replace human overhead for intake, compliance, threat detection, help desk, billing, and workflow automation.",
}

const agents = [
  { icon: '📋', title: 'Intake Agent', href: '/services/ai-agents/intake-agent', desc: 'Automates new client onboarding, conflict checks, engagement letters, and matter setup. Saves 40+ hours per month.', saving: '40 hrs/mo' },
  { icon: '⚖️', title: 'Compliance Agent', href: '/services/ai-agents/compliance-agent', desc: 'Continuous regulatory monitoring, automated audit trails, and real-time policy enforcement for ABA, HIPAA, and SEC.', saving: '25 hrs/mo' },
  { icon: '🛡️', title: 'Threat Detection Agent', href: '/services/ai-agents/threat-detection-agent', desc: 'Monitors every endpoint, login, and network packet 24/7. Neutralizes threats in milliseconds before they cause damage.', saving: '60 hrs/mo' },
  { icon: '💻', title: 'Help Desk Agent', href: '/services/ai-agents/help-desk-agent', desc: 'Resolves tier-1 IT tickets autonomously — password resets, access requests, software installs — without human involvement.', saving: '50 hrs/mo' },
  { icon: '💰', title: 'Billing Agent', href: '/services/ai-agents/billing-agent', desc: 'Tracks time entries, generates invoices, follows up on outstanding payments, and reconciles accounts automatically.', saving: '20 hrs/mo' },
  { icon: '⚡', title: 'Workflow Automation', href: '/services/ai-agents/workflow-automation', desc: 'We map every repetitive workflow in your firm and deploy AI agents to handle them permanently.', saving: '30 hrs/mo' },
]

const industries = [
  { name: 'Law Firms', items: ['Client intake & conflict checks', 'Case file organization', 'ABA compliance monitoring', 'Billing & time capture', 'Court deadline tracking'] },
  { name: 'Financial Firms', items: ['Investor reporting automation', 'SEC/FINRA compliance tracking', 'Trade reconciliation', 'KYC/AML workflows', 'Client communication'] },
  { name: 'Healthcare', items: ['Patient intake & scheduling', 'Insurance verification', 'HIPAA compliance monitoring', 'EHR data management', 'Billing & claims'] },
]

export default function AIAgentsPage() {
  return (
    <>
      <InnerNav />
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="page-eyebrow">AI Agents</span>
          <h1 className="page-title">Replace Overhead With<br /><span>Intelligent Automation.</span></h1>
          <p className="page-sub">Purpose-built AI agents that handle intake, compliance, threat detection, help desk, billing, and workflow automation — 24/7, without human intervention. The average firm saves 210+ hours per month.</p>
          <div className="cta-row" style={{ marginTop: 36 }}>
            <Link href="/ai-audit" className="btn-primary">See What We Can Automate</Link>
            <Link href="/contact" className="btn-secondary">Talk to an Expert</Link>
          </div>
        </div>
      </div>
      <div className="page-body">
        <div className="divider" />
        <div style={{ background: 'rgba(7,30,38,0.4)', padding: '60px 48px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 32, textAlign: 'center' }}>
            {[{num:'210hrs',label:'avg saved per month'},{num:'3×',label:'cheaper than human staff'},{num:'6',label:'purpose-built agents'},{num:'24/7',label:'always running'}].map((s,i) => (
              <div key={i}><div style={{ fontSize:'clamp(32px,4vw,48px)', fontWeight:700, background:'linear-gradient(90deg,#FFB800,#fb842c)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', marginBottom:8 }}>{s.num}</div><div style={{ fontSize:13, color:'rgba(255,255,255,0.35)' }}>{s.label}</div></div>
            ))}
          </div>
        </div>
        <div className="divider" />
        <div className="section">
          <p className="page-eyebrow">The AI Workforce</p>
          <h2 className="section-title">Six Agents. Every Task.<br /><span>Zero Overhead.</span></h2>
          <p className="section-sub">Each agent is purpose-built for a single function. Together, they replace the equivalent of 3–5 full-time employees — at a fraction of the cost, with zero sick days, zero turnover, and zero errors.</p>
          <div className="grid-3">
            {agents.map((a, i) => (
              <Link key={i} href={a.href} style={{ textDecoration: 'none' }}>
                <div className="card" style={{ height: '100%', cursor: 'pointer' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#09A3B2', boxShadow: '0 0 8px #09A3B2' }} />
                    <span style={{ fontSize: 10, letterSpacing: 2, color: '#09A3B2', fontWeight: 600 }}>ACTIVE</span>
                  </div>
                  <div className="card-icon">{a.icon}</div>
                  <h3 className="card-title">{a.title}</h3>
                  <p className="card-desc">{a.desc}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 20, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                    <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>Saves your firm</span>
                    <span style={{ fontSize: 15, fontWeight: 700, background: 'linear-gradient(90deg,#fb842c,#FFB800)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{a.saving}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="divider" />
        <div className="section">
          <p className="page-eyebrow">Industry Applications</p>
          <h2 className="section-title">AI Agents Built for<br /><span>Your Industry&apos;s Workflows.</span></h2>
          <p className="section-sub">Every industry has different workflows. Our agents are configured specifically for your firm&apos;s processes, compliance requirements, and systems.</p>
          <div className="grid-3">
            {industries.map((ind, i) => (
              <div key={i} className="card">
                <h3 className="card-title" style={{ marginBottom: 20 }}>{ind.name}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {ind.items.map((item, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'rgba(255,255,255,0.55)' }}>
                      <span style={{ color: '#09A3B2', fontWeight: 700, flexShrink: 0 }}>✓</span>{item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="divider" />
        <InnerCTA headline="See What AI Can Automate in Your Firm" sub="Book a free AI audit. We'll identify every workflow that can be automated and show you exactly what it saves — with a custom ROI analysis." />
      </div>
    </>
  )
}
