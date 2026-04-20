# Marching 2 More — GoHighLevel integration master plan

**Last updated:** April 20, 2026  
**Owner:** Marching 2 More / Donavan McFadden  
**Technical implementation owner:** website CTO / coding agent execution inside this repo  
**Target completion window:** ship the core setup by **May 1, 2026**

---

## Purpose

This document is the source of truth for the active Marching 2 More website → GoHighLevel integration.

The business requirement has changed from the older HubSpot-centric brief.

**HubSpot is out. GoHighLevel is in.**

Marching 2 More keeps the public website on **Next.js App Router + TypeScript + Tailwind + Vercel** as the branded lead-capture layer, while **GoHighLevel (GHL)** becomes the operational system of record for:

- contacts
- tags
- pipelines / opportunities
- automations
- calendars / booking
- notifications
- reporting

This plan exists so implementation inside the website repo stays clean, server-safe, and aligned with the business rules Donavan approved.

---

## What changed from the old brief

The original internal direction referenced **HubSpot + Calendly**.

That is no longer the target architecture.

### Replace this

- HubSpot CRM ownership
- Calendly-based booking handoff
- HubSpot language in docs, forms, routing, or env naming

### With this

- GoHighLevel as CRM / automation / calendar / reporting system
- GHL-backed booking links and calendars
- M2M Team Leads GHL location as the first destination for all new leads

---

## Architectural boundary

### Website repo owns

- public pages and funnel UX
- buyer / seller lead capture forms
- hidden attribution capture (UTMs where available)
- thank-you / next-step UX
- server-side form submission route(s)
- analytics wiring on the website (GA4, Meta Pixel, later Meta CAPI support)

### GoHighLevel owns

- contact records
- custom fields
- tags
- buyer and seller pipelines
- workflows / automations
- SMS / email sequences
- missed-call text back
- booking calendars
- opportunity stage progression
- internal notifications / alerts
- reporting

### External operational systems remain external

- Slack notifications may still be used, but should be triggered from GHL workflow / webhook logic
- direct-mail, AI, and other operational tooling should not be hard-coded into the site unless scope expands again

---

## Business rules

1. **Seller leads are the highest priority for the first 60 days.**
2. The site should use **separate funnels by pain point**, not one giant generic branching intake.
3. Buyer and seller forms should stay **short and conversion-focused**.
4. Within the **first 5 minutes** of a new lead submission, the operating goal is:
   - call the prospect
   - text the prospect
   - notify the owner and assigned agent internally
5. Booking should be handled by **GoHighLevel calendars**, not Calendly.
6. Reporting should live in **GoHighLevel first**, with the primary weekly KPIs being:
   - cost per lead
   - appointment rate

---

## Form rules

### Required fields

- `name`
- `email`
- `phone`
- `date_of_birth`

### Optional fields

- `address`
- `urgency`

### Hidden attribution fields (when available)

- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_content`

### Explicit lead typing

Every form submission must include:

- `lead_type: "buyer" | "seller"`

If a page targets a seller pain point such as foreclosure, downsizing, valuation, or prep-to-list, the form should resolve to the **seller funnel**, even if the copy varies page to page.

---

## Website submission contract

The website should continue posting to:

- `POST /api/submit-lead`

### Runtime

- run in the **Node.js runtime**
- keep all secrets server-side only
- do not expose GHL credentials to the client

### API responsibilities

The API route should:

1. validate required fields
2. normalize phone / strings / lead type
3. create or update the contact in GoHighLevel
4. write minimum custom field data
5. apply appropriate lead tags
6. create or update the opportunity in the correct pipeline / stage
7. trigger or hand off to GHL workflow-friendly metadata
8. return a stable success / failure contract to the website

### Suggested request payload

```ts
type SubmitLeadRequest = {
  lead_type: "buyer" | "seller"
  name: string
  email: string
  phone: string
  date_of_birth: string
  address?: string
  urgency?: string
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_content?: string
  source_page?: string
  source_path?: string
}
```

### Suggested response contract

```ts
type SubmitLeadResponse =
  | { ok: true; contactId?: string; opportunityId?: string }
  | { ok: false; error: string; code?: string }
```

---

## GoHighLevel contact + field mapping

All leads should enter the **M2M Team Leads** GoHighLevel location first.

They should then be separated using both:

- tags
- pipelines / opportunities

### Minimum custom fields required in GHL

- `Lead Type`
- `Urgency`
- `UTM Source`
- `UTM Medium`
- `UTM Campaign`
- `UTM Content`
- `DOB`
- `Address`

These fields are the minimum baseline because they support:

- attribution
- urgency-based routing
- buyer vs seller separation
- future reporting and agent assignment rules

---

## Pipelines

Maintain separate pipelines for:

- **Buyer pipeline**
- **Seller pipeline**

### Default stage progression

Use a practical baseline like:

1. New Inquiry
2. Contact Attempted
3. Conversation Started
4. Appointment Scheduled
5. Appointment Completed
6. Active Client / Listing
7. Under Contract
8. Closed Won / Lost

Seller naming can be adapted slightly for listing flow, but the shape should stay equivalent.

---

## Automations

### Buyer leads

Every new buyer lead should receive:

- instant text
- instant email
- internal notification path

### Seller leads

Every new seller lead should receive a **seller-specific sequence** in GHL.

Because seller leads are the top priority, seller workflows should be the first ones wired and verified.

### High-intent handling

Urgency of **0–30 days** should trigger elevated internal alerts for faster response.

### Missed-call text back

Enable missed-call text back in GHL so high-intent leads still get immediate acknowledgement.

---

## Notifications

New leads should notify:

- Slack
- email
- text

Recipients should include:

- owner
- assigned agent when applicable

Important: Slack can remain part of the architecture, but the preferred trigger should come from **GHL workflow / webhook logic**, not a revived HubSpot pattern.

---

## Booking and calendars

Calendly should be removed from the current operating model.

Booking should be handled through **GoHighLevel calendars**.

### Rules

- each agent should connect their own Google Calendar individually
- buyer consults and seller consults should use **separate booking links**
- booking a calendar event should move the opportunity into the appointment stage automatically

---

## Tracking and attribution

The website should continue using:

- GA4
- Meta Pixel

It should also support:

- Meta Conversions API (CAPI) as a follow-up enhancement

### Primary conversion event

Treat **new lead / form submit** as the main conversion event.

This is the primary performance engine for the near-term funnel.

---

## Environment variables

The old `HUBSPOT_*` variables should not be used in production.

### Server-only

- `GHL_API_KEY`
- `GHL_LOCATION_ID`
- `GHL_CF_DOB`
- `GHL_CF_ADDRESS`
- `GHL_CF_URGENCY`
- `GHL_CF_LEAD_TYPE`
- `GHL_CF_UTM_SOURCE`
- `GHL_CF_UTM_MEDIUM`
- `GHL_CF_UTM_CAMPAIGN`
- `GHL_CF_UTM_CONTENT`

### Browser-safe

- `NEXT_PUBLIC_FACEBOOK_PIXEL_ID`
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`

### Security rule

Server-only secrets must remain server-side only and must never use the `NEXT_PUBLIC_` prefix.

---

## Website surface inventory (initial wiring priority)

### Highest priority seller surfaces

- `/free-home-valuation`
- `/cma-form`
- `/sell`
- `/downsizing-your-home`
- `/facing-foreclosure`
- any seller guide / pre-listing / valuation CTA pages

### Buyer surfaces

- `/buy`
- `/home-search`
- buyer-contact paths

### Shared contact / booking surfaces

- `/contact-us`
- shared consultation CTA components

---

## Migration rules

### Remove or phase out

- HubSpot language in docs and code comments
- Calendly as the primary consultation / booking system
- legacy assumptions that reporting must leave GHL

### Preserve

- Next.js + Vercel security model
- short-form conversion strategy
- hidden UTM capture
- clear thank-you / next-step UX

---

## Implementation phases

## Phase 1 — foundation

- finalize this plan
- identify all current forms, booking links, and CTA entry points
- add / confirm environment variable contract
- add shared GHL config module and API client wrapper
- define common lead payload contract

## Phase 2 — website submission path

- implement `POST /api/submit-lead`
- validate required fields
- create/update GHL contacts server-side
- map required custom fields
- apply buyer / seller tags
- create/update opportunities in the correct pipeline

## Phase 3 — page wiring

- connect seller forms first
- connect buyer forms second
- replace contact / consultation paths that still point to Calendly where required
- preserve thank-you UX and attribution capture

## Phase 4 — automations + notifications

- verify buyer instant text / email sequence
- verify seller-specific sequence
- verify urgency escalation
- verify Slack / email / text internal alert flow
- verify missed-call text back

## Phase 5 — booking + QA

- connect GHL calendars
- confirm buyer vs seller consult routing
- verify opportunity stage movement on booking
- run end-to-end QA across the highest-priority funnels

---

## Acceptance checklist

The integration is not “done” until the following are true:

- forms still submit cleanly from the website
- secrets remain server-side only
- a lead lands in the correct GHL location
- required custom fields are populated
- buyer and seller paths are separated correctly
- seller leads receive the correct seller automation
- buyer leads receive the correct buyer automation
- urgency triggers elevated alerting
- booking uses GHL, not Calendly
- owner / assigned-agent notifications are working
- attribution fields are present where available
- thank-you UX still feels polished and branded

---

## Risks / watchouts

- silent field-name drift between frontend forms and GHL mappings
- custom field IDs missing or renamed in GHL
- booking links shipped before calendar ownership is verified per agent
- hidden UTMs dropped during page refactors
- mixed buyer/seller routing caused by over-generic form reuse
- old Calendly links lingering in components or docs

---

## Execution notes for coding agents

- prefer shared utilities over per-page API copy-paste
- keep the submission contract stable across all forms
- preserve `lib/m2m-site.ts` as the source of truth for external operational URLs
- do not leak GHL credentials into client components
- keep seller surfaces first in execution order
- do not silently break existing CTAs while integrating forms

---

## Immediate next deliverables

1. Audit current forms, CTA destinations, and consultation links
2. Add or finish shared GHL config in this repo
3. Build `POST /api/submit-lead`
4. Wire seller forms first
5. Replace remaining required booking paths with GHL-aware logic
6. Produce a QA checklist for Donavan before May 1

---

## Source files likely to change

- `lib/m2m-site.ts`
- `lib/m2m-constants.ts`
- `components/m2m-cta.tsx`
- `app/contact-us/page.tsx`
- seller and buyer landing page forms
- `app/api/**`
- analytics helpers if Meta CAPI support begins now

This plan is the governing source of truth for the active GHL integration scope in the Marching 2 More website repo.
