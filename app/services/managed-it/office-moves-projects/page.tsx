import type { Metadata } from 'next'
import Link from 'next/link'
import '@/app/page-styles.css'
import InnerNav from '@/components/InnerNav'
import InnerCTA from '@/components/InnerCTA'

export const metadata: Metadata = {
  title: 'Office Moves & IT Projects | SentiCy',
  description: "Seamless IT planning and execution for office moves and technology projects.",
}

export default function Page() {
  return (
    <>
      <InnerNav />
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="page-eyebrow">Managed IT</span>
          <h1 className="page-title">Move Without<br /><span>Missing a Beat.</span></h1>
          <p className="page-sub">Complete IT planning and execution for office moves, new locations, technology refreshes, and infrastructure projects. Zero downtime. Zero surprises. Zero stress.</p>
          <div className="cta-row" style={{ marginTop: 36 }}>
            <Link href="/ai-audit" className="btn-primary">Plan Your Move</Link>
            <Link href="/contact" className="btn-secondary">Talk to an Expert</Link>
          </div>
        </div>
      </div>
      <div className="page-body">
        <div className="divider" />
        <div className="section">
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <p className="section-sub" style={{ margin: '0 auto 48px' }}>SentiCy manages every aspect of your office IT move or technology project — from assessment and planning through cutover and testing.</p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              {['Pre-move assessment','Project planning & timeline','Infrastructure setup','System migration','Cutover execution','Post-move support'].map((b,i) => (
                <div key={i} style={{ background: 'rgba(7,30,38,0.8)', border: '1px solid rgba(9,163,178,0.1)', borderRadius: 8, padding: '12px 20px', fontSize: 14, color: 'rgba(255,255,255,0.6)' }}><span style={{ color: '#09A3B2', marginRight: 8 }}>✓</span>{b}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="divider" />
        <InnerCTA headline="Plan Your IT Project" sub="Office moves and technology projects create enormous IT risk. See how SentiCy eliminates that risk with proven project management." />
      </div>
    </>
  )
}
