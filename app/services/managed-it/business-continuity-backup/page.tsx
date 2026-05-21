import type { Metadata } from 'next'
import Link from 'next/link'
import '@/app/page-styles.css'
import InnerNav from '@/components/InnerNav'
import InnerCTA from '@/components/InnerCTA'

export const metadata: Metadata = {
  title: 'Business Continuity & Backup | SentiCy',
  description: "Automated backups and disaster recovery that protect your firm 24/7.",
}

export default function Page() {
  return (
    <>
      <InnerNav />
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="page-eyebrow">Managed IT</span>
          <h1 className="page-title">Your Data Is Safe.<br /><span>Always.</span></h1>
          <p className="page-sub">Automated encrypted backups every 15 minutes. Point-in-time recovery. Tested disaster recovery plans. Your data is never at risk — and your firm is never down.</p>
          <div className="cta-row" style={{ marginTop: 36 }}>
            <Link href="/ai-audit" className="btn-primary">Protect Your Data</Link>
            <Link href="/contact" className="btn-secondary">Talk to an Expert</Link>
          </div>
        </div>
      </div>
      <div className="page-body">
        <div className="divider" />
        <div className="section">
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <p className="section-sub" style={{ margin: '0 auto 48px' }}>SentiCy&apos;s business continuity program goes beyond backup — we test your recovery procedures, document your continuity plan, and ensure you can survive any disaster.</p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              {['15-minute backup intervals','Point-in-time recovery','Offsite encrypted storage','Disaster recovery planning','Annual DR testing','RTO/RPO guarantees'].map((b,i) => (
                <div key={i} style={{ background: 'rgba(7,30,38,0.8)', border: '1px solid rgba(9,163,178,0.1)', borderRadius: 8, padding: '12px 20px', fontSize: 14, color: 'rgba(255,255,255,0.6)' }}><span style={{ color: '#09A3B2', marginRight: 8 }}>✓</span>{b}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="divider" />
        <InnerCTA headline="Protect Your Firm" sub="One disaster without a recovery plan can end your firm. See how SentiCy's business continuity program eliminates that risk." />
      </div>
    </>
  )
}
