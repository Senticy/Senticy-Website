import type { Metadata } from 'next'
import Link from 'next/link'
import '@/app/page-styles.css'
import InnerNav from '@/components/InnerNav'
import InnerCTA from '@/components/InnerCTA'
import TestimonialsSection from '@/components/TestimonialsSection'

export const metadata: Metadata = {
  title: 'IT & Cybersecurity for Financial Firms | SentiCy',
  description: 'Institutional-grade IT, cybersecurity, and AI for hedge funds, private equity, family offices, and financial advisors in CA and NV.',
}

const painPoints = [
  { icon: '📈', title: 'Trading System Uptime', desc: 'A single minute of downtime during market hours can cost six figures. Your infrastructure needs to be as reliable as your investment thesis.' },
  { icon: '🏙️', title: 'SEC & FINRA Compliance', desc: 'Regulatory examinations, books and records requirements, cybersecurity rules — we build compliance into your infrastructure, not onto it.' },
  { icon: '🔐', title: 'Wire Fraud & Social Engineering', desc: 'Financial firms are the #1 target for sophisticated cyberattacks. One compromised email can authorize a fraudulent wire transfer.' },
  { icon: '👥', title: 'Investor-Grade Security Standards', desc: 'Institutional LPs and investors now conduct IT due diligence before committing capital. Your security posture is part of your pitch.' },
]

const solutions = [
  { icon: '🛡️', title: 'Institutional-Grade Security', desc: 'Zero-trust architecture, MFA, encrypted communications, and AI-powered threat detection built to institutional standards.' },
  { icon: '📋', title: 'SEC/FINRA Compliance', desc: 'Automated books and records, email archiving, supervision workflows, and audit-ready documentation. Pass your next examination with confidence.' },
  { icon: '🤖', title: 'AI Workflow Automation', desc: 'Automate investor reporting, compliance monitoring, document management, and administrative workflows.' },
  { icon: '☁️', title: 'Secure Cloud Infrastructure', desc: 'Azure and cloud environments architected for financial services. Secure, compliant, and built for the performance your firm demands.' },
  { icon: '🔍', title: 'Dark Web Monitoring', desc: 'Continuous monitoring for leaked credentials, firm data, and executive information. Know before an attacker does.' },
  { icon: '📞', title: '24/7 Priority Support', desc: 'White-glove support with guaranteed response times. When markets are open and something goes wrong, we\'re already on it.' },
]

const stats = [
  { num: '100%', label: 'audit pass rate for our clients' },
  { num: '< 2min', label: 'critical issue response time' },
  { num: 'SOC2', label: 'compliant infrastructure' },
  { num: '0', label: 'successful wire fraud attacks' },
]

export default function FinancialFirmsPage() {
  return (
    <>
      <InnerNav />
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="page-eyebrow">Financial Firms</span>
          <h1 className="page-title">Institutional IT for<br /><span>High-Performance Firms.</span></h1>
          <p className="page-sub">Enterprise-grade IT, cybersecurity, and AI for hedge funds, private equity, family offices, and financial advisors in California and Nevada.</p>
          <div className="cta-row" style={{ marginTop:36 }}>
            <Link href="/ai-audit" className="btn-primary">Book a Free IT Assessment</Link>
            <Link href="/services/cybersecurity" className="btn-secondary">See Our Security Stack</Link>
          </div>
        </div>
      </div>
      <div className="page-body">
        <div className="divider" />
        <div className="section">
          <p className="page-eyebrow">The Stakes</p>
          <h2 className="section-title">In Finance, IT Failures<br /><span>Cost More Than Time.</span></h2>
          <p className="section-sub">Your investors, your regulators, and your reputation depend on flawless technology.</p>
          <div className="grid-2">{painPoints.map((p,i) => (<div key={i} className="card"><div className="card-icon">{p.icon}</div><h3 className="card-title">{p.title}</h3><p className="card-desc">{p.desc}</p></div>))}</div>
        </div>
        <div className="divider" />
        <div className="section">
          <p className="page-eyebrow">Our Solutions</p>
          <h2 className="section-title">Built to Institutional<br /><span>Standards. Not Close Enough.</span></h2>
          <p className="section-sub">Every service designed for the operational and regulatory realities of financial services firms.</p>
          <div className="grid-3">{solutions.map((s,i) => (<div key={i} className="card"><div className="card-icon">{s.icon}</div><h3 className="card-title">{s.title}</h3><p className="card-desc">{s.desc}</p></div>))}</div>
        </div>
        <div className="divider" />
        <div style={{ background:'rgba(7,30,38,0.4)', padding:'80px 48px' }}>
          <div style={{ maxWidth:1100, margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:32, textAlign:'center' }}>
            {stats.map((s,i) => (<div key={i}><div style={{ fontSize:'clamp(32px,4vw,52px)', fontWeight:700, background:'linear-gradient(90deg,#FFB800,#fb842c)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', marginBottom:8 }}>{s.num}</div><div style={{ fontSize:13, color:'rgba(255,255,255,0.35)', lineHeight:1.4 }}>{s.label}</div></div>))}
          </div>
        </div>
        <div className="divider" />
        <TestimonialsSection industry="finance" />
        <div className="divider" />
        <InnerCTA headline="Ready for Institutional-Grade IT?" sub="We'll assess your current security posture, compliance gaps, and where AI can create operational leverage — at no cost." />
      </div>
    </>
  )
}
