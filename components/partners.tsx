import Link from "next/link"
import { PARTNER_LINKS } from "@/lib/m2m-site"

type Partner = {
  label: string
  category: string
  href: string | null
}

const partners: Partner[] = [
  {
    label: "New World Builders ▸",
    category: "General Contractors",
    href: PARTNER_LINKS.newWorldBuilders,
  },
  {
    label: "Off Load Moving ▸",
    category: "Moving",
    href: PARTNER_LINKS.offLoadMoving,
  },
  { label: "HVAC", category: "HVAC", href: null },
  { label: "Home Inspection", category: "Home Inspection", href: null },
  { label: "Pest & Termite", category: "Pest & Termite", href: null },
  { label: "Title", category: "Title", href: null },
  {
    label: "Cara Erickson of Atlantic Bay Mortgage ▸",
    category: "Lending",
    href: PARTNER_LINKS.atlanticBayCara,
  },
  {
    label: "2-10 Home Warranty ▸",
    category: "Home Warranty",
    href: PARTNER_LINKS.homeWarranty210,
  },
]

export function Partners() {
  return (
    <section id="services" className="bg-m2m-cream px-6 py-20 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <p
          className="text-m2m-gold text-sm tracking-[0.3em] uppercase mb-6"
          style={{ fontFamily: "var(--font-nav)" }}
        >
          You&apos;re in great hands.
        </p>

        <h2
          className="text-m2m-deep text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] font-light mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Financing,
          <br />
          renovations,
          <br />
          moving solutions
        </h2>

        <p
          className="text-[0.65rem] tracking-[0.25em] uppercase text-m2m-deep/80 mb-2"
          style={{ fontFamily: "var(--font-nav)" }}
        >
          MARCHING 2 MORE
        </p>
        <p
          className="text-[0.65rem] tracking-[0.25em] uppercase text-m2m-gold-dim mb-10"
          style={{ fontFamily: "var(--font-nav)" }}
        >
          REALTY GROUP
        </p>

        <p
          className="text-m2m-muted text-base leading-relaxed max-w-md mb-12"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          <span className="font-semibold text-m2m-deep">And so much more.</span> Access a
          network of trusted local leaders. We&apos;ve experienced their professionalism and
          standard of excellence first hand.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8 mb-12 border-t border-m2m-deep/15 pt-8">
          {partners.map((partner) => (
            <div key={`${partner.label}-${partner.category}`} className="flex flex-col gap-1">
              {partner.href ? (
                <a
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-m2m-gold hover:text-m2m-deep transition-colors"
                  style={{ fontFamily: "var(--font-nav)" }}
                >
                  {partner.label}
                </a>
              ) : (
                <span
                  className="text-sm text-m2m-deep/80"
                  style={{ fontFamily: "var(--font-nav)" }}
                >
                  {partner.label}
                </span>
              )}
              <span
                className="text-xs text-m2m-muted italic"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {partner.category}
              </span>
            </div>
          ))}
        </div>

        <Link
          href="/our-team"
          className="inline-block text-[0.7rem] tracking-[0.2em] uppercase px-8 py-4 bg-m2m-deep text-white font-medium transition-all duration-300 hover:bg-m2m-deep/90"
          style={{ fontFamily: "var(--font-nav)" }}
        >
          Meet Your Team
        </Link>
      </div>
    </section>
  )
}
