import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AgentProfile } from "@/components/team/agent-profile"
import { M2M_MEDIA } from "@/lib/m2m-media"

export const metadata = {
  title: "Donavan McFadden | Marching 2 More",
  description: "Meet Donavan McFadden — Founding Partner and Licensed Agent at Marching 2 More.",
}

export default function DonavanProfilePage() {
  return (
    <>
      <Header />
      <AgentProfile
        name="Donavan McFadden"
        subtitle="Founding Partner • Licensed Agent"
        image={M2M_MEDIA.headshotDonavan}
        bio="Donavan McFadden is a disciplined, service-first real estate professional dedicated to helping buyers, sellers, and relocating families in Hampton Roads navigate each step with clarity and confidence."
      />
      <Footer />
    </>
  )
}
