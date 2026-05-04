# Marching2More — GoHighLevel Admin Setup Spec
**Site:** www.marching2more.com
**Scope:** Pipelines, Stages, Tags, Custom Fields, Contact Layouts, Smart Lists, Automation Triggers
**Namespace:** Clean `M2M-` prefix (separate from Recovery Masters / m2m-lead-generation conventions)
**Funnels covered:** Foreclosure · Divorce · Downsizing
**Apply in:** GHL → Settings (and Contacts → Smart Lists)

---

## 0. Naming Conventions (apply consistently)

| Element | Format | Example |
|---|---|---|
| Pipeline | `M2M – {Funnel}` | `M2M – Foreclosure` |
| Pipeline stage | Sentence case, action-oriented | `Discovery Call Booked` |
| Tag | `m2m-{category}-{value}` (lowercase, hyphenated) | `m2m-funnel-foreclosure` |
| Custom field | `M2M {Funnel} – {Field}` | `M2M Foreclosure – Auction Date` |
| Custom field group | `M2M {Funnel}` | `M2M Foreclosure` |
| Smart list | `M2M · {Funnel} · {View}` | `M2M · Foreclosure · Hot Leads` |
| Workflow / automation | `M2M | {Funnel} | {Trigger}` | `M2M | Foreclosure | New Lead Intake` |

**Why this matters:** every M2M asset is searchable by typing `M2M` in any GHL search box, and reporting filters are predictable.

**Website integration contract (current repo):** public forms submit to `POST /api/submit-lead` on the Next.js site, then server-side code writes to GHL. The website now treats success as **full pipeline completion** (contact upsert + tags + opportunity + operator note). If any step fails, the UI stays in an error/retry path and does not show a thank-you state.

---

## 1. Pipelines & Stages (3 separate pipelines)

> All three pipelines share a common shape: **Intake → Engagement → Qualification → Appointment → Offer → Closing → Outcome**, with funnel-specific stages where the situation requires it. Edit freely before applying.

### 1.1 Pipeline: `M2M – Foreclosure`
Distressed sellers facing pre-foreclosure / NOD / auction timelines. Speed-to-lead is critical.

| # | Stage | Purpose / Exit Criteria |
|---|---|---|
| 1 | New Lead – Unworked | Auto-created on form submit. Exit when first outbound attempt logged. |
| 2 | Attempting Contact | 1st–7th touch sequence active. Exit on live conversation OR 7 attempts exhausted. |
| 3 | Conversation Held | Reached lead, gathered situation. Exit when qualified or disqualified. |
| 4 | Qualified – Auction Pending | Confirmed homeowner, distress confirmed, auction date known. |
| 5 | Discovery Call Booked | Calendar appointment scheduled. |
| 6 | Discovery Call Completed | Showed up, discussed options (cash, list, short sale, loan mod referral). |
| 7 | Property Visit Scheduled | In-person walkthrough booked. |
| 8 | Offer Presented | Cash offer or listing agreement presented. |
| 9 | Under Contract | Signed agreement. |
| 10 | Closing Scheduled | Title work in motion, closing date set. |
| 11 | Closed – Won | Deal funded. |
| 12 | Lost – Auction Hit | Property went to auction before close. |
| 13 | Lost – Other | DNC, listed elsewhere, kept home, unresponsive. |
| 14 | Long-Term Nurture | Not ready now, recycle to nurture workflow. |

### 1.2 Pipeline: `M2M – Divorce`
Sellers navigating divorce — high emotion, often two decision-makers, longer timelines.

| # | Stage | Purpose / Exit Criteria |
|---|---|---|
| 1 | New Lead – Unworked | Auto-created on form submit. |
| 2 | Attempting Contact | Outreach sequence active. |
| 3 | Conversation Held | Reached at least one party. |
| 4 | Qualified – Both Parties Aware | Confirmed both spouses know home is being explored. |
| 5 | Awaiting Attorney/Decree Info | Need court date, decree, or attorney clearance before progressing. |
| 6 | Consultation Booked | Discovery call on calendar. |
| 7 | Consultation Completed | Strategy options reviewed (sale, buyout, rent-back). |
| 8 | Listing Strategy Agreed | Both parties aligned on path forward. |
| 9 | Listing Agreement Signed | Paperwork executed. |
| 10 | Active Listing | On market. |
| 11 | Under Contract | Buyer found. |
| 12 | Closed – Won | Funded. |
| 13 | Lost – Reconciled | Couple decided not to sell. |
| 14 | Lost – Other | Listed elsewhere, dropped, DNC. |
| 15 | Long-Term Nurture | Holding pattern (case pending, etc.). |

### 1.3 Pipeline: `M2M – Downsizing`
Empty-nesters, retirees, lifestyle-driven sellers. Slower pace, education-heavy, referral-rich.

| # | Stage | Purpose / Exit Criteria |
|---|---|---|
| 1 | New Lead – Unworked | Auto-created on form submit. |
| 2 | Attempting Contact | Outreach sequence active. |
| 3 | Conversation Held | First real conversation. |
| 4 | Qualified – Timeline 0–6 mo | Ready to move within 6 months. |
| 5 | Educating – Timeline 6–18 mo | Long-runway nurture, home valuation + market education. |
| 6 | Home Valuation Requested | CMA/walkthrough requested. |
| 7 | Consultation Booked | Strategy session on calendar. |
| 8 | Consultation Completed | Discussed sell-and-buy, sell-and-rent, buy-before-sell. |
| 9 | Next-Home Search Active | Working with buyer side simultaneously. |
| 10 | Listing Agreement Signed | |
| 11 | Active Listing | |
| 12 | Under Contract | |
| 13 | Closed – Won | |
| 14 | Lost – Stayed Put | Decided not to move. |
| 15 | Lost – Other | |
| 16 | Long-Term Nurture | 18+ month timeline. |

---

## 2. Tag Taxonomy

> All tags lowercase, hyphenated, prefixed `m2m-`. Apply via forms, workflows, and manual triage.

### 2.1 Funnel tags (mutually exclusive — one per contact)
- `m2m-funnel-foreclosure`
- `m2m-funnel-divorce`
- `m2m-funnel-downsizing`
- `m2m-funnel-general` (catch-all; uncategorized intake)

### 2.2 Source tags (where the lead came from)
- `m2m-source-website`
- `m2m-source-quiz`
- `m2m-source-fb-ad`
- `m2m-source-google-ad`
- `m2m-source-youtube`
- `m2m-source-direct-mail`
- `m2m-source-referral`
- `m2m-source-organic-search`
- `m2m-source-partner` (attorney, lender, etc.)
- `m2m-source-manual` (manually added)

### 2.3 Lifecycle tags (where they are in the journey)
- `m2m-lifecycle-new`
- `m2m-lifecycle-engaged`
- `m2m-lifecycle-qualified`
- `m2m-lifecycle-appointment`
- `m2m-lifecycle-client`
- `m2m-lifecycle-closed-won`
- `m2m-lifecycle-closed-lost`
- `m2m-lifecycle-nurture`

### 2.4 Behavior / engagement tags
- `m2m-engaged-email-opened`
- `m2m-engaged-email-clicked`
- `m2m-engaged-sms-replied`
- `m2m-engaged-call-answered`
- `m2m-engaged-no-show`
- `m2m-engaged-quiz-completed`
- `m2m-engaged-booking-page-viewed`

### 2.5 Compliance / suppression tags
- `m2m-dnc` (do not contact)
- `m2m-do-not-email`
- `m2m-do-not-sms`
- `m2m-do-not-call`
- `m2m-bounce-hard`
- `m2m-spam-complaint`

### 2.6 Priority / temperature tags
- `m2m-priority-hot` (auction <30 days, motivated, qualified)
- `m2m-priority-warm`
- `m2m-priority-cold`

### 2.7 Funnel-specific situational tags
**Foreclosure:**
- `m2m-fc-auction-30-day` (auction within 30 days)
- `m2m-fc-auction-60-day`
- `m2m-fc-auction-90-day-plus`
- `m2m-fc-equity-positive`
- `m2m-fc-equity-negative`
- `m2m-fc-loan-mod-candidate`

**Divorce:**
- `m2m-dv-decree-final`
- `m2m-dv-decree-pending`
- `m2m-dv-attorney-engaged`
- `m2m-dv-both-parties-aligned`
- `m2m-dv-one-party-only`

**Downsizing:**
- `m2m-ds-timeline-0-6mo`
- `m2m-ds-timeline-6-18mo`
- `m2m-ds-timeline-18mo-plus`
- `m2m-ds-needs-buy-too` (sell + buy together)
- `m2m-ds-cash-buyer-next`

---

## 3. Custom Fields

> Create field group first (Settings → Custom Fields → Add Folder), then add fields under each group. Mark fields as Required where noted.

### 3.1 Shared field group: `M2M Shared`
Applies to all funnels.

| Field name | Type | Options / Notes |
|---|---|---|
| M2M Shared – Property Address | Single line | Required on all forms |
| M2M Shared – Property City | Single line | |
| M2M Shared – Property State | Dropdown | US states |
| M2M Shared – Property Zip | Single line | |
| M2M Shared – Property Type | Dropdown | SFR, Condo, Townhome, Multi-family, Mobile, Land, Other |
| M2M Shared – Bedrooms | Number | |
| M2M Shared – Bathrooms | Number | |
| M2M Shared – Square Footage | Number | |
| M2M Shared – Year Built | Number | |
| M2M Shared – Owner Type | Dropdown | Sole, Joint, Trust, LLC, Estate |
| M2M Shared – Mortgage Balance Estimate | Monetary | |
| M2M Shared – Estimated Home Value | Monetary | |
| M2M Shared – Best Time to Contact | Dropdown | Morning, Afternoon, Evening, Weekend |
| M2M Shared – Preferred Contact Method | Dropdown | Phone, Text, Email |
| M2M Shared – Lead Score | Number | Auto-populated by workflow (0–100) |
| M2M Shared – First Touch Source | Single line | Auto-populated from form |
| M2M Shared – UTM Source | Single line | |
| M2M Shared – UTM Medium | Single line | |
| M2M Shared – UTM Campaign | Single line | |
| M2M Shared – UTM Content | Single line | |
| M2M Shared – Referrer URL | Single line | |
| M2M Shared – GA Client ID | Single line | For attribution |
| M2M Shared – Notes (Intake) | Multi-line | Free-text from form |

### 3.2 Field group: `M2M Foreclosure`
| Field name | Type | Options / Notes |
|---|---|---|
| M2M Foreclosure – Auction Date | Date | Required if known |
| M2M Foreclosure – NOD Date | Date | Notice of Default date |
| M2M Foreclosure – Months Behind | Number | |
| M2M Foreclosure – Lender Name | Single line | |
| M2M Foreclosure – Total Amount Owed | Monetary | |
| M2M Foreclosure – Equity Position | Dropdown | Positive, Break-even, Negative, Unknown |
| M2M Foreclosure – Working with Lender | Dropdown | Yes, No, Tried, Don't know how |
| M2M Foreclosure – Open to Cash Offer | Dropdown | Yes, No, Maybe |
| M2M Foreclosure – Open to Listing | Dropdown | Yes, No, Maybe |
| M2M Foreclosure – Reason for Hardship | Multi-line | |
| M2M Foreclosure – Bankruptcy Filed | Dropdown | No, Chapter 7, Chapter 13, Considering |

### 3.3 Field group: `M2M Divorce`
| Field name | Type | Options / Notes |
|---|---|---|
| M2M Divorce – Divorce Stage | Dropdown | Considering, Filed, In Progress, Decree Final |
| M2M Divorce – Decree Date | Date | |
| M2M Divorce – Both Parties on Title | Dropdown | Yes, No, Unsure |
| M2M Divorce – Both Parties Aware of Sale | Dropdown | Yes, No, Unsure |
| M2M Divorce – Attorney Name | Single line | |
| M2M Divorce – Attorney Phone | Phone | |
| M2M Divorce – Court Order Re: Home | Dropdown | None, Sell by date, Buyout required, Other |
| M2M Divorce – Buyout Considered | Dropdown | Yes, No, Cannot afford |
| M2M Divorce – Children in Home | Dropdown | Yes, No |
| M2M Divorce – Target Sale Date | Date | |
| M2M Divorce – Spouse Contact Name | Single line | |
| M2M Divorce – Spouse Contact Phone | Phone | |
| M2M Divorce – Spouse Contact Email | Email | |

### 3.4 Field group: `M2M Downsizing`
| Field name | Type | Options / Notes |
|---|---|---|
| M2M Downsizing – Reason for Downsizing | Dropdown | Empty nest, Retirement, Health, Cost of living, Lifestyle, Other |
| M2M Downsizing – Timeline | Dropdown | 0–3 mo, 3–6 mo, 6–12 mo, 12–18 mo, 18+ mo |
| M2M Downsizing – Next Home Type | Dropdown | Smaller SFR, Condo, Townhome, 55+ Community, Rental, Move in with family, Other |
| M2M Downsizing – Buying Next Home | Dropdown | Yes – before sale, Yes – after sale, Yes – simultaneous, No – renting, Undecided |
| M2M Downsizing – Need Sale Proceeds to Buy | Dropdown | Yes, No, Partial |
| M2M Downsizing – Open to Off-Market Offer | Dropdown | Yes, No, Maybe |
| M2M Downsizing – Mortgage Status | Dropdown | Paid off, <50% remaining, 50–80%, 80%+ |
| M2M Downsizing – Decision Makers | Multi-line | Spouse, kids, financial advisor, etc. |
| M2M Downsizing – Preferred Move Area | Single line | |

---

## 4. Contact Detail Layouts (per funnel)

> GHL → Settings → Contact → Layouts. Create a layout per funnel and assign via workflow when funnel tag is added.

### 4.1 Layout: `M2M Foreclosure Layout`
**Section order (top to bottom of contact card):**

1. **Contact Basics** — Name, Phone, Email, Tags, Owner, Lead Score
2. **Foreclosure Snapshot** *(field group: M2M Foreclosure)*
   - Auction Date *(prominent — top of section)*
   - NOD Date
   - Months Behind
   - Total Amount Owed
   - Equity Position
   - Working with Lender
3. **Property Details** *(field group: M2M Shared — property fields)*
4. **Seller Intent** — Open to Cash Offer, Open to Listing, Reason for Hardship
5. **Attribution** — First Touch Source, UTM fields, Referrer URL
6. **Notes & Activity**

### 4.2 Layout: `M2M Divorce Layout`
1. **Contact Basics**
2. **Divorce Snapshot** — Divorce Stage, Decree Date, Both Parties Aware, Court Order Re: Home, Target Sale Date
3. **Spouse / Co-Owner** — Spouse Contact Name/Phone/Email, Both Parties on Title
4. **Legal** — Attorney Name, Attorney Phone, Buyout Considered
5. **Property Details**
6. **Attribution**
7. **Notes & Activity**

### 4.3 Layout: `M2M Downsizing Layout`
1. **Contact Basics**
2. **Downsizing Snapshot** — Reason, Timeline, Next Home Type, Buying Next Home, Preferred Move Area
3. **Financial Picture** — Mortgage Status, Need Sale Proceeds to Buy, Open to Off-Market Offer
4. **Decision Context** — Decision Makers, Best Time to Contact, Preferred Contact Method
5. **Property Details**
6. **Attribution**
7. **Notes & Activity**

### 4.4 Default fallback layout: `M2M General Layout`
Used when funnel is unknown / `m2m-funnel-general` is applied.
- Contact Basics → Property Details → Attribution → Notes

---

## 5. Smart Lists / Saved Filters

> GHL → Contacts → Smart Lists. Create these for daily operator views.

| Smart list name | Filter logic |
|---|---|
| `M2M · All · New Today` | Tag `m2m-lifecycle-new` AND Date Added = Today |
| `M2M · All · Hot` | Tag `m2m-priority-hot` |
| `M2M · All · Needs First Touch` | Tag `m2m-lifecycle-new` AND Last Activity > 1 hour ago |
| `M2M · Foreclosure · Auction <30 Days` | Tag `m2m-fc-auction-30-day` AND NOT `m2m-lifecycle-closed-won` AND NOT `m2m-lifecycle-closed-lost` |
| `M2M · Foreclosure · Active Pipeline` | Pipeline = M2M – Foreclosure AND NOT in Closed/Lost stages |
| `M2M · Divorce · Awaiting Attorney Info` | Pipeline stage = "Awaiting Attorney/Decree Info" |
| `M2M · Divorce · Active Pipeline` | Pipeline = M2M – Divorce AND NOT closed |
| `M2M · Downsizing · 0–6 Month Timeline` | Tag `m2m-ds-timeline-0-6mo` |
| `M2M · Downsizing · Long Nurture` | Tag `m2m-ds-timeline-18mo-plus` |
| `M2M · All · No-Shows This Week` | Tag `m2m-engaged-no-show` AND Last Activity within 7 days |
| `M2M · All · DNC Audit` | Tag `m2m-dnc` OR `m2m-do-not-call` OR `m2m-do-not-email` OR `m2m-do-not-sms` |
| `M2M · All · Closed Won (90 day)` | Tag `m2m-lifecycle-closed-won` AND Date in last 90 days |

---

## 6. Workflow Triggers (the minimum set to make this real)

> Build under Automation → Workflows. Each named per convention `M2M | {Funnel} | {Trigger}`.

### 6.1 Universal intake (one workflow per funnel form)
**Trigger:** Form submission → `M2M – {Funnel} Intake Form`
**Actions in order:**
1. Create/Update contact (upsert by phone + email)
2. Add tag `m2m-funnel-{funnel}`
3. Add tag `m2m-source-{source}` (mapped from UTM or hidden field)
4. Add tag `m2m-lifecycle-new`
5. Set custom field `M2M Shared – First Touch Source`
6. Assign owner (per assignment rule below)
7. Add to pipeline `M2M – {Funnel}` at stage `New Lead – Unworked`
8. Apply contact layout `M2M {Funnel} Layout`
9. Send internal notification (Slack/email/SMS to operator)
10. Trigger speed-to-lead sequence (1st text + call attempt within 5 min)

### 6.2 Critical: Success-page gating
**Problem to solve (from your launch report):** funnel success pages must NOT show "thanks" unless GHL actually received the lead.

**Implementation:**
- Form posts JSON to site API `POST /api/submit-lead` (no browser-side GHL secrets).
- API success is treated as **all required CRM steps complete** for that lead: contact upsert + tags + opportunity + contact note.
- If any required step fails, the site returns `ok: false` and the funnel stays in an in-page retry/error state (with reference id), not a thank-you state.
- Keep optional monitoring workflows (`M2M | All | Lead Receipt Confirmation`) for secondary audit trails, but website success should still be gated by API response.

### 6.3 Stage-change automations (apply per pipeline)
- Stage → `Discovery Call Booked`: add tag `m2m-lifecycle-appointment`, send confirmation email + SMS, add to calendar reminder sequence
- Stage → `Closed – Won`: add tag `m2m-lifecycle-closed-won`, fire referral-request workflow at +14 days
- Stage → any `Lost – *`: add tag `m2m-lifecycle-closed-lost`, route to long-term nurture if applicable

### 6.4 Owner assignment (configure to your team)
**Recommended for now (single owner):**
- All M2M leads → assigned to Donavan
- Add round-robin later when ISA/VA is hired

---

## 7. Pre-DNS Cutover QA Checklist (verify before flipping marching2more.com)

Match this against your launch report. Each must pass before DNS flip.

### 7.1 Form submission integrity
- [ ] Foreclosure intake form → contact appears in GHL within 10s
- [ ] Divorce intake form → contact appears in GHL within 10s
- [ ] Downsizing intake form → contact appears in GHL within 10s
- [ ] Quiz funnel → contact appears with quiz answers populated in custom fields
- [ ] Generic contact form → contact appears with `m2m-funnel-general`

### 7.2 Tag application
- [ ] Each form applies correct `m2m-funnel-*` tag
- [ ] Each form applies correct `m2m-source-*` tag (test from FB ad URL, Google ad URL, organic, direct)
- [ ] `m2m-lifecycle-new` applied on all new submissions
- [ ] UTM tags persist into custom fields (not just tags)

### 7.3 Pipeline placement
- [ ] Foreclosure leads land in `M2M – Foreclosure` → `New Lead – Unworked`
- [ ] Divorce leads land in `M2M – Divorce` → `New Lead – Unworked`
- [ ] Downsizing leads land in `M2M – Downsizing` → `New Lead – Unworked`
- [ ] Owner is assigned (not unassigned)

### 7.4 Success page gating
- [ ] Foreclosure form: thank-you state appears only when `POST /api/submit-lead` returns success after full CRM pipeline completion
- [ ] Divorce form: same
- [ ] Downsizing form: same
- [ ] Failure path: in-form error state renders + retry/contact actions remain visible
- [ ] Test by temporarily breaking one required CRM step (tags/opportunity/note) → confirm no false success

### 7.5 Placeholder / link audit
- [ ] No `lorem ipsum` strings on any live page
- [ ] No `#` placeholder hrefs on CTAs
- [ ] No `example.com` or staging URLs
- [ ] All booking buttons point to live GHL calendar URLs
- [ ] All quiz CTAs point to live quiz URLs
- [ ] Phone number / email in footer match GHL primary

### 7.6 Notifications
- [ ] Operator receives instant notification on each new lead (Slack/email/SMS)
- [ ] Notification includes funnel, name, phone, and direct link to GHL contact

### 7.7 Compliance
- [ ] SMS opt-in language present on all forms
- [ ] Privacy policy linked from every form
- [ ] DNC tag respected by all outbound workflows (test by tagging a test contact)

---

## 8. Build Order (apply in this sequence in GHL)

1. **Custom field groups + fields** (Section 3) — must exist before pipelines/forms reference them
2. **Tags** (Section 2) — pre-create as needed; many auto-create on first use
3. **Contact layouts** (Section 4) — assign default, attach funnel-specific via workflow
4. **Pipelines + stages** (Section 1) — create all 3
5. **Forms** — build/connect intake forms, map fields to custom fields
6. **Workflows** (Section 6) — universal intake first, then stage automations
7. **Smart lists** (Section 5) — last, since they depend on tags/stages existing
8. **QA pass** (Section 7) — run full checklist before DNS

---

## 9. Hand-off to Vercel (what becomes available after this build)

Once Sections 1–6 are applied in GHL, these are the values you'll be able to hand to Vercel:

- **Form embed IDs / URLs** per funnel (3)
- **Calendar booking link slugs** per funnel (or shared)
- **Quiz URL** (if hosted in GHL)
- **Webhook endpoints** for any custom posts
- **Confirmation behavior contract** (website in-page success/error states driven by `POST /api/submit-lead` response)

I'll generate the Vercel hand-off doc as the next step once you've applied this and confirmed the IDs.

---

## 10. Open items for your input

1. **Stages** — review and edit Section 1 freely. The flows above are best-practice defaults for distressed-seller / lifestyle-seller real estate. Reduce or rename anything.
2. **Lead source channels** — confirm the source list in Section 2.2 is complete for your actual paid + organic mix.
3. **Calendar strategy** — single shared M2M calendar, or one per funnel? (Affects booking link count.)
4. **Owner / assignment** — is it just you for now, or should I bake in round-robin for a future ISA seat?
5. **Notification channel** — Slack DM, SMS, email, or all three on new lead?

Send edits and I'll regenerate. Otherwise this is ready to apply.
