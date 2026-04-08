import Image from "next/image"

import { Footer } from "@/components/footer"
import { GSAPAnimations } from "@/components/gsap-animations"
import { Header } from "@/components/header"

import {
  CALENDLY_BOOK_URL,
  CREED_REALTY_SEARCH_URL,
  M2M_PHONE_DISPLAY,
  M2M_PHONE_HREF,
  REALSCOUT_HOME_VALUATION_URL,
  REALSCOUT_MAP_SEARCH_URL,
} from "@/lib/m2m-site"

export const metadata = {
  title: "Work With Us | Marching 2 More",
  description:
    "Work with Marching 2 More — start your property search, request a free home valuation, speak with an agent, or get the pre-listing checklist.",
}

export default function HomeSearchPage() {
  return (
    <>
      <Header />
      <GSAPAnimations />

      <main id="main-content" tabIndex={-1} className="bg-m2m-black">
        <section className="relative overflow-hidden">
          {/* Background image (Wix parity vibe) */}
          <div className="absolute inset-0">
            <Image
              src="https://static.wixstatic.com/media/63ece0_85f19a3d9c0648609ff59e4b0a4c9578~mv2.jpg/v1/fill/w_1903,h_812,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/63ece0_85f19a3d9c0648609ff59e4b0a4c9578~mv2.jpg"
              alt=""
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-black/50" aria-hidden />

          <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-28 md:px-16 md:pt-32 lg:px-24">
            <div className="max-w-6xl">
              <div
                className="inline-flex items-center gap-6 text-sm text-m2m-cream/90"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                <span>Work With Us</span>
                <span className="h-px w-24 bg-m2m-cream/40" aria-hidden />
              </div>

              <h1
                className="mt-10 text-balance font-light leading-[0.95] text-m2m-cream text-[clamp(3.25rem,8vw,6.25rem)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                We&apos;re looking
                <br />
                to buy.
                <span className="inline-block w-10" />I&apos;m
                <br />
                ready
                <br />
                to sell.
              </h1>

              <div className="mt-14 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
                <a
                  href={REALSCOUT_MAP_SEARCH_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-sm bg-[#1e5a2b] px-6 py-5 text-sm font-medium tracking-[0.2em] uppercase text-m2m-cream transition hover:bg-[#1e5a2b]/90"
                  style={{ fontFamily: "var(--font-nav)" }}
                >
                  Start Your Search
                </a>

                <a
                  href={REALSCOUT_HOME_VALUATION_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-sm bg-m2m-gold px-6 py-5 text-sm font-medium tracking-[0.2em] uppercase text-m2m-deep transition hover:bg-m2m-gold-lt"
                  style={{ fontFamily: "var(--font-nav)" }}
                >
                  Get Your Free Home Valuation
                </a>

                <a
                  href={CALENDLY_BOOK_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-sm border border-m2m-cream/70 bg-black/20 px-6 py-5 text-sm font-medium tracking-[0.2em] uppercase text-m2m-cream transition hover:border-m2m-cream"
                  style={{ fontFamily: "var(--font-nav)" }}
                >
                  Or Speak with an Agent
                </a>

                <a
                  href={CREED_REALTY_SEARCH_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-sm border border-m2m-cream/70 bg-black/20 px-6 py-5 text-sm font-medium tracking-[0.2em] uppercase text-m2m-cream transition hover:border-m2m-cream"
                  style={{ fontFamily: "var(--font-nav)" }}
                >
                  Receive Your Free Listing Guide
                </a>
              </div>

              <div className="mt-14 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span
                    className="text-sm text-m2m-cream/90"
                    style={{ fontFamily: "var(--font-nav)" }}
                  >
                    Meet Your Team
                  </span>
                  <span className="h-px w-16 bg-m2m-cream/30" aria-hidden />
                </div>

                <a
                  href={M2M_PHONE_HREF}
                  className="inline-flex items-center justify-center rounded-sm border border-m2m-cream/30 bg-black/20 px-6 py-3 text-[0.75rem] tracking-[0.2em] uppercase text-m2m-cream transition hover:border-m2m-cream/60"
                  style={{ fontFamily: "var(--font-nav)" }}
                >
                  {M2M_PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
