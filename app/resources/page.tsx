import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GSAPAnimations } from "@/components/gsap-animations"
import { ResourcesPreListing } from "@/components/resources/resources-pre-listing"

export const metadata = {
  title: "Pre-Listing Checklist | Marching 2 More Real Estate",
  description:
    "Download or request the Marching 2 More pre-listing checklist to prepare your home before listing.",
}

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <GSAPAnimations />
      <main id="main-content" tabIndex={-1} className="mx-auto w-full max-w-5xl px-6 py-16">
        <ResourcesPreListing />
      </main>
      <Footer />
    </>
  )
}
