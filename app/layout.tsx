import React from "react"
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A1F44',
  userScalable: true,
}

export const metadata: Metadata = {
  title: 'Charles Croft - Mortgage Loan Officer | NMLS #2530260',
  description: '25+ years of creative mortgage financing solutions. Get pre-approved, calculate payments, and turn your dream home into reality with Charles Croft.',
  keywords: 'mortgage loan officer, home loans, refinancing, mortgage solutions, NMLS 2530260',
  authors: [{ name: 'Charles Croft' }],
  openGraph: {
    title: 'Charles Croft - Mortgage Loan Officer',
    description: '25+ years of creative mortgage financing solutions',
    type: 'website',
  },
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
