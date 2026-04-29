"use client"

import { M2mContainer } from "@/components/m2m-layout"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export type M2mCampaignFaqItem = {
  id: string
  question: string
  answer: string
}

export function M2mCampaignFaq({
  eyebrow = "Questions",
  heading = "Common questions",
  items,
  id = "m2m-campaign-faq-heading",
  variant = "panel",
}: {
  eyebrow?: string
  heading?: string
  items: M2mCampaignFaqItem[]
  /** Stable id for aria-labelledby */
  id?: string
  /** `panel` = green campaign pages; `light` = white main (e.g. FHA). */
  variant?: "panel" | "light"
}) {
  if (!items.length) return null

  const isLight = variant === "light"

  return (
    <section
      className="border-t border-m2m-gold/15 py-16 sm:py-20"
      aria-labelledby={id}
    >
      <M2mContainer>
        <p
          className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-m2m-gold sm:text-[0.7rem]"
          style={{ fontFamily: "var(--font-nav)" }}
        >
          {eyebrow}
        </p>
        <h2
          id={id}
          className={
            isLight
              ? "mb-8 text-2xl font-light text-m2m-deep sm:text-3xl"
              : "mb-8 text-2xl font-light text-m2m-cream sm:text-3xl"
          }
          style={{ fontFamily: "var(--font-display)" }}
        >
          {heading}
        </h2>
        <Accordion
          type="single"
          collapsible
          className={
            isLight
              ? "w-full max-w-3xl rounded-sm border border-m2m-deep/12 bg-white px-5 shadow-sm sm:px-6"
              : "w-full max-w-3xl rounded-sm border border-m2m-gold/25 bg-m2m-deep/30 px-5 sm:px-6"
          }
        >
          {items.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className={isLight ? "border-m2m-deep/10" : "border-m2m-gold/15"}
            >
              <AccordionTrigger
                className={
                  isLight
                    ? "py-5 text-left text-base font-medium text-m2m-deep hover:no-underline sm:py-6 sm:text-lg [&>svg]:text-m2m-gold"
                    : "py-5 text-left text-base font-medium text-m2m-cream hover:no-underline sm:py-6 sm:text-lg [&>svg]:text-m2m-gold"
                }
                style={{ fontFamily: "var(--font-display)" }}
              >
                {item.question}
              </AccordionTrigger>
              <AccordionContent>
                <p
                  className={
                    isLight
                      ? "pb-3 text-sm leading-relaxed text-m2m-deep/85 sm:text-base"
                      : "pb-3 text-sm leading-relaxed text-m2m-cream/85 sm:text-base"
                  }
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {item.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </M2mContainer>
    </section>
  )
}
