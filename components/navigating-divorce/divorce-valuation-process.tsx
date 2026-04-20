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

      <M2mContainer className="relative z-10 max-w-5xl py-16 lg:py-24">
        <h2
          id="valuation-heading"
          className="mb-14 text-center text-[clamp(1.75rem,3.5vw,2.75rem)] font-medium leading-tight text-m2m-cream"
          style={{ fontFamily: "var(--font-display)" }}
        >
          A Simple Valuation Process:
        </h2>

        <div className="mb-12 grid grid-cols-1 md:grid-cols-2">
          {VALUATION_BLOCKS.map((block, i) => (
            <div
              key={block.title}
              className={cn(
                "border-m2m-gold/30 px-5 py-8 sm:px-8 sm:py-10",
                "border-b last:border-b-0",
                i % 2 === 0 ? "md:border-r" : "",
                i < 2 ? "md:border-b" : "md:border-b-0",
              )}
            >
              <h3
                className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-m2m-cream"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                {block.title}
              </h3>
              <p className="text-sm leading-relaxed text-m2m-cream/88" style={{ fontFamily: "var(--font-sans)" }}>
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
            className="inline-flex bg-m2m-panel px-8 py-4 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-m2m-cream ring-1 ring-m2m-gold/35 transition hover:bg-m2m-panel-lt"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Get Your Free Home Valuation
          </a>
        </div>
      </M2mContainer>
    </section>
  )
}
