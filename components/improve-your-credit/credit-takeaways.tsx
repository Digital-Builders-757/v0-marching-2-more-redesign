import Image from "next/image"
import { Banknote, CalendarCheck, CreditCard, Globe2 } from "lucide-react"

import { M2mContainer } from "@/components/m2m-layout"

import {
  CREDIT_GUIDE_FORM_HASH,
  DOWNLOAD_GUIDE_CTA,
  TAKEAWAY_ITEMS,
  TAKEAWAYS_BACKGROUND,
  TAKEAWAYS_HEADING,
  TAKEAWAYS_SUBHEAD,
} from "./content"

const ICONS = [CalendarCheck, Banknote, Globe2, CreditCard] as const

export function CreditTakeaways() {
  return (
    <section className="border-b border-m2m-gold/15" aria-labelledby="credit-takeaways-heading">
      <div className="relative min-h-[26rem] w-full sm:min-h-[30rem]">
        <Image
          src={TAKEAWAYS_BACKGROUND}
          alt=""
          fill
          className="object-cover object-[center_40%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-m2m-deep/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-m2m-deep/30 via-transparent to-m2m-deep/70" />

        <M2mContainer className="relative z-10 py-14 sm:py-16 lg:py-20">
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
            <div className="mt-8 flex flex-col items-center gap-3">
              <a
                href={CREDIT_GUIDE_FORM_HASH}
                className="inline-flex min-h-12 w-full max-w-xs items-center justify-center bg-m2m-gold px-10 py-3.5 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-m2m-deep shadow-lg transition hover:bg-m2m-gold-lt sm:w-auto font-nav"
              >
                {DOWNLOAD_GUIDE_CTA}
              </a>
            </div>
          </div>

          <ul className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {TAKEAWAY_ITEMS.map((item, i) => {
              const Icon = ICONS[i] ?? CalendarCheck
              return (
                <li key={item.label} className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-m2m-cream/90 bg-m2m-gold/90 text-m2m-panel shadow-md">
                    <Icon className="h-7 w-7" strokeWidth={1.5} aria-hidden />
                  </div>
                  <span
                    className="mt-4 max-w-[14rem] text-sm font-medium leading-snug text-m2m-cream/95"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {item.label}
                  </span>
                </li>
              )
            })}
          </ul>
        </M2mContainer>
      </div>
    </section>
  )
}
