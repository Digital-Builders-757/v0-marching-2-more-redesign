"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const partners = [
  { name: "New World Builders", category: "General Contractors", href: "#" },
  { name: "Off Load Moving", category: "Moving", href: "#" },
  { name: "R.S. Andrews", category: "HVAC", href: "#" },
  { name: "QAI", category: "Home Inspection", href: "#" },
  { name: "John Edwards", category: "Pest & Termite", href: "#" },
  { name: "True North Title", category: "Title", href: "#" },
  { name: "Cara Erickson of Atlantic Bay Mortgage", category: "Lending", href: "#" },
  { name: "2-10 Home Warranty", category: "Home Warranty", href: "#" },
]

export function Services() {
  return (
    <section className="bg-m2m-cream px-6 py-16 md:px-[60px] md:py-[120px] overflow-hidden">
      {/* Top Section */}
      <div className="mb-16">
        {/* Left Column - Text */}
        <div className="flex flex-col gap-8">
          {/* Tagline */}
          <p 
            data-gsap="fade-down"
            className="text-lg text-m2m-gold"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            You&apos;re in great hands.
          </p>

          {/* Headline */}
          <h2 
            data-gsap="blur-in"
            className="font-medium text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] text-m2m-deep"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Financing,<br />
            renovations,<br />
            moving solutions
          </h2>
        </div>


      </div>

      {/* Description */}
      <div className="mb-12" data-gsap="fade-up">
        <p 
          className="text-base text-m2m-deep max-w-2xl"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          <strong>And so much more.</strong> Access a network of trusted local leaders. We&apos;ve experienced their professionalism and standard of excellence first hand.
        </p>
      </div>

      {/* Partners Grid - 4 columns x 2 rows */}
      <div 
        className="grid grid-cols-2 md:grid-cols-4 border-t border-m2m-deep/20"
        data-gsap="stagger-children"
        data-gsap-direction="up"
      >
        {partners.map((partner, index) => (
          <div 
            key={partner.name}
            data-gsap-child
            className={`py-8 px-4 text-center ${
              index % 4 !== 3 ? "border-r border-m2m-deep/20" : ""
            } ${index >= 4 ? "border-t border-m2m-deep/20" : ""}`}
          >
            <Link 
              href={partner.href}
              className="group inline-flex items-center gap-1 text-m2m-deep hover:text-m2m-gold transition-colors mb-2"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <span className="text-sm underline underline-offset-2">{partner.name}</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
            <p 
              className="text-sm text-m2m-deep/60 italic"
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
          href="/team"
          className="inline-block text-base px-10 py-4 bg-m2m-deep text-m2m-cream font-medium rounded-lg transition-all duration-300 hover:bg-m2m-deep/90"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Meet Your Team
        </Link>
      </div>
    </section>
  )
}
