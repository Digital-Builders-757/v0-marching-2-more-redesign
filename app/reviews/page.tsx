import type { Metadata } from "next"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GSAPAnimations } from "@/components/gsap-animations"
import { M2mContainer } from "@/components/m2m-layout"
import { ReviewsHero } from "@/components/reviews/reviews-hero"
import { ReviewsList } from "@/components/reviews/reviews-list"
import { ReviewsCta } from "@/components/reviews/reviews-cta"

export const metadata: Metadata = {
  title: "Reviews & Testimonials | Five-Star Hampton Roads Team",
  description:
    "Read reviews from Navy and military families, first-time buyers, and Hampton Roads neighbors who worked with Marching 2 More for buying and selling — Virginia Beach–based, veteran-owned real estate.",
  alternates: { canonical: "/reviews" },
  openGraph: {
    title: "Client Reviews | Marching 2 More",
    description:
      "Real stories from military relocation, listing, and purchase clients across Hampton Roads.",
  },
}

export default function ReviewsPage() {
  return (
    <>
      <Header />
      <GSAPAnimations />
      <main id="main-content" tabIndex={-1} className="pt-16 sm:pt-20">
        <ReviewsHero />
        <ReviewsList />
        <M2mContainer className="max-w-2xl pb-10 pt-4 text-center sm:pb-12">
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
