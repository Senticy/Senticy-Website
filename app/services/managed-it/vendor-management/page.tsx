import type { Metadata } from 'next'
import Link from 'next/link'
import '@/app/page-styles.css'
import InnerNav from '@/components/InnerNav'
import InnerCTA from '@/components/InnerCTA'

export const metadata: Metadata = {
  title: 'Vendor Management | SentiCy',
  description: "We coordinate all your technology vendors so you never deal with finger-pointing.",
}

export default function Page() {
  return (
    <>
      <InnerNav />
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="page-eyebrow">Managed IT</span>
          <h1 className="page-title">One Call.<br /><span>We Handle the Rest.</span></h1>
          <p className="page-sub">Internet providers, software vendors, hardware suppliers, phone systems, SaaS platforms — SentiCy coordinates all your technology vendors so your team never has to.</p>
          <div className="cta-row" style={{ marginTop: 36 }}>
            <Link href="/ai-audit" className="btn-primary">Simplify Your Vendors</Link>
            <Link href="/contact" className="btn-secondary">Talk to an Expert</Link>
          </div>
        </div>
      </div>
      <div className="page-body">
        <div className="divider" />
        <div className="section">
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <p className="section-sub" style={{ margin: '0 auto 48px' }}>SentiCy acts as your technology vendor manager — negotiating contracts, coordinating support, tracking renewals, and holding vendors accountable so you don&apos;t have to.</p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              {['Vendor coordination','Contract management','Renewal tracking','SLA enforcement','License optimization','New vendor vetting'].map((b,i) => (
                <div key={i} style={{ background: 'rgba(7,30,38,0.8)', border: '1px solid rgba(9,163,178,0.1)', borderRadius: 8, padding: '12px 20px', fontSize: 14, color: 'rgba(255,255,255,0.6)' }}><span style={{ color: '#09A3B2', marginRight: 8 }}>✓</span>{b}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="divider" />
        <InnerCTA headline="Simplify Your Vendor Stack" sub="Stop managing vendor relationships. See how SentiCy eliminates the coordination burden and reduces your technology spend." />
      </div>
    </>
  )
}
