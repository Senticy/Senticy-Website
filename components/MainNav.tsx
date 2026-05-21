'use client'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

const navItems = [
  {
    label: 'AI Agents', href: '/services/ai-agents',
    links: [
      { label: 'AI Agents Overview', href: '/services/ai-agents' },
      { label: 'Client Intake Agent', href: '/services/ai-agents/intake-agent' },
      { label: 'Compliance Agent', href: '/services/ai-agents/compliance-agent' },
      { label: 'Threat Detection Agent', href: '/services/ai-agents/threat-detection-agent' },
      { label: 'Help Desk Agent', href: '/services/ai-agents/help-desk-agent' },
      { label: 'Billing Agent', href: '/services/ai-agents/billing-agent' },
      { label: 'Workflow Automation', href: '/services/ai-agents/workflow-automation' },
    ]
  },
  {
    label: 'Cybersecurity', href: '/services/cybersecurity',
    links: [
      { label: 'Cybersecurity Overview', href: '/services/cybersecurity' },
      { label: '24/7 Threat Monitoring', href: '/services/cybersecurity/24-7-monitoring' },
      { label: 'Endpoint Protection', href: '/services/cybersecurity/endpoint-protection' },
      { label: 'Email Security', href: '/services/cybersecurity/email-security' },
      { label: 'Dark Web Monitoring', href: '/services/cybersecurity/dark-web-monitoring' },
      { label: 'Vulnerability Management', href: '/services/cybersecurity/vulnerability-management' },
      { label: 'Compliance Management', href: '/services/cybersecurity/compliance-management' },
      { label: 'Security Awareness Training', href: '/services/cybersecurity/security-awareness-training' },
    ]
  },
  {
    label: 'Managed IT', href: '/services/managed-it',
    links: [
      { label: 'Managed IT Overview', href: '/services/managed-it' },
      { label: 'IT Support & Help Desk', href: '/services/managed-it/it-support-help-desk' },
      { label: 'IT Strategy & Planning', href: '/services/managed-it/it-strategy-planning' },
      { label: 'Microsoft 365', href: '/services/managed-it/microsoft-365' },
      { label: 'Cloud Solutions', href: '/services/managed-it/cloud-solutions' },
      { label: 'Business Continuity & Backup', href: '/services/managed-it/business-continuity-backup' },
      { label: 'Vendor Management', href: '/services/managed-it/vendor-management' },
      { label: 'VoIP Phone Systems', href: '/services/managed-it/voip-phone-systems' },
      { label: 'Office Moves & Projects', href: '/services/managed-it/office-moves-projects' },
    ]
  },
  {
    label: 'Co-Managed IT', href: '/services/co-managed-it',
    links: [
      { label: 'Co-Managed IT Overview', href: '/services/co-managed-it' },
      { label: 'IT Department Support', href: '/services/co-managed-it/it-department-support' },
      { label: 'Help Desk Overflow', href: '/services/co-managed-it/help-desk-overflow' },
      { label: 'IT Project Support', href: '/services/co-managed-it/project-support' },
      { label: 'Security Tool Management', href: '/services/co-managed-it/security-tool-management' },
      { label: 'Documentation & Process', href: '/services/co-managed-it/documentation-support' },
    ]
  },
  {
    label: 'Industries', href: '/industries',
    links: [
      { label: 'Industries Overview', href: '/industries' },
      { label: 'Law Firms', href: '/industries/law-firms' },
      { label: 'Financial Firms', href: '/industries/financial-firms' },
      { label: 'Healthcare', href: '/industries/healthcare' },
    ]
  },
  {
    label: 'About', href: '/about',
    links: [
      { label: 'About SentiCy', href: '/about' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'FAQ', href: '/resources/faq' },
      { label: 'Sitemap', href: '/sitemap' },
    ]
  },
]

function DropdownItem({ item }: { item: typeof navItems[0] }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          background: 'none', border: 'none', cursor: 'pointer',
          color: open ? '#09A3B2' : 'rgba(255,255,255,0.65)',
          fontSize: 14, display: 'flex', alignItems: 'center', gap: 4,
          padding: '4px 0', transition: 'color 0.2s', fontFamily: 'inherit',
        }}
        onMouseEnter={e => (e.currentTarget.style.color = '#09A3B2')}
        onMouseLeave={e => { if (!open) e.currentTarget.style.color = 'rgba(255,255,255,0.65)' }}
      >
        {item.label}
        <span style={{ fontSize: 10, display: 'inline-block', transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}>▾</span>
      </button>

      {open && (
        <div style={{
          position: 'absolute', top: 'calc(100% + 12px)', left: '50%',
          transform: 'translateX(-50%)',
          background: '#010D12', border: '1px solid rgba(9,163,178,0.25)',
          borderRadius: 10, padding: '8px 0', minWidth: 220,
          boxShadow: '0 20px 60px rgba(0,0,0,0.7)',
          zIndex: 300,
        }}>
          {item.links.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                display: 'block', padding: '10px 20px',
                fontSize: 13,
                textDecoration: 'none', transition: 'all 0.15s',
                borderBottom: i === 0 ? '1px solid rgba(9,163,178,0.1)' : 'none',
                fontWeight: i === 0 ? 600 : 400,
                color: i === 0 ? '#09A3B2' : 'rgba(255,255,255,0.65)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(9,163,178,0.08)'
                ;(e.currentTarget as HTMLElement).style.color = '#fff'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'transparent'
                ;(e.currentTarget as HTMLElement).style.color = i === 0 ? '#09A3B2' : 'rgba(255,255,255,0.65)'
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default function MainNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: scrolled ? '12px 48px' : '18px 48px',
      background: 'rgba(1,13,18,0.96)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(9,163,178,0.12)',
      transition: 'padding 0.3s ease',
      width: '100%',
    }}>
      <Link href="/" style={{
        fontSize: 22, fontWeight: 700,
        background: 'linear-gradient(90deg,#FFB800,#fb842c)',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        textDecoration: 'none', letterSpacing: -0.5, flexShrink: 0,
      }}>SentiCy</Link>

      <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
        {navItems.map((item, i) => (
          <DropdownItem key={i} item={item} />
        ))}
      </div>

      <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexShrink: 0 }}>
        <a href="tel:4243023353" style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
        >(424) 302-3353</a>
        <Link href="/ai-audit" style={{
          background: 'linear-gradient(135deg,#fb842c,#FFB800)',
          color: '#010D12', padding: '9px 20px',
          borderRadius: 6, fontSize: 13, fontWeight: 700,
          textDecoration: 'none', boxShadow: '0 0 20px rgba(251,132,44,0.35)',
        }}>Free AI Audit</Link>
      </div>
    </nav>
  )
}
