import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GSAPAnimations } from "@/components/gsap-animations"
import { ContactUsParity } from "@/components/contact/contact-us-parity"

export const metadata = {
  title: "Contact Us | Marching 2 More",
  description:
    "Introduce yourself — the Marching 2 More team responds within 24 hours. Call or message anytime.",
}

export default function ContactUsPage() {
  return (
    <>
      <Header />
      <GSAPAnimations />
      <main id="main-content" tabIndex={-1} className="bg-m2m-cream">
        <section
          className="pt-28 md:pt-32 pb-8 px-6 md:px-16 lg:px-24"
          style={{ backgroundColor: "#050d06" }}
        >
          <div className="max-w-4xl mx-auto">
            <h1
              className="font-light text-[clamp(2.5rem,5vw,4rem)] text-m2m-cream mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Contact Us
            </h1>
          </div>
        </section>
        <ContactUsParity />
        <Footer />
      </main>
    </>
  )
}
