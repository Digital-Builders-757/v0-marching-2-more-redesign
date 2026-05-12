import Image from "next/image"

import { m2mOutlineGoldLinkClass } from "@/components/m2m-cta"
import { M2mContainer } from "@/components/m2m-layout"

import { CreditDownloadGuideLink } from "./credit-download-guide-link"
import { CLOSING_HERO_IMAGE } from "./content"

export function CreditClosing() {
  return (
    <section className="border-b border-m2m-gold/15 pb-12 pt-8 sm:pb-16 sm:pt-10" aria-labelledby="credit-closing-heading">
      <h2 id="credit-closing-heading" className="sr-only">
        Get the credit guide
      </h2>
      <M2mContainer className="flex flex-col items-center gap-14 sm:gap-16">
        <CreditDownloadGuideLink className={m2mOutlineGoldLinkClass} />

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
      </M2mContainer>
    </section>
  )
}
