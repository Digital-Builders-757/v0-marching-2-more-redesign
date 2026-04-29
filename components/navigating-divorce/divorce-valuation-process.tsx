import Image from "next/image"

import { M2mContainer } from "@/components/m2m-layout"
import { cn } from "@/lib/utils"
import { REALSCOUT_HOME_VALUATION_URL } from "@/lib/m2m-site"

import { VALUATION_BACKGROUND, VALUATION_BLOCKS } from "./content"

export function DivorceValuationProcess() {
  return (
    <section className="relative overflow-hidden border-b border-m2m-gold/15" aria-labelledby="valuation-heading">
      <div className="absolute inset-0">
        <Image
          src={VALUATION_BACKGROUND}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-m2m-panel/92 via-m2m-deep/88 to-m2m-panel/94" />
      </div>

      <M2mContainer className="relative z-10 max-w-5xl py-20 lg:py-28">
        <p
          className="mb-4 text-center text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-m2m-gold sm:text-[0.7rem]"
          style={{ fontFamily: "var(--font-nav)" }}
        >
          Our Process
        </p>
        <h2
          id="valuation-heading"
          className="mb-5 text-balance text-center text-[clamp(1.75rem,3.5vw,2.75rem)] font-medium leading-tight text-m2m-cream"
          style={{ fontFamily: "var(--font-display)" }}
        >
          A Simple Valuation Process
        </h2>
        <div className="mx-auto mb-14 h-px w-16 bg-m2m-gold/60" aria-hidden />

        <div className="mb-14 grid grid-cols-1 md:grid-cols-2">
          {VALUATION_BLOCKS.map((block, i) => (
            <div
              key={block.title}
              className={cn(
                "border-m2m-gold/25 px-6 py-8 sm:px-8 sm:py-10",
                "border-b last:border-b-0",
                i % 2 === 0 ? "md:border-r" : "",
                i < 2 ? "md:border-b" : "md:border-b-0",
              )}
            >
              <h3
                className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-m2m-gold-lt"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                {block.title}
              </h3>
              <p className="text-pretty text-sm leading-relaxed text-m2m-cream/85" style={{ fontFamily: "var(--font-sans)" }}>
                {block.body}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href={REALSCOUT_HOME_VALUATION_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-[52px] items-center justify-center bg-m2m-gold px-10 py-3.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-m2m-deep shadow-[0_8px_24px_rgba(205,176,95,0.25)] transition hover:bg-m2m-gold-lt"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            Get Your Free Home Valuation
          </a>
        </div>
      </M2mContainer>
    </section>
  )
}
