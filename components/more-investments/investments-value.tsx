import Link from "next/link"

import { M2mConsultationCta } from "@/components/m2m-cta"
import { M2mContainer } from "@/components/m2m-layout"
import { GOOGLE_REVIEW_URL } from "@/lib/m2m-site"

import {
  INVESTOR_VALUE_COLUMNS,
  INVESTOR_VALUE_HEADING,
  INVESTOR_VALUE_SECTION_ID,
  INVESTOR_VALUE_SUBHEAD,
} from "./content"

export function InvestmentsValue() {
  return (
    <section
      id={INVESTOR_VALUE_SECTION_ID}
      className="scroll-mt-28 border-b border-m2m-gold/15 bg-m2m-deep/35 py-16 md:py-20 lg:py-24"
      aria-labelledby="investments-value-heading"
    >
      <M2mContainer>
        <h2 id="investments-value-heading" className="m2m-section-title max-w-3xl text-m2m-cream">
          {INVESTOR_VALUE_HEADING}
        </h2>
        <p
          className="mt-5 max-w-2xl text-base leading-relaxed text-m2m-cream/88 sm:text-[1.05rem]"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          {INVESTOR_VALUE_SUBHEAD}
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
          {INVESTOR_VALUE_COLUMNS.map((col) => (
            <article
              key={col.title}
              className="rounded-sm border border-m2m-gold/20 bg-m2m-panel/80 p-6 shadow-[0_16px_40px_rgba(0,0,0,0.22)] sm:p-7"
            >
              <h3
                className="text-lg font-medium leading-snug text-m2m-gold-lt sm:text-xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {col.title}
              </h3>
              <p
                className="mt-3 text-sm leading-relaxed text-m2m-cream/88 sm:text-base"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {col.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start gap-5">
          <M2mConsultationCta
            variant="gold"
            className="w-full min-[400px]:w-auto px-9"
            data-m2m-track="consultation_request"
            data-m2m-track-loc="investments_value"
          >
            Book investor consultation
          </M2mConsultationCta>
          <div className="m2m-quiet-action-row mt-0">
            <Link href="/reviews">Client reviews</Link>
            <span className="text-m2m-cream/35" aria-hidden>
              ·
            </span>
            <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noreferrer">
              Google reviews
            </a>
          </div>
        </div>
      </M2mContainer>
    </section>
  )
}
