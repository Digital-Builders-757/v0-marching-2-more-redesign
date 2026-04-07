import { redirect } from "next/navigation"

export default function HomeSearchRedirectPage() {
  // Wix CTA "Work With Us" points at /home-search. In this codebase, /buy is the closest match.
  redirect("/buy")
}
