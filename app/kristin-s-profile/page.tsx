import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AgentProfile } from "@/components/team/agent-profile"
import { M2M_MEDIA } from "@/lib/m2m-media"

export const metadata = {
  title: "Kristin Allen | Marching 2 More",
  description: "Meet Kristin Allen — Licensed Agent at Marching 2 More.",
}

export default function KristinProfilePage() {
  return (
    <>
      <Header />
      <AgentProfile
        name="Kristin Allen"
        subtitle="Licensed Agent"
        image={M2M_MEDIA.headshotKristin}
        bio="Kristin Allen brings thoughtful attention to detail and a calm, supportive presence to each transaction — helping clients feel informed and cared for from first showing to closing day."
      />
      <Footer />
    </>
  )
}
