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
        <h2
          id="investments-value-heading"
          className="max-w-3xl text-[clamp(1.65rem,3.2vw,2.35rem)] font-medium leading-snug text-m2m-cream"
          style={{ fontFamily: "var(--font-display)" }}
        >
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

        <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-8">
          <M2mConsultationCta variant="outlineCream" className="w-full min-[400px]:w-auto">
            Book a consultation
          </M2mConsultationCta>
          <Link
            href="/reviews"
            className="text-sm font-medium text-m2m-gold-lt underline decoration-m2m-gold/45 underline-offset-4 transition hover:text-m2m-cream"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            Read client reviews
          </Link>
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-m2m-gold-lt underline decoration-m2m-gold/45 underline-offset-4 transition hover:text-m2m-cream"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            Google reviews
          </a>
        </div>
      </M2mContainer>
    </section>
  )
}
