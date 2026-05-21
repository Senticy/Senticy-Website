import type { Metadata } from 'next'
import Link from 'next/link'
import '@/app/page-styles.css'
import InnerNav from '@/components/InnerNav'
import InnerCTA from '@/components/InnerCTA'

export const metadata: Metadata = {
  title: 'IT Support Las Vegas | SentiCy',
  description: "AI-powered managed IT and cybersecurity for Las Vegas businesses.",
}

export default function Page() {
  return (
    <>
      <InnerNav />
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="page-eyebrow">Las Vegas, NV</span>
          <h1 className="page-title">AI-Powered IT &amp; Cybersecurity<br /><span>for Las Vegas.</span></h1>
          <p className="page-sub">SentiCy provides managed IT, cybersecurity, and AI automation for law firms, financial firms, and healthcare organizations across Las Vegas and Southern Nevada.</p>
          <div className="cta-row" style={{ marginTop: 36 }}>
            <Link href="/ai-audit" className="btn-primary">Book a Free LV Audit</Link>
            <Link href="/contact" className="btn-secondary">Talk to an Expert</Link>
          </div>
        </div>
      </div>
      <div className="page-body">
        <div className="divider" />
        <div className="section">
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <p className="section-sub" style={{ margin: '0 auto 48px' }}>From the Las Vegas Strip corridor to Summerlin and Green Valley — SentiCy is the next-generation MSP serving Las Vegas businesses with enterprise-grade IT and AI automation.</p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              {['Las Vegas','Summerlin','Henderson','North Las Vegas','Enterprise','Southern Nevada'].map((b,i) => (
                <div key={i} style={{ background: 'rgba(7,30,38,0.8)', border: '1px solid rgba(9,163,178,0.1)', borderRadius: 8, padding: '12px 20px', fontSize: 14, color: 'rgba(255,255,255,0.6)' }}><span style={{ color: '#09A3B2', marginRight: 8 }}>✓</span>{b}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="divider" />
        <InnerCTA headline="Book a Free Las Vegas Audit" sub="See how SentiCy's AI-powered IT and cybersecurity can protect and automate your Las Vegas business." />
      </div>
    </>
  )
}
