import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GSAPAnimations } from "@/components/gsap-animations"
import { PolicyPage } from "@/components/policy/policy-page"

export const metadata = {
  title: "Terms and Conditions | Marching 2 More Real Estate",
}

export default function TermsAndConditionsPage() {
  return (
    <>
      <Header />
      <GSAPAnimations />
      <PolicyPage title="Terms and Conditions" sourceUrl="https://www.marching2more.com/terms-and-conditions" />
      <Footer />
    </>
  )
}
