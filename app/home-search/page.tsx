import Image from "next/image"

import { Footer } from "@/components/footer"
import { GSAPAnimations } from "@/components/gsap-animations"
import { Header } from "@/components/header"

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

      <main id="main-content" tabIndex={-1} className="bg-m2m-black">
        <section className="relative overflow-hidden">
          {/* Background image */}
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
          {/* Dark green overlay */}
          <div className="absolute inset-0 bg-[#1B4332]/70" aria-hidden />

          <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-28 md:px-16 md:pt-32 lg:px-24 min-h-[90vh] flex flex-col justify-between">
            {/* Top label */}
            <div
              className="inline-flex items-center gap-6 text-[0.65rem] tracking-[0.3em] uppercase text-m2m-cream"
              style={{ fontFamily: "var(--font-nav)" }}
            >
              <span>Work With Us</span>
              <span className="h-px w-24 bg-m2m-cream/60" aria-hidden />
            </div>

            {/* Main content - Two column layout */}
            <div className="flex-1 flex flex-col justify-center py-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-24">
                {/* Left column - Buy */}
                <div className="flex flex-col">
                  <h1
                    className="text-m2m-gold font-light italic leading-[1] text-[clamp(3rem,7vw,5.5rem)]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    We&apos;re<br />
                    looking<br />
                    to buy.
                  </h1>
                  
                  <div className="mt-10 flex flex-col gap-4 max-w-md">
                    <a
                      href={REALSCOUT_MAP_SEARCH_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center bg-[#1B4332] px-8 py-5 text-[0.7rem] tracking-[0.15em] text-m2m-cream font-medium transition hover:bg-[#1B4332]/90"
                      style={{ fontFamily: "var(--font-nav)" }}
                    >
                      Start Your Search
                    </a>
                    <a
                      href={CALENDLY_BOOK_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center border border-m2m-cream/60 px-8 py-5 text-[0.7rem] tracking-[0.15em] text-m2m-cream font-medium transition hover:border-m2m-cream"
                      style={{ fontFamily: "var(--font-nav)" }}
                    >
                      Or Speak with an Agent
                    </a>
                  </div>
                </div>

                {/* Right column - Sell */}
                <div className="flex flex-col">
                  <h2
                    className="text-m2m-gold font-light italic leading-[1] text-[clamp(3rem,7vw,5.5rem)]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    I&apos;m<br />
                    ready<br />
                    to sell.
                  </h2>
                  
                  <div className="mt-10 flex flex-col gap-4 max-w-md">
                    <a
                      href={REALSCOUT_HOME_VALUATION_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center bg-[#1B4332] px-8 py-5 text-[0.7rem] tracking-[0.15em] text-m2m-cream font-medium transition hover:bg-[#1B4332]/90"
                      style={{ fontFamily: "var(--font-nav)" }}
                    >
                      Get Your Free Home Consultation
                    </a>
                    <a
                      href={CREED_REALTY_SEARCH_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center border border-m2m-cream/60 px-8 py-5 text-[0.7rem] tracking-[0.15em] text-m2m-cream font-medium transition hover:border-m2m-cream"
                      style={{ fontFamily: "var(--font-nav)" }}
                    >
                      Receive Your Free Listing Guide
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom section - Meet Your Team */}
            <div className="flex justify-end">
              <div className="flex flex-col items-end gap-3">
                <div className="flex items-center gap-4">
                  <span
                    className="text-[0.65rem] tracking-[0.2em] uppercase text-m2m-cream"
                    style={{ fontFamily: "var(--font-nav)" }}
                  >
                    Meet Your Team
                  </span>
                  <span className="h-px w-16 bg-m2m-gold" aria-hidden />
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-m2m-cream/20 border-2 border-m2m-gold overflow-hidden">
                    <Image
                      src="/images/testi-sanchez.avif"
                      alt="Team member"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-m2m-cream/20 border-2 border-m2m-gold overflow-hidden">
                    <Image
                      src="/images/testi-cole.avif"
                      alt="Team member"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
