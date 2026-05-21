import type { Metadata } from 'next'
import Link from 'next/link'
import '@/app/page-styles.css'
import InnerNav from '@/components/InnerNav'
import InnerCTA from '@/components/InnerCTA'

export const metadata: Metadata = {
  title: 'Managed IT Services | SentiCy',
  description: "AI-enhanced managed IT services for law firms, financial firms, and healthcare. Help desk, strategy, Microsoft 365, cloud, backup, and more.",
}

const services = [
  { icon: '🎧', title: 'IT Support & Help Desk', href: '/services/managed-it/it-support-help-desk', desc: 'Sub-5-minute response times. AI first-line resolution. Remote and onsite support across CA and NV.' },
  { icon: '🗺️', title: 'IT Strategy & Planning', href: '/services/managed-it/it-strategy-planning', desc: 'Virtual CIO services, technology roadmaps, and budget planning aligned with your business goals.' },
  { icon: '📊', title: 'Microsoft 365 Management', href: '/services/managed-it/microsoft-365', desc: 'Complete M365 administration — users, licenses, Teams, SharePoint, OneDrive, and Copilot readiness.' },
  { icon: '☁️', title: 'Cloud Solutions', href: '/services/managed-it/cloud-solutions', desc: 'Enterprise-grade cloud infrastructure on Azure and AWS. Secure, compliant, and built for performance.' },
  { icon: '💾', title: 'Business Continuity & Backup', href: '/services/managed-it/business-continuity-backup', desc: 'Automated encrypted backups, disaster recovery planning, and tested continuity procedures.' },
  { icon: '🤝', title: 'Vendor Management', href: '/services/managed-it/vendor-management', desc: 'We coordinate all your technology vendors — internet, software, hardware, phones — so you never deal with finger-pointing.' },
  { icon: '📞', title: 'VoIP Phone Systems', href: '/services/managed-it/voip-phone-systems', desc: 'Modern VoIP phone systems with compliance recording, mobile integration, and enterprise features.' },
  { icon: '🏢', title: 'Office Moves & Projects', href: '/services/managed-it/office-moves-projects', desc: 'Complete IT planning and execution for office moves, expansions, and technology projects.' },
  { icon: '📱', title: 'Device Lifecycle Management', href: '/services/managed-it/device-lifecycle', desc: 'Procurement, deployment, patching, and secure disposal — we manage every device in your fleet.' },
]

export default function ManagedITPage() {
  return (
    <>
      <InnerNav />
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="page-eyebrow">Managed IT</span>
          <h1 className="page-title">IT That Works.<br /><span>Without the Headaches.</span></h1>
          <p className="page-sub">AI-enhanced managed IT services that keep your firm productive, your systems reliable, and your technology aligned with your business goals — proactively, not reactively.</p>
          <div className="cta-row" style={{ marginTop: 36 }}>
            <Link href="/ai-audit" className="btn-primary">Get a Free IT Assessment</Link>
            <Link href="/contact" className="btn-secondary">Talk to an Expert</Link>
          </div>
        </div>
      </div>
      <div className="page-body">
        <div className="divider" />
        <div style={{ padding: '80px 48px', background: 'rgba(7,30,38,0.3)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
              <div>
                <p className="page-eyebrow">The Problem</p>
                <h2 className="section-title">Reactive IT Is<br /><span>Killing Your Productivity.</span></h2>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.4)', lineHeight: 1.9 }}>When technology is handled only after something breaks, the business pays for it. Lost time. Frustrated employees. Vendor chaos. Surprise costs.</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  { problem: 'Employees wait hours for IT support', solution: 'Sub-5-minute response, AI first-line resolution' },
                  { problem: 'No technology roadmap or budget', solution: 'Virtual CIO, roadmaps, budget planning' },
                  { problem: 'Vendors point fingers at each other', solution: 'Single point of contact for all vendors' },
                  { problem: 'Surprise hardware failures and costs', solution: 'Proactive lifecycle management and budgeting' },
                ].map((row, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, padding: '16px 0', borderBottom: '1px solid rgba(9,163,178,0.08)' }}>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ color: '#ef4444' }}>✕</span>{row.problem}</div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ color: '#09A3B2' }}>✓</span>{row.solution}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="divider" />
        <div className="section">
          <p className="page-eyebrow">What&apos;s Included</p>
          <h2 className="section-title">Everything Your Firm Needs.<br /><span>Nothing You Don&apos;t.</span></h2>
          <p className="section-sub">A complete managed IT program covering support, strategy, cloud, security, backup, vendors, and more — all under one roof.</p>
          <div className="grid-3">
            {services.map((s, i) => (
              <Link key={i} href={s.href} style={{ textDecoration: 'none' }}>
                <div className="card" style={{ cursor: 'pointer' }}>
                  <div className="card-icon">{s.icon}</div>
                  <h3 className="card-title">{s.title}</h3>
                  <p className="card-desc">{s.desc}</p>
                  <p style={{ fontSize: 13, color: '#09A3B2', marginTop: 16, fontWeight: 600 }}>Learn more →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="divider" />
        <InnerCTA headline="Is Your IT Holding Your Firm Back?" sub="Get a free IT assessment and find out exactly where your technology gaps are — and what it would take to fix them." />
      </div>
    </>
  )
}
