import type { Metadata } from 'next'
import Link from 'next/link'
import '@/app/page-styles.css'
import InnerNav from '@/components/InnerNav'
import InnerCTA from '@/components/InnerCTA'

export const metadata: Metadata = {
  title: 'AI Compliance Agent | SentiCy',
  description: "Automate regulatory compliance monitoring, audit trails, and policy enforcement with AI.",
}

export default function Page() {
  return (
    <>
      <InnerNav />
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="page-eyebrow">AI Agents</span>
          <h1 className="page-title">Compliance That Never<br /><span>Misses a Beat.</span></h1>
          <p className="page-sub">Continuous regulatory monitoring, automated audit trails, and real-time policy enforcement for ABA, HIPAA, and SEC/FINRA — 24/7, without human intervention.</p>
          <div className="cta-row" style={{ marginTop: 36 }}>
            <Link href="/ai-audit" className="btn-primary">Automate Your Compliance</Link>
            <Link href="/contact" className="btn-secondary">Talk to an Expert</Link>
          </div>
        </div>
      </div>
      <div className="page-body">
        <div className="divider" />
        <div className="section">
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <p className="section-sub" style={{ margin: '0 auto 48px' }}>The SentiCy Compliance Agent monitors your regulatory environment 24/7, generates audit trails automatically, and alerts your team when action is needed.</p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              {['ABA Model Rules monitoring','HIPAA compliance tracking','SEC/FINRA audit trails','Real-time policy enforcement','Automated reporting','Breach notification workflows'].map((b,i) => (
                <div key={i} style={{ background: 'rgba(7,30,38,0.8)', border: '1px solid rgba(9,163,178,0.1)', borderRadius: 8, padding: '12px 20px', fontSize: 14, color: 'rgba(255,255,255,0.6)' }}><span style={{ color: '#09A3B2', marginRight: 8 }}>✓</span>{b}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="divider" />
        <InnerCTA headline="Automate Your Compliance Program" sub="See how our compliance agent eliminates manual compliance work and keeps your firm audit-ready 365 days a year." />
      </div>
    </>
  )
}
