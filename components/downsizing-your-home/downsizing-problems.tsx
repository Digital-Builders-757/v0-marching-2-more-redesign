import {
  ChevronsUpDown,
  FileText,
  Landmark,
  Mountain,
  Users,
  Zap,
} from "lucide-react"

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
      className="border-t border-m2m-gold/15 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      aria-labelledby="downsizing-problems-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="downsizing-problems-heading"
          className="text-center text-[clamp(1.75rem,3.5vw,2.65rem)] font-medium text-m2m-cream"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {PROBLEMS_HEADING}
        </h2>
        <div
          className="mx-auto mt-5 h-px w-16 bg-m2m-gold/70"
          aria-hidden
        />
        <p
          className="mx-auto mt-6 max-w-2xl text-center text-base text-m2m-cream/88 sm:text-lg"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {PROBLEMS_SUBHEAD}
        </p>

        <ul className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
          {PROBLEM_ITEMS.map((item) => {
            const Icon = ICON_MAP[item.key as keyof typeof ICON_MAP] ?? FileText
            return (
              <li key={item.key} className="flex flex-col items-center text-center">
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-full border border-m2m-cream/35 bg-m2m-deep/30 text-m2m-cream shadow-[0_8px_24px_rgba(0,0,0,0.2)]"
                  aria-hidden
                >
                  <Icon className="h-7 w-7" strokeWidth={1.25} />
                </div>
                <p
                  className="mt-5 max-w-[18rem] text-base font-medium leading-snug text-m2m-cream sm:text-[1.05rem]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.label}
                </p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
