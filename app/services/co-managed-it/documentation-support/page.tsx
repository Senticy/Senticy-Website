import type { Metadata } from 'next'
import Link from 'next/link'
import '@/app/page-styles.css'
import InnerNav from '@/components/InnerNav'
import InnerCTA from '@/components/InnerCTA'

export const metadata: Metadata = {
  title: 'IT Documentation & Process Support | SentiCy',
  description: "Build the IT documentation and process library your firm needs to operate at scale.",
}

export default function Page() {
  return (
    <>
      <InnerNav />
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="page-eyebrow">Co-Managed IT</span>
          <h1 className="page-title">Documentation That<br /><span>Scales With You.</span></h1>
          <p className="page-sub">Network diagrams, runbooks, security policies, process documentation, onboarding guides — SentiCy builds and maintains the IT documentation library your operations depend on.</p>
          <div className="cta-row" style={{ marginTop: 36 }}>
            <Link href="/ai-audit" className="btn-primary">Build Your Documentation</Link>
            <Link href="/contact" className="btn-secondary">Talk to an Expert</Link>
          </div>
        </div>
      </div>
      <div className="page-body">
        <div className="divider" />
        <div className="section">
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <p className="section-sub" style={{ margin: '0 auto 48px' }}>Poor documentation is the hidden cost of every IT transition, outage, and audit. SentiCy fixes that with structured documentation programs that scale.</p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              {['Network diagrams','IT runbooks','Security policy documentation','Onboarding procedures','Vendor documentation','Disaster recovery procedures'].map((b,i) => (
                <div key={i} style={{ background: 'rgba(7,30,38,0.8)', border: '1px solid rgba(9,163,178,0.1)', borderRadius: 8, padding: '12px 20px', fontSize: 14, color: 'rgba(255,255,255,0.6)' }}><span style={{ color: '#09A3B2', marginRight: 8 }}>✓</span>{b}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="divider" />
        <InnerCTA headline="Build Your Documentation" sub="See how SentiCy's documentation program reduces resolution time, improves audits, and protects institutional knowledge." />
      </div>
    </>
  )
}
