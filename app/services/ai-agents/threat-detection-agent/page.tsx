import type { Metadata } from 'next'
import Link from 'next/link'
import '@/app/page-styles.css'
import InnerNav from '@/components/InnerNav'
import InnerCTA from '@/components/InnerCTA'

export const metadata: Metadata = {
  title: 'AI Threat Detection Agent | SentiCy',
  description: "24/7 AI-powered threat detection that neutralizes cyberattacks in milliseconds.",
}

export default function Page() {
  return (
    <>
      <InnerNav />
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="page-eyebrow">AI Agents</span>
          <h1 className="page-title">Threats Stopped Before<br /><span>You See Them.</span></h1>
          <p className="page-sub">Our AI threat detection agent monitors every endpoint, every login attempt, every network packet — and neutralizes anomalies in milliseconds. Not hours. Not days.</p>
          <div className="cta-row" style={{ marginTop: 36 }}>
            <Link href="/ai-audit" className="btn-primary">Protect Your Firm Now</Link>
            <Link href="/contact" className="btn-secondary">Talk to an Expert</Link>
          </div>
        </div>
      </div>
      <div className="page-body">
        <div className="divider" />
        <div className="section">
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <p className="section-sub" style={{ margin: '0 auto 48px' }}>The SentiCy Threat Detection Agent uses behavioral analysis and machine learning to identify and respond to threats faster than any human security team.</p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              {['Behavioral anomaly detection','Zero-day threat response','Lateral movement prevention','Automated threat isolation','Real-time alerts','Forensic logging'].map((b,i) => (
                <div key={i} style={{ background: 'rgba(7,30,38,0.8)', border: '1px solid rgba(9,163,178,0.1)', borderRadius: 8, padding: '12px 20px', fontSize: 14, color: 'rgba(255,255,255,0.6)' }}><span style={{ color: '#09A3B2', marginRight: 8 }}>✓</span>{b}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="divider" />
        <InnerCTA headline="Protect Your Firm Right Now" sub="See how our threat detection agent has prevented ransomware, data breaches, and insider threats for firms across CA and NV." />
      </div>
    </>
  )
}
