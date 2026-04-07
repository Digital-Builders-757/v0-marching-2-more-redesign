import type { ReactNode } from "react"
import { M2M_EMAIL_INFO, M2M_PHONE_DISPLAY, M2M_PHONE_TEL } from "@/lib/m2m-site"

export function M2mPolicyStub({
  title,
  children,
}: {
  title: string
  children?: ReactNode
}) {
  return (
    <section className="bg-m2m-cream px-6 py-16 md:px-16 lg:px-24 max-w-3xl">
      <h1
        className="text-3xl md:text-4xl font-light text-m2m-deep mb-6"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h1>
      <div
        className="space-y-4 text-m2m-muted leading-relaxed text-sm md:text-base"
        style={{ fontFamily: "var(--font-sans)" }}
      >
        {children ?? (
          <p>
            We are migrating the full legal text from our previous website. If you need a copy
            immediately, email{" "}
            <a className="text-m2m-gold hover:underline" href={`mailto:${M2M_EMAIL_INFO}`}>
              {M2M_EMAIL_INFO}
            </a>{" "}
            or call{" "}
            <a className="text-m2m-gold hover:underline" href={`tel:${M2M_PHONE_TEL}`}>
              {M2M_PHONE_DISPLAY}
            </a>
            .
          </p>
        )}
      </div>
    </section>
  )
}
