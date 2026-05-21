import type { Metadata } from 'next'
import Link from 'next/link'
import '@/app/page-styles.css'
import InnerNav from '@/components/InnerNav'
import InnerCTA from '@/components/InnerCTA'

export const metadata: Metadata = {
  title: 'AI Help Desk Agent | SentiCy',
  description: "AI resolves tier-1 IT tickets autonomously — password resets, access requests, software installs.",
}

export default function Page() {
  return (
    <>
      <InnerNav />
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="page-eyebrow">AI Agents</span>
          <h1 className="page-title">IT Support That<br /><span>Resolves Itself.</span></h1>
          <p className="page-sub">Password resets, software installs, access requests, printer issues — our AI help desk agent handles tier-1 IT tickets without a human ever getting involved.</p>
          <div className="cta-row" style={{ marginTop: 36 }}>
            <Link href="/ai-audit" className="btn-primary">Eliminate Your Ticket Backlog</Link>
            <Link href="/contact" className="btn-secondary">Talk to an Expert</Link>
          </div>
        </div>
      </div>
      <div className="page-body">
        <div className="divider" />
        <div className="section">
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <p className="section-sub" style={{ margin: '0 auto 48px' }}>The SentiCy Help Desk Agent integrates with your ticketing system and resolves the most common IT requests automatically and instantly — 24/7.</p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              {['Password reset automation','Access request handling','Software installation','Account provisioning','Printer & peripheral support','Escalation routing'].map((b,i) => (
                <div key={i} style={{ background: 'rgba(7,30,38,0.8)', border: '1px solid rgba(9,163,178,0.1)', borderRadius: 8, padding: '12px 20px', fontSize: 14, color: 'rgba(255,255,255,0.6)' }}><span style={{ color: '#09A3B2', marginRight: 8 }}>✓</span>{b}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="divider" />
        <InnerCTA headline="Eliminate Your Ticket Backlog" sub="See how the AI help desk agent reduces ticket volume by 70% and frees your IT team for strategic work." />
      </div>
    </>
  )
}
