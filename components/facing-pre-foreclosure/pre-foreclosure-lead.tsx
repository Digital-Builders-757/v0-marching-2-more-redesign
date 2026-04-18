import Image from "next/image"

import { M2mContainer } from "@/components/m2m-layout"

import { LEAD_SUPPORT_IMAGE, SIGNUP_SECTION_ID } from "./content"
import { PreForeclosureForm } from "./pre-foreclosure-form"

export function PreForeclosureLead() {
  return (
    <section
      id={SIGNUP_SECTION_ID}
      className="scroll-mt-28 border-t border-m2m-gold/15 py-16 sm:py-20 lg:py-24"
      aria-labelledby="pre-foreclosure-lead-heading"
    >
      <h2 id="pre-foreclosure-lead-heading" className="sr-only">
        Sign up for the guide and action plan
      </h2>
      <M2mContainer className="max-w-6xl">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="order-1 lg:order-1">
            <PreForeclosureForm />
          </div>
          <div className="order-2 lg:order-2">
            <div className="relative aspect-[4/3] min-h-[240px] overflow-hidden rounded-sm bg-m2m-deep/40 ring-1 ring-m2m-gold/20 lg:aspect-auto lg:min-h-[28rem]">
              <Image
                src={LEAD_SUPPORT_IMAGE}
                alt=""
                fill
                className="object-cover object-[center_40%]"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </M2mContainer>
    </section>
  )
}
