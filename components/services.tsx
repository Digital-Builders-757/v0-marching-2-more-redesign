"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { PARTNER_LINKS } from "@/lib/m2m-site"

const partners = [
  { name: "New World Builders", category: "General Contractors", href: PARTNER_LINKS.newWorldBuilders },
  { name: "Off Load Moving", category: "Moving", href: PARTNER_LINKS.offLoadMoving },
  { name: "R.S. Andrews", category: "HVAC", href: PARTNER_LINKS.rsAndrewsTidewater },
  { name: "QAI", category: "Home Inspection", href: PARTNER_LINKS.qaiHome },
  { name: "John Edwards", category: "Pest & Termite", href: PARTNER_LINKS.johnEdwardsPest },
  { name: "True North Title", category: "Title", href: PARTNER_LINKS.trueNorthTitle },
  { name: "Cara Erickson of Atlantic Bay Mortgage", category: "Lending", href: PARTNER_LINKS.atlanticBayCara },
  { name: "2-10 Home Warranty", category: "Home Warranty", href: PARTNER_LINKS.homeWarranty210 },
]

export function Services() {
  return (
    <section className="bg-m2m-black relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div 
        data-gsap="parallax"
        data-gsap-speed="0.2"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at top right, rgba(205,176,95,0.03) 0%, transparent 50%)',
        }}
      />

      <div className="relative px-6 py-20 md:px-16 lg:px-24 md:py-32">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          {/* Tagline */}
          <span 
            data-gsap="fade-down"
            className="text-[0.65rem] tracking-[0.3em] uppercase text-m2m-gold mb-4 block"
            style={{ fontFamily: 'var(--font-nav)' }}
          >
            You&apos;re in great hands.
          </span>

          {/* Headline */}
          <h2 
            data-gsap="blur-in"
            className="text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] text-m2m-cream font-light"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Financing, renovations,
            <br />
            <span className="italic text-m2m-gold">moving solutions</span>
          </h2>
        </div>

        {/* Description */}
        <div className="mb-12" data-gsap="fade-up">
          <p 
            className="text-sm leading-relaxed text-m2m-muted max-w-2xl pl-6 border-l border-m2m-gold/20"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            <strong className="text-m2m-cream">And so much more.</strong> Access a network of trusted local leaders. We&apos;ve experienced their professionalism and standard of excellence first hand.
          </p>
        </div>

        {/* Partners Grid - 4 columns x 2 rows */}
        <div 
          className="grid grid-cols-2 md:grid-cols-4 border-t border-m2m-gold/20"
          data-gsap="stagger-children"
          data-gsap-direction="up"
        >
          {partners.map((partner, index) => (
            <div 
              key={partner.name}
              data-gsap-child
              className={`py-8 px-4 text-center ${
                index % 4 !== 3 ? "border-r border-m2m-gold/20" : ""
              } ${index >= 4 ? "border-t border-m2m-gold/20" : ""}`}
            >
              <a
                href={partner.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1 text-m2m-cream hover:text-m2m-gold transition-colors mb-2"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                <span className="text-sm underline underline-offset-2">{partner.name}</span>
                <ArrowRight className="w-3 h-3" />
              </a>
              <p 
                className="text-sm text-m2m-muted italic"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {partner.category}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16" data-gsap="fade-up">
          <Link
            href="/our-team"
            className="inline-block text-[0.7rem] tracking-[0.2em] uppercase px-10 py-4 bg-m2m-gold text-m2m-deep font-medium rounded-lg transition-all duration-300 hover:bg-m2m-gold-lt hover:scale-[1.02]"
            style={{ fontFamily: 'var(--font-nav)' }}
          >
            Meet Your Team
          </Link>
        </div>
      </div>
    </section>
  )
}
