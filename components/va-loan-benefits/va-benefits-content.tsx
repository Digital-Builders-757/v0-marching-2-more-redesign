import { Fragment } from "react"
import Image from "next/image"

import { M2mContainer } from "@/components/m2m-layout"

import {
  BENEFITS_CLOSING,
  BENEFITS_HEADING,
  BENEFITS_INTRO,
  BENEFITS_LIST_INTRO,
  BENEFITS_EDITORIAL_ALT,
  BENEFITS_EDITORIAL_IMAGE,
  VA_BENEFIT_ITEMS,
} from "./content"

export function VaBenefitsContent() {
  const [introBeforeVa, introAfterVa] = BENEFITS_INTRO.split("VA home loan")

  return (
    <section
      className="border-b border-m2m-gold/15 py-16 sm:py-20 lg:py-24"
      aria-labelledby="va-benefits-heading"
    >
      <M2mContainer className="max-w-3xl">
        <h2
          id="va-benefits-heading"
          className="text-center text-[clamp(1.5rem,3.2vw,2.25rem)] font-medium leading-snug text-m2m-cream"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {BENEFITS_HEADING}
        </h2>

        <div className="relative mx-auto mt-10 aspect-[21/9] max-h-72 w-full overflow-hidden rounded-sm ring-1 ring-m2m-gold/25 sm:mt-12">
          <Image
            src={BENEFITS_EDITORIAL_IMAGE}
            alt={BENEFITS_EDITORIAL_ALT}
            fill
            className="object-cover object-[center_35%]"
            sizes="(min-width:1024px) 48rem, 100vw"
          />
        </div>

        <p
          className="mt-8 text-center text-base leading-relaxed text-m2m-cream/90 sm:text-lg"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          <Fragment>
            {introBeforeVa}
            <strong className="font-semibold text-m2m-cream">VA home loan</strong>
            {introAfterVa}
          </Fragment>
        </p>

        <p
          className="mt-10 text-base font-medium text-m2m-cream sm:text-lg"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {BENEFITS_LIST_INTRO}
        </p>

        <ol className="mt-6 space-y-8">
          {VA_BENEFIT_ITEMS.map((item, index) => (
            <li key={item.title} className="border-t border-m2m-gold/15 pt-6 first:border-t-0 first:pt-0">
              <p
                className="text-lg font-medium text-m2m-gold-lt sm:text-xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <span className="mr-2 text-m2m-gold" aria-hidden>
                  {index + 1}.
                </span>
                {item.title}
              </p>
              <p
                className="mt-3 text-sm leading-relaxed text-m2m-cream/88 sm:text-base"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {item.body}
              </p>
            </li>
          ))}
        </ol>

        <p
          className="mt-12 text-sm leading-relaxed text-m2m-cream/88 sm:text-base"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          {BENEFITS_CLOSING}
        </p>
      </M2mContainer>
    </section>
  )
}
