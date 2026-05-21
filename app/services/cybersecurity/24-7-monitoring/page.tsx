import type { Metadata } from 'next'
import Link from 'next/link'
import '@/app/page-styles.css'
import InnerNav from '@/components/InnerNav'
import InnerCTA from '@/components/InnerCTA'

export const metadata: Metadata = {
  title: '24/7 Threat Monitoring | SentiCy',
  description: "Round-the-clock AI-powered threat monitoring that never sleeps.",
}

export default function Page() {
  return (
    <>
      <InnerNav />
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="page-eyebrow">Cybersecurity</span>
          <h1 className="page-title">Always Watching.<br /><span>Never Sleeping.</span></h1>
          <p className="page-sub">Our AI security operations center monitors your environment 24/7/365. Every anomaly flagged. Every threat neutralized — before business hours, after hours, weekends, holidays.</p>
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
            <p className="section-sub" style={{ margin: '0 auto 48px' }}>While your team sleeps, SentiCy&apos;s AI monitoring platform processes millions of security events per hour — identifying and stopping attacks in real time.</p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              {['24/7/365 coverage','AI anomaly detection','Automated threat response','SIEM correlation','Incident escalation','Compliance logging'].map((b,i) => (
                <div key={i} style={{ background: 'rgba(7,30,38,0.8)', border: '1px solid rgba(9,163,178,0.1)', borderRadius: 8, padding: '12px 20px', fontSize: 14, color: 'rgba(255,255,255,0.6)' }}><span style={{ color: '#09A3B2', marginRight: 8 }}>✓</span>{b}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="divider" />
        <InnerCTA headline="Activate 24/7 Protection" sub="Don't leave your firm unprotected after hours. Get round-the-clock AI monitoring that costs less than a single security hire." />
      </div>
    </>
  )
}
