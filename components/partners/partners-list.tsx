"use client"

import { ArrowUpRight } from "lucide-react"

import { M2mContainer, M2mSection } from "@/components/m2m-layout"
import { PARTNER_LINKS } from "@/lib/m2m-site"

const partners = [
  {
    category: "General Contractors",
    name: "New World Builders",
    description: "Quality construction and renovation services for residential properties.",
    href: PARTNER_LINKS.newWorldBuilders,
  },
  {
    category: "Moving",
    name: "Off Load Moving",
    description: "Professional moving services for local and long-distance relocations.",
    href: PARTNER_LINKS.offLoadMoving,
  },
  {
    category: "HVAC",
    name: "R.S. Andrews",
    description: "Heating, ventilation, and air conditioning installation and service.",
    href: PARTNER_LINKS.rsAndrewsTidewater,
  },
  {
    category: "Home Inspection",
    name: "QAI",
    description: "Comprehensive home inspection services for buyers and sellers.",
    href: PARTNER_LINKS.qaiHome,
  },
  {
    category: "Pest & Termite",
    name: "John Edwards",
    description: "Complete pest control and termite inspection services.",
    href: PARTNER_LINKS.johnEdwardsPest,
  },
  {
    category: "Title",
    name: "True North Title",
    description: "Reliable title services ensuring smooth real estate transactions.",
    href: PARTNER_LINKS.trueNorthTitle,
  },
  {
    category: "Lending",
    name: "Cara Erickson of Atlantic Bay Mortgage",
    description: "Expert mortgage lending with VA loan specialization.",
    href: PARTNER_LINKS.atlanticBayCara,
  },
  {
    category: "Home Warranty",
    name: "2-10 Home Warranty",
    description: "Comprehensive home warranty coverage for peace of mind.",
    href: PARTNER_LINKS.homeWarranty210,
  },
] as const

export function PartnersList() {
  return (
    <M2mSection variant="light" className="py-24" data-gsap-section>
      <M2mContainer>
        {/* Header */}
        <div className="max-w-3xl mb-16" data-gsap="blur-in">
          <p 
            className="text-sm tracking-[0.3em] uppercase text-m2m-gold mb-4"
            style={{ fontFamily: 'var(--font-nav)' }}
          >
            Trusted Network
          </p>
          <h2 
            className="font-light text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] text-m2m-deep mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Our <em className="italic">Recommended Partners</em>
          </h2>
          <p 
            className="text-m2m-muted text-base md:text-lg leading-relaxed"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            We&apos;ve built relationships with the best service providers in Hampton Roads. 
            These are professionals we trust with our own homes and families.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <a
              key={partner.name}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-xl border border-m2m-deep/10 bg-white p-6 transition-all duration-300 hover:border-m2m-gold/30 hover:shadow-lg"
              data-gsap="fade-up"
              data-gsap-delay={index * 0.08}
            >
              <span 
                className="text-[0.6rem] tracking-[0.2em] uppercase text-m2m-gold mb-3"
                style={{ fontFamily: 'var(--font-nav)' }}
              >
                {partner.category}
              </span>
              <h3 
                className="text-base text-m2m-deep mb-2 flex items-start justify-between gap-2"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {partner.name}
                <ArrowUpRight className="w-4 h-4 text-m2m-gold opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </h3>
              <p 
                className="text-xs text-m2m-muted leading-relaxed mt-auto"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {partner.description}
              </p>
            </a>
          ))}
        </div>
      </M2mContainer>
    </M2mSection>
  )
}
