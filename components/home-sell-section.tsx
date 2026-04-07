import Link from "next/link"
import { REALSCOUT_HOME_VALUATION_URL } from "@/lib/m2m-site"

export function HomeSellSection() {
  return (
    <section
      className="relative bg-m2m-deep px-6 py-20 md:px-16 lg:px-24 md:py-28 overflow-hidden border-y border-m2m-gold/10"
      aria-labelledby="sell-heading"
    >
      <div className="max-w-3xl mx-auto text-center md:text-left">
        <h2
          id="sell-heading"
          className="text-[clamp(2rem,4vw,3.25rem)] leading-tight font-light text-m2m-cream mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Sell with confidence.
        </h2>
        <p
          className="text-m2m-muted-lt text-base md:text-lg mb-10"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Learn your home&apos;s true value.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start">
          <a
            href={REALSCOUT_HOME_VALUATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-center text-[0.7rem] tracking-[0.2em] uppercase px-8 py-4 bg-m2m-gold text-m2m-deep font-medium transition-all duration-300 hover:bg-m2m-gold-lt"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            Get Your Free Home Valuation
          </a>
          <Link
            href="/resources"
            className="inline-block text-center text-[0.7rem] tracking-[0.2em] uppercase px-8 py-4 border border-m2m-gold/30 text-m2m-cream transition-all duration-300 hover:border-m2m-gold hover:text-m2m-gold"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            Get The Pre-Listing Checklist
          </Link>
        </div>

        <p
          className="mt-8 text-sm text-m2m-muted-lt/90 max-w-xl mx-auto md:mx-0"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Our 20 page guide to assist you with every phase of selling your home.
        </p>
      </div>
    </section>
  )
}
