import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GSAPAnimations } from "@/components/gsap-animations"
import { TeamHero } from "@/components/team/team-hero"
import { TeamMembers } from "@/components/team/team-members"
import { TeamCTA } from "@/components/team/team-cta"

export const metadata = {
  title: "Our Team | Marching 2 More",
  description:
    "Meet your team — disciplined leadership, local market expertise, and personalized care in Hampton Roads.",
}

export default function OurTeamPage() {
  return (
    <>
      <Header />
      <GSAPAnimations />
      <main id="main-content" tabIndex={-1}>
        <TeamHero />
        <TeamMembers />
        <TeamCTA />
        <Footer />
      </main>
    </>
  )
}
