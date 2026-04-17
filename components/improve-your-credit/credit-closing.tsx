import Image from "next/image"
import Link from "next/link"

import {
  CLOSING_HERO_IMAGE,
  CREDIT_PLAYBOOK_SECTION_ID,
  DOWNLOAD_GUIDE_CTA,
} from "./content"

export function CreditClosing() {
  return (
    <section
      className="px-4 pb-20 pt-4 sm:px-6 sm:pb-24 lg:px-8"
      aria-labelledby="credit-closing-heading"
    >
      <h2 id="credit-closing-heading" className="sr-only">
        Get the credit guide
      </h2>
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10">
        <Link
          href={`#${CREDIT_PLAYBOOK_SECTION_ID}`}
          className="inline-flex min-h-11 items-center justify-center border border-m2m-gold px-6 py-3 text-center text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-m2m-cream transition hover:bg-m2m-gold/10"
          style={{ fontFamily: "var(--font-nav)" }}
        >
          {DOWNLOAD_GUIDE_CTA}
        </Link>

        <div className="relative aspect-[21/9] w-full max-w-6xl overflow-hidden bg-m2m-deep/50 ring-1 ring-m2m-gold/20 sm:min-h-[280px]">
          <Image
            src={CLOSING_HERO_IMAGE}
            alt=""
            fill
            className="object-cover object-[center_35%]"
            sizes="(max-width:1280px) 100vw, 1152px"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-m2m-deep/40 to-transparent" />
        </div>
      </div>
    </section>
  )
}
