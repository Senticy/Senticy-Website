import type { Metadata } from 'next'
import Link from 'next/link'
import '@/app/page-styles.css'
import InnerNav from '@/components/InnerNav'
import InnerCTA from '@/components/InnerCTA'

export const metadata: Metadata = {
  title: 'Security Awareness Training | SentiCy',
  description: "Train your team to recognize and stop cyberattacks with AI-powered security awareness training.",
}

export default function Page() {
  return (
    <>
      <InnerNav />
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="page-eyebrow">Cybersecurity</span>
          <h1 className="page-title">Your Team Is Your<br /><span>Best Defense.</span></h1>
          <p className="page-sub">AI-personalized security awareness training that reduces human error by 90%. Phishing simulations, video modules, and real-time coaching — tailored to your industry and team roles.</p>
          <div className="cta-row" style={{ marginTop: 36 }}>
            <Link href="/ai-audit" className="btn-primary">Train Your Team Today</Link>
            <Link href="/contact" className="btn-secondary">Talk to an Expert</Link>
          </div>
        </div>
      </div>
      <div className="page-body">
        <div className="divider" />
        <div className="section">
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <p className="section-sub" style={{ margin: '0 auto 48px' }}>SentiCy&apos;s security awareness training platform delivers role-based training, simulated phishing attacks, and behavioral coaching that actually changes employee habits.</p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              {['Phishing simulations','Role-based training modules','Real-time coaching','Progress tracking','Compliance reporting','Industry-specific content'].map((b,i) => (
                <div key={i} style={{ background: 'rgba(7,30,38,0.8)', border: '1px solid rgba(9,163,178,0.1)', borderRadius: 8, padding: '12px 20px', fontSize: 14, color: 'rgba(255,255,255,0.6)' }}><span style={{ color: '#09A3B2', marginRight: 8 }}>✓</span>{b}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="divider" />
        <InnerCTA headline="Train Your Team Today" sub="Human error causes 82% of security incidents. See how SentiCy's training program reduces that risk to near zero." />
      </div>
    </>
  )
}
