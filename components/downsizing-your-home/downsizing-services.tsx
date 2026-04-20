"use client"

import { M2mContainer } from "@/components/m2m-layout"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import {
  GUIDE_CALLOUT_BODY,
  GUIDE_CALLOUT_HEADING,
  GUIDE_CALLOUT_SECTION_ID,
  SERVICE_BLOCKS,
} from "./content"
import { DownsizingGuideForm } from "./downsizing-guide-form"

export function DownsizingServices() {
  return (
    <section
      className="border-t border-m2m-gold/15 py-16 sm:py-20 lg:pb-24 lg:pt-20"
      aria-labelledby="downsizing-services-heading"
    >
      <h2 id="downsizing-services-heading" className="sr-only">
        Downsizing guide and how we help
      </h2>
      <M2mContainer>
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <DownsizingGuideForm />
          </div>

          <div className="flex flex-col gap-10 lg:col-span-7">
            <Accordion type="single" collapsible className="w-full rounded-sm border border-m2m-gold/20 bg-m2m-deep/25 px-4 sm:px-5">
              {SERVICE_BLOCKS.map((s) => (
                <AccordionItem key={s.n} value={s.n} className="border-m2m-gold/15">
                  <AccordionTrigger
                    className="py-5 text-base font-medium text-m2m-cream hover:no-underline sm:text-lg [&>svg]:text-m2m-gold"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    <span className="mr-3 text-[0.7rem] font-semibold text-m2m-gold" style={{ fontFamily: "var(--font-nav)" }}>
                      {s.n}
                    </span>
                    {s.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p
                      className="pb-2 text-sm leading-relaxed text-m2m-cream/88 sm:text-base"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      {s.body}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div
              id={GUIDE_CALLOUT_SECTION_ID}
              className="scroll-mt-28 rounded-sm border border-m2m-gold/25 bg-m2m-deep/35 p-6 sm:p-8 lg:p-10"
            >
              <h3
                className="text-[clamp(1.35rem,2.5vw,1.85rem)] font-medium leading-snug text-m2m-cream"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {GUIDE_CALLOUT_HEADING}
              </h3>
              <p
                className="mt-5 text-sm leading-relaxed text-m2m-cream/88 sm:text-base"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {GUIDE_CALLOUT_BODY}
              </p>
            </div>
          </div>
        </div>
      </M2mContainer>
    </section>
  )
}
