import './globals.css'
// import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react'

export const metadata = {
  title: 'Seinfeld Calendar',
  manifest: 'manifest.json',
  description: 'A daily habit tracker inspired by The Seinfeld Strategy',
  favicon: '🗓️',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GeistMono.className} bg-black`} >
      <body className='bg-black'>{children}</body>
      <SpeedInsights />
      <Analytics />
    </ html>
  )
}
