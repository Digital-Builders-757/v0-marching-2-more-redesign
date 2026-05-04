import Link from "next/link"

import { M2mContainer } from "@/components/m2m-layout"
import {
  getConsultationRequestUrl,
  GOOGLE_REVIEW_URL,
  M2M_PHONE_DISPLAY,
  M2M_PHONE_HREF,
} from "@/lib/m2m-site"

import { INVESTMENTS_TRUST_ATTRIBUTION, INVESTMENTS_TRUST_QUOTE } from "./content"

export function InvestmentsSocialProof() {
  return (
    <section
      className="border-b border-m2m-gold/15 bg-m2m-panel py-16 md:py-20 lg:py-24"
      aria-labelledby="investments-social-proof-heading"
    >
      <M2mContainer className="max-w-3xl text-center">
        <h2 id="investments-social-proof-heading" className="sr-only">
          Client trust
        </h2>
        <p
          className="text-[4.5rem] leading-none text-m2m-cream/75 sm:text-[5.5rem]"
          style={{ fontFamily: "var(--font-display)" }}
          aria-hidden
        >
          “
        </p>
        <blockquote>
          <p
            className="mx-auto -mt-2 max-w-2xl text-lg font-normal italic leading-[1.65] text-m2m-cream sm:text-xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {INVESTMENTS_TRUST_QUOTE}
          </p>
          <footer
            className="mt-8 text-xs font-medium uppercase tracking-[0.14em] text-m2m-gold-lt sm:text-sm"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            {INVESTMENTS_TRUST_ATTRIBUTION}
          </footer>
        </blockquote>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm">
          <Link
            href="/reviews"
            className="font-medium text-m2m-gold-lt underline decoration-m2m-gold/45 underline-offset-4 transition hover:text-m2m-cream font-nav"
          >
            Client reviews
          </Link>
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-m2m-gold-lt underline decoration-m2m-gold/45 underline-offset-4 transition hover:text-m2m-cream font-nav"
          >
            Google reviews
          </a>
        </div>
        <p className="m2m-quiet-action-row mt-10 justify-center text-center">
          <a href={M2M_PHONE_HREF} data-m2m-track="investments_phone_social" data-m2m-track-loc="investments_social">
            Call {M2M_PHONE_DISPLAY}
          </a>
          <span className="text-m2m-cream/35" aria-hidden>
            ·
          </span>
          <Link href="/contact-us?intent=buyer" data-m2m-track="investments_contact_social" data-m2m-track-loc="investments_social">
            Contact online
          </Link>
          <span className="text-m2m-cream/35" aria-hidden>
            ·
          </span>
          <Link href={getConsultationRequestUrl()}>Book a consultation</Link>
        </p>
      </M2mContainer>
    </section>
  )
}
