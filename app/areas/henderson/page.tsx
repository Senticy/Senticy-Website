import type { Metadata } from 'next'
import Link from 'next/link'
import '@/app/page-styles.css'
import InnerNav from '@/components/InnerNav'
import InnerCTA from '@/components/InnerCTA'

export const metadata: Metadata = {
  title: 'IT Support Henderson NV | SentiCy',
  description: "AI-powered managed IT and cybersecurity for Henderson, Nevada businesses.",
}

export default function Page() {
  return (
    <>
      <InnerNav />
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="page-eyebrow">Henderson, NV</span>
          <h1 className="page-title">Enterprise IT for<br /><span>Henderson Businesses.</span></h1>
          <p className="page-sub">SentiCy provides managed IT, cybersecurity, and AI automation for businesses in Henderson, NV — with the responsiveness of a local partner and enterprise-grade capability.</p>
          <div className="cta-row" style={{ marginTop: 36 }}>
            <Link href="/ai-audit" className="btn-primary">Book a Free Audit</Link>
            <Link href="/contact" className="btn-secondary">Talk to an Expert</Link>
          </div>
        </div>
      </div>
      <div className="page-body">
        <div className="divider" />
        <div className="section">
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <p className="section-sub" style={{ margin: '0 auto 48px' }}>Henderson&apos;s fastest-growing businesses choose SentiCy for AI-powered IT, cybersecurity, and automation that scales with them.</p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              {['Henderson','Green Valley','Anthem','Seven Hills','Whitney Ranch','Southern Highlands'].map((b,i) => (
                <div key={i} style={{ background: 'rgba(7,30,38,0.8)', border: '1px solid rgba(9,163,178,0.1)', borderRadius: 8, padding: '12px 20px', fontSize: 14, color: 'rgba(255,255,255,0.6)' }}><span style={{ color: '#09A3B2', marginRight: 8 }}>✓</span>{b}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="divider" />
        <InnerCTA headline="Book a Free Henderson Audit" sub="See how SentiCy serves Henderson businesses with the same enterprise IT and cybersecurity trusted by leading firms across NV." />
      </div>
    </>
  )
}
