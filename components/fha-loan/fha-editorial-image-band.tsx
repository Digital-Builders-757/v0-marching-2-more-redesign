import Image from "next/image"

import { EDITORIAL_SECTION_IMAGE } from "./content"

export function FhaEditorialImageBand() {
  return (
    <section
      className="relative h-[min(42vh,380px)] w-full border-y border-m2m-gold/12"
      aria-label="FHA buyers meeting with a professional in a home setting"
    >
      <Image
        src={EDITORIAL_SECTION_IMAGE}
        alt=""
        fill
        className="object-cover object-[center_40%]"
        sizes="100vw"
      />
      <div className="pointer-events-none absolute inset-0 bg-m2m-deep/20" />
    </section>
  )
}
