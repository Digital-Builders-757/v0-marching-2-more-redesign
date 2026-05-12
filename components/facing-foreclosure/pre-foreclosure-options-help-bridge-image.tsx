import Image from "next/image"

import { M2mContainer } from "@/components/m2m-layout"

import { OPTIONS_TO_HELP_IMAGE, OPTIONS_TO_HELP_IMAGE_ALT } from "./content"

export function PreForeclosureOptionsHelpBridgeImage() {
  return (
    <section className="border-t border-m2m-gold/12 bg-gradient-to-b from-m2m-deep/28 via-m2m-deep/34 to-m2m-deep/22 py-12 sm:py-14 lg:py-16">
      <M2mContainer>
        <div className="mb-6 flex justify-center sm:mb-8" aria-hidden="true">
          <span className="block h-px w-20 bg-m2m-gold/85 sm:w-28" />
        </div>

        <div
          className="relative mx-auto max-w-4xl rounded-xl bg-gradient-to-b from-m2m-deep/80 to-m2m-black/45 p-2 shadow-[0_2px_28px_-6px_rgba(5,13,6,0.35)] ring-1 ring-m2m-gold/32 ring-offset-2 ring-offset-m2m-panel sm:p-3"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm ring-1 ring-inset ring-m2m-cream/10 sm:aspect-[16/10]">
            <Image
              src={OPTIONS_TO_HELP_IMAGE}
              alt={OPTIONS_TO_HELP_IMAGE_ALT}
              fill
              className="object-cover object-[center_25%]"
              sizes="(max-width: 896px) 100vw, 896px"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-m2m-deep/25 via-transparent to-m2m-panel/18"
              aria-hidden="true"
            />
          </div>
        </div>
      </M2mContainer>
    </section>
  )
}
