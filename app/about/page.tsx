import type { Metadata } from 'next'
import Link from 'next/link'
import '@/app/page-styles.css'
import InnerNav from '@/components/InnerNav'
import InnerCTA from '@/components/InnerCTA'

export const metadata: Metadata = {
  title: 'About SentiCy | AI-Powered IT & Cybersecurity',
  description: 'SentiCy is a next-generation MSP built for the AI era. We combine intelligent automation, enterprise cybersecurity, and managed IT.',
}

const values = [
  { icon: '🤖', title: 'AI First', desc: 'We don\'t add AI on top of old processes. We rebuild processes around AI from the ground up.' },
  { icon: '🛡️', title: 'Security Without Compromise', desc: 'Every solution we deploy is secure by design. Security is not a feature — it\'s the foundation.' },
  { icon: '📊', title: 'Business Outcomes', desc: 'We measure success in hours saved, breaches prevented, and dollars protected — not tickets closed.' },
  { icon: '🤝', title: 'No Lock-In', desc: 'We earn your business every month. No long-term contracts, no hidden fees, no hostage situations.' },
  { icon: '⚡', title: 'Speed and Precision', desc: 'Sub-5-minute response times. Zero-guesswork deployments. Accountability at every step.' },
  { icon: '🔮', title: 'Future-Ready', desc: 'We build infrastructure that grows with you — not systems you\'ll have to rip out in 3 years.' },
]

const process = [
  { num: '01', title: 'Diagnose', desc: 'We audit your current IT, security posture, and workflows. Identify every gap, risk, and automation opportunity before recommending anything.' },
  { num: '02', title: 'Design', desc: 'We architect a solution specific to your firm — your industry, your systems, your compliance requirements, your team.' },
  { num: '03', title: 'Deploy', desc: 'We deploy without disrupting operations. Your team keeps working while we build the infrastructure underneath them.' },
  { num: '04', title: 'Automate', desc: 'AI agents go live. Workflows get automated. Your team notices the difference within days, not months.' },
  { num: '05', title: 'Protect', desc: 'Continuous monitoring, threat detection, compliance management, and proactive support — running 24/7 in the background.' },
  { num: '06', title: 'Improve', desc: 'Monthly reviews, roadmap planning, and technology advisory keep your firm ahead of threats and ahead of competition.' },
]

export default function AboutPage() {
  return (
    <>
      <InnerNav />
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="page-eyebrow">About SentiCy</span>
          <h1 className="page-title">We&apos;re Not Your<br /><span>Father&apos;s IT Company.</span></h1>
          <p className="page-sub">SentiCy is a next-generation MSP built for the AI era. We believe the firms that win in the next decade will be the ones that replace human overhead with intelligent automation — while locking down their security posture like a fortress.</p>
        </div>
      </div>
      <div className="page-body">
        <div className="divider" />
        <div className="section">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'center' }}>
            <div>
              <p className="page-eyebrow">Our Mission</p>
              <h2 className="section-title">The MSP Built for<br /><span>the AI Era.</span></h2>
              <p style={{ fontSize:15, color:'rgba(255,255,255,0.45)', lineHeight:1.9, marginBottom:20 }}>Classic MSPs were built for a world where IT meant keeping servers running and resetting passwords. That world is gone.</p>
              <p style={{ fontSize:15, color:'rgba(255,255,255,0.45)', lineHeight:1.9, marginBottom:20 }}>Today, the firms that grow fastest deploy AI agents to automate intake, compliance, billing, and support. They protect themselves with zero-trust security and AI-powered threat detection. They treat IT as a competitive advantage, not an overhead cost.</p>
              <p style={{ fontSize:15, color:'rgba(255,255,255,0.45)', lineHeight:1.9 }}>That&apos;s what SentiCy builds. For law firms, financial firms, and healthcare organizations in California and Nevada.</p>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }}>
              {[{num:'3×',label:'avg cost savings vs in-house'},{num:'210hrs',label:'avg saved per month'},{num:'99.9%',label:'uptime guaranteed'},{num:'0',label:'contracts or lock-ins'}].map((s,i) => (
                <div key={i} style={{ background:'rgba(7,30,38,0.8)', border:'1px solid rgba(9,163,178,0.1)', borderRadius:12, padding:'28px 24px', textAlign:'center' }}>
                  <div style={{ fontSize:'clamp(28px,3vw,40px)', fontWeight:700, background:'linear-gradient(90deg,#FFB800,#fb842c)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', marginBottom:8 }}>{s.num}</div>
                  <div style={{ fontSize:12, color:'rgba(255,255,255,0.35)', lineHeight:1.4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="divider" />
        <div className="section">
          <p className="page-eyebrow">Our Values</p>
          <h2 className="section-title">What We Stand For.</h2>
          <div className="grid-3">{values.map((v,i) => (<div key={i} className="card"><div className="card-icon">{v.icon}</div><h3 className="card-title">{v.title}</h3><p className="card-desc">{v.desc}</p></div>))}</div>
        </div>
        <div className="divider" />
        <div className="section">
          <p className="page-eyebrow">How We Work</p>
          <h2 className="section-title">Our Process.</h2>
          <p className="section-sub">Every engagement starts with understanding — not selling. We diagnose before we prescribe.</p>
          <div style={{ display:'flex', flexDirection:'column', gap:0 }}>
            {process.map((p,i) => (
              <div key={i} style={{ display:'grid', gridTemplateColumns:'80px 1fr', gap:32, padding:'32px 0', borderBottom: i < process.length-1 ? '1px solid rgba(9,163,178,0.08)' : 'none', alignItems:'start' }}>
                <div style={{ fontSize:'clamp(28px,3vw,40px)', fontWeight:700, background:'linear-gradient(90deg,#FFB800,#fb842c)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', lineHeight:1 }}>{p.num}</div>
                <div><h3 style={{ fontSize:20, fontWeight:600, color:'#fff', marginBottom:10 }}>{p.title}</h3><p style={{ fontSize:15, color:'rgba(255,255,255,0.4)', lineHeight:1.8 }}>{p.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
        <div className="divider" />
        <div style={{ padding:'80px 48px', background:'rgba(7,30,38,0.3)' }}>
          <div style={{ maxWidth:1100, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'center' }}>
            <div>
              <p className="page-eyebrow">Where We Operate</p>
              <h2 className="section-title">California &amp; Nevada.</h2>
              <p style={{ fontSize:15, color:'rgba(255,255,255,0.45)', lineHeight:1.9, marginBottom:16 }}>We provide on-site and remote IT support, cybersecurity, and AI automation services across both states.</p>
              <p style={{ fontSize:15, color:'rgba(255,255,255,0.45)', lineHeight:1.9 }}>Los Angeles · Orange County · San Diego · San Francisco · Las Vegas · Henderson · Reno</p>
            </div>
            <div style={{ background:'rgba(4,58,75,0.2)', border:'1px solid rgba(9,163,178,0.15)', borderRadius:12, padding:40 }}>
              <p style={{ fontSize:11, letterSpacing:3, textTransform:'uppercase', color:'#09A3B2', marginBottom:20 }}>Get in Touch</p>
              <p style={{ fontSize:22, fontWeight:600, color:'#fff', marginBottom:8 }}>Ready to talk?</p>
              <p style={{ fontSize:14, color:'rgba(255,255,255,0.4)', marginBottom:24, lineHeight:1.7 }}>Book a free 30-minute AI audit and we&apos;ll show you exactly what we can automate, secure, and save.</p>
              <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
                <a href="tel:4243023353" style={{ color:'#09A3B2', fontSize:15, textDecoration:'none' }}>📞 (424) 302-3353</a>
                <a href="mailto:info@senticy.com" style={{ color:'#09A3B2', fontSize:15, textDecoration:'none' }}>✉️ Info@Senticy.com</a>
              </div>
            </div>
          </div>
        </div>
        <div className="divider" />
        <InnerCTA headline="Ready to Work With a Next-Gen MSP?" sub="Book a free AI audit. We'll show you the future of IT — built specifically for your firm." />
      </div>
    </>
  )
}
