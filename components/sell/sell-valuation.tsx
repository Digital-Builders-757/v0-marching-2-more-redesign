"use client"

import Link from "next/link"

import { M2mContainer } from "@/components/m2m-layout"
import { SellValuationLeadMini } from "@/components/sell/sell-valuation-lead-mini"
import { Button } from "@/components/ui/button"
import { REALSCOUT_HOME_VALUATION_URL } from "@/lib/m2m-site"

export function SellValuation() {
  return (
    <section id="valuation" className="bg-white py-24" data-gsap-section>
      <M2mContainer>
        <div className="grid grid-cols-1 gap-16 items-center lg:grid-cols-2">
          {/* Left Content */}
          <div data-gsap="fade-right">
            <p
              className="mb-4 text-sm tracking-[0.3em] uppercase text-m2m-gold"
              style={{ fontFamily: "var(--font-nav)" }}
            >
              Free Home Valuation
            </p>
            <h2
              className="mb-6 font-light text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] text-m2m-deep"
              style={{ fontFamily: "var(--font-display)" }}
            >
              What&apos;s Your Home <em className="italic">Worth?</em>
            </h2>
            <p
              className="mb-8 text-base leading-relaxed text-m2m-deep/85 md:text-lg"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Get a comprehensive market analysis of your property. Our team will evaluate your home
              based on current market conditions, recent sales, and unique features to provide an
              accurate valuation.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-m2m-gold/10">
                  <span className="text-sm font-medium text-m2m-gold">1</span>
                </div>
                <div>
                  <h4 className="mb-1 font-medium text-m2m-deep" style={{ fontFamily: "var(--font-display)" }}>
                    Submit Your Address
                  </h4>
                  <p className="text-sm text-m2m-deep/75" style={{ fontFamily: "var(--font-sans)" }}>
                    Start with your property location in our secure valuation tool
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-m2m-gold/10">
                  <span className="text-sm font-medium text-m2m-gold">2</span>
                </div>
                <div>
                  <h4 className="mb-1 font-medium text-m2m-deep" style={{ fontFamily: "var(--font-display)" }}>
                    We Analyze the Market
                  </h4>
                  <p className="text-sm text-m2m-deep/75" style={{ fontFamily: "var(--font-sans)" }}>
                    Comprehensive comparable sales analysis
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-m2m-gold/10">
                  <span className="text-sm font-medium text-m2m-gold">3</span>
                </div>
                <div>
                  <h4 className="mb-1 font-medium text-m2m-deep" style={{ fontFamily: "var(--font-display)" }}>
                    Receive Your Valuation
                  </h4>
                  <p className="text-sm text-m2m-deep/75" style={{ fontFamily: "var(--font-sans)" }}>
                    Get a detailed report with pricing strategy
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right CTA */}
          <div className="rounded-xl bg-m2m-deep p-8 md:p-12" data-gsap="fade-left">
            <h3
              className="mb-4 text-xl text-m2m-cream"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Get your free valuation online
            </h3>
            <p
              className="mb-8 text-sm leading-relaxed text-m2m-cream/90"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Opens our RealScout home value report. Prefer a conversation first? Use{" "}
              <Link
                href="/contact-us?intent=seller"
                className="text-m2m-gold underline-offset-2 hover:underline"
              >
                Contact Us
              </Link>
              .
            </p>
            <Button variant="m2mGold" className="h-auto w-full rounded-lg py-4 text-[0.7rem] tracking-[0.2em] uppercase" asChild>
              <a href={REALSCOUT_HOME_VALUATION_URL} target="_blank" rel="noreferrer">
                Get My Free Valuation
              </a>
            </Button>
            <SellValuationLeadMini />
          </div>
        </div>
      </M2mContainer>
    </section>
  )
}
