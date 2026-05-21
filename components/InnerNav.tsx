'use client'
import MainNav from './MainNav'

export default function InnerNav() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200, isolation: 'isolate' }}>
      <MainNav />
    </div>
  )
}
