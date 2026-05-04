import type { Metadata } from "next"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GSAPAnimations } from "@/components/gsap-animations"
import { TeamHero } from "@/components/team/team-hero"
import { TeamMembers } from "@/components/team/team-members"
import { TeamCTA } from "@/components/team/team-cta"
import { m2mStandardMetadata } from "@/lib/m2m-seo-metadata"

export const metadata: Metadata = m2mStandardMetadata({
  title: "Our Team | Marching 2 More",
  description:
    "Meet the Marching 2 More team — local market expertise, military-life context, and personal service in Hampton Roads.",
  path: "/our-team",
})

export default function OurTeamPage() {
  return (
    <>
      <Header />
      <GSAPAnimations />
      <main id="main-content" tabIndex={-1} className="bg-white">
        <TeamHero />
        <TeamMembers />
        <TeamCTA />
      </main>
      <Footer />
    </>
  )
}
