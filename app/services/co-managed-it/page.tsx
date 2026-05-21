import type { Metadata } from 'next'
import Link from 'next/link'
import '@/app/page-styles.css'
import InnerNav from '@/components/InnerNav'
import InnerCTA from '@/components/InnerCTA'

export const metadata: Metadata = {
  title: 'Co-Managed IT Services | SentiCy',
  description: "Augment your internal IT team with SentiCy's co-managed IT services — cybersecurity expertise, help desk overflow, project support, and more.",
}

const services = [
  { icon: '👥', title: 'IT Department Support', href: '/services/co-managed-it/it-department-support', desc: 'Add capacity, cybersecurity expertise, and strategic guidance alongside your existing IT staff.' },
  { icon: '📥', title: 'Help Desk Overflow', href: '/services/co-managed-it/help-desk-overflow', desc: 'After-hours, weekend, and peak demand coverage without adding headcount.' },
  { icon: '🚀', title: 'IT Project Support', href: '/services/co-managed-it/project-support', desc: 'Execute the projects your internal team wants to do but never has bandwidth for.' },
  { icon: '🔧', title: 'Security Tool Management', href: '/services/co-managed-it/security-tool-management', desc: 'Expert management and optimization of your existing security stack.' },
  { icon: '📚', title: 'Documentation & Process', href: '/services/co-managed-it/documentation-support', desc: 'Build the IT documentation library your operations depend on.' },
]

export default function CoManagedITPage() {
  return (
    <>
      <InnerNav />
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="page-eyebrow">Co-Managed IT</span>
          <h1 className="page-title">Your IT Team Gets<br /><span>a Powerful Partner.</span></h1>
          <p className="page-sub">For organizations that already have internal IT staff but need additional capacity, cybersecurity depth, project support, or after-hours coverage. We work with your team — not instead of them.</p>
          <div className="cta-row" style={{ marginTop: 36 }}>
            <Link href="/ai-audit" className="btn-primary">Schedule a Consultation</Link>
            <Link href="/contact" className="btn-secondary">Talk to an Expert</Link>
          </div>
        </div>
      </div>
      <div className="page-body">
        <div className="divider" />
        <div style={{ padding: '80px 48px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
            <div>
              <p className="page-eyebrow">Who It&apos;s For</p>
              <h2 className="section-title">Built for Teams That<br /><span>Need More Firepower.</span></h2>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.4)', lineHeight: 1.9, marginBottom: 24 }}>Co-managed IT is designed for organizations where the internal IT person or team is stretched — handling tickets, projects, security requirements, and leadership requests all at once.</p>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.4)', lineHeight: 1.9 }}>SentiCy fills the gaps without forcing you to hire a full department before you&apos;re ready.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {['Your internal IT is overwhelmed with tickets','Projects keep getting pushed back','After-hours coverage is a gap','Cybersecurity expertise is thin','Documentation is nonexistent','Security tools are misconfigured'].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 20px', background: 'rgba(7,30,38,0.8)', border: '1px solid rgba(9,163,178,0.1)', borderRadius: 8, fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>
                  <span style={{ color: '#fb842c', fontWeight: 700, flexShrink: 0 }}>→</span>{item}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="divider" />
        <div className="section">
          <p className="page-eyebrow">Co-Managed Services</p>
          <h2 className="section-title">Everything Your Team<br /><span>Needs to Thrive.</span></h2>
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
        <InnerCTA headline="Give Your IT Team the Support They Need" sub="See how SentiCy's co-managed model adds capacity, cybersecurity depth, and project execution without replacing your existing team." />
      </div>
    </>
  )
}
