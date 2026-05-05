import type { Metadata } from "next"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GSAPAnimations } from "@/components/gsap-animations"
import { M2mContainer } from "@/components/m2m-layout"
import { ReviewsHero } from "@/components/reviews/reviews-hero"
import { ReviewsList } from "@/components/reviews/reviews-list"
import { ReviewsCta } from "@/components/reviews/reviews-cta"
import { m2mStandardMetadata } from "@/lib/m2m-seo-metadata"

export const metadata: Metadata = m2mStandardMetadata({
  title: "Client Reviews & Testimonials | Marching 2 More",
  description:
    "Reviews from military families, first-time buyers, and Hampton Roads neighbors who bought or sold with Marching 2 More — veteran-owned in Virginia Beach.",
  path: "/reviews",
  openGraphTitle: "Client Reviews | Marching 2 More",
})

export default function ReviewsPage() {
  return (
    <>
      <Header />
      <GSAPAnimations />
      <main id="main-content" tabIndex={-1} className="pt-16 sm:pt-20">
        <ReviewsHero />
        <ReviewsList />
        <M2mContainer className="max-w-2xl pb-12 pt-6 text-center sm:pb-14 sm:pt-8">
          <p className="text-sm leading-relaxed text-m2m-deep/80 font-sans">
            Every story here is from a real client relationship — military families, first-time buyers, and Hampton Roads
            neighbors. When you are ready, we will walk you through what happens next (timeline, paperwork, and who you
            will hear from first).
          </p>
        </M2mContainer>
        <ReviewsCta />
      </main>
      <Footer />
    </>
  )
}
