import type { Metadata } from "next"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AgentProfile } from "@/components/team/agent-profile"
import { M2M_MEDIA } from "@/lib/m2m-media"
import { m2mStandardMetadata } from "@/lib/m2m-seo-metadata"

export const metadata: Metadata = m2mStandardMetadata({
  title: "Kristin Allen | Marching 2 More",
  description:
    "Kristin Allen — Virginia licensed agent with Marching 2 More, Hampton Roads real estate.",
  path: "/kristin-s-profile",
  openGraphTitle: "Kristin Allen | Marching 2 More",
})

export default function KristinProfilePage() {
  return (
    <>
      <Header />
      <AgentProfile
        name="Kristin Allen"
        firstName="Kristin"
        role="Licensed Agent"
        image={M2M_MEDIA.headshotKristin}
        imageObjectPosition="object-[center_32%]"
        email="Kristin@marching2more.com"
        instagram="https://www.instagram.com/marching2more"
        bio={`Kristin Allen brings thoughtful attention to detail and a calm, supportive presence to each transaction. With a genuine passion for helping families find their perfect home, Kristin is dedicated to making the real estate process as smooth and stress-free as possible.

Her commitment to clear communication and personalized service ensures that every client feels informed and cared for from first showing to closing day.`}
      />
      <Footer />
    </>
  )
}
