import type { Metadata } from 'next'
import Link from 'next/link'
import '@/app/page-styles.css'
import InnerNav from '@/components/InnerNav'
import InnerCTA from '@/components/InnerCTA'

export const metadata: Metadata = {
  title: 'IT Project Support | SentiCy',
  description: "Execute IT projects your internal team doesn't have bandwidth for.",
}

export default function Page() {
  return (
    <>
      <InnerNav />
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="page-eyebrow">Co-Managed IT</span>
          <h1 className="page-title">Get Projects Done<br /><span>Without Burning Out Your Team.</span></h1>
          <p className="page-sub">Infrastructure upgrades, security implementations, cloud migrations, office moves — SentiCy executes the IT projects your team wants to do but never has bandwidth for.</p>
          <div className="cta-row" style={{ marginTop: 36 }}>
            <Link href="/ai-audit" className="btn-primary">Execute Your Backlog</Link>
            <Link href="/contact" className="btn-secondary">Talk to an Expert</Link>
          </div>
        </div>
      </div>
      <div className="page-body">
        <div className="divider" />
        <div className="section">
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <p className="section-sub" style={{ margin: '0 auto 48px' }}>SentiCy&apos;s project support provides experienced engineers and project managers who embed with your team for defined-scope initiatives.</p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              {['Project management','Engineer augmentation','Cloud migrations','Security implementations','Infrastructure upgrades','Knowledge documentation'].map((b,i) => (
                <div key={i} style={{ background: 'rgba(7,30,38,0.8)', border: '1px solid rgba(9,163,178,0.1)', borderRadius: 8, padding: '12px 20px', fontSize: 14, color: 'rgba(255,255,255,0.6)' }}><span style={{ color: '#09A3B2', marginRight: 8 }}>✓</span>{b}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="divider" />
        <InnerCTA headline="Execute Your Backlog" sub="See how SentiCy's project support clears your technology backlog without overwhelming your internal team." />
      </div>
    </>
  )
}
