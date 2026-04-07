import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GSAPAnimations } from "@/components/gsap-animations"

export const metadata = {
  title: "Resources | Marching 2 More Real Estate",
  description: "Resources from Marching 2 More Real Estate.",
}

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <GSAPAnimations />
      <main id="main-content" tabIndex={-1} className="mx-auto w-full max-w-5xl px-6 py-16">
        <h1 className="text-balance font-serif text-4xl font-semibold text-m2m-green">Resources</h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-m2m-sage">
          Pre-listing checklist and other downloads will live here. Content migration pending.
        </p>
      </main>
      <Footer />
    </>
  )
}
