import type { Metadata } from 'next'
import Link from 'next/link'
import '@/app/page-styles.css'
import InnerNav from '@/components/InnerNav'
import InnerCTA from '@/components/InnerCTA'

export const metadata: Metadata = {
  title: 'Cloud Solutions & Hosting | SentiCy',
  description: "Secure, scalable cloud infrastructure with 99.999% uptime for law firms, financial firms, and healthcare.",
}

export default function Page() {
  return (
    <>
      <InnerNav />
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="page-eyebrow">Managed IT</span>
          <h1 className="page-title">Cloud That Never<br /><span>Lets You Down.</span></h1>
          <p className="page-sub">Enterprise-grade cloud infrastructure on Azure and AWS — secure, compliant, and built for the performance your firm demands. 99.999% uptime. Always.</p>
          <div className="cta-row" style={{ marginTop: 36 }}>
            <Link href="/ai-audit" className="btn-primary">Move to the Cloud</Link>
            <Link href="/contact" className="btn-secondary">Talk to an Expert</Link>
          </div>
        </div>
      </div>
      <div className="page-body">
        <div className="divider" />
        <div className="section">
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <p className="section-sub" style={{ margin: '0 auto 48px' }}>SentiCy designs, deploys, and manages cloud environments built specifically for regulated industries — with security and compliance baked in from the start.</p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              {['Azure & AWS management','Cloud migration services','Hybrid cloud architecture','Cloud security controls','Cost optimization','Disaster recovery'].map((b,i) => (
                <div key={i} style={{ background: 'rgba(7,30,38,0.8)', border: '1px solid rgba(9,163,178,0.1)', borderRadius: 8, padding: '12px 20px', fontSize: 14, color: 'rgba(255,255,255,0.6)' }}><span style={{ color: '#09A3B2', marginRight: 8 }}>✓</span>{b}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="divider" />
        <InnerCTA headline="Move to the Cloud" sub="See how SentiCy's cloud solutions reduce IT costs, improve performance, and eliminate the maintenance burden of on-premise infrastructure." />
      </div>
    </>
  )
}
