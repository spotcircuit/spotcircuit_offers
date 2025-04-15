import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SpotCircuit - AI-Powered SEO Automation for Shopify',
  description: 'Boost your Shopify store\'s organic traffic with AI-powered SEO automation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />
        <Script
          src="https://plugin.nytsys.com/api/site/0fb07629-302a-4e33-ba82-04eccb80b732/nytsys.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
