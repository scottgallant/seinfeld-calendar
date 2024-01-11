import './globals.css'
// import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GeistMono.className} `} >
      <body>{children}</body>
      <SpeedInsights />
    </ html>
  )
}
