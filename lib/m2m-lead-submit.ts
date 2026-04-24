import type {
  SubmitLeadFailure,
  SubmitLeadRequest,
  SubmitLeadResponse,
  SubmitLeadSuccessResponse,
  SubmitLeadWarningCode,
} from "@/lib/ghl/types"

export type { SubmitLeadFailure, SubmitLeadRequest, SubmitLeadResponse }

function isWarningCode(x: unknown): x is SubmitLeadWarningCode {
  return x === "tags_failed" || x === "opportunity_failed" || x === "note_failed"
}

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
      correlationId:
        "correlationId" in obj && typeof obj.correlationId === "string" ? obj.correlationId : undefined,
      failed_step:
        "failed_step" in obj &&
        (obj.failed_step === "contacts_upsert" ||
          obj.failed_step === "contacts_tags" ||
          obj.failed_step === "opportunities_create" ||
          obj.failed_step === "contacts_note")
          ? obj.failed_step
          : undefined,
      crm_http_status:
        "crm_http_status" in obj && typeof obj.crm_http_status === "number" ? obj.crm_http_status : undefined,
    }
  }

  const warningsRaw = "warnings" in obj && Array.isArray(obj.warnings) ? obj.warnings : []
  const warnings = warningsRaw.filter(isWarningCode)

  const success: SubmitLeadSuccessResponse = {
    ok: true,
    contactId: "contactId" in obj && typeof obj.contactId === "string" ? obj.contactId : undefined,
    opportunityId:
      "opportunityId" in obj && typeof obj.opportunityId === "string" ? obj.opportunityId : undefined,
    correlationId:
      "correlationId" in obj && typeof obj.correlationId === "string"
        ? obj.correlationId
        : /** backward compat */ "",
    ...(warnings.length ? { warnings } : {}),
  }

  if (!success.correlationId) {
    return {
      ok: false,
      error: "Invalid response from server",
      code: "bad_response",
    }
  }

  return success
}
