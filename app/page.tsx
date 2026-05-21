'use client'
import { useRef, useCallback } from 'react'
import dynamic from 'next/dynamic'
import MainNav from '@/components/MainNav'
import ScrollStory from '@/components/ScrollStory'
import StatsSection from '@/components/StatsSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

const HeroCanvas = dynamic(() => import('@/components/HeroCanvas'), { ssr: false })

export default function Home() {
  const scrollProgress = useRef(0)
  const handleScroll = useCallback((p: number) => {
    scrollProgress.current = p
  }, [])
  return (
    <main style={{ background: '#010D12', position: 'relative' }}>
      {/* Nav in its own fixed stacking context ABOVE everything */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200, isolation: 'isolate' }}>
        <MainNav />
      </div>
      {/* Canvas fills screen behind everything */}
      <HeroCanvas scrollProgress={scrollProgress} />
      {/* Scroll content */}
      <ScrollStory onScroll={handleScroll} />
      <StatsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
