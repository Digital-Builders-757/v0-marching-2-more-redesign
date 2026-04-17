import Image from "next/image"
import Link from "next/link"

import { m2mOutlineGoldLinkClass } from "@/components/m2m-cta"
import { M2mContainer } from "@/components/m2m-layout"

import {
  CLOSING_HERO_IMAGE,
  CREDIT_PLAYBOOK_SECTION_ID,
  DOWNLOAD_GUIDE_CTA,
} from "./content"

export function CreditClosing() {
  return (
    <section className="pb-20 pt-4 sm:pb-24" aria-labelledby="credit-closing-heading">
      <h2 id="credit-closing-heading" className="sr-only">
        Get the credit guide
      </h2>
      <M2mContainer className="flex flex-col items-center gap-10">
        <Link href={`#${CREDIT_PLAYBOOK_SECTION_ID}`} className={m2mOutlineGoldLinkClass}>
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
      </M2mContainer>
    </section>
  )
}
