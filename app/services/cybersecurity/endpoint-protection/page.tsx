import type { Metadata } from 'next'
import Link from 'next/link'
import '@/app/page-styles.css'
import InnerNav from '@/components/InnerNav'
import InnerCTA from '@/components/InnerCTA'

export const metadata: Metadata = {
  title: 'Endpoint Protection | SentiCy',
  description: "Enterprise-grade endpoint protection for every device in your firm.",
}

export default function Page() {
  return (
    <>
      <InnerNav />
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="page-eyebrow">Cybersecurity</span>
          <h1 className="page-title">Every Device.<br /><span>Every User. Protected.</span></h1>
          <p className="page-sub">Advanced EDR for every device in your firm. AI-powered behavioral detection stops the threats traditional antivirus misses — laptops, phones, servers, and beyond.</p>
          <div className="cta-row" style={{ marginTop: 36 }}>
            <Link href="/ai-audit" className="btn-primary">Get Protected Today</Link>
            <Link href="/contact" className="btn-secondary">Talk to an Expert</Link>
          </div>
        </div>
      </div>
      <div className="page-body">
        <div className="divider" />
        <div className="section">
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <p className="section-sub" style={{ margin: '0 auto 48px' }}>SentiCy deploys and manages enterprise-grade EDR across your entire device fleet — detecting threats that traditional antivirus misses completely.</p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              {['EDR deployment & management','Zero-trust device access','Mobile device management','Behavioral threat detection','Automatic remediation','Patch management'].map((b,i) => (
                <div key={i} style={{ background: 'rgba(7,30,38,0.8)', border: '1px solid rgba(9,163,178,0.1)', borderRadius: 8, padding: '12px 20px', fontSize: 14, color: 'rgba(255,255,255,0.6)' }}><span style={{ color: '#09A3B2', marginRight: 8 }}>✓</span>{b}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="divider" />
        <InnerCTA headline="Protect Every Endpoint" sub="See how SentiCy's endpoint protection stops advanced threats that bypass traditional antivirus across your entire device fleet." />
      </div>
    </>
  )
}
