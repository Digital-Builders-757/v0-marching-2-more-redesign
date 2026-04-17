import Link from "next/link"

import { cn } from "@/lib/utils"

import { CTA_LABEL, PAGE_INTRO, PRICING_PLANS } from "./content"

export function PricingSection() {
  return (
    <section
      className="border-b border-m2m-gold/15 bg-gradient-to-b from-m2m-cream via-white to-m2m-cream/80 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto max-w-2xl text-center">
          <p
            className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-m2m-panel"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            {PAGE_INTRO.eyebrow}
          </p>
          <h1
            id="pricing-heading"
            className="mt-3 text-[clamp(2rem,4vw,2.75rem)] font-medium text-m2m-deep"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {PAGE_INTRO.title}
          </h1>
          <p
            className="mt-4 text-base leading-relaxed text-m2m-deep/75 sm:text-lg"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            {PAGE_INTRO.description}
          </p>
        </header>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-stretch lg:gap-6">
          {PRICING_PLANS.map((plan) => {
            const isFeatured = plan.highlight === "best-value"
            return (
              <article
                key={plan.id}
                className={cn(
                  "relative flex flex-col rounded-sm border bg-white p-8 shadow-sm transition-shadow",
                  isFeatured
                    ? "z-10 border-m2m-gold shadow-[0_20px_50px_rgba(28,69,34,0.12)] ring-2 ring-m2m-gold/60 lg:-my-2 lg:py-10"
                    : "border-m2m-gold/20 hover:border-m2m-gold/35 hover:shadow-md",
                )}
              >
                {isFeatured ? (
                  <p
                    className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-m2m-gold px-4 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-m2m-deep"
                    style={{ fontFamily: "var(--font-nav)" }}
                  >
                    Best value
                  </p>
                ) : null}

                <h2
                  className="text-xl font-semibold text-m2m-deep sm:text-2xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {plan.name}
                </h2>
                <div className="mt-4 flex items-baseline gap-1">
                  <span
                    className="text-4xl font-medium text-m2m-panel sm:text-[2.75rem]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {plan.price}
                  </span>
                </div>
                <p
                  className="mt-1 text-sm text-m2m-deep/65"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {plan.periodNote}
                </p>

                <ul className="mt-8 flex-1 space-y-3 border-t border-m2m-gold/15 pt-8">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex gap-3 text-sm leading-relaxed text-m2m-deep/85 sm:text-[0.95rem]"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-m2m-gold" aria-hidden />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-10">
                  <Link
                    href={`/contact-us?plan=${plan.id}`}
                    className={cn(
                      "inline-flex min-h-12 w-full items-center justify-center rounded-sm text-[0.65rem] font-semibold uppercase tracking-[0.16em] transition",
                      isFeatured
                        ? "bg-m2m-gold text-m2m-deep hover:bg-m2m-gold-lt"
                        : "border border-m2m-panel/25 bg-m2m-panel text-m2m-cream hover:bg-m2m-panel-lt",
                    )}
                    style={{ fontFamily: "var(--font-nav)" }}
                  >
                    {CTA_LABEL}
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
