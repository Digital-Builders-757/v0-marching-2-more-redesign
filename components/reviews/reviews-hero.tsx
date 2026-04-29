"use client"

import Image from "next/image"

import { M2mContainer } from "@/components/m2m-layout"
import { M2M_MEDIA } from "@/lib/m2m-media"

export function ReviewsHero() {
  return (
    <section className="relative overflow-hidden bg-m2m-reviews-band">
      <div className="absolute inset-0">
        <Image
          src={M2M_MEDIA.reviewsBackdrop}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-m2m-reviews-band/68" aria-hidden />

      <M2mContainer className="relative py-16 text-center sm:py-20 md:py-28">
        <p
          className="text-m2m-gold text-sm tracking-[0.25em] uppercase"
          style={{ fontFamily: "var(--font-nav)" }}
          aria-hidden="true"
        >
          ★ ★ ★ ★ ★
        </p>
        <p className="sr-only">Five out of five stars from Marching 2 More clients.</p>
        <h1
          data-gsap="blur-in"
          className="mt-6 text-[clamp(2.25rem,5.5vw,4rem)] leading-[1.08] font-light text-m2m-cream [text-shadow:0_2px_12px_rgba(5,13,6,0.55)]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Building a Reputation of
          <br />
          Integrity and Trust
        </h1>
      </M2mContainer>
    </section>
  )
}
