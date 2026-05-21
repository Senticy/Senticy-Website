'use client'
import { useRef, useCallback } from 'react'
import dynamic from 'next/dynamic'
import MainNav from '@/components/MainNav'
import CinematicStory from '@/components/CinematicStory'
import StatsSection from '@/components/StatsSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

const OfficeScene = dynamic(() => import('@/components/OfficeScene'), { ssr: false })

export default function Home() {
  const scrollProgress = useRef(0)
  const handleScroll = useCallback((p: number) => { scrollProgress.current = p }, [])
  return (
    <main style={{ background: '#040C14', position: 'relative' }}>
      <div style={{ position:'fixed', top:0, left:0, right:0, zIndex:200, isolation:'isolate' }}>
        <MainNav />
      </div>
      <OfficeScene scroll={scrollProgress} />
      <CinematicStory onScroll={handleScroll} />
      <div style={{ position:'relative', zIndex:10, background:'#040C14' }}>
        <StatsSection />
        <CTASection />
        <Footer />
      </div>
    </main>
  )
}
