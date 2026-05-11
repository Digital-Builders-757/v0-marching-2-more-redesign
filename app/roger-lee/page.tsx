import type { Metadata } from "next"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AgentProfile } from "@/components/team/agent-profile"
import { M2M_MEDIA } from "@/lib/m2m-media"
import { M2M_AGENT_BOOKING_URL_ROGER } from "@/lib/m2m-site"
import { M2M_ROGER_INSTAGRAM_PERSONAL_URL } from "@/lib/m2m-team-social"
import { m2mStandardMetadata } from "@/lib/m2m-seo-metadata"

export const metadata: Metadata = m2mStandardMetadata({
  title: "Roger Lee | Marching 2 More",
  description:
    "Roger Lee — founding partner and Virginia licensed agent with Marching 2 More, Hampton Roads.",
  path: "/roger-lee",
  openGraphTitle: "Roger Lee | Marching 2 More",
})

export default function RogerLeeProfilePage() {
  return (
    <>
      <Header />
      <AgentProfile
        name="Roger Lee"
        firstName="Roger"
        bookingHref={M2M_AGENT_BOOKING_URL_ROGER}
        role="Founding Partner"
        licenseNumber="0225-250-043"
        image={M2M_MEDIA.headshotRoger}
        imageObjectStyle={{ objectPosition: "center 22%" }}
        email="Roger@marching2more.com"
        linkedin="https://www.linkedin.com/in/roger-lee"
        instagramPersonal={M2M_ROGER_INSTAGRAM_PERSONAL_URL}
        bio={`Roger Lee is a dedicated real estate professional with a passion for helping clients achieve their homeownership dreams. With a background in the United States Navy, Roger brings discipline, integrity, and a strong work ethic to every transaction.

His experience as a military family member gives him unique insight into the challenges faced by relocating families, making him an invaluable resource for those navigating the Hampton Roads real estate market.

Roger is committed to providing personalized service and expert guidance to ensure a smooth and successful real estate experience for every client.`}
      />
      <Footer />
    </>
  )
}
