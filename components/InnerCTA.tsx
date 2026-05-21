import Link from 'next/link'
interface Props { headline: string; sub: string }
export default function InnerCTA({ headline, sub }: Props) {
  return (
    <section style={{ padding:'120px 48px', background:'linear-gradient(to bottom,#010D12,#071E26)', textAlign:'center', position:'relative', overflow:'hidden' }}>
      <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:600, height:600, background:'radial-gradient(circle,rgba(9,163,178,0.06) 0%,transparent 70%)', pointerEvents:'none' }} />
      <div style={{ maxWidth:600, margin:'0 auto', position:'relative', zIndex:1 }}>
        <p style={{ fontSize:11, letterSpacing:4, textTransform:'uppercase', color:'#09A3B2', marginBottom:16 }}>Get Started</p>
        <h2 style={{ fontSize:'clamp(32px,4vw,52px)', fontWeight:700, color:'#fff', lineHeight:1.2, marginBottom:20 }}>{headline}</h2>
        <p style={{ fontSize:16, color:'rgba(255,255,255,0.4)', lineHeight:1.8, marginBottom:44 }}>{sub}</p>
        <div style={{ display:'flex', gap:16, justifyContent:'center', flexWrap:'wrap', marginBottom:20 }}>
          <Link href="/ai-audit" style={{ background:'linear-gradient(135deg,#fb842c,#FFB800)', color:'#010D12', padding:'15px 36px', borderRadius:6, fontSize:15, fontWeight:700, textDecoration:'none', boxShadow:'0 0 40px rgba(251,132,44,0.35)' }}>Book a Free AI Audit</Link>
          <a href="tel:4243023353" style={{ background:'transparent', color:'rgba(255,255,255,0.65)', border:'1px solid rgba(255,255,255,0.15)', padding:'15px 36px', borderRadius:6, fontSize:15, fontWeight:600, textDecoration:'none' }}>Call (424) 302-3353</a>
        </div>
        <p style={{ fontSize:12, color:'rgba(255,255,255,0.2)', letterSpacing:0.5 }}>No contracts. No hidden fees. No lock-in. Serving CA &amp; NV.</p>
      </div>
    </section>
  )
}
