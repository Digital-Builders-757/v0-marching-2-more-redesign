import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GSAPAnimations } from "@/components/gsap-animations"
import { PolicyPage } from "@/components/policy/policy-page"

export const metadata = {
  title: "Accessibility Statement | Marching 2 More Real Estate",
}

export default function AccessibilityStatementPage() {
  return (
    <>
      <Header />
      <GSAPAnimations />
      <PolicyPage title="Accessibility Statement" sourceUrl="https://www.marching2more.com/accessibility-statement" />
      <Footer />
    </>
  )
}
