import type { Metadata } from "next"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GSAPAnimations } from "@/components/gsap-animations"
import { PolicyPage } from "@/components/policy/policy-page"
import { m2mStandardMetadata } from "@/lib/m2m-seo-metadata"

export const metadata: Metadata = m2mStandardMetadata({
  title: "Cookie Policy | Marching 2 More",
  description:
    "How Marching 2 More uses cookies and similar technologies on this site.",
  path: "/cookie-policy",
})

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
