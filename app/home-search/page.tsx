import Image from "next/image"

import { Footer } from "@/components/footer"
import { GSAPAnimations } from "@/components/gsap-animations"
import { Header } from "@/components/header"

import { M2mContainer, M2mInsetHeroFrame, M2mInsetHeroScrim } from "@/components/m2m-layout"
import {
  CALENDLY_BOOK_URL,
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
            <M2mInsetHeroScrim variant="75" />

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
                  className="mt-6 max-w-md text-sm leading-relaxed text-m2m-muted-lt"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Start your property search or speak with one of our agents to find your perfect home.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
                    href={REALSCOUT_MAP_SEARCH_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center bg-m2m-gold text-m2m-deep text-[0.7rem] tracking-[0.2em] uppercase font-medium px-8 py-4 transition hover:bg-m2m-gold-lt"
                    style={{ fontFamily: "var(--font-nav)" }}
                  >
                    Start Your Search
                  </a>
                  <a
                    href={CALENDLY_BOOK_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center border border-m2m-gold/30 text-m2m-cream text-[0.7rem] tracking-[0.2em] uppercase font-medium px-8 py-4 transition hover:border-m2m-gold hover:text-m2m-gold"
                    style={{ fontFamily: "var(--font-nav)" }}
                  >
                    Speak with an Agent
                  </a>
                </div>
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
                  className="mt-6 max-w-md text-sm leading-relaxed text-m2m-muted-lt"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Get a free home consultation or receive our comprehensive listing guide.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
                    href={REALSCOUT_HOME_VALUATION_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center bg-m2m-gold text-m2m-deep text-[0.7rem] tracking-[0.2em] uppercase font-medium px-8 py-4 transition hover:bg-m2m-gold-lt"
                    style={{ fontFamily: "var(--font-nav)" }}
                  >
                    Free Home Consultation
                  </a>
                  <a
                    href={CREED_REALTY_SEARCH_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center border border-m2m-gold/30 text-m2m-cream text-[0.7rem] tracking-[0.2em] uppercase font-medium px-8 py-4 transition hover:border-m2m-gold hover:text-m2m-gold"
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
