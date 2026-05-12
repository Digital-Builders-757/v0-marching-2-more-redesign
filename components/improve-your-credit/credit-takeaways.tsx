import Image from "next/image"

import { M2mContainer } from "@/components/m2m-layout"
import { GOHIGHLEVEL_QUIZ_CREDIT_URL } from "@/lib/m2m-site"
import { cn } from "@/lib/utils"

import {
  TAKEAWAYS_BACKGROUND,
  TAKEAWAYS_HEADING,
  TAKEAWAYS_SUBHEAD,
} from "./content"

/** Mirrors `embedIframeWrapperClasses.tall` in `m2m-lead-quiz-section` — multi-screen static quiz needs vertical room. */
const creditQuizIframeMinHeight =
  "relative min-h-[min(72vh,780px)] w-full sm:min-h-[640px] lg:min-h-[700px]"

export function CreditTakeaways() {
  return (
    <section className="border-b border-m2m-gold/15" aria-labelledby="credit-takeaways-heading">
      <div className="relative w-full min-h-[26rem] sm:min-h-[30rem]">
        <Image
          src={TAKEAWAYS_BACKGROUND}
          alt=""
          fill
          className="object-cover object-[center_40%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-m2m-deep/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-m2m-deep/30 via-transparent to-m2m-deep/70" />

        <M2mContainer className="relative z-10 mx-auto max-w-4xl py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 id="credit-takeaways-heading" className="m2m-section-title leading-tight text-m2m-cream">
              {TAKEAWAYS_HEADING}
            </h2>
            <p
              className="mt-3 text-base text-m2m-cream/90 sm:text-lg"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {TAKEAWAYS_SUBHEAD}
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-full sm:mt-12">
            <div
              className={cn(
                "max-w-full overflow-hidden rounded-md border border-m2m-gold/30 bg-gradient-to-b from-m2m-deep/45 to-m2m-deep",
                "shadow-[0_28px_72px_-12px_rgba(0,0,0,0.4)] ring-1 ring-m2m-gold/25 ring-inset",
              )}
            >
              <div className={cn(creditQuizIframeMinHeight)}>
                <iframe
                  src={GOHIGHLEVEL_QUIZ_CREDIT_URL}
                  title="Credit repair assessment"
                  loading="lazy"
                  data-testid="m2m-credit-repair-quiz-iframe"
                  className="absolute inset-0 h-full w-full min-h-full rounded-[inherit] border-0 bg-m2m-black/20"
                  allow="clipboard-write"
                />
              </div>
            </div>
          </div>
        </M2mContainer>
      </div>
    </section>
  )
}
