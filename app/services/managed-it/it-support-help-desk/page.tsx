import type { Metadata } from 'next'
import Link from 'next/link'
import '@/app/page-styles.css'
import InnerNav from '@/components/InnerNav'
import InnerCTA from '@/components/InnerCTA'

export const metadata: Metadata = {
  title: 'IT Support & Help Desk | SentiCy',
  description: "Responsive IT support with sub-5-minute response times and AI-powered first-line resolution.",
}

export default function Page() {
  return (
    <>
      <InnerNav />
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="page-eyebrow">Managed IT</span>
          <h1 className="page-title">IT Support That<br /><span>Actually Responds.</span></h1>
          <p className="page-sub">Sub-5-minute response times. AI resolves most issues before a human is needed. Onsite and remote support across California and Nevada — 24/7 for critical issues.</p>
          <div className="cta-row" style={{ marginTop: 36 }}>
            <Link href="/ai-audit" className="btn-primary">Get Support Today</Link>
            <Link href="/contact" className="btn-secondary">Talk to an Expert</Link>
          </div>
        </div>
      </div>
      <div className="page-body">
        <div className="divider" />
        <div className="section">
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <p className="section-sub" style={{ margin: '0 auto 48px' }}>SentiCy&apos;s help desk combines AI first-response with experienced engineers — common issues resolved instantly, complex issues get expert attention fast.</p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              {['Sub-5-minute response','AI first-line resolution','Remote & onsite support','Ticket tracking & reporting','After-hours coverage','Dedicated account manager'].map((b,i) => (
                <div key={i} style={{ background: 'rgba(7,30,38,0.8)', border: '1px solid rgba(9,163,178,0.1)', borderRadius: 8, padding: '12px 20px', fontSize: 14, color: 'rgba(255,255,255,0.6)' }}><span style={{ color: '#09A3B2', marginRight: 8 }}>✓</span>{b}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="divider" />
        <InnerCTA headline="Get Responsive IT Support" sub="Stop waiting hours for IT help. See how SentiCy delivers sub-5-minute response times and AI-powered first-line resolution." />
      </div>
    </>
  )
}
