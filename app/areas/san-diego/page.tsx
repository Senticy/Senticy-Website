import type { Metadata } from 'next'
import Link from 'next/link'
import '@/app/page-styles.css'
import InnerNav from '@/components/InnerNav'
import InnerCTA from '@/components/InnerCTA'

export const metadata: Metadata = {
  title: 'IT Support San Diego | SentiCy',
  description: "AI-powered managed IT and cybersecurity for San Diego businesses.",
}

export default function Page() {
  return (
    <>
      <InnerNav />
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="page-eyebrow">San Diego, CA</span>
          <h1 className="page-title">Enterprise IT for<br /><span>San Diego Businesses.</span></h1>
          <p className="page-sub">SentiCy provides managed IT, cybersecurity, and AI automation for San Diego businesses — from downtown law firms to Sorrento Valley tech companies and La Jolla medical practices.</p>
          <div className="cta-row" style={{ marginTop: 36 }}>
            <Link href="/ai-audit" className="btn-primary">Book a Free San Diego Audit</Link>
            <Link href="/contact" className="btn-secondary">Talk to an Expert</Link>
          </div>
        </div>
      </div>
      <div className="page-body">
        <div className="divider" />
        <div className="section">
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <p className="section-sub" style={{ margin: '0 auto 48px' }}>San Diego&apos;s professional services firms choose SentiCy for AI-powered IT, cybersecurity, and compliance that keeps them protected and productive.</p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              {['Downtown San Diego','Sorrento Valley','La Jolla','Chula Vista','North County','Mission Valley'].map((b,i) => (
                <div key={i} style={{ background: 'rgba(7,30,38,0.8)', border: '1px solid rgba(9,163,178,0.1)', borderRadius: 8, padding: '12px 20px', fontSize: 14, color: 'rgba(255,255,255,0.6)' }}><span style={{ color: '#09A3B2', marginRight: 8 }}>✓</span>{b}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="divider" />
        <InnerCTA headline="Book a Free San Diego Audit" sub="See how SentiCy serves San Diego businesses with AI-powered IT and enterprise cybersecurity." />
      </div>
    </>
  )
}
