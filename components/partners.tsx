import Link from "next/link"
import Image from "next/image"

import { PARTNER_LINKS } from "@/lib/m2m-site"

const partners = [
  { name: "New World Builders", service: "General Contractors", href: PARTNER_LINKS.newWorldBuilders },
  { name: "Off Load Moving", service: "Moving", href: PARTNER_LINKS.offLoadMoving },
  { name: "R.S. Andrews", service: "HVAC", href: PARTNER_LINKS.rsAndrewsTidewater },
  { name: "QAI", service: "Home Inspection", href: PARTNER_LINKS.qaiHome },
  { name: "John Edwards", service: "Pest & Termite", href: PARTNER_LINKS.johnEdwardsPest },
  { name: "True North Title", service: "Title", href: PARTNER_LINKS.trueNorthTitle },
  { name: "Cara Erickson of Atlantic Bay Mortgage", service: "Lending", href: PARTNER_LINKS.atlanticBayCara },
  { name: "2-10 Home Warranty", service: "Home Warranty", href: PARTNER_LINKS.homeWarranty210 },
]

export function Partners() {
  return (
    <section id="services" className="bg-white px-6 py-20 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Header with image */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-16 mb-12">
          {/* Left - Text content */}
          <div className="flex-1">
            {/* Kicker */}
            <p 
              className="text-m2m-gold text-sm tracking-[0.3em] uppercase mb-6"
              style={{ fontFamily: 'var(--font-nav)' }}
            >
              You&apos;re in great hands.
            </p>

            {/* Headline */}
            <h2 
              className="text-m2m-deep text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] font-light mb-8"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Financing,<br />
              renovations,<br />
              moving solutions
            </h2>

            {/* Body text */}
            <p 
              className="text-m2m-muted text-base leading-relaxed max-w-md"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <span className="font-semibold text-m2m-deep">And so much more.</span> Access a network of trusted local leaders. We&apos;ve experienced their professionalism and standard of excellence first hand.
            </p>
          </div>

          {/* Right - Family image */}
          <div className="flex-shrink-0">
            <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden">
              <Image
                src="/images/bfam-sect.avif"
                alt="Happy family together"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 380px, (min-width: 768px) 320px, 280px"
              />
            </div>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8 mb-12 border-t border-gray-200 pt-8">
          {partners.map((partner) => (
            <div key={partner.name} className="flex flex-col gap-1">
              <a
                href={partner.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-m2m-gold hover:text-m2m-deep transition-colors"
                style={{ fontFamily: 'var(--font-nav)' }}
              >
                {partner.name} &rsaquo;
              </a>
              <span 
                className="text-xs text-m2m-muted italic"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {partner.service}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/our-team"
          className="inline-block text-[0.7rem] tracking-[0.2em] uppercase px-8 py-4 bg-m2m-deep text-white font-medium transition-all duration-300 hover:bg-m2m-deep/90"
          style={{ fontFamily: 'var(--font-nav)' }}
        >
          Meet Your Team
        </Link>
      </div>
    </section>
  )
}
