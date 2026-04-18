import Link from "next/link"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { M2mContainer, M2mSection } from "@/components/m2m-layout"

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="bg-white">
        <M2mSection variant="light" className="py-24 md:py-32">
          <M2mContainer className="max-w-xl text-center">
            <p className="m2m-eyebrow-gold">404</p>
            <h1 className="m2m-section-title text-m2m-deep mt-4">Page not found</h1>
            <p
              className="mt-4 text-base leading-relaxed text-m2m-muted"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              That URL may have moved or been removed. Try the home page or contact us and we&apos;ll point you in the
              right direction.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/"
                className="inline-flex items-center justify-center bg-m2m-gold px-8 py-4 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-m2m-deep transition hover:bg-m2m-gold-lt"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                Back to home
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center border border-m2m-deep/20 px-8 py-4 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-m2m-deep transition hover:border-m2m-panel"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                Contact us
              </Link>
            </div>
          </M2mContainer>
        </M2mSection>
      </main>
      <Footer />
    </>
  )
}
