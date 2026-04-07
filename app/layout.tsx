import type { Metadata, Viewport } from 'next'
import { Jost, Cormorant_Garamond, Playfair_Display, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
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
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${jost.variable} ${cormorant.variable} ${playfair.variable} ${montserrat.variable} font-sans antialiased`}>
        <a
          href="#main-content"
          className="fixed top-[-100%] left-1/2 -translate-x-1/2 bg-m2m-gold text-m2m-black text-sm font-medium tracking-wider uppercase px-7 py-3.5 z-[9999] transition-[top] duration-300 focus:top-3"
        >
          Skip to main content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
