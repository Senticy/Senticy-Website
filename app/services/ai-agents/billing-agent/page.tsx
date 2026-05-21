import type { Metadata } from 'next'
import Link from 'next/link'
import '@/app/page-styles.css'
import InnerNav from '@/components/InnerNav'
import InnerCTA from '@/components/InnerCTA'

export const metadata: Metadata = {
  title: 'AI Billing Agent | SentiCy',
  description: "Automate time tracking, invoice generation, and payment follow-up with AI.",
}

export default function Page() {
  return (
    <>
      <InnerNav />
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="page-eyebrow">AI Agents</span>
          <h1 className="page-title">Billing That Runs<br /><span>on Autopilot.</span></h1>
          <p className="page-sub">Track time entries, generate invoices, follow up on outstanding payments, and reconcile accounts — automatically, accurately, and without human effort.</p>
          <div className="cta-row" style={{ marginTop: 36 }}>
            <Link href="/ai-audit" className="btn-primary">Automate Your Billing</Link>
            <Link href="/contact" className="btn-secondary">Talk to an Expert</Link>
          </div>
        </div>
      </div>
      <div className="page-body">
        <div className="divider" />
        <div className="section">
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <p className="section-sub" style={{ margin: '0 auto 48px' }}>The SentiCy Billing Agent integrates with your practice management platform and handles the complete billing cycle from time capture to payment received.</p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              {['Time entry capture','Invoice generation','Payment follow-up','Account reconciliation','Write-off analysis','Billing reports'].map((b,i) => (
                <div key={i} style={{ background: 'rgba(7,30,38,0.8)', border: '1px solid rgba(9,163,178,0.1)', borderRadius: 8, padding: '12px 20px', fontSize: 14, color: 'rgba(255,255,255,0.6)' }}><span style={{ color: '#09A3B2', marginRight: 8 }}>✓</span>{b}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="divider" />
        <InnerCTA headline="Automate Your Billing Cycle" sub="See how the billing agent recovers unbilled time, reduces DSO, and saves your billing team 20+ hours per month." />
      </div>
    </>
  )
}
