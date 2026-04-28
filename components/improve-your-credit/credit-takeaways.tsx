import Image from "next/image"
import Link from "next/link"
import { Banknote, CalendarCheck, CreditCard, Globe2 } from "lucide-react"

import { m2mOutlineGoldLinkClass } from "@/components/m2m-cta"
import { M2mContainer } from "@/components/m2m-layout"
import { cn } from "@/lib/utils"

import {
  CREDIT_PLAYBOOK_SECTION_ID,
  DOWNLOAD_GUIDE_CTA,
  TAKEAWAY_ITEMS,
  TAKEAWAYS_BACKGROUND,
  TAKEAWAYS_HEADING,
  TAKEAWAYS_START_CTA,
  TAKEAWAYS_SUBHEAD,
} from "./content"

const ICONS = [CalendarCheck, Banknote, Globe2, CreditCard] as const

export function CreditTakeaways() {
  return (
    <section className="border-b border-m2m-gold/15" aria-labelledby="credit-takeaways-heading">
      <div className="bg-m2m-panel-lt/90 py-8">
        <M2mContainer className="flex justify-center">
          <Link
            href={`#${CREDIT_PLAYBOOK_SECTION_ID}`}
            className={cn(
              m2mOutlineGoldLinkClass,
              "w-full max-w-md border-m2m-gold/80 bg-m2m-panel px-4 hover:border-m2m-gold sm:w-auto",
            )}
          >
            {DOWNLOAD_GUIDE_CTA}
          </Link>
        </M2mContainer>
      </div>

      <div className="min-h-8 sm:min-h-10" aria-hidden />

      <div className="relative min-h-[28rem] w-full sm:min-h-[32rem]">
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
            <h2
              id="credit-takeaways-heading"
              className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-medium leading-tight text-m2m-cream"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {TAKEAWAYS_HEADING}
            </h2>
            <p
              className="mt-3 text-base text-m2m-cream/90 sm:text-lg"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {TAKEAWAYS_SUBHEAD}
            </p>
            <div className="mt-8">
              <Link
                href={`#${CREDIT_PLAYBOOK_SECTION_ID}`}
                className="inline-flex min-h-12 min-w-[8rem] items-center justify-center bg-m2m-gold px-10 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-m2m-deep shadow-lg transition hover:bg-m2m-gold-lt"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                {TAKEAWAYS_START_CTA}
              </Link>
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
                    className="mt-4 max-w-[14rem] text-sm font-medium leading-snug text-m2m-cream underline decoration-m2m-gold/50 underline-offset-4"
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
