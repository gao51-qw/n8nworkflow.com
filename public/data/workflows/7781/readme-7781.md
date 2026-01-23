# Automated client onboarding system with Notion, email & CRM integration

> # Graceful Client Onboarding Concierge — Pro 

A warm, reliable onboarding system for small businesses and studios. Captures a form submission via webhook, creates a Client record in Notion, sends a concierge-style welcome email (with scheduler + optional contract link), optionally pings the owner on Telegram, mirrors the lead to Airtable/HubSpot, places a temporary Google Calendar hold, and includes a double opt-in confirmation link.

**Made for:** coaches, designers, boutique agencies, e-commerce and service providers who want consistent follow-up without manual busywork.

---

## What it does (flow)

* **Trigger:** Form ➜ `POST /client-intake` (or Manual Trigger for instant demo)
* **Normalize & Score:** Map fields, auto-generate `optInToken`, compute `score` and `tier`
* **Create in Notion:** `Clients` page (Name, Email, Package, Notes, Status, Score, Tier, OptInToken, Consent=false)
* **Welcome Email:** industry-tuned copy + scheduler link (+ contract link for Growth/Pro/Custom packages)
* **Owner Notify (optional):** Telegram ping with tier + score
* **CRM Mirrors (optional):** Create Airtable row and/or HubSpot contact
* **Calendar Hold (optional):** 30-min “Intro Hold” event (e.g., now + 48h)
* **Double Opt-In:** `/optin-confirm?token=...&email=...` sets Consent=true & Status=Confirmed in Notion
* **Error Handling:** On failure, send an email to the owner

```mermaid
flowchart TD
 A[Form → Webhook /client-intake] --&gt; B[Map Intake + Score Lead]
 B --&gt; C[Notion: Create Client]
 B --&gt; D[Build Welcome Email]
 D --&gt; E[Email: Send Welcome]
 D --&gt; F{Optional actions}
 F --&gt;|Telegram| G[Telegram: Notify Owner]
 F --&gt;|Airtable| H[Airtable: Create Row]
 F --&gt;|HubSpot| I[HubSpot: Create Contact]
 F --&gt;|Calendar Hold| J[Google Calendar: Create Hold]
 K[GET /optin-confirm] --&gt; L[Find Notion by OptInToken] --&gt; M[Update: Consent=true, Status=Confirmed]
 ER[Error Trigger] --&gt; EH[Email Owner]
```

---

## Prerequisites

* **Notion** database **`Clients`** with properties:
  `Name (title)`, `Email (email)`, `Package (select)`, `Notes (rich text)`, `Status (select)`, `Score (number)`, `Tier (select)`, `OptInToken (text)`, `Consent (checkbox)`
  *(CSV header provided in the Sticky note on canvas.)*
* **Email** (SMTP or Gmail OAuth)
* **Optional:** Telegram Bot + Chat ID, Airtable (Base ID + Table), HubSpot (Contacts), Google Calendar (Calendar ID)

---

## Configuration (Set these in **Set: User Config**)

```
NOTION_DB_ID             = your Notion Clients DB ID
FROM_EMAIL               = sender address for welcome email
OWNER_EMAIL              = where error notifications go
SCHEDULER_URL            = booking link (Calendly, Once, etc.)
BASE_URL                 = your public n8n domain (for opt-in link)
CONTRACT_BASE_URL        = (optional) proposal/contract URL base

ENABLE_TELEGRAM          = true|false
TELEGRAM_CHAT_ID         = (if enabled)

ENABLE_AIRTABLE          = true|false
AIRTABLE_BASE_ID         = (if enabled)
AIRTABLE_TABLE           = (if enabled)

ENABLE_HUBSPOT           = true|false

ENABLE_CAL_HOLD          = true|false
CALENDAR_ID              = "primary" or calendar ID
HOLD_HOURS_FROM_NOW      = number of hours (default 48)

INDUSTRY                 = coaching | design_studio | ecommerce | services
```

**Credentials:** Attach in node credentials panels (no secrets in JSON).

---

## How to use

1. **Import** the workflow JSON.
2. Open **Set: User Config** and fill required values (see above).
3. **Attach credentials**: Notion + Email; optional Telegram/Airtable/HubSpot/Google Calendar.
4. **Run Manual Trigger** to simulate an intake and verify:

   * Notion page created
   * Welcome email received
   * Optional Telegram/CRM/Calendar actions
5. Switch your form to the Production **Webhook URL** shown in the **Client Intake Webhook** node.

**Sample JSON (for testing the live webhook):**

```json
{"name":"Ava Laurent","email":"ava@example.com","package":"Growth","message":"Excited to begin!"}
```

**Double opt-in:** The welcome email includes a link like
`https://YOUR-N8N-DOMAIN/webhook/optin-confirm?token=...&email=...`
Clicking it sets Consent=true and Status=Confirmed on the Notion record.

---

## Industry-tuned welcome copy

Set `INDUSTRY` to control phrasing automatically:

* `coaching` – gentle goals/blocks framing
* `design_studio` – asset handoff + milestone language
* `ecommerce` – store link + quick-win focus
* `services` – general service language

---

## Submission compliance

* ✅ **Manual Trigger** path for instant demo
* ✅ **Markdown sticky notes** with clear H2 sections (README, Prereqs + CSV, Setup, Testing, Compliance, Changelog)
* ✅ **No hardcoded API keys** (credentials only)
* ✅ **Timezone-safe** ISO times for calendar hold
* ✅ **Clear placeholders** and copy-paste CSV headers included

---

## Troubleshooting (quick)

* **No email:** attach Email creds; ensure `FROM_EMAIL` is allowed by your provider.
* **No Notion page:** verify `NOTION_DB_ID` and property names; check Notion permissions.
* **Webhook issues:** ensure your form sends **JSON**; adapt mapping for form-encoded payloads.
* **Opt-in link fails:** `BASE_URL` must be your public n8n domain; workflow must be active.
* **Calendar hold not created:** set `ENABLE_CAL_HOLD=true`, attach Google Calendar creds, confirm `CALENDAR_ID`.

---

**Tags:** onboarding, notion, email, crm, telegram, airtable, hubspot, calendar, double-opt-in, small business, concierge, women-led brands

**Version:** v3 (see Changelog sticky on canvas)


## 📊 Basic Information

- **Workflow ID:** 7781
- **Complexity:** advanced
- **Node Count:** 31
- **Views:** 247
- **Downloads:** 24
- **Created:** 2025/8/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7781)

## 👤 Author

- **Name:** Shelly-Ann Davy
- **Username:** @SheCodesFlow

## 🏷️ Categories

- CRM
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×6)
- **webhook** (×2)
- **manualTrigger** 
- **set** 
- **function** (×7)
- **notion** (×3)
- **emailSend** (×2)
- **if** (×4)
- **telegram** 
- **airtable** 
- **hubspot** 
- **googleCalendar** 
- **errorTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 31 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
