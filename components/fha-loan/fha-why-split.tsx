import Link from "next/link"
import {
  BadgeCheck,
  ClipboardCheck,
  Handshake,
  Home,
  MapPinned,
  CircleDollarSign,
} from "lucide-react"

import { M2mContainer } from "@/components/m2m-layout"
import { cn } from "@/lib/utils"

import { FHA_VALUE_POINTS, WHY_CHOOSE_HEADER, WHY_SPLIT_LEFT } from "./content"

const iconMap = {
  map: MapPinned,
  clipboard: ClipboardCheck,
  handshake: Handshake,
  home: Home,
  dollar: CircleDollarSign,
  check: BadgeCheck,
} as const

export function FhaWhySplit() {
  return (
    <section className="border-b border-m2m-gold/10" aria-labelledby="fha-why-heading">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex min-h-[320px] items-center justify-center bg-white py-16 lg:min-h-[480px] lg:py-24">
          <M2mContainer className="max-w-xl text-center lg:text-left">
            <h2
              id="fha-why-heading"
              className="mb-8 text-[clamp(1.75rem,3vw,2.5rem)] font-semibold text-m2m-deep"
              style={{ fontFamily: "var(--font-nav)" }}
            >
              {WHY_SPLIT_LEFT.title}
            </h2>
            <Link
              href={WHY_SPLIT_LEFT.ctaHref}
              className="inline-flex bg-m2m-panel px-8 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-m2m-cream transition hover:bg-m2m-panel-lt"
              style={{ fontFamily: "var(--font-nav)" }}
            >
              {WHY_SPLIT_LEFT.ctaLabel}
            </Link>
          </M2mContainer>
        </div>

        <div className="bg-[#f7f6f2] py-14 sm:py-16 lg:py-20">
          <M2mContainer>
          <header className="mb-12 text-center">
            <p
              className="text-[0.65rem] font-medium uppercase tracking-[0.28em] text-m2m-deep/65"
              style={{ fontFamily: "var(--font-nav)" }}
            >
              {WHY_CHOOSE_HEADER.kickerTop}
            </p>
            <p
              className="mt-2 text-[0.85rem] font-bold uppercase tracking-[0.2em] text-m2m-gold sm:text-[0.95rem]"
              style={{ fontFamily: "var(--font-nav)" }}
            >
              {WHY_CHOOSE_HEADER.brand}
            </p>
            <p
              className="mt-1 text-[0.65rem] font-medium uppercase tracking-[0.28em] text-m2m-deep/65"
              style={{ fontFamily: "var(--font-nav)" }}
            >
              {WHY_CHOOSE_HEADER.kickerBottom}
            </p>
            <div className="mt-6 flex justify-center">
              <span
                className="inline-block rounded-full bg-m2m-panel px-5 py-2 text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-m2m-cream"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                {WHY_CHOOSE_HEADER.pill}
              </span>
            </div>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2">
            {FHA_VALUE_POINTS.map((item, idx) => {
              const Icon = iconMap[item.icon]
              const isRightCol = idx % 2 === 1
              return (
                <div
                  key={item.title}
                  className={cn(
                    "flex gap-4 border-m2m-deep/10 py-8 sm:py-7",
                    idx < 5 && "border-b",
                    idx < 4 && "sm:border-b",
                    idx >= 4 && "sm:border-b-0",
                    isRightCol ? "sm:border-l sm:pl-8" : "sm:pr-8",
                  )}
                >
                  <div className="flex-shrink-0 text-m2m-panel">
                    <Icon className="h-8 w-8" strokeWidth={1.25} aria-hidden />
                  </div>
                  <div>
                    <h3
                      className="mb-2 text-sm font-bold leading-snug text-m2m-deep"
                      style={{ fontFamily: "var(--font-nav)" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-m2m-deep/75" style={{ fontFamily: "var(--font-sans)" }}>
                      {item.body}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
          </M2mContainer>
        </div>
      </div>
    </section>
  )
}
