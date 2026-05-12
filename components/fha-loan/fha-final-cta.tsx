import Link from "next/link"

import { M2mContainer } from "@/components/m2m-layout"
import { getConsultationRequestUrl } from "@/lib/m2m-site"

import { FINAL_CTA } from "./content"

export function FhaFinalCta() {
  const consultationHref = getConsultationRequestUrl()

  return (
    <section
      id="fha-final-cta"
      className="scroll-mt-24 border-t border-m2m-gold/15 bg-m2m-deep py-16 sm:py-20 lg:py-24"
      aria-labelledby="fha-final-cta-heading"
    >
      <M2mContainer className="max-w-3xl text-center">
        <h2
          id="fha-final-cta-heading"
          className="text-balance text-3xl font-light text-m2m-cream sm:text-4xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {FINAL_CTA.title}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-m2m-cream/88 font-sans sm:text-lg">
          {FINAL_CTA.body}
        </p>
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href={consultationHref}
            data-m2m-track="fha_final_book"
            className="inline-flex min-h-12 w-full max-w-sm items-center justify-center rounded-full bg-m2m-gold px-8 py-3.5 text-sm font-semibold text-m2m-deep transition hover:bg-m2m-gold-lt sm:w-auto sm:text-[0.95rem]"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            {FINAL_CTA.buttonLabel}
          </Link>
          <Link
            href="#fha-buyer-quiz"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-m2m-cream/35 px-8 py-3.5 text-sm font-semibold text-m2m-cream transition hover:border-m2m-cream hover:bg-white/5"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            Take the quiz first
          </Link>
        </div>
        <p className="mx-auto mt-8 max-w-xl text-sm text-m2m-cream/65 font-sans">{FINAL_CTA.quizHint}</p>
      </M2mContainer>
    </section>
  )
}
