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
        role="Founding Partner"
        licenseNumber="Licensed Agent of Virginia 0225-250-043"
        image={M2M_MEDIA.headshotRoger}
        bio="Roger Lee is a dedicated real estate professional with a passion for helping clients achieve their homeownership dreams. With a background in the United States Navy, Roger brings discipline, integrity, and a strong work ethic to every transaction. His experience as a military family member gives him unique insight into the challenges faced by relocating families, making him an invaluable resource for those navigating the Hampton Roads real estate market. Roger is committed to providing personalized service and expert guidance to ensure a smooth and successful real estate experience for every client."
      />
      <Footer />
    </>
  )
}
