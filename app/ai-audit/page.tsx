import type { Metadata } from 'next'
import '@/app/page-styles.css'
import InnerNav from '@/components/InnerNav'

export const metadata: Metadata = {
  title: 'Book a Free AI Audit | SentiCy',
  description: 'Book your free AI audit with SentiCy. We\'ll assess your IT, security, and automation opportunities — no commitment required.',
}

const whatToExpect = [
  { icon: '🔍', title: 'IT & Security Assessment', desc: 'We review your current infrastructure, identify security gaps, and document every risk before we recommend anything.' },
  { icon: '🤖', title: 'AI Opportunity Map', desc: 'We identify every workflow that can be automated — and calculate exactly how many hours and dollars it saves your firm annually.' },
  { icon: '🛡️', title: 'Compliance Snapshot', desc: 'For law firms, financial firms, and healthcare organizations, we show exactly where you stand on ABA, HIPAA, SEC/FINRA, and SOC2 requirements.' },
  { icon: '📊', title: 'Custom Roadmap', desc: 'You leave with a prioritized technology roadmap — what to fix first, what to automate, what to protect, and what it costs.' },
]

export default function AIAuditPage() {
  return (
    <>
      <InnerNav />
      <div className="page-hero" style={{ minHeight:'40vh' }}>
        <div className="page-hero-inner">
          <span className="page-eyebrow">Free AI Audit</span>
          <h1 className="page-title">See Exactly What<br /><span>AI Can Do For Your Firm.</span></h1>
          <p className="page-sub">A free 30-minute consultation where we assess your IT, security posture, and automation opportunities. No sales pitch. Just a clear picture of what&apos;s possible.</p>
        </div>
      </div>
      <div className="page-body">
        <div className="divider" />
        <div style={{ padding:'100px 48px' }}>
          <div style={{ maxWidth:1100, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'start' }}>
            <div>
              <p className="page-eyebrow">What You Get</p>
              <h2 className="section-title" style={{ marginBottom:40 }}>What Happens in Your Free Audit.</h2>
              <div style={{ display:'flex', flexDirection:'column', gap:24 }}>
                {whatToExpect.map((w,i) => (
                  <div key={i} style={{ display:'flex', gap:20, alignItems:'flex-start' }}>
                    <span style={{ fontSize:24, flexShrink:0 }}>{w.icon}</span>
                    <div><h3 style={{ fontSize:16, fontWeight:600, color:'#fff', marginBottom:6 }}>{w.title}</h3><p style={{ fontSize:14, color:'rgba(255,255,255,0.4)', lineHeight:1.7 }}>{w.desc}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background:'rgba(4,58,75,0.2)', border:'1px solid rgba(9,163,178,0.2)', borderRadius:16, padding:48, position:'sticky', top:100 }}>
              <p style={{ fontSize:11, letterSpacing:3, textTransform:'uppercase', color:'#09A3B2', marginBottom:20 }}>Book Your Audit</p>
              <h3 style={{ fontSize:26, fontWeight:700, color:'#fff', marginBottom:8 }}>Free. No Commitment.</h3>
              <p style={{ fontSize:14, color:'rgba(255,255,255,0.4)', marginBottom:32, lineHeight:1.7 }}>30 minutes. A clear picture of your IT, security, and automation opportunities. Zero pressure.</p>
              <div style={{ display:'flex', flexDirection:'column', gap:16, marginBottom:32 }}>
                <a href="https://www.senticy.com/appointments" style={{ background:'linear-gradient(135deg,#fb842c,#FFB800)', color:'#010D12', padding:'16px 28px', borderRadius:8, fontSize:15, fontWeight:700, textDecoration:'none', textAlign:'center', display:'block', boxShadow:'0 0 40px rgba(251,132,44,0.35)' }}>Schedule Online</a>
                <a href="tel:4243023353" style={{ background:'transparent', color:'#09A3B2', border:'1px solid rgba(9,163,178,0.4)', padding:'16px 28px', borderRadius:8, fontSize:15, fontWeight:600, textDecoration:'none', textAlign:'center', display:'block' }}>Call (424) 302-3353</a>
                <a href="mailto:info@senticy.com" style={{ background:'transparent', color:'rgba(255,255,255,0.5)', padding:'12px 28px', borderRadius:8, fontSize:14, textDecoration:'none', textAlign:'center', display:'block' }}>Email Info@Senticy.com</a>
              </div>
              <div style={{ paddingTop:24, borderTop:'1px solid rgba(255,255,255,0.06)' }}>
                {['No contracts required','No hidden fees','Serving CA & NV','Results within 48 hours'].map((item,i) => (
                  <div key={i} style={{ display:'flex', alignItems:'center', gap:10, marginBottom:10 }}>
                    <span style={{ color:'#09A3B2', fontWeight:700 }}>✓</span>
                    <span style={{ fontSize:13, color:'rgba(255,255,255,0.45)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
