import type { Metadata } from 'next'
import Link from 'next/link'
import '@/app/page-styles.css'
import InnerNav from '@/components/InnerNav'
import InnerCTA from '@/components/InnerCTA'

export const metadata: Metadata = {
  title: 'VoIP Phone Systems | SentiCy',
  description: "Modern VoIP phone systems that keep your team connected securely from anywhere.",
}

export default function Page() {
  return (
    <>
      <InnerNav />
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="page-eyebrow">Managed IT</span>
          <h1 className="page-title">Phone Systems Built<br /><span>for Modern Work.</span></h1>
          <p className="page-sub">Secure, feature-rich VoIP phone systems for law firms, financial firms, and healthcare. Work from anywhere. Stay connected everywhere. Always compliant.</p>
          <div className="cta-row" style={{ marginTop: 36 }}>
            <Link href="/ai-audit" className="btn-primary">Get a Quote</Link>
            <Link href="/contact" className="btn-secondary">Talk to an Expert</Link>
          </div>
        </div>
      </div>
      <div className="page-body">
        <div className="divider" />
        <div className="section">
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <p className="section-sub" style={{ margin: '0 auto 48px' }}>SentiCy designs, deploys, and supports VoIP systems that integrate with your existing tools and meet the compliance requirements of your industry.</p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              {['Cloud PBX deployment','Mobile integration','Call recording & compliance','Auto-attendant setup','CRM integration','Unlimited support'].map((b,i) => (
                <div key={i} style={{ background: 'rgba(7,30,38,0.8)', border: '1px solid rgba(9,163,178,0.1)', borderRadius: 8, padding: '12px 20px', fontSize: 14, color: 'rgba(255,255,255,0.6)' }}><span style={{ color: '#09A3B2', marginRight: 8 }}>✓</span>{b}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="divider" />
        <InnerCTA headline="Upgrade Your Phone System" sub="See how SentiCy's VoIP solutions save the average firm 40% on phone costs while improving reliability and compliance." />
      </div>
    </>
  )
}
