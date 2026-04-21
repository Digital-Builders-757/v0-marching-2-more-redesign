import Image from "next/image"

import { Footer } from "@/components/footer"
import { GSAPAnimations } from "@/components/gsap-animations"
import { Header } from "@/components/header"

import { HomeSearchBuyerLead } from "@/components/home-search/home-search-buyer-lead"
import { M2mContainer, M2mInsetHeroFrame, M2mInsetHeroScrim } from "@/components/m2m-layout"
import {
  CREED_REALTY_SEARCH_URL,
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

      <main id="main-content" tabIndex={-1} className="bg-white">
        <section className="relative min-h-[80dvh] overflow-hidden bg-white py-6 md:py-8">
          <M2mInsetHeroFrame className="min-h-[calc(80dvh-3rem)]">
            <div className="absolute inset-0">
              <Image
                src="/images/home-search-hero.png"
                alt=""
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
            </div>
            <M2mInsetHeroScrim variant="80" />

            <M2mContainer className="relative max-w-5xl pt-28 pb-16">
            {/* Kicker */}
            <p
              className="text-[0.62rem] tracking-[0.25em] uppercase text-m2m-gold"
              style={{ fontFamily: "var(--font-nav)" }}
            >
              Work With Us
            </p>

            {/* Two column headings */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              {/* Left column - Buy */}
              <div>
                <h1
                  className="font-light italic leading-[1.05] text-[clamp(2.25rem,5vw,4rem)] text-m2m-cream"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  We&apos;re looking<br />to buy.
                </h1>
                <p
                  className="mt-6 max-w-md text-sm leading-relaxed text-m2m-cream/90"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Start your property search or reach out and we&apos;ll help you find your perfect home.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                  <a
                    href={REALSCOUT_MAP_SEARCH_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 w-full items-center justify-center bg-m2m-gold px-8 py-4 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-m2m-deep transition hover:bg-m2m-gold-lt sm:w-auto"
                    style={{ fontFamily: "var(--font-nav)" }}
                  >
                    Start Your Search
                  </a>
                  <a
                    href="/contact-us?intent=buyer"
                    className="inline-flex min-h-11 w-full items-center justify-center border border-m2m-gold/30 px-8 py-4 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-m2m-cream transition hover:border-m2m-gold hover:text-m2m-gold sm:w-auto"
                    style={{ fontFamily: "var(--font-nav)" }}
                  >
                    Speak with an Agent
                  </a>
                </div>
                <HomeSearchBuyerLead />
              </div>

              {/* Right column - Sell */}
              <div>
                <h2
                  className="font-light italic leading-[1.05] text-[clamp(2.25rem,5vw,4rem)] text-m2m-cream"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  I&apos;m ready<br />to sell.
                </h2>
                <p
                  className="mt-6 max-w-md text-sm leading-relaxed text-m2m-cream/90"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Get a free home evaluation online, and request our comprehensive listing guide when you connect with the team.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                  <a
                    href={REALSCOUT_HOME_VALUATION_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 w-full items-center justify-center bg-m2m-gold px-8 py-4 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-m2m-deep transition hover:bg-m2m-gold-lt sm:w-auto"
                    style={{ fontFamily: "var(--font-nav)" }}
                  >
                    Free Home Evaluation
                  </a>
                  <a
                    href={CREED_REALTY_SEARCH_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 w-full items-center justify-center border border-m2m-gold/30 px-8 py-4 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-m2m-cream transition hover:border-m2m-gold hover:text-m2m-gold sm:w-auto"
                    style={{ fontFamily: "var(--font-nav)" }}
                  >
                    Free Listing Guide
                  </a>
                </div>
              </div>
            </div>
            </M2mContainer>
          </M2mInsetHeroFrame>
        </section>
      </main>
      <Footer />
    </>
  )
}
