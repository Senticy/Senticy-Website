import type { Metadata } from 'next'
import Link from 'next/link'
import '@/app/page-styles.css'
import InnerNav from '@/components/InnerNav'

export const metadata: Metadata = {
  title: 'Sitemap | SentiCy',
  description: 'Complete sitemap for SentiCy — AI-powered IT, cybersecurity, and managed services for law firms, financial firms, and healthcare in CA and NV.',
}

const sections = [
  { title: 'AI Agents', links: [
    { label: 'AI Agents Overview', href: '/services/ai-agents' },
    { label: 'Client Intake Agent', href: '/services/ai-agents/intake-agent' },
    { label: 'Compliance Agent', href: '/services/ai-agents/compliance-agent' },
    { label: 'Threat Detection Agent', href: '/services/ai-agents/threat-detection-agent' },
    { label: 'Help Desk Agent', href: '/services/ai-agents/help-desk-agent' },
    { label: 'Billing Agent', href: '/services/ai-agents/billing-agent' },
    { label: 'Workflow Automation', href: '/services/ai-agents/workflow-automation' },
  ]},
  { title: 'Cybersecurity', links: [
    { label: 'Cybersecurity Overview', href: '/services/cybersecurity' },
    { label: '24/7 Threat Monitoring', href: '/services/cybersecurity/24-7-monitoring' },
    { label: 'Endpoint Protection', href: '/services/cybersecurity/endpoint-protection' },
    { label: 'Email Security', href: '/services/cybersecurity/email-security' },
    { label: 'Dark Web Monitoring', href: '/services/cybersecurity/dark-web-monitoring' },
    { label: 'Vulnerability Management', href: '/services/cybersecurity/vulnerability-management' },
    { label: 'Compliance Management', href: '/services/cybersecurity/compliance-management' },
    { label: 'Security Awareness Training', href: '/services/cybersecurity/security-awareness-training' },
  ]},
  { title: 'Managed IT', links: [
    { label: 'Managed IT Overview', href: '/services/managed-it' },
    { label: 'IT Support & Help Desk', href: '/services/managed-it/it-support-help-desk' },
    { label: 'IT Strategy & Planning', href: '/services/managed-it/it-strategy-planning' },
    { label: 'Microsoft 365 Management', href: '/services/managed-it/microsoft-365' },
    { label: 'Cloud Solutions', href: '/services/managed-it/cloud-solutions' },
    { label: 'Business Continuity & Backup', href: '/services/managed-it/business-continuity-backup' },
    { label: 'Vendor Management', href: '/services/managed-it/vendor-management' },
    { label: 'VoIP Phone Systems', href: '/services/managed-it/voip-phone-systems' },
    { label: 'Office Moves & Projects', href: '/services/managed-it/office-moves-projects' },
    { label: 'Device Lifecycle Management', href: '/services/managed-it/device-lifecycle' },
  ]},
  { title: 'Co-Managed IT', links: [
    { label: 'Co-Managed IT Overview', href: '/services/co-managed-it' },
    { label: 'IT Department Support', href: '/services/co-managed-it/it-department-support' },
    { label: 'Help Desk Overflow', href: '/services/co-managed-it/help-desk-overflow' },
    { label: 'IT Project Support', href: '/services/co-managed-it/project-support' },
    { label: 'Security Tool Management', href: '/services/co-managed-it/security-tool-management' },
    { label: 'Documentation & Process', href: '/services/co-managed-it/documentation-support' },
  ]},
  { title: 'Industries', links: [
    { label: 'Industries Overview', href: '/industries' },
    { label: 'Law Firms', href: '/industries/law-firms' },
    { label: 'Financial Firms', href: '/industries/financial-firms' },
    { label: 'Healthcare', href: '/industries/healthcare' },
  ]},
  { title: 'Areas We Serve', links: [
    { label: 'IT Support Los Angeles', href: '/areas/los-angeles' },
    { label: 'IT Support Las Vegas', href: '/areas/las-vegas' },
    { label: 'IT Support Henderson NV', href: '/areas/henderson' },
    { label: 'IT Support Orange County', href: '/areas/orange-county' },
    { label: 'IT Support San Diego', href: '/areas/san-diego' },
    { label: 'IT Support San Francisco', href: '/areas/san-francisco' },
  ]},
  { title: 'Company', links: [
    { label: 'About SentiCy', href: '/about' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Book a Free AI Audit', href: '/ai-audit' },
    { label: 'FAQ', href: '/resources/faq' },
  ]},
]

export default function SitemapPage() {
  return (
    <>
      <style>{`.sitemap-link:hover { color: #09A3B2 !important; }`}</style>
      <InnerNav />
      <div className="page-hero" style={{ minHeight: '30vh' }}>
        <div className="page-hero-inner">
          <span className="page-eyebrow">Sitemap</span>
          <h1 className="page-title">Everything on<br /><span>SentiCy.com</span></h1>
        </div>
      </div>
      <div className="page-body">
        <div className="divider" />
        <div style={{ padding: '80px 48px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 48 }}>
            {sections.map((section, si) => (
              <div key={si}>
                <h2 style={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: '#09A3B2', marginBottom: 20 }}>{section.title}</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {section.links.map((link, li) => (
                    <Link key={li} href={link.href} className="sitemap-link" style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.2s' }}>{link.label}</Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
