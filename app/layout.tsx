import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SentiCy — AI-Powered IT & Cybersecurity',
  description: 'Replace human overhead with intelligent AI agents. Enterprise-grade cybersecurity and managed IT for law firms.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
