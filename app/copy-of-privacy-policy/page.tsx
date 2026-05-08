import { redirect } from "next/navigation"

export default function CopyOfPrivacyPolicyRedirectPage() {
  /** Wix historically used `/copy-of-privacy-policy` for “Disclaimers”. */
  redirect("/disclaimers")
}
