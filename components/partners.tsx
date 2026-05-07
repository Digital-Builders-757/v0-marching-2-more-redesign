import Link from "next/link"
import Image from "next/image"

import { M2mContainer } from "@/components/m2m-layout"
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
    <section id="services" className="bg-white py-20">
      <M2mContainer className="max-w-6xl">
        {/* Header with image */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-16 mb-12">
          {/* Left - Text content */}
          <div className="flex-1">
            {/* Kicker */}
            <p className="mb-4 text-[0.65rem] uppercase tracking-[0.3em] text-m2m-gold font-nav">You&apos;re in great hands.</p>

            {/* Headline */}
            <h2
              className="mb-8 text-[clamp(2.5rem,5vw,4rem)] font-light leading-[1.1] text-m2m-deep"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Financing,<br />
              renovations,<br />
              moving solutions
            </h2>

            {/* Body text */}
            <p className="max-w-md text-base leading-relaxed text-m2m-muted" style={{ fontFamily: "var(--font-sans)" }}>
              <span className="font-semibold text-m2m-deep">And so much more.</span> Access a network of trusted local
              leaders. We&apos;ve experienced their professionalism and standard of excellence first hand.
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
        <div className="mb-12 grid grid-cols-2 gap-x-4 gap-y-8 border-t border-gray-200 pt-8 md:grid-cols-4 md:gap-x-8">
          {partners.map((partner) => (
            <div key={partner.name} className="flex min-w-0 flex-col gap-1">
              <a
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="break-words text-sm text-m2m-gold transition-colors hover:text-m2m-gold-lt font-nav"
              >
                {partner.name} &rsaquo;
              </a>
              <span className="text-xs italic text-m2m-muted" style={{ fontFamily: "var(--font-sans)" }}>
                {partner.service}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/our-team"
          className="inline-block bg-m2m-deep px-8 py-4 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-m2m-cream transition-all duration-300 hover:opacity-90 font-nav"
        >
          Meet Your Team
        </Link>
      </M2mContainer>
    </section>
  )
}
