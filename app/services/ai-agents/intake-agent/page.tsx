import type { Metadata } from 'next'
import Link from 'next/link'
import '@/app/page-styles.css'
import InnerNav from '@/components/InnerNav'
import InnerCTA from '@/components/InnerCTA'

export const metadata: Metadata = {
  title: 'AI Client Intake Agent | SentiCy',
  description: "Automate new client intake, conflict checks, engagement letters, and matter routing with AI.",
}

export default function Page() {
  return (
    <>
      <InnerNav />
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="page-eyebrow">AI Agents</span>
          <h1 className="page-title">Automate Client Intake<br /><span>End-to-End.</span></h1>
          <p className="page-sub">Stop spending 40+ hours a month on manual intake. Our AI intake agent collects new client information, runs conflict checks, generates engagement letters, and routes matters automatically.</p>
          <div className="cta-row" style={{ marginTop: 36 }}>
            <Link href="/ai-audit" className="btn-primary">Automate Your Intake</Link>
            <Link href="/contact" className="btn-secondary">Talk to an Expert</Link>
          </div>
        </div>
      </div>
      <div className="page-body">
        <div className="divider" />
        <div className="section">
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <p className="section-sub" style={{ margin: '0 auto 48px' }}>The SentiCy Intake Agent handles every step of the client onboarding process — from initial inquiry to matter setup — without human intervention.</p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              {['Conflict check automation','Engagement letter generation','Document collection','Matter routing & setup','CRM integration','Status notifications'].map((b,i) => (
                <div key={i} style={{ background: 'rgba(7,30,38,0.8)', border: '1px solid rgba(9,163,178,0.1)', borderRadius: 8, padding: '12px 20px', fontSize: 14, color: 'rgba(255,255,255,0.6)' }}><span style={{ color: '#09A3B2', marginRight: 8 }}>✓</span>{b}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="divider" />
        <InnerCTA headline="Automate Your Intake Process" sub="See how the AI intake agent can save your firm 40+ hours per month and eliminate intake errors permanently." />
      </div>
    </>
  )
}
