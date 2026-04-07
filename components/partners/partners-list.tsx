"use client"

import { ArrowUpRight } from "lucide-react"

const partners = [
  {
    category: "General Contractors",
    name: "New World Builders",
    description: "Quality construction and renovation services for residential properties.",
    link: "#",
  },
  {
    category: "Moving",
    name: "Off Load Moving",
    description: "Professional moving services for local and long-distance relocations.",
    link: "#",
  },
  {
    category: "HVAC",
    name: "R.S. Andrews",
    description: "Heating, ventilation, and air conditioning installation and service.",
    link: "#",
  },
  {
    category: "Home Inspection",
    name: "QAI",
    description: "Comprehensive home inspection services for buyers and sellers.",
    link: "#",
  },
  {
    category: "Pest & Termite",
    name: "John Edwards",
    description: "Complete pest control and termite inspection services.",
    link: "#",
  },
  {
    category: "Title",
    name: "True North Title",
    description: "Reliable title services ensuring smooth real estate transactions.",
    link: "#",
  },
  {
    category: "Lending",
    name: "Cara Erickson of Atlantic Bay Mortgage",
    description: "Expert mortgage lending with VA loan specialization.",
    link: "#",
  },
  {
    category: "Home Warranty",
    name: "2-10 Home Warranty",
    description: "Comprehensive home warranty coverage for peace of mind.",
    link: "#",
  },
]

export function PartnersList() {
  return (
    <section className="bg-white px-6 py-24 md:px-16 lg:px-24" data-gsap-section>
      <div className="max-w-7xl mx-auto">
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
              href={partner.link}
              className="group p-6 border border-m2m-deep/10 bg-white transition-all duration-300 hover:border-m2m-gold/30 hover:shadow-lg flex flex-col"
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
      </div>
    </section>
  )
}
