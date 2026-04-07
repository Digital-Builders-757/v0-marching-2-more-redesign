import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GSAPAnimations } from "@/components/gsap-animations"
import { BuyHero } from "@/components/buy/buy-hero"
import { BuyServices } from "@/components/buy/buy-services"
import { BuyProcess } from "@/components/buy/buy-process"
import { BuyCTA } from "@/components/buy/buy-cta"

export const metadata = {
  title: "Buy a Home | Marching 2 More Real Estate",
  description: "Find your perfect home with Marching 2 More. VA loan specialists, PCS relocation experts, and military family real estate professionals in Hampton Roads, Virginia.",
}

export default function BuyPage() {
  return (
    <>
      <Header />
      <GSAPAnimations />
      <main id="main-content" tabIndex={-1}>
        <BuyHero />
        <BuyServices />
        <BuyProcess />
        <BuyCTA />
        <Footer />
      </main>
    </>
  )
}
