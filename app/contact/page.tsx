import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GSAPAnimations } from "@/components/gsap-animations"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"

export const metadata = {
  title: "Contact Us | Marching 2 More Real Estate",
  description: "Get in touch with Marching 2 More Real Estate. Book a consultation, ask questions, or start your real estate journey today.",
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <GSAPAnimations />
      <main id="main-content" tabIndex={-1}>
        <ContactHero />
        <ContactForm />
        <ContactInfo />
        <Footer />
      </main>
    </>
  )
}
