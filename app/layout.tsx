import type { Metadata, Viewport } from 'next'
import { Jost, Cormorant_Garamond, Playfair_Display, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ScrollToTop } from '@/components/scroll-to-top'
import './globals.css'

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-jost',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Marching 2 More — Military Real Estate Specialists',
  description: 'Military real estate specialists serving Hampton Roads, Virginia. VA loans, PCS relocations, and luxury property search.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#1c4522',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className="overflow-x-clip">
      <body
        className={`${jost.variable} ${cormorant.variable} ${playfair.variable} ${montserrat.variable} font-sans antialiased overflow-x-clip`}
      >
        <a href="#main-content" className="m2m-skip-link">
          Skip to main content
        </a>
        <ScrollToTop />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
