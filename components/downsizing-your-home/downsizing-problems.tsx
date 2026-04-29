import {
  ChevronsUpDown,
  FileText,
  Landmark,
  Mountain,
  Users,
  Zap,
} from "lucide-react"

import { M2mContainer } from "@/components/m2m-layout"

import { PROBLEM_ITEMS, PROBLEMS_HEADING, PROBLEMS_SUBHEAD } from "./content"

const ICON_MAP = {
  utilityBills: Zap,
  maintenance: FileText,
  stairs: ChevronsUpDown,
  family: Users,
  scenery: Mountain,
  mortgage: Landmark,
} as const

export function DownsizingProblems() {
  return (
    <section
      className="border-t border-m2m-gold/15 py-20 sm:py-24 lg:py-28"
      aria-labelledby="downsizing-problems-heading"
    >
      <M2mContainer className="max-w-6xl">
        <p
          className="mb-4 text-center text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-m2m-gold sm:text-[0.7rem]"
          style={{ fontFamily: "var(--font-nav)" }}
        >
          Signs You May Be Ready
        </p>
        <h2
          id="downsizing-problems-heading"
          className="text-balance text-center text-[clamp(1.75rem,3.5vw,2.65rem)] font-medium text-m2m-cream"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {PROBLEMS_HEADING}
        </h2>
        <div
          className="mx-auto mt-5 h-px w-16 bg-m2m-gold/60"
          aria-hidden
        />
        <p
          className="mx-auto mt-6 max-w-2xl text-pretty text-center text-base text-m2m-cream/90 sm:text-lg"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          {PROBLEMS_SUBHEAD}
        </p>

        <ul className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-14">
          {PROBLEM_ITEMS.map((item) => {
            const Icon = ICON_MAP[item.key as keyof typeof ICON_MAP] ?? FileText
            return (
              <li key={item.key} className="flex flex-col items-center text-center">
                <div
                  className="flex h-[72px] w-[72px] items-center justify-center rounded-full border border-m2m-gold/25 bg-m2m-deep/40 text-m2m-gold-lt shadow-[0_12px_32px_rgba(0,0,0,0.25)]"
                  aria-hidden
                >
                  <Icon className="h-7 w-7" strokeWidth={1.25} />
                </div>
                <p
                  className="mt-6 max-w-[18rem] text-pretty text-base font-medium leading-snug text-m2m-cream sm:text-[1.05rem]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.label}
                </p>
              </li>
            )
          })}
        </ul>
      </M2mContainer>
    </section>
  )
}
