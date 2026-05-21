'use client'
import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import HeroText from '@/components/HeroText'
import ServicesSection from '@/components/ServicesSection'
import AIAgentsSection from '@/components/AIAgentsSection'
import CybersecuritySection from '@/components/CybersecuritySection'
import StatsSection from '@/components/StatsSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

const HeroCanvas = dynamic(() => import('@/components/HeroCanvas'), { ssr: false })

export default function Home() {
  return (
    <main style={{ background: '#010D12' }}>
      <Navbar />
      <section style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
        <HeroCanvas />
        <HeroText />
      </section>
      <ServicesSection />
      <AIAgentsSection />
      <CybersecuritySection />
      <StatsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
