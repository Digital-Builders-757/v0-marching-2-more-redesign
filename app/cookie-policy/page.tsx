import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GSAPAnimations } from "@/components/gsap-animations"
import { PolicyPage } from "@/components/policy/policy-page"

export const metadata = {
  title: "Cookie Policy | Marching 2 More Real Estate",
}

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      <GSAPAnimations />
      <PolicyPage title="Cookie Policy" sourceUrl="https://www.marching2more.com/cookie-policy">
        <p>
          We use cookies and similar technologies to help the site function, understand usage, and improve performance.
        </p>
        <p>For full details, view the canonical policy at the source link above.</p>
      </PolicyPage>
      <Footer />
    </>
  )
}
