import type { SubmitLeadRequest, SubmitLeadResponse } from "@/lib/ghl/types"

export type { SubmitLeadRequest, SubmitLeadResponse }

/**
 * POST JSON to the server-only lead route. No secrets in the request.
 * Error strings in the response are user-safe (no stack traces or upstream internals).
 */
export async function submitLeadToApi(body: SubmitLeadRequest): Promise<SubmitLeadResponse> {
  const res = await fetch("/api/submit-lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })

  let data: unknown
  try {
    data = await res.json()
  } catch {
    return { ok: false, error: "Invalid response from server", code: "bad_response" }
  }

  const obj = data as SubmitLeadResponse | null
  if (!obj || typeof obj !== "object" || !("ok" in obj)) {
    return { ok: false, error: "Invalid response from server", code: "bad_response" }
  }

  if (!obj.ok) {
    return {
      ok: false,
      error: "error" in obj && typeof obj.error === "string" ? obj.error : "Request failed",
      code: "code" in obj && typeof obj.code === "string" ? obj.code : undefined,
    }
  }

  return {
    ok: true,
    contactId: "contactId" in obj && typeof obj.contactId === "string" ? obj.contactId : undefined,
    opportunityId:
      "opportunityId" in obj && typeof obj.opportunityId === "string" ? obj.opportunityId : undefined,
  }
}
