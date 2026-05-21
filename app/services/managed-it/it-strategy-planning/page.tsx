import type { Metadata } from 'next'
import Link from 'next/link'
import '@/app/page-styles.css'
import InnerNav from '@/components/InnerNav'
import InnerCTA from '@/components/InnerCTA'

export const metadata: Metadata = {
  title: 'IT Strategy & Planning | SentiCy',
  description: "Proactive IT strategy and technology planning that keeps your firm ahead of problems.",
}

export default function Page() {
  return (
    <>
      <InnerNav />
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="page-eyebrow">Managed IT</span>
          <h1 className="page-title">Technology That Works<br /><span>for Your Business.</span></h1>
          <p className="page-sub">We align your IT investments with your business goals, growth plans, and compliance requirements. Virtual CIO services, technology roadmaps, and budget planning — no more reactive IT.</p>
          <div className="cta-row" style={{ marginTop: 36 }}>
            <Link href="/ai-audit" className="btn-primary">Schedule a Strategy Call</Link>
            <Link href="/contact" className="btn-secondary">Talk to an Expert</Link>
          </div>
        </div>
      </div>
      <div className="page-body">
        <div className="divider" />
        <div className="section">
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <p className="section-sub" style={{ margin: '0 auto 48px' }}>SentiCy provides virtual CIO services, technology roadmaps, and budget planning that give your leadership team full visibility and control over IT strategy.</p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              {['Virtual CIO services','Technology roadmaps','Budget planning & forecasting','Vendor strategy','Growth planning','Board-level reporting'].map((b,i) => (
                <div key={i} style={{ background: 'rgba(7,30,38,0.8)', border: '1px solid rgba(9,163,178,0.1)', borderRadius: 8, padding: '12px 20px', fontSize: 14, color: 'rgba(255,255,255,0.6)' }}><span style={{ color: '#09A3B2', marginRight: 8 }}>✓</span>{b}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="divider" />
        <InnerCTA headline="Get a Technology Strategy" sub="Stop making reactive IT decisions. See how SentiCy's strategic planning creates a technology foundation that supports your firm's growth." />
      </div>
    </>
  )
}
