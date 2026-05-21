import type { Metadata } from 'next'
import Link from 'next/link'
import '@/app/page-styles.css'
import InnerNav from '@/components/InnerNav'
import InnerCTA from '@/components/InnerCTA'

export const metadata: Metadata = {
  title: 'Compliance Management | SentiCy',
  description: "Automated compliance for ABA, HIPAA, SEC/FINRA, SOC2, and more.",
}

export default function Page() {
  return (
    <>
      <InnerNav />
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="page-eyebrow">Cybersecurity</span>
          <h1 className="page-title">Compliance Built In.<br /><span>Not Bolted On.</span></h1>
          <p className="page-sub">Automated audit trails, real-time compliance monitoring, policy enforcement, and regulatory reporting — for every framework your firm is subject to. Always audit-ready.</p>
          <div className="cta-row" style={{ marginTop: 36 }}>
            <Link href="/ai-audit" className="btn-primary">Get Compliant Today</Link>
            <Link href="/contact" className="btn-secondary">Talk to an Expert</Link>
          </div>
        </div>
      </div>
      <div className="page-body">
        <div className="divider" />
        <div className="section">
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <p className="section-sub" style={{ margin: '0 auto 48px' }}>SentiCy builds compliance into your infrastructure from day one — not as an afterthought that creates audit scrambles and findings.</p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              {['ABA Model Rules','HIPAA compliance','SEC/FINRA alignment','SOC2 readiness','CMMC compliance','Automated audit trails'].map((b,i) => (
                <div key={i} style={{ background: 'rgba(7,30,38,0.8)', border: '1px solid rgba(9,163,178,0.1)', borderRadius: 8, padding: '12px 20px', fontSize: 14, color: 'rgba(255,255,255,0.6)' }}><span style={{ color: '#09A3B2', marginRight: 8 }}>✓</span>{b}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="divider" />
        <InnerCTA headline="Get Compliant Today" sub="Stop scrambling for audits. See how SentiCy makes your firm continuously compliant with automated controls and real-time monitoring." />
      </div>
    </>
  )
}
