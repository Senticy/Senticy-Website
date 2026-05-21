import type { Metadata } from 'next'
import Link from 'next/link'
import '@/app/page-styles.css'
import InnerNav from '@/components/InnerNav'

export const metadata: Metadata = {
  title: 'Contact SentiCy | AI-Powered IT & Cybersecurity',
  description: 'Contact SentiCy for managed IT, cybersecurity, and AI automation services in California and Nevada.',
}

export default function ContactPage() {
  return (
    <>
      <InnerNav />
      <div className="page-hero" style={{ minHeight: '40vh' }}>
        <div className="page-hero-inner">
          <span className="page-eyebrow">Contact Us</span>
          <h1 className="page-title">Let&apos;s Talk About<br /><span>Your Firm&apos;s Technology.</span></h1>
          <p className="page-sub">Whether you need managed IT, cybersecurity, AI automation, or just want to understand what&apos;s possible — we&apos;re here to help. No pressure. No sales pitch.</p>
        </div>
      </div>
      <div className="page-body">
        <div className="divider" />
        <div style={{ padding: '100px 48px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
            <div>
              <p className="page-eyebrow">Get in Touch</p>
              <h2 className="section-title" style={{ marginBottom: 40 }}>Multiple Ways<br /><span>to Reach Us.</span></h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                <div>
                  <p style={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: '#09A3B2', marginBottom: 12 }}>Phone</p>
                  <a href="tel:4243023353" style={{ fontSize: 28, fontWeight: 700, color: '#fff', textDecoration: 'none', display: 'block', marginBottom: 4 }}>(424) 302-3353</a>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)' }}>Available Mon–Fri, 8am–6pm PT. Emergency support 24/7 for clients.</p>
                </div>
                <div>
                  <p style={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: '#09A3B2', marginBottom: 12 }}>Email</p>
                  <a href="mailto:info@senticy.com" style={{ fontSize: 20, fontWeight: 600, color: '#fff', textDecoration: 'none', display: 'block', marginBottom: 4 }}>Info@Senticy.com</a>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)' }}>We respond to all inquiries within 2 business hours.</p>
                </div>
                <div>
                  <p style={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: '#09A3B2', marginBottom: 12 }}>Coverage Area</p>
                  <p style={{ fontSize: 16, color: '#fff', fontWeight: 600, marginBottom: 4 }}>California &amp; Nevada</p>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', lineHeight: 1.7 }}>Los Angeles · Orange County · San Diego · San Francisco Bay Area · Las Vegas · Henderson · Reno</p>
                </div>
                <div>
                  <p style={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: '#09A3B2', marginBottom: 12 }}>Existing Clients</p>
                  <a href="https://www.senticy.com/support-center" style={{ fontSize: 16, color: '#09A3B2', textDecoration: 'none', fontWeight: 600 }}>Access the Support Center →</a>
                </div>
              </div>
            </div>
            <div style={{ background: 'rgba(4,58,75,0.2)', border: '1px solid rgba(9,163,178,0.2)', borderRadius: 16, padding: 48 }}>
              <p className="page-eyebrow">Free AI Audit</p>
              <h3 style={{ fontSize: 26, fontWeight: 700, color: '#fff', marginBottom: 16, lineHeight: 1.2 }}>Start with a Free<br />30-Minute Audit</h3>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, marginBottom: 32 }}>The best way to get started is with a free AI audit. We&apos;ll assess your IT environment, security posture, and automation opportunities — then show you exactly what&apos;s possible.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
                <a href="https://www.senticy.com/appointments" style={{ background: 'linear-gradient(135deg,#fb842c,#FFB800)', color: '#010D12', padding: '15px 24px', borderRadius: 8, fontSize: 15, fontWeight: 700, textDecoration: 'none', textAlign: 'center', display: 'block' }}>Schedule Online</a>
                <a href="tel:4243023353" style={{ background: 'transparent', color: '#09A3B2', border: '1px solid rgba(9,163,178,0.4)', padding: '15px 24px', borderRadius: 8, fontSize: 15, fontWeight: 600, textDecoration: 'none', textAlign: 'center', display: 'block' }}>Call (424) 302-3353</a>
              </div>
              <div style={{ paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', marginBottom: 8 }}>What you get in the free audit:</p>
                {['IT & security gap assessment','AI opportunity map','Compliance snapshot','Custom technology roadmap','No obligation, no pressure'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                    <span style={{ color: '#09A3B2', fontWeight: 700, fontSize: 12 }}>✓</span>
                    <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>{item}</span>
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
