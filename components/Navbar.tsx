'use client'
import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>SentiCy</div>
      <div className={styles.links}>
        <a href="#ai-agents">AI Agents</a>
        <a href="#security">Cybersecurity</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
      <a href="tel:4243023353" className={styles.cta}>Speak with an Expert</a>
    </nav>
  )
}
