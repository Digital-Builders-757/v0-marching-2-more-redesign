import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { Footer } from "@/components/footer"
import { GSAPAnimations } from "@/components/gsap-animations"
import { Header } from "@/components/header"

import { M2mContainer, M2mInsetHeroFrame, M2mInsetHeroScrim } from "@/components/m2m-layout"
import { M2mRelatedPages } from "@/components/m2m-related-pages"
import { REALSCOUT_HOME_VALUATION_URL, REALSCOUT_MAP_SEARCH_URL } from "@/lib/m2m-site"
import { m2mStandardMetadata } from "@/lib/m2m-seo-metadata"

export const metadata: Metadata = m2mStandardMetadata({
  title: "Home Search & Buyer Help | Hampton Roads | Marching 2 More",
  description:
    "Search Hampton Roads listings (Norfolk, Virginia Beach, Chesapeake, and beyond), connect with our team about buying or VA loans, and find seller checklist resources on Marching 2 More.",
  path: "/home-search",
  openGraphTitle: "Home Search & Buyer Help | Marching 2 More",
})

export default function HomeSearchPage() {
  return (
    <>
      <Header />
      <GSAPAnimations />

      <main id="main-content" tabIndex={-1} className="bg-white">
        <section className="relative min-h-[78dvh] overflow-hidden bg-white py-5 sm:py-6 md:py-8">
          <M2mInsetHeroFrame className="min-h-[min(80dvh,880px)] sm:min-h-[calc(80dvh-3rem)]">
            <div className="absolute inset-0">
              <Image
                src="/images/home-search-hero.png"
                alt=""
                fill
                priority
                className="object-cover object-[center_30%] sm:object-center"
                sizes="100vw"
              />
            </div>
            <M2mInsetHeroScrim variant="luminous" />

            <M2mContainer className="relative z-10 max-w-5xl pt-16 pb-12 sm:pt-28 sm:pb-16">
              <h1 className="sr-only">Home search, buyer help, and seller tools in Hampton Roads</h1>
              {/* Kicker */}
              <p
                className="text-[0.62rem] tracking-[0.25em] uppercase text-m2m-gold"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                Work With Us
              </p>

              {/* Two column headings */}
              <div className="mt-8 grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-16 md:mt-10">
                {/* Left column - Buy */}
                <div>
                  <h2
                    className="font-light italic leading-[1.05] text-[clamp(2.25rem,5vw,4rem)] text-m2m-cream [text-shadow:0_2px_14px_rgba(5,13,6,0.55),0_1px_3px_rgba(5,13,6,0.4)]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    We&apos;re looking<br />to buy.
                  </h2>
                  <p
                    className="mt-6 max-w-md text-[0.95rem] sm:text-sm leading-relaxed text-m2m-cream [text-shadow:0_1px_10px_rgba(5,13,6,0.45)]"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    Start your property search or reach out and we&apos;ll help you find your perfect home.
                  </p>
                  <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:gap-4">
                    <a
                      href={REALSCOUT_MAP_SEARCH_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-12 w-full touch-manipulation items-center justify-center bg-m2m-gold px-8 py-4 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-m2m-deep shadow-[0_4px_22px_-4px_rgba(5,13,6,0.4)] transition hover:bg-m2m-gold-lt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-m2m-gold sm:w-auto"
                      style={{ fontFamily: "var(--font-nav)" }}
                    >
                      Start Your Search
                    </a>
                    <Link
                      href="/contact-us?intent=buyer"
                      className="inline-flex min-h-12 w-full touch-manipulation items-center justify-center border border-m2m-gold/50 bg-m2m-deep/25 px-8 py-4 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-m2m-cream shadow-[0_2px_14px_-4px_rgba(5,13,6,0.35)] transition hover:border-m2m-gold hover:text-m2m-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-m2m-gold sm:w-auto"
                      style={{ fontFamily: "var(--font-nav)" }}
                      data-m2m-track="home_search_speak_agent"
                      data-m2m-track-loc="/home-search"
                    >
                      Speak With an Agent
                    </Link>
                  </div>
                </div>

                {/* Right column - Sell */}
                <div>
                  <h2
                    className="font-light italic leading-[1.05] text-[clamp(2.25rem,5vw,4rem)] text-m2m-cream [text-shadow:0_2px_14px_rgba(5,13,6,0.55),0_1px_3px_rgba(5,13,6,0.4)]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    I&apos;m ready<br />to sell.
                  </h2>
                  <p
                    className="mt-6 max-w-md text-[0.95rem] sm:text-sm leading-relaxed text-m2m-cream [text-shadow:0_1px_10px_rgba(5,13,6,0.45)]"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    Get a free home evaluation online—request our comprehensive listing guide on the Seller Resources page.
                  </p>
                  <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:gap-4">
                    <a
                      href={REALSCOUT_HOME_VALUATION_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-12 w-full touch-manipulation items-center justify-center bg-m2m-gold px-8 py-4 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-m2m-deep shadow-[0_4px_22px_-4px_rgba(5,13,6,0.4)] transition hover:bg-m2m-gold-lt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-m2m-gold sm:w-auto"
                      style={{ fontFamily: "var(--font-nav)" }}
                    >
                      Free Home Evaluation
                    </a>
                    <Link
                      href="/resources#listing-guide-form"
                      className="inline-flex min-h-12 w-full touch-manipulation items-center justify-center border border-m2m-gold/50 bg-m2m-deep/25 px-8 py-4 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-m2m-cream shadow-[0_2px_14px_-4px_rgba(5,13,6,0.35)] transition hover:border-m2m-gold hover:text-m2m-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-m2m-gold sm:w-auto"
                      style={{ fontFamily: "var(--font-nav)" }}
                      data-m2m-track="home_search_listing_guide_resources"
                      data-m2m-track-loc="/home-search"
                    >
                      Free Listing Guide
                    </Link>
                  </div>
                </div>
              </div>
            </M2mContainer>
          </M2mInsetHeroFrame>
        </section>

        <section
          className="border-t border-m2m-deep/10 bg-m2m-cream/45 py-8 sm:py-9"
          aria-label="Selling and equity paths"
        >
          <M2mContainer className="max-w-5xl text-center">
            <p
              className="text-sm leading-relaxed text-m2m-deep/85 font-sans sm:text-[0.9375rem]"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              <span className="font-medium text-m2m-deep">Selling or doing both?</span>{" "}
              Continue on the{" "}
              <Link
                href="/sell"
                className="font-medium text-m2m-deep underline decoration-m2m-gold/50 underline-offset-4 transition-colors hover:text-m2m-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-m2m-panel"
                data-m2m-track="home_search_sell_bridge"
                data-m2m-track-loc="/home-search"
              >
                selling hub
              </Link>
              , get a{" "}
              <Link
                href="/free-home-valuation"
                className="font-medium text-m2m-deep underline decoration-m2m-gold/50 underline-offset-4 transition-colors hover:text-m2m-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-m2m-panel"
                data-m2m-track="home_search_valuation_bridge"
                data-m2m-track-loc="/home-search"
              >
                free valuation
              </Link>
              , or{" "}
              <Link
                href="/cma-form"
                className="font-medium text-m2m-deep underline decoration-m2m-gold/50 underline-offset-4 transition-colors hover:text-m2m-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-m2m-panel"
                data-m2m-track="home_search_cma_bridge"
                data-m2m-track-loc="/home-search"
              >
                request a CMA
              </Link>
              .
            </p>
          </M2mContainer>
        </section>

        <M2mRelatedPages cluster="buy" omitHref="/home-search" variant="onLight" />
      </main>
      <Footer />
    </>
  )
}
