import { redirect } from "next/navigation"

/**
 * Redirect to CMA Form page.
 * This maintains backwards compatibility with any existing links.
 */
export default function FreeHomeValuationPage() {
  redirect("/cma-form")
}
