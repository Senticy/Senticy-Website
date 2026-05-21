import type { Metadata } from 'next'
import Link from 'next/link'
import '@/app/page-styles.css'
import InnerNav from '@/components/InnerNav'
import InnerCTA from '@/components/InnerCTA'
import IndustryCard from '@/components/IndustryCard'

export const metadata: Metadata = {
  title: 'Industries We Serve | SentiCy',
  description: 'AI-powered IT and cybersecurity for law firms, financial firms, and healthcare organizations in California and Nevada.',
}

const industries = [
  { icon: '⚖️', title: 'Law Firms', href: '/industries/law-firms', desc: 'Protect client confidentiality, automate intake, eliminate IT overhead, and stay ABA & HIPAA compliant — without lifting a finger.', highlights: ['Client intake automation', 'ABA & HIPAA compliance', 'Case management support', 'Zero-trust security'], color: '#09A3B2' },
  { icon: '📈', title: 'Financial Firms', href: '/industries/financial-firms', desc: 'Institutional-grade IT and security for hedge funds, private equity, family offices, and financial advisors. Built for regulatory pressure and investor scrutiny.', highlights: ['SEC & FINRA compliance', 'Investor-grade security', 'Wire fraud prevention', 'SOC2 readiness'], color: '#FFB800' },
  { icon: '🏥', title: 'Healthcare', href: '/industries/healthcare', desc: 'HIPAA-compliant IT, ransomware prevention, EHR support, and AI-powered patient workflow automation for healthcare organizations.', highlights: ['HIPAA compliance built-in', 'EHR/EMR system support', 'Ransomware prevention', 'Patient intake automation'], color: '#fb842c' },
]

export default function IndustriesPage() {
  return (
    <>
      <InnerNav />
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="page-eyebrow">Industries</span>
          <h1 className="page-title">Built for Industries Where<br /><span>IT Failures Have Consequences.</span></h1>
          <p className="page-sub">We specialize in highly regulated, high-stakes industries where technology directly affects clients, compliance, and profitability. Serving California and Nevada.</p>
        </div>
      </div>
      <div className="page-body">
        <div className="divider" />
        <div className="section">
          <p className="page-eyebrow">Who We Serve</p>
          <h2 className="section-title">Three Industries.<br /><span>One Standard of Excellence.</span></h2>
          <p className="section-sub">Every service we provide is purpose-built for the specific compliance, security, and operational requirements of your industry.</p>
          <div style={{ display:'flex', flexDirection:'column', gap:24 }}>
            {industries.map((ind, i) => <IndustryCard key={i} {...ind} />)}
          </div>
        </div>
        <div className="divider" />
        <div style={{ padding:'80px 48px', textAlign:'center' }}>
          <div style={{ maxWidth:600, margin:'0 auto' }}>
            <p style={{ fontSize:11, letterSpacing:4, textTransform:'uppercase', color:'#09A3B2', marginBottom:16 }}>Our Coverage</p>
            <h2 style={{ fontSize:'clamp(28px,3.5vw,44px)', fontWeight:700, color:'#fff', marginBottom:16 }}>Serving California &amp; Nevada</h2>
            <p style={{ fontSize:16, color:'rgba(255,255,255,0.4)', lineHeight:1.8 }}>From Los Angeles to Las Vegas, we support law firms, financial firms, and healthcare organizations across both states.</p>
          </div>
        </div>
        <div className="divider" />
        <InnerCTA headline="Don't See Your Industry?" sub="We work with any professional services firm that needs enterprise-grade IT, cybersecurity, and AI automation. Let's talk." />
      </div>
    </>
  )
}
