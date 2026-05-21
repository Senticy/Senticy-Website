'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './CinematicStory.module.css'

interface Beat {
  progress: number
  eyebrow?: string
  headline: string
  sub?: string
  variant?: 'light' | 'danger' | 'calm'
}

const beats: Beat[] = [
  { progress: 0, eyebrow: 'The modern firm', headline: 'This is what\nyour firm looks like\nwhen AI runs everything.', sub: 'Scroll to walk through it.', variant: 'light' },
  { progress: 0.18, eyebrow: 'Meet your AI workforce', headline: 'Six agents.\nRunning 24/7.\nZero overhead.', sub: 'Each one purpose-built for a single task. Together they replace 3–5 full-time employees.', variant: 'light' },
  { progress: 0.32, eyebrow: 'Intake Agent', headline: 'New client onboarded.\nConflict check passed.\nEngagement letter sent.', sub: '40 hours of manual work. Done in seconds.', variant: 'light' },
  { progress: 0.44, eyebrow: 'Threat Detection Agent', headline: '247 threats\nneutralized\nthis week.', sub: 'Your team never saw a single one.', variant: 'light' },
  { progress: 0.55, eyebrow: 'The result', headline: 'Your people\ndo what only\nhumans can do.', sub: 'Client relationships. Strategic work. Growing the firm.', variant: 'calm' },
  { progress: 0.64, eyebrow: 'But first...', headline: 'It wasn\'t\nalways like this.', sub: 'Let us show you what we walked into.', variant: 'danger' },
  { progress: 0.70, eyebrow: 'The old way', headline: 'Server down.\nBreach detected.\nTickets piling up.', sub: 'This is where $180,000 a year in overhead goes.', variant: 'danger' },
  { progress: 0.82, eyebrow: 'The transformation', headline: 'We fixed it.\nWe can fix\nyours.', sub: 'Average onboarding: 30 days. Average savings: 3× their investment.', variant: 'calm' },
  { progress: 0.90, eyebrow: 'Your firm. Fully autonomous.', headline: 'Ready to run\non AI?', variant: 'light' },
]

export default function CinematicStory({ onScroll }: { onScroll: (p: number) => void }) {
  const [activeBeat, setActiveBeat] = useState(0)
  const [beatOpacity, setBeatOpacity] = useState(1)

  useEffect(() => {
    let lastBeat = -1
    const handleScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight
      const progress = Math.min(1, Math.max(0, window.scrollY / max))
      onScroll(progress)
      let active = 0
      for (let i = 0; i < beats.length; i++) { if (progress >= beats[i].progress) active = i }
      if (active !== lastBeat) {
        setBeatOpacity(0)
        setTimeout(() => { setActiveBeat(active); setBeatOpacity(1) }, 150)
        lastBeat = active
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [onScroll])

  const beat = beats[activeBeat]
  const isDanger = beat.variant === 'danger'
  const isCta = beat.progress >= 0.90

  return (
    <div style={{ height: '900vh', position: 'relative', zIndex: 5 }}>
      <div className={styles.sticky}>
        <div className={styles.dots}>
          {beats.map((b, i) => (
            <div key={i} className={styles.dot} style={{
              background: i===activeBeat ? (isDanger?'#ef4444':'#09A3B2') : 'rgba(255,255,255,0.15)',
              boxShadow: i===activeBeat ? `0 0 8px ${isDanger?'#ef4444':'#09A3B2'}` : 'none',
              transform: i===activeBeat ? 'scale(1.4)' : 'scale(1)',
            }} />
          ))}
        </div>

        <div className={styles.text} style={{ opacity: beatOpacity, transition: 'opacity 0.15s ease' }}>
          {beat.eyebrow && <p className={styles.eyebrow} style={{ color: isDanger?'#ef4444':'#09A3B2' }}>{beat.eyebrow}</p>}
          <h1 className={styles.headline} style={{ color: isDanger?'#ff8080':'#ffffff' }}>
            {beat.headline.split('\n').map((line, i) => <span key={i} style={{ display:'block' }}>{line}</span>)}
          </h1>
          {beat.sub && <p className={styles.sub} style={{ color: isDanger?'rgba(255,150,150,0.7)':'rgba(255,255,255,0.5)' }}>{beat.sub}</p>}
          {isCta && (
            <div className={styles.ctas}>
              <Link href="/ai-audit" className={styles.btnPrimary}>Book a Free AI Audit</Link>
              <a href="tel:4243023353" className={styles.btnSecondary}>Call (424) 302-3353</a>
              <p className={styles.noContract}>No contracts. No lock-in. Serving CA &amp; NV.</p>
            </div>
          )}
        </div>

        {activeBeat === 0 && (
          <div className={styles.scrollHint}>
            <div className={styles.scrollLine} />
            <span>scroll</span>
          </div>
        )}

        <div className={styles.vignette} style={{
          background: isDanger
            ? 'radial-gradient(ellipse at center, transparent 40%, rgba(100,0,0,0.5) 100%)'
            : 'radial-gradient(ellipse at center, transparent 50%, rgba(1,13,18,0.4) 100%)',
          transition: 'background 1s ease',
        }} />
      </div>
    </div>
  )
}
