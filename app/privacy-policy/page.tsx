import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GSAPAnimations } from "@/components/gsap-animations"

export const metadata = {
  title: "Privacy Policy | Marching 2 More Real Estate",
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <GSAPAnimations />
      <main id="main-content" tabIndex={-1} className="mx-auto w-full max-w-5xl px-6 py-16">
        <h1 className="font-serif text-4xl font-semibold text-m2m-green">Privacy Policy</h1>
        <p className="mt-4 text-m2m-sage">Content migration pending.</p>
      </main>
      <Footer />
    </>
  )
}
