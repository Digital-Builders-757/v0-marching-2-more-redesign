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
 *
 * Request/response shapes can vary by API version; keep all paths and bodies here.
 */

import type { GhlConfig } from "./config"
import type { GhlCustomFieldEntry } from "./types"

export class GhlApiError extends Error {
  constructor(
    message: string,
    readonly status: number,
    readonly code?: string,
  ) {
    super(message)
    this.name = "GhlApiError"
  }
}

async function ghlFetch<T>(
  cfg: GhlConfig,
  path: string,
  init: RequestInit,
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
    console.error("[ghl] API error", { path, status: res.status, bodyPreview: text.slice(0, 500) })
    throw new GhlApiError(msg || "Upstream error", res.status, "ghl_upstream_error")
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

  const data = await ghlFetch<Record<string, unknown>>(cfg, "/contacts/upsert", {
    method: "POST",
    body: JSON.stringify(body),
  })

  const contact = data.contact as Record<string, unknown> | undefined
  const id =
    (contact?.id as string | undefined) ??
    (data.id as string | undefined) ??
    (data.contactId as string | undefined)

  if (!id) {
    console.error("[ghl] upsert contact: missing id in response", JSON.stringify(data).slice(0, 300))
    throw new GhlApiError("Invalid response from CRM", 500, "ghl_response_error")
  }

  return { contactId: id }
}

/** POST /contacts/:contactId/tags — tag names as configured in the sub-account */
export async function addTagsToContact(cfg: GhlConfig, contactId: string, tags: string[]): Promise<void> {
  if (tags.length === 0) return
  await ghlFetch(cfg, `/contacts/${encodeURIComponent(contactId)}/tags`, {
    method: "POST",
    body: JSON.stringify({ tags }),
  })
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

  const data = await ghlFetch<Record<string, unknown>>(cfg, "/opportunities/", {
    method: "POST",
    body: JSON.stringify(body),
  })

  const id =
    (data.id as string | undefined) ??
    ((data.opportunity as Record<string, unknown> | undefined)?.id as string | undefined)

  if (!id) {
    console.error("[ghl] create opportunity: missing id", JSON.stringify(data).slice(0, 300))
    throw new GhlApiError("Invalid response from CRM", 500, "ghl_response_error")
  }

  return { opportunityId: id }
}
