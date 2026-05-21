'use client'
import Link from 'next/link'
interface Props { icon:string; title:string; href:string; desc:string; highlights:string[]; color:string }
export default function IndustryCard({ icon, title, href, desc, highlights, color }: Props) {
  return (
    <Link href={href} style={{ textDecoration:'none' }}>
      <div style={{ background:'rgba(7,30,38,0.8)', border:'1px solid rgba(9,163,178,0.1)', borderRadius:12, padding:'40px', display:'grid', gridTemplateColumns:'1fr 1fr', gap:40, alignItems:'center', transition:'all 0.3s', cursor:'pointer' }}
        onMouseEnter={e => { const el=e.currentTarget as HTMLDivElement; el.style.borderColor=`${color}44`; el.style.transform='translateY(-4px)'; el.style.boxShadow=`0 24px 60px ${color}12` }}
        onMouseLeave={e => { const el=e.currentTarget as HTMLDivElement; el.style.borderColor='rgba(9,163,178,0.1)'; el.style.transform='none'; el.style.boxShadow='none' }}
      >
        <div>
          <div style={{ display:'flex', alignItems:'center', gap:16, marginBottom:20 }}><span style={{ fontSize:36 }}>{icon}</span><h3 style={{ fontSize:28, fontWeight:700, color:'#fff', margin:0 }}>{title}</h3></div>
          <p style={{ fontSize:15, color:'rgba(255,255,255,0.45)', lineHeight:1.8, marginBottom:24 }}>{desc}</p>
          <span style={{ fontSize:13, color, fontWeight:600, letterSpacing:0.5 }}>Explore {title} Solutions →</span>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
          {highlights.map((h,j) => (<div key={j} style={{ background:'rgba(4,58,75,0.4)', border:`1px solid ${color}22`, borderRadius:8, padding:'12px 16px', fontSize:13, color:'rgba(255,255,255,0.6)' }}><span style={{ color, marginRight:8 }}>✓</span>{h}</div>))}
        </div>
      </div>
    </Link>
  )
}
