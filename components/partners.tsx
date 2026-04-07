import Link from "next/link"

const partners = [
  { name: "New World Builders", service: "General Contractors", href: "#" },
  { name: "Off Load Moving", service: "Moving", href: "#" },
  { name: "R.S. Andrews", service: "HVAC", href: "#" },
  { name: "QAI", service: "Home Inspection", href: "#" },
  { name: "John Edwards", service: "Pest & Termite", href: "#" },
  { name: "True North Title", service: "Title", href: "#" },
  { name: "Cara Erickson of Atlantic Bay Mortgage", service: "Lending", href: "#" },
  { name: "2-10 Home Warranty", service: "Home Warranty", href: "#" },
]

export function Partners() {
  return (
    <section id="services" className="bg-white px-6 py-20 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Kicker */}
        <p 
          className="text-m2m-gold text-sm tracking-[0.3em] uppercase mb-6"
          style={{ fontFamily: 'var(--font-nav)' }}
        >
          You&apos;re in great hands.
        </p>

        {/* Headline */}
        <h2 
          className="text-m2m-deep text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] font-light mb-12"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Financing,<br />
          renovations,<br />
          moving solutions
        </h2>

        {/* Body text */}
        <p 
          className="text-m2m-muted text-base leading-relaxed max-w-md mb-12"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          <span className="font-semibold text-m2m-deep">And so much more.</span> Access a network of trusted local leaders. We&apos;ve experienced their professionalism and standard of excellence first hand.
        </p>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8 mb-12 border-t border-gray-200 pt-8">
          {partners.map((partner) => (
            <div key={partner.name} className="flex flex-col gap-1">
              <Link 
                href={partner.href}
                className="text-sm text-m2m-gold hover:text-m2m-deep transition-colors"
                style={{ fontFamily: 'var(--font-nav)' }}
              >
                {partner.name} &rsaquo;
              </Link>
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
          href="#team"
          className="inline-block text-[0.7rem] tracking-[0.2em] uppercase px-8 py-4 bg-m2m-deep text-white font-medium transition-all duration-300 hover:bg-m2m-deep/90"
          style={{ fontFamily: 'var(--font-nav)' }}
        >
          Meet Your Team
        </Link>
      </div>
    </section>
  )
}
