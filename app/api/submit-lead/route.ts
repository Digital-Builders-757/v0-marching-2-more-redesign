import { randomUUID } from "node:crypto"

import { NextResponse } from "next/server"

import { handleSubmitLeadJson } from "@/lib/ghl/submit-lead"

export const runtime = "nodejs"

function httpStatusForLeadFailure(code: string | undefined): number {
  if (code === "validation_error" || code === "bad_request") return 400
  if (code === "crm_validation" || code === "crm_duplicate_or_merge") return 400
  if (code === "crm_rate_limit") return 429
  if (code === "config_error") return 503
  if (code === "internal_error") return 500
  if (code === "crm_auth" || code === "crm_server" || code === "crm_unreachable") return 502
  return 502
}

export async function POST(request: Request) {
  const correlationId = randomUUID()

  let json: unknown
  try {
    json = await request.json()
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body", code: "bad_request", correlationId },
      { status: 400 },
    )
  }

  const result = await handleSubmitLeadJson(json, correlationId)

  if (!result.ok) {
    const status = httpStatusForLeadFailure(result.code)
    return NextResponse.json(
      {
        ok: false,
        error: result.error,
        code: result.code,
        correlationId: result.correlationId,
        ...(result.failed_step ? { failed_step: result.failed_step } : {}),
        ...(typeof result.crm_http_status === "number" ? { crm_http_status: result.crm_http_status } : {}),
      },
      { status },
    )
  }

  return NextResponse.json({
    ok: true,
    contactId: result.contactId,
    opportunityId: result.opportunityId,
    correlationId: result.correlationId,
    ...(result.warnings?.length ? { warnings: result.warnings } : {}),
  })
}
