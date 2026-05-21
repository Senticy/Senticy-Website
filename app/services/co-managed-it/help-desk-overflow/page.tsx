import type { Metadata } from 'next'
import Link from 'next/link'
import '@/app/page-styles.css'
import InnerNav from '@/components/InnerNav'
import InnerCTA from '@/components/InnerCTA'

export const metadata: Metadata = {
  title: 'Help Desk Overflow Support | SentiCy',
  description: "Handle IT ticket overflow, after-hours support, and peak demand without hiring more staff.",
}

export default function Page() {
  return (
    <>
      <InnerNav />
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="page-eyebrow">Co-Managed IT</span>
          <h1 className="page-title">Handle Every Ticket.<br /><span>Without More Headcount.</span></h1>
          <p className="page-sub">When your internal team is overwhelmed, we pick up the overflow seamlessly — after hours, weekends, high-demand periods, and vacation coverage. Your users never notice the difference.</p>
          <div className="cta-row" style={{ marginTop: 36 }}>
            <Link href="/ai-audit" className="btn-primary">Add Overflow Capacity</Link>
            <Link href="/contact" className="btn-secondary">Talk to an Expert</Link>
          </div>
        </div>
      </div>
      <div className="page-body">
        <div className="divider" />
        <div className="section">
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <p className="section-sub" style={{ margin: '0 auto 48px' }}>SentiCy&apos;s overflow support integrates with your existing ticketing system, follows your escalation procedures, and maintains your service standards exactly.</p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              {['After-hours coverage','Weekend & holiday support','Peak demand handling','Vacation coverage','Escalation integration','Same-brand experience'].map((b,i) => (
                <div key={i} style={{ background: 'rgba(7,30,38,0.8)', border: '1px solid rgba(9,163,178,0.1)', borderRadius: 8, padding: '12px 20px', fontSize: 14, color: 'rgba(255,255,255,0.6)' }}><span style={{ color: '#09A3B2', marginRight: 8 }}>✓</span>{b}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="divider" />
        <InnerCTA headline="Add Overflow Capacity" sub="Stop letting tickets pile up. See how SentiCy's overflow support scales with your demand without adding headcount." />
      </div>
    </>
  )
}
