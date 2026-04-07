import Link from "next/link"

import { Footer } from "@/components/footer"
import { GSAPAnimations } from "@/components/gsap-animations"
import { Header } from "@/components/header"

import {
  CREED_REALTY_SEARCH_URL,
  REALSCOUT_MAP_SEARCH_URL,
  mailtoNeedsHelp,
} from "@/lib/m2m-site"

export const metadata = {
  title: "Home Search | Marching 2 More",
  description:
    "Search available properties in Hampton Roads and Virginia Beach, or tell us what you need and we'll prepare the best options.",
}

export default function HomeSearchPage() {
  return (
    <>
      <Header />
      <GSAPAnimations />

      <main id="main-content" tabIndex={-1} className="bg-m2m-cream">
        <section
          className="px-6 pt-28 pb-10 md:px-16 lg:px-24"
          style={{ backgroundColor: "#050d06" }}
        >
          <div className="mx-auto max-w-5xl">
            <p
              className="text-[0.62rem] tracking-[0.25em] uppercase text-m2m-gold"
              style={{ fontFamily: "var(--font-nav)" }}
            >
              Home Search
            </p>
            <h1
              className="mt-6 font-light text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] text-m2m-cream"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Search Available Properties
            </h1>
            <p
              className="mt-6 max-w-2xl text-sm leading-relaxed text-m2m-muted-lt"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              We&apos;ve curated a range of properties that fit the lifestyle and requirements of military personnel and their families.
              From relocations to finding homes near military bases, we&apos;re here to support you at every step.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={REALSCOUT_MAP_SEARCH_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center bg-m2m-gold text-m2m-deep text-[0.7rem] tracking-[0.2em] uppercase font-medium px-8 py-4 transition hover:bg-m2m-gold-lt"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                Start Your Search Now
              </a>
              <a
                href={mailtoNeedsHelp()}
                className="inline-flex items-center justify-center border border-m2m-gold/30 text-m2m-cream text-[0.7rem] tracking-[0.2em] uppercase font-medium px-8 py-4 transition hover:border-m2m-gold hover:text-m2m-gold"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                Or — Tell us your needs.
              </a>
            </div>

            <p
              className="mt-8 text-xs text-m2m-muted italic"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Local Property Search Powered by CREED REALTY*
            </p>

            <div className="mt-2 flex flex-col gap-2">
              <a
                href={CREED_REALTY_SEARCH_URL}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-m2m-cream hover:text-m2m-gold transition-colors"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                We&apos;ll prepare the best options.
              </a>
              <Link
                href="/contact-us"
                className="text-sm text-m2m-muted hover:text-m2m-cream transition-colors"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Have a question? Contact Us ▸
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
