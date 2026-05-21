import type { Metadata } from 'next'
import Link from 'next/link'
import '@/app/page-styles.css'
import InnerNav from '@/components/InnerNav'
import InnerCTA from '@/components/InnerCTA'

export const metadata: Metadata = {
  title: 'AI-Powered Cybersecurity Services | SentiCy',
  description: "Enterprise-grade AI cybersecurity for law firms, financial firms, and healthcare. 24/7 monitoring, endpoint protection, email security, compliance, and more.",
}

const services = [
  { icon: '👁️', title: '24/7 Threat Monitoring', href: '/services/cybersecurity/24-7-monitoring', desc: 'AI security operations center that monitors your environment around the clock — detecting and neutralizing threats before they cause damage.' },
  { icon: '💻', title: 'Endpoint Protection', href: '/services/cybersecurity/endpoint-protection', desc: 'Advanced EDR for every device in your firm. AI-powered behavioral detection stops the threats traditional antivirus misses.' },
  { icon: '📧', title: 'Email Security', href: '/services/cybersecurity/email-security', desc: 'Stop phishing, ransomware, and business email compromise before it reaches your inbox. 90% of attacks start with email.' },
  { icon: '🔍', title: 'Dark Web Monitoring', href: '/services/cybersecurity/dark-web-monitoring', desc: "Continuous monitoring of dark web forums and marketplaces for your firm's credentials and sensitive data." },
  { icon: '🔓', title: 'Vulnerability Management', href: '/services/cybersecurity/vulnerability-management', desc: 'Continuous vulnerability scanning, risk-based prioritization, and remediation tracking to minimize your attack surface.' },
  { icon: '📋', title: 'Compliance Management', href: '/services/cybersecurity/compliance-management', desc: 'Automated compliance for ABA, HIPAA, SEC/FINRA, SOC2, and other frameworks — built into your infrastructure from day one.' },
  { icon: '🎓', title: 'Security Awareness Training', href: '/services/cybersecurity/security-awareness-training', desc: 'AI-personalized training that reduces human error by 90%. Phishing simulations, video modules, and real-time coaching.' },
]

const threats = [
  { type: 'Ransomware', status: 'BLOCKED', time: '0.3s' },
  { type: 'Phishing Email', status: 'BLOCKED', time: '0.1s' },
  { type: 'Credential Stuffing', status: 'BLOCKED', time: '0.8s' },
  { type: 'Lateral Movement', status: 'BLOCKED', time: '0.2s' },
  { type: 'Data Exfiltration', status: 'BLOCKED', time: '0.4s' },
]

export default function CybersecurityPage() {
  return (
    <>
      <InnerNav />
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="page-eyebrow">Cybersecurity</span>
          <h1 className="page-title">Enterprise Security for<br /><span>High-Stakes Industries.</span></h1>
          <p className="page-sub">AI-powered cybersecurity that protects law firms, financial firms, and healthcare organizations against ransomware, phishing, data breaches, and insider threats — 24/7, without gaps.</p>
          <div className="cta-row" style={{ marginTop: 36 }}>
            <Link href="/ai-audit" className="btn-primary">Get a Free Security Assessment</Link>
            <Link href="/contact" className="btn-secondary">Talk to a Security Expert</Link>
          </div>
        </div>
      </div>
      <div className="page-body">
        <div className="divider" />
        <div style={{ background: 'rgba(7,30,38,0.4)', padding: '60px 48px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 32, textAlign: 'center' }}>
            {[{num:'0.3s',label:'avg threat response time'},{num:'99.9%',label:'threats stopped automatically'},{num:'24/7',label:'AI monitoring coverage'},{num:'0',label:'successful breaches in client history'}].map((s,i) => (
              <div key={i}><div style={{ fontSize:'clamp(28px,3.5vw,44px)', fontWeight:700, background:'linear-gradient(90deg,#09A3B2,#00D4E8)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', marginBottom:8 }}>{s.num}</div><div style={{ fontSize:13, color:'rgba(255,255,255,0.35)' }}>{s.label}</div></div>
            ))}
          </div>
        </div>
        <div className="divider" />
        <div style={{ padding: '100px 48px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div>
              <p className="page-eyebrow">Live Threat Defense</p>
              <h2 className="section-title">AI That Fights Back<br /><span>Before You Even Know.</span></h2>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.4)', lineHeight: 1.9, marginBottom: 32 }}>Our AI security layer monitors every packet, every login, every file access in real time. When a threat is detected, it&apos;s neutralized in milliseconds — not minutes, not hours.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {['Zero-trust network architecture','AI-powered behavioral detection','Automated threat isolation & response','Industry-specific compliance controls','Dark web credential monitoring','Security awareness training'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14, color: 'rgba(255,255,255,0.65)' }}><span style={{ color: '#09A3B2', fontWeight: 700 }}>✓</span>{item}</div>
                ))}
              </div>
            </div>
            <div style={{ background: '#071E26', border: '1px solid rgba(9,163,178,0.2)', borderRadius: 12, overflow: 'hidden' }}>
              <div style={{ background: 'rgba(9,163,178,0.06)', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 8, borderBottom: '1px solid rgba(9,163,178,0.1)' }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e' }} />
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }} />
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', letterSpacing: 1, marginLeft: 8 }}>SentiCy Threat Monitor — Live</span>
              </div>
              <div style={{ padding: 24, fontFamily: 'monospace' }}>
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', marginBottom: 8 }}><span style={{ color: '#09A3B2', marginRight: 8 }}>▶</span>AI monitoring active. All systems protected.</p>
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', marginBottom: 16 }}><span style={{ color: '#09A3B2', marginRight: 8 }}>▶</span>Processing 2.4M security events/hour</p>
                <div style={{ height: 1, background: 'rgba(9,163,178,0.1)', marginBottom: 16 }} />
                {threats.map((t, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10, padding: '8px 10px', background: 'rgba(239,68,68,0.05)', borderRadius: 6, border: '1px solid rgba(239,68,68,0.1)' }}>
                    <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', flex: 1 }}>{t.type}</span>
                    <span style={{ fontSize: 10, fontWeight: 700, color: '#09A3B2', letterSpacing: 1, background: 'rgba(9,163,178,0.1)', padding: '2px 8px', borderRadius: 4 }}>{t.status}</span>
                    <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)' }}>{t.time}</span>
                  </div>
                ))}
                <div style={{ height: 1, background: 'rgba(9,163,178,0.1)', margin: '16px 0' }} />
                <p style={{ fontSize: 12, color: '#09A3B2' }}><span style={{ marginRight: 8 }}>✓</span>All systems secure. 0 active threats.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="divider" />
        <div className="section">
          <p className="page-eyebrow">Security Services</p>
          <h2 className="section-title">Complete Cybersecurity<br /><span>Coverage. Zero Gaps.</span></h2>
          <p className="section-sub">A layered security program that protects every attack surface your firm has — from email to endpoints to the dark web.</p>
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
        <InnerCTA headline="Is Your Firm Actually Protected?" sub="Most firms think they're protected until they're not. Get a free security assessment and find out where your real gaps are before attackers do." />
      </div>
    </>
  )
}
