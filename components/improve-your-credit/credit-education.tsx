import Image from "next/image"
import Link from "next/link"

import { m2mOutlineGoldLinkClass } from "@/components/m2m-cta"
import { M2mContainer } from "@/components/m2m-layout"
import { cn } from "@/lib/utils"

import {
  CREDIT_FACTORS,
  CREDIT_HOMEWORK_HEADING,
  CREDIT_HOMEWORK_SCRIPT,
  CREDIT_HOMEWORK_STEPS,
  CREDIT_PLAYBOOK_SECTION_ID,
  CREDIT_REVIEW_HEADING,
  CREDIT_REVIEW_INTRO,
  CREDIT_REVIEW_OUTRO,
  DOWNLOAD_GUIDE_CTA,
  EDUCATION_LARGE_IMAGE,
  HOMEWORK_COLLAGE_IMAGES,
} from "./content"

function DownloadGuideLink({ className }: { className?: string }) {
  return (
    <Link href={`#${CREDIT_PLAYBOOK_SECTION_ID}`} className={cn(m2mOutlineGoldLinkClass, className)}>
      {DOWNLOAD_GUIDE_CTA}
    </Link>
  )
}

export function CreditEducation() {
  return (
    <section
      className="border-b border-m2m-gold/15 py-16 sm:py-20 lg:py-24"
      aria-labelledby="credit-education-heading"
    >
      <M2mContainer>
        <div className="mb-10 flex justify-center lg:mb-12">
          <DownloadGuideLink />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Large visual */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-m2m-deep/50 ring-1 ring-m2m-gold/20 lg:aspect-auto lg:min-h-full lg:min-h-[32rem]">
              <Image
                src={EDUCATION_LARGE_IMAGE}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 40vw"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:col-span-7">
            <article
              className="bg-m2m-cream p-6 text-m2m-deep shadow-sm ring-1 ring-m2m-gold/15 sm:p-8"
              aria-labelledby="credit-review-heading"
            >
              <h2
                id="credit-education-heading"
                className="sr-only"
              >
                Credit education
              </h2>
              <h3
                id="credit-review-heading"
                className="text-xl font-medium tracking-tight text-m2m-panel sm:text-2xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {CREDIT_REVIEW_HEADING}
              </h3>
              <p
                className="mt-4 text-sm leading-relaxed text-m2m-deep/85"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {CREDIT_REVIEW_INTRO}
              </p>
              <ol className="mt-6 space-y-5">
                {CREDIT_FACTORS.map((item) => (
                  <li key={item.n} className="flex gap-4">
                    <span
                      className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-m2m-panel/25 text-sm font-semibold text-m2m-panel"
                      style={{ fontFamily: "var(--font-nav)" }}
                      aria-hidden
                    >
                      {item.n}
                    </span>
                    <div>
                      <p
                        className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-m2m-panel"
                        style={{ fontFamily: "var(--font-nav)" }}
                      >
                        {item.title}
                      </p>
                      <p
                        className="mt-1 text-sm leading-relaxed text-m2m-deep/85"
                        style={{ fontFamily: "var(--font-sans)" }}
                      >
                        {item.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
              <p
                className="mt-6 text-sm leading-relaxed text-m2m-deep/85"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {CREDIT_REVIEW_OUTRO}
              </p>
            </article>

            <article
              className="flex flex-col bg-m2m-cream p-6 text-m2m-deep ring-1 ring-m2m-gold/15 sm:p-8"
              aria-labelledby="credit-homework-heading"
            >
              <h3
                id="credit-homework-heading"
                className="text-xl font-medium text-m2m-panel sm:text-2xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {CREDIT_HOMEWORK_HEADING}
              </h3>
              <p
                className="-mt-1 text-2xl italic text-m2m-gold-dim sm:text-3xl"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {CREDIT_HOMEWORK_SCRIPT}
              </p>
              <ol className="mt-6 list-decimal space-y-3 pl-5 marker:text-m2m-gold-dim">
                {CREDIT_HOMEWORK_STEPS.map((step) => (
                  <li
                    key={step}
                    className="text-sm leading-relaxed text-m2m-deep/90 pl-1"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {step}
                  </li>
                ))}
              </ol>

              <div className="mt-8 grid grid-cols-1 gap-2 border-t border-m2m-gold/20 pt-6 sm:grid-cols-3">
                {HOMEWORK_COLLAGE_IMAGES.map((src, i) => (
                  <div key={src} className="relative aspect-[4/3] overflow-hidden bg-m2m-deep/20">
                    <Image
                      src={src}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width:1024px) 33vw, 180px"
                    />
                    <span className="sr-only">Homework collage image {i + 1}</span>
                  </div>
                ))}
              </div>
            </article>

            <div className="flex justify-center pt-2 lg:justify-start">
              <DownloadGuideLink />
            </div>
          </div>
        </div>
      </M2mContainer>
    </section>
  )
}
