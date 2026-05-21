import type { Metadata } from 'next'
import Link from 'next/link'
import '@/app/page-styles.css'
import InnerNav from '@/components/InnerNav'
import InnerCTA from '@/components/InnerCTA'

export const metadata: Metadata = {
  title: 'Security Tool Management | SentiCy',
  description: "Manage and optimize your security tools with expert oversight and AI-powered operations.",
}

export default function Page() {
  return (
    <>
      <InnerNav />
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="page-eyebrow">Co-Managed IT</span>
          <h1 className="page-title">Security Tools That<br /><span>Actually Work.</span></h1>
          <p className="page-sub">SentiCy manages, tunes, and optimizes your existing security stack — SIEM, EDR, firewalls, email security — so they deliver maximum protection and minimum noise.</p>
          <div className="cta-row" style={{ marginTop: 36 }}>
            <Link href="/ai-audit" className="btn-primary">Optimize Your Security Stack</Link>
            <Link href="/contact" className="btn-secondary">Talk to an Expert</Link>
          </div>
        </div>
      </div>
      <div className="page-body">
        <div className="divider" />
        <div className="section">
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <p className="section-sub" style={{ margin: '0 auto 48px' }}>Most organizations have security tools that are misconfigured, under-utilized, or generating so many alerts that real threats get missed. SentiCy fixes that.</p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              {['SIEM management & tuning','EDR optimization','Firewall management','Email security management','Alert triage & response','Tool consolidation'].map((b,i) => (
                <div key={i} style={{ background: 'rgba(7,30,38,0.8)', border: '1px solid rgba(9,163,178,0.1)', borderRadius: 8, padding: '12px 20px', fontSize: 14, color: 'rgba(255,255,255,0.6)' }}><span style={{ color: '#09A3B2', marginRight: 8 }}>✓</span>{b}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="divider" />
        <InnerCTA headline="Optimize Your Security Stack" sub="See how SentiCy gets more value out of your existing security investments with expert management and continuous optimization." />
      </div>
    </>
  )
}
