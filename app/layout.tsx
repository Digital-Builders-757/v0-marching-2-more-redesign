import type { Metadata, Viewport } from 'next'
import { Jost, Cormorant_Garamond, Playfair_Display, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { M2mCtaAnalytics } from '@/components/m2m-cta-analytics'
import { ScrollToTop } from '@/components/scroll-to-top'
import { M2M_SITE_ORIGIN } from '@/lib/m2m-site'
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
  metadataBase: new URL(M2M_SITE_ORIGIN),
  title: 'Marching 2 More — Hampton Roads Real Estate Advisors',
  description:
    'Veteran-owned real estate team in Virginia Beach serving all of Hampton Roads — military & VA buyers, luxury search, home valuations, listing strategy, PCS moves, and five-star support.',
}

export const viewport: Viewport = {
  themeColor: '#1c4522',
  viewportFit: 'cover',
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
        <M2mCtaAnalytics />
        <Analytics />
      </body>
    </html>
  )
}
