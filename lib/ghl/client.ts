/**
 * GoHighLevel REST client (server-only).
 *
 * Official reference (private integration token + Version header):
 * https://marketplace.gohighlevel.com/docs/Authorization/PrivateIntegrationsToken/
 *
 * Endpoints used (LeadConnector API v2 style):
 * - POST https://services.leadconnectorhq.com/contacts/upsert
 *   https://marketplace.gohighlevel.com/docs/ghl/contacts/upsert-contact
 * - POST https://services.leadconnectorhq.com/contacts/:contactId/tags
 *   https://marketplace.gohighlevel.com/docs/ghl/contacts/add-tags
 * - POST https://services.leadconnectorhq.com/opportunities/
 *   https://marketplace.gohighlevel.com/docs/ghl/opportunities/create-opportunity
 * - POST https://services.leadconnectorhq.com/contacts/:contactId/notes
 *   https://marketplace.gohighlevel.com/docs/ghl/contacts/create-note
 *
 * Request/response shapes can vary by API version; keep all paths and bodies here.
 */

import type { GhlConfig } from "./config"
import type { GhlApiStep, GhlCustomFieldEntry } from "./types"

export class GhlApiError extends Error {
  constructor(
    message: string,
    readonly status: number,
    readonly code?: string,
    readonly step?: GhlApiStep,
  ) {
    super(message)
    this.name = "GhlApiError"
  }
}

/** Server-only request correlation for logs (no PII). */
export type GhlLogContext = { correlationId: string; step: GhlApiStep }

function requestLogCtx(correlationId: string | undefined, step: GhlApiStep): GhlLogContext | undefined {
  return correlationId ? { correlationId, step } : undefined
}

/** Group GHL HTTP status for logs (no PII). */
export function ghlStatusBucket(status: number): "auth" | "client" | "server" | "other" {
  if (status === 401 || status === 403) return "auth"
  if (status >= 400 && status < 500) return "client"
  if (status >= 500) return "server"
  return "other"
}

function upstreamDetailFromBody(body: unknown): string | undefined {
  if (typeof body !== "object" || body === null) return undefined
  const o = body as Record<string, unknown>
  const msg = o.message
  if (typeof msg === "string" && msg.trim()) return msg.slice(0, 300)
  const err = o.error
  if (typeof err === "string" && err.trim()) return err.slice(0, 300)
  if (typeof err === "object" && err !== null && "message" in err) {
    const m = (err as { message?: unknown }).message
    if (typeof m === "string" && m.trim()) return m.slice(0, 300)
  }
  return undefined
}

async function ghlFetch<T>(
  cfg: GhlConfig,
  path: string,
  init: RequestInit,
  logCtx?: GhlLogContext,
): Promise<T> {
  const url = `${cfg.baseUrl.replace(/\/$/, "")}${path.startsWith("/") ? path : `/${path}`}`
  const res = await fetch(url, {
    ...init,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${cfg.apiKey}`,
      Version: cfg.apiVersion,
      ...init.headers,
    },
  })

  const text = await res.text()
  let body: unknown = null
  try {
    body = text ? JSON.parse(text) : null
  } catch {
    body = text
  }

  if (!res.ok) {
    const msg =
      typeof body === "object" && body !== null && "message" in body
        ? String((body as { message?: unknown }).message ?? res.statusText)
        : res.statusText
    const upstreamDetail = upstreamDetailFromBody(body)
    console.error("[ghl] API error", {
      ...(logCtx ?? {}),
      path,
      status: res.status,
      statusBucket: ghlStatusBucket(res.status),
      upstreamDetail,
      bodyPreview: text.slice(0, 500),
    })
    throw new GhlApiError(msg || "Upstream error", res.status, "ghl_upstream_error", logCtx?.step)
  }

  return body as T
}

export type UpsertContactResult = { contactId: string }

/** POST /contacts/upsert */
export async function upsertContact(
  cfg: GhlConfig,
  params: {
    firstName: string
    lastName: string
    fullName: string
    email: string
    phone: string
    customFields: GhlCustomFieldEntry[]
    /** Optional; when set, API errors and parse failures include this id in server logs. */
    correlationId?: string
  },
): Promise<UpsertContactResult> {
  const body: Record<string, unknown> = {
    locationId: cfg.locationId,
    firstName: params.firstName,
    lastName: params.lastName,
    name: params.fullName,
    email: params.email,
    phone: params.phone,
  }
  if (params.customFields.length > 0) {
    body.customFields = params.customFields
  }

  const data = await ghlFetch<Record<string, unknown>>(
    cfg,
    "/contacts/upsert",
    {
      method: "POST",
      body: JSON.stringify(body),
    },
    requestLogCtx(params.correlationId, "contacts_upsert"),
  )

  const contact = data.contact as Record<string, unknown> | undefined
  const id =
    (contact?.id as string | undefined) ??
    (data.id as string | undefined) ??
    (data.contactId as string | undefined)

  if (!id) {
    console.error("[ghl] upsert contact: missing id in response", {
      ...requestLogCtx(params.correlationId, "contacts_upsert"),
      dataPreview: JSON.stringify(data).slice(0, 300),
    })
    throw new GhlApiError("Invalid response from CRM", 500, "ghl_response_error", "contacts_upsert")
  }

  return { contactId: id }
}

/** POST /contacts/:contactId/tags — tag names as configured in the sub-account */
export async function addTagsToContact(
  cfg: GhlConfig,
  contactId: string,
  tags: string[],
  correlationId?: string,
): Promise<void> {
  if (tags.length === 0) return
  await ghlFetch(
    cfg,
    `/contacts/${encodeURIComponent(contactId)}/tags`,
    {
      method: "POST",
      body: JSON.stringify({ tags }),
    },
    requestLogCtx(correlationId, "contacts_tags"),
  )
}

export type CreateOpportunityResult = { opportunityId: string }

/** POST /opportunities/ */
export async function createOpportunity(
  cfg: GhlConfig,
  params: {
    contactId: string
    pipelineId: string
    pipelineStageId: string
    name: string
    correlationId?: string
  },
): Promise<CreateOpportunityResult> {
  const body = {
    locationId: cfg.locationId,
    contactId: params.contactId,
    pipelineId: params.pipelineId,
    pipelineStageId: params.pipelineStageId,
    name: params.name,
    status: "open",
  }

  const data = await ghlFetch<Record<string, unknown>>(
    cfg,
    "/opportunities/",
    {
      method: "POST",
      body: JSON.stringify(body),
    },
    requestLogCtx(params.correlationId, "opportunities_create"),
  )

  const id =
    (data.id as string | undefined) ??
    ((data.opportunity as Record<string, unknown> | undefined)?.id as string | undefined)

  if (!id) {
    console.error("[ghl] create opportunity: missing id", {
      ...requestLogCtx(params.correlationId, "opportunities_create"),
      dataPreview: JSON.stringify(data).slice(0, 300),
    })
    throw new GhlApiError("Invalid response from CRM", 500, "ghl_response_error", "opportunities_create")
  }

  return { opportunityId: id }
}

const NOTE_BODY_MAX = 8_000

/** POST /contacts/:contactId/notes — `body` is the note text (GHL field name). */
export async function createContactNote(
  cfg: GhlConfig,
  contactId: string,
  noteText: string,
  correlationId?: string,
): Promise<void> {
  const body = noteText.trim().slice(0, NOTE_BODY_MAX)
  if (!body) return
  await ghlFetch<unknown>(
    cfg,
    `/contacts/${encodeURIComponent(contactId)}/notes`,
    {
      method: "POST",
      body: JSON.stringify({ body }),
    },
    requestLogCtx(correlationId, "contacts_note"),
  )
}
