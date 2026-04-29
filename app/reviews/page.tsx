import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GSAPAnimations } from "@/components/gsap-animations"
import { ReviewsHero } from "@/components/reviews/reviews-hero"
import { ReviewsList } from "@/components/reviews/reviews-list"
import { ReviewsCta } from "@/components/reviews/reviews-cta"

export const metadata = {
  title: "Client Reviews | Marching 2 More",
  description: "Read testimonials from military families and Hampton Roads residents who trusted Marching 2 More with their real estate journey.",
}

export default function ReviewsPage() {
  return (
    <>
      <Header />
      <GSAPAnimations />
      <main id="main-content" tabIndex={-1} className="pt-16 sm:pt-20">
        <ReviewsHero />
        <ReviewsList />
        <ReviewsCta />
      </main>
      <Footer />
    </>
  )
}
