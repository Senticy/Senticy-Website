'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function InnerNav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <nav style={{ position:'fixed', top:0, left:0, right:0, zIndex:100, display:'flex', alignItems:'center', justifyContent:'space-between', padding: scrolled ? '14px 48px' : '20px 48px', background: scrolled ? 'rgba(1,13,18,0.95)' : 'rgba(1,13,18,0.8)', backdropFilter:'blur(16px)', borderBottom:'1px solid rgba(9,163,178,0.1)', transition:'all 0.3s ease' }}>
      <Link href="/" style={{ fontSize:22, fontWeight:700, background:'linear-gradient(90deg,#FFB800,#fb842c)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', textDecoration:'none', letterSpacing:-0.5 }}>SentiCy</Link>
      <div style={{ display:'flex', gap:32, alignItems:'center' }}>
        {[{label:'AI Agents',href:'/services/ai-agents'},{label:'Cybersecurity',href:'/services/cybersecurity'},{label:'Managed IT',href:'/services/managed-it'},{label:'Industries',href:'/industries'},{label:'About',href:'/about'}].map((link) => (
          <Link key={link.href} href={link.href} style={{ color:'rgba(255,255,255,0.55)', textDecoration:'none', fontSize:14, transition:'color 0.2s' }} onMouseEnter={e => (e.target as HTMLElement).style.color='#09A3B2'} onMouseLeave={e => (e.target as HTMLElement).style.color='rgba(255,255,255,0.55)'}>{link.label}</Link>
        ))}
      </div>
      <Link href="/ai-audit" style={{ background:'linear-gradient(135deg,#fb842c,#FFB800)', color:'#010D12', padding:'10px 22px', borderRadius:6, fontSize:13, fontWeight:700, textDecoration:'none', boxShadow:'0 0 20px rgba(251,132,44,0.3)' }}>Free AI Audit</Link>
    </nav>
  )
}
