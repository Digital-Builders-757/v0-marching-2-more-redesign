"use client"

import Image from "next/image"

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
  GUIDE_CALLOUT_IMAGE,
  GUIDE_CALLOUT_SECTION_ID,
  SERVICE_BLOCKS,
  SERVICES_EDITORIAL_IMAGE,
} from "./content"
import { DownsizingGuideForm } from "./downsizing-guide-form"

export function DownsizingServices() {
  return (
    <section
      className="border-t border-m2m-gold/15 py-20 sm:py-24 lg:pb-28 lg:pt-24"
      aria-labelledby="downsizing-services-heading"
    >
      <h2 id="downsizing-services-heading" className="sr-only">
        Downsizing guide and how we help
      </h2>
      <M2mContainer>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <DownsizingGuideForm />
          </div>

          <div className="flex flex-col gap-12 lg:col-span-7">
            <div>
              <p
                className="mb-5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-m2m-gold sm:text-[0.7rem]"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                How We Help
              </p>
              <div className="relative mb-8 aspect-[16/10] overflow-hidden rounded-sm border border-m2m-gold/20 bg-m2m-deep/25">
                <Image
                  src={SERVICES_EDITORIAL_IMAGE}
                  alt="Advisor seated with downsizing sellers reviewing timing and listings on a tablet"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width:1024px) 100vw, 58vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-m2m-deep/40 via-transparent to-transparent" aria-hidden />
              </div>
              <Accordion type="single" collapsible className="w-full rounded-sm border border-m2m-gold/25 bg-m2m-deep/30 px-5 sm:px-6">
                {SERVICE_BLOCKS.map((s) => (
                  <AccordionItem key={s.n} value={s.n} className="border-m2m-gold/15">
                    <AccordionTrigger
                      className="py-5 text-left text-base font-medium text-m2m-cream hover:no-underline sm:py-6 sm:text-lg [&>svg]:text-m2m-gold"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      <span className="mr-4 text-[0.7rem] font-semibold text-m2m-gold" style={{ fontFamily: "var(--font-nav)" }}>
                        {s.n}
                      </span>
                      {s.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p
                        className="pb-3 pl-8 text-sm leading-relaxed text-m2m-cream/85 sm:text-base"
                        style={{ fontFamily: "var(--font-sans)" }}
                      >
                        {s.body}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div
              id={GUIDE_CALLOUT_SECTION_ID}
              className="scroll-mt-28 grid gap-8 rounded-sm border border-m2m-gold/30 bg-m2m-deep/40 p-7 sm:p-9 lg:grid-cols-[minmax(0,1fr)_minmax(0,260px)] lg:items-center lg:p-10"
            >
              <div className="min-w-0">
                <h3
                  className="text-balance text-[clamp(1.35rem,2.5vw,1.85rem)] font-medium leading-snug text-m2m-cream"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {GUIDE_CALLOUT_HEADING}
                </h3>
                <p
                  className="mt-5 text-pretty text-sm leading-relaxed text-m2m-cream/85 sm:text-base"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {GUIDE_CALLOUT_BODY}
                </p>
              </div>
              <div className="relative mx-auto aspect-square w-full max-w-[260px] overflow-hidden rounded-sm ring-1 ring-m2m-gold/25 lg:mx-0">
                <Image
                  src={GUIDE_CALLOUT_IMAGE}
                  alt=""
                  fill
                  className="object-cover object-[center_45%]"
                  sizes="260px"
                />
              </div>
            </div>
          </div>
        </div>
      </M2mContainer>
    </section>
  )
}
