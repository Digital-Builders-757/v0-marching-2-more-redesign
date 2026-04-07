import { redirect } from "next/navigation"

/**
 * Legacy rebuild route.
 *
 * Wix parity route is `/contact-us`.
 */
export default function ContactRedirectPage() {
  redirect("/contact-us")
}
