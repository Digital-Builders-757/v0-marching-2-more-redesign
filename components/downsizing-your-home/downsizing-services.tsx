import Link from "next/link"

import { M2mContainer } from "@/components/m2m-layout"

import {
  ACTION_PLAN_BODY,
  SERVICE_BLOCKS,
  WEBINAR_ACTION_PLAN_SECTION_ID,
  WEBINAR_HEADING,
  WEBINAR_REGISTER_URL,
  WEBINAR_SECONDARY_CTA,
} from "./content"
import { DownsizingGuideForm } from "./downsizing-guide-form"

function ServiceCard({
  n,
  title,
  body,
}: {
  n: string
  title: string
  body: string
}) {
  return (
    <article className="rounded-sm border border-m2m-gold/20 bg-m2m-deep/25 p-6 backdrop-blur-[2px] sm:p-7">
      <p
        className="text-[0.7rem] font-semibold text-m2m-gold"
        style={{ fontFamily: "var(--font-nav)" }}
      >
        {n}
      </p>
      <h3
        className="mt-2 text-lg font-medium leading-snug text-m2m-cream sm:text-xl"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h3>
      <p
        className="mt-3 text-sm leading-relaxed text-m2m-cream/88"
        style={{ fontFamily: "var(--font-sans)" }}
      >
        {body}
      </p>
    </article>
  )
}

export function DownsizingServices() {
  return (
    <section
      className="border-t border-m2m-gold/15 py-16 sm:py-20 lg:pb-24 lg:pt-20"
      aria-labelledby="downsizing-services-heading"
    >
      <h2 id="downsizing-services-heading" className="sr-only">
        Downsizing guide, services, and webinar
      </h2>
      <M2mContainer>
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <DownsizingGuideForm />
          </div>

          <div className="flex flex-col gap-10 lg:col-span-7">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {SERVICE_BLOCKS.map((s) => (
                <ServiceCard key={s.n} n={s.n} title={s.title} body={s.body} />
              ))}
            </div>

            <div
              id={WEBINAR_ACTION_PLAN_SECTION_ID}
              className="scroll-mt-28 rounded-sm border border-m2m-gold/25 bg-m2m-deep/35 p-6 sm:p-8 lg:p-10"
            >
              <h3
                className="text-[clamp(1.35rem,2.5vw,1.85rem)] font-medium leading-snug text-m2m-cream"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {WEBINAR_HEADING}
              </h3>
              <p
                className="mt-5 text-sm leading-relaxed text-m2m-cream/88 sm:text-base"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {ACTION_PLAN_BODY}
              </p>
              <div className="mt-8">
                <Link
                  href={WEBINAR_REGISTER_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center justify-center text-sm font-semibold text-m2m-gold-lt underline decoration-m2m-gold/50 underline-offset-8 transition hover:text-m2m-cream"
                  style={{ fontFamily: "var(--font-nav)" }}
                >
                  {WEBINAR_SECONDARY_CTA}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </M2mContainer>
    </section>
  )
}
