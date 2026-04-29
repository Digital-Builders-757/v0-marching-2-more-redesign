import Link from "next/link"

import { M2mContainer, M2mSection } from "@/components/m2m-layout"

/** Wix parity: CTA cluster on /our-team. */
export function TeamCTA() {
  return (
    <M2mSection variant="black" className="py-20">
      <M2mContainer className="max-w-4xl text-center">
        {/* Heading */}
        <h2
          className="font-light italic text-[clamp(2rem,4vw,3rem)] leading-[1.1] text-m2m-cream mb-8"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Have a question?
        </h2>

        {/* CTA buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact-us"
            className="inline-flex min-h-12 touch-manipulation items-center justify-center px-10 py-4 text-[0.7rem] font-medium uppercase tracking-[0.2em] bg-m2m-gold text-m2m-deep transition hover:bg-m2m-gold-lt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-m2m-gold"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            Contact Us
          </Link>
        </div>
      </M2mContainer>
    </M2mSection>
  )
}
