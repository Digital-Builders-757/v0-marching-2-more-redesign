import { randomUUID } from "node:crypto"

import { NextResponse } from "next/server"

import { handleSubmitLeadJson } from "@/lib/ghl/submit-lead"

export const runtime = "nodejs"

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
    const status =
      result.code === "validation_error" ? 400 : result.code === "config_error" ? 503 : 502
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
  })
}
