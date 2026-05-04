import type { Metadata } from "next"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GSAPAnimations } from "@/components/gsap-animations"
import { PolicyPage } from "@/components/policy/policy-page"
import { m2mStandardMetadata } from "@/lib/m2m-seo-metadata"

export const metadata: Metadata = m2mStandardMetadata({
  title: "Privacy Policy | Marching 2 More",
  description:
    "How Marching 2 More handles personal information for Hampton Roads real estate clients and site visitors.",
  path: "/privacy-policy",
})

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <GSAPAnimations />
      <PolicyPage
        title="Privacy Policy"
        lastUpdated="January 1, 2024"
        sourceUrl="https://www.marching2more.com/privacy-policy"
      >
        <p>
          This privacy notice for Marching 2 More LLC describes how and why we might collect, store, use, and/or share
          your information when you use our services.
        </p>
        <p>
          Questions or concerns? If you do not agree with our policies and practices, please do not use our Services.
          For questions, contact: <a href="mailto:Marching2morerei@outlook.com">Marching2morerei@outlook.com</a>.
        </p>
        <h2>Summary of key points</h2>
        <ul>
          <li>We may process personal information depending on how you interact with our Services.</li>
          <li>We do not process sensitive personal information.</li>
          <li>
            We may receive information from public databases, marketing partners, social media platforms, and other
            outside sources.
          </li>
        </ul>
        <p>
          For the full text (including table of contents and detailed sections), please use the canonical source link
          above.
        </p>
      </PolicyPage>
      <Footer />
    </>
  )
}
