import Link from "next/link"

import { M2mContainer } from "@/components/m2m-layout"
import { getConsultationRequestUrl } from "@/lib/m2m-site"

/**
 * Centered bridge above “Who this is for” on `/fha-loan` — mirrors gold pill CTAs in hero / final band.
 */
export function FhaConsultationCtaBand() {
  const href = getConsultationRequestUrl()

  return (
    <section className="scroll-mt-24 border-t border-m2m-gold/10 bg-white py-10 sm:py-12 lg:py-14" aria-label="Book a consultation">
      <M2mContainer className="flex justify-center">
        <Link
          href={href}
          data-m2m-track="fha_midpage_book_consultation"
          className="inline-flex min-h-12 w-full max-w-sm items-center justify-center rounded-full bg-m2m-gold px-10 py-3.5 text-center text-sm font-semibold text-m2m-deep shadow-[0_14px_36px_rgba(0,0,0,0.12)] transition hover:bg-m2m-gold-lt sm:w-auto sm:px-12 sm:text-[0.95rem]"
          style={{ fontFamily: "var(--font-nav)" }}
        >
          Book consultation
        </Link>
      </M2mContainer>
    </section>
  )
}
