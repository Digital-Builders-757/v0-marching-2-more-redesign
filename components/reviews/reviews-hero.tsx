"use client"

import { M2mContainer } from "@/components/m2m-layout"

export function ReviewsHero() {
  return (
    <section className="relative overflow-hidden bg-m2m-reviews-band">
      {/* Background image (Wix parity) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://static.wixstatic.com/media/63ece0_85f19a3d9c0648609ff59e4b0a4c9578~mv2.jpg/v1/fill/w_1903,h_812,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/63ece0_85f19a3d9c0648609ff59e4b0a4c9578~mv2.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-m2m-reviews-band/85" aria-hidden />

      <M2mContainer className="relative py-24 text-center md:py-32">
        <p
          className="text-m2m-gold text-sm tracking-[0.25em] uppercase"
          style={{ fontFamily: "var(--font-nav)" }}
        >
          ★ ★ ★ ★ ★
        </p>
        <h1
          data-gsap="blur-in"
          className="mt-6 text-[clamp(2.25rem,5.5vw,4rem)] leading-[1.08] font-light text-m2m-cream"
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
