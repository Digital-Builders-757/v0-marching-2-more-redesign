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
      {/* Top Section - Two columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
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

        {/* Right Column - Image */}
        <div 
          data-gsap="fade-left"
          className="relative rounded-lg overflow-hidden"
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-07%20at%202.45.28%20PM-GuGElpF7uCp6vHe9gS9Z22TeZlbhvh.png"
            alt="Family working together"
            width={600}
            height={400}
            className="w-full h-full object-cover object-[65%_15%] aspect-[3/2]"
          />
          {/* Branding overlay */}
          <div className="absolute top-6 left-6 flex flex-col items-start gap-1">
            <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              <polyline points="9,22 9,12 15,12 15,22" />
            </svg>
            <span className="text-white text-sm font-medium tracking-wide">MARCHING 2 MORE</span>
            <span className="text-white/70 text-xs tracking-widest">REALTY GROUP</span>
          </div>
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
