import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AgentProfile } from "@/components/team/agent-profile"
import { M2M_MEDIA } from "@/lib/m2m-media"

export const metadata = {
  title: "Roger Lee | Marching 2 More",
  description: "Meet Roger Lee — Founding Partner and Licensed Agent at Marching 2 More.",
}

export default function RogerLeeProfilePage() {
  return (
    <>
      <Header />
      <AgentProfile
        name="Roger Lee"
        subtitle="Founding Partner • Licensed Agent"
        image={M2M_MEDIA.headshotRoger}
        bio="Roger Lee combines deep local knowledge of Hampton Roads with a steady, client-first approach — helping families buy, sell, and relocate with confidence and care."
      />
      <Footer />
    </>
  )
}
