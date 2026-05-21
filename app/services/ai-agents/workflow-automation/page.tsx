import type { Metadata } from 'next'
import Link from 'next/link'
import '@/app/page-styles.css'
import InnerNav from '@/components/InnerNav'
import InnerCTA from '@/components/InnerCTA'

export const metadata: Metadata = {
  title: 'AI Workflow Automation | SentiCy',
  description: "Identify and automate repetitive business workflows with purpose-built AI agents.",
}

export default function Page() {
  return (
    <>
      <InnerNav />
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="page-eyebrow">AI Agents</span>
          <h1 className="page-title">Eliminate Manual Work<br /><span>Permanently.</span></h1>
          <p className="page-sub">We map every repetitive workflow in your firm and deploy AI agents to handle them. Document routing, scheduling, status updates, reporting — all automated permanently.</p>
          <div className="cta-row" style={{ marginTop: 36 }}>
            <Link href="/ai-audit" className="btn-primary">See What We Can Automate</Link>
            <Link href="/contact" className="btn-secondary">Talk to an Expert</Link>
          </div>
        </div>
      </div>
      <div className="page-body">
        <div className="divider" />
        <div className="section">
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <p className="section-sub" style={{ margin: '0 auto 48px' }}>SentiCy&apos;s workflow automation service starts with a complete process audit, then deploys AI agents for every workflow that can be automated safely and reliably.</p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              {['Process audit & mapping','Custom agent deployment','System integration','ROI measurement','Staff training','Ongoing optimization'].map((b,i) => (
                <div key={i} style={{ background: 'rgba(7,30,38,0.8)', border: '1px solid rgba(9,163,178,0.1)', borderRadius: 8, padding: '12px 20px', fontSize: 14, color: 'rgba(255,255,255,0.6)' }}><span style={{ color: '#09A3B2', marginRight: 8 }}>✓</span>{b}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="divider" />
        <InnerCTA headline="See What We Can Automate" sub="Book a free AI audit and we'll show you exactly which workflows in your firm can be automated and what it saves annually." />
      </div>
    </>
  )
}
