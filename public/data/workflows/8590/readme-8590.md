# Automate lead qualification & follow-up with Gemini, HubSpot, Zoom & Mailchimp

> # Lead Qualification & Follow‑up (Gemini)
Automate lead intake, AI qualification, and next‑step outreach. Qualified leads get a scheduled meeting, Zoom details, an email confirmation, CRM update, and Mailchimp enrollment. Not‑qualified leads receive a follow‑up sequence, CRM update, and a 30‑day reminder.

## What this workflow does
AI qualifies leads as QUALIFIED or NOT QUALIFIED using Google Gemini.
Supports two triggers: Webhook (wordpress-form) or n8n Form Trigger.
### QUALIFIED branch:
- AI phone call via VAPI
- Schedules Google Calendar event
- Creates Zoom meeting
- Sends confirmation email via Gmail
- Adds to Mailchimp audience
- Updates contact in HubSpot
- NOT QUALIFIED branch:
- AI phone call via VAPI
- Adds to Mailchimp audience
- Sends follow‑up email via Gmail
- Updates contact in HubSpot
- Creates 30‑day follow‑up calendar event
- Apps and credentials required
- Google Gemini (PaLM/Gemini API)
- Gmail
- HubSpot
- Zoom
- Google Calendar
- VAPI (for AI phone calls)
- Mailchimp

### Environment variables
MAILCHIMP_LIST_ID_QUALIFIED=your_mailchimp_list_id_for_qualified
MAILCHIMP_LIST_ID_FOLLOWUP=your_mailchimp_list_id_for_followup
Triggers supported
Webhook: path wordpress-form (POST)
Form Trigger: built‑in n8n form
Use only one in production. Keep the other disabled.

Expected input (fields)
name: string
email: string
message: string
If using Webhook, send a JSON body with the fields above.

Setup
Connect credentials:
Google Gemini (model: models/gemini-2.5-flash)
Gmail
HubSpot (OAuth)
Zoom
Google Calendar (select the target calendar)
VAPI (HTTP header auth: Bearer token)
Set env vars:
MAILCHIMP_LIST_ID_QUALIFIED
MAILCHIMP_LIST_ID_FOLLOWUP
Choose your trigger:
Webhook: enable and use the provided URL for wordpress-form
Form Trigger: enable and publish the form
Review timing: adjust Wait nodes for your timezone and SLA.
Personalize messaging: edit Gmail subjects/bodies and Zoom topic.
CRM and lists: confirm HubSpot properties and Mailchimp list IDs.
How it works (at a glance)
Intake → AI classifies (QUALIFIED / NOT QUALIFIED)

QUALIFIED: VAPI call → Schedule Calendar → Create Zoom → Add to Mailchimp (qualified) → Gmail confirmation → HubSpot update
NOT QUALIFIED: VAPI call → Add to Mailchimp (follow‑up) → Gmail follow‑up → HubSpot update → 30‑day calendar event
Test the workflow (before going live)
Submit a test via your chosen trigger with name, email, message.
Confirm AI decision at the “Lead Decision” node.
If QUALIFIED:
VAPI call executed
Calendar event created
Zoom meeting created (join URL available)
Mailchimp enrollment (qualified list)
Gmail confirmation sent
HubSpot contact created/updated
If NOT QUALIFIED:
VAPI call executed
Mailchimp enrollment (follow‑up list)
Gmail follow‑up sent
HubSpot updated
30‑day calendar reminder created
Open any failing HTTP nodes and review response codes/messages.
Go‑live checklist
All credentials connected (no warnings)
MAILCHIMP_LIST_ID_QUALIFIED and MAILCHIMP_LIST_ID_FOLLOWUP set
Timezone and delays validated
Email copy approved
Only one trigger enabled
Final end‑to‑end test passed
Toggle workflow Active
Customization ideas
Add a Slack or Microsoft Teams notification on QUALIFIED
Enrich leads (Clearbit, ZoomInfo, etc.) before AI decision
Swap Mailchimp for your ESP (Klaviyo, SendGrid Marketing)
Add a second‑chance branch for ambiguous AI classifications
Localize email copy by country or language
Troubleshooting
Webhook receives no data: ensure external form POSTs JSON to the n8n URL and network rules allow it.

AI decision empty/garbled: verify Gemini credentials/model ID and input fields.
Mailchimp errors: verify List IDs and that email is valid.
Gmail send fails: check OAuth scopes and daily limits.
Zoom/Calendar issues: re‑connect OAuth; verify calendar access.

HubSpot errors: confirm OAuth scopes and property mappings.
Security and scopes
Gmail: send email
Google Calendar: create events
Zoom: create meetings
HubSpot: read/write contacts
Mailchimp: list membership
VAPI: authenticated HTTP requests
Gemini: model inference
Use least‑privilege for each integration.

Limits and notes
Gmail and Mailchimp rate limits may apply during spikes.
Zoom and Google Calendar API quotas apply for frequent scheduling.
VAPI call timeouts are 30s by default; adjust as needed.

Changelog
2025‑09‑15: Initial public template with dual triggers, Gemini qualification, VAPI calls, scheduling, Mailchimp, Gmail, and HubSpot updates.

## 📊 Basic Information

- **Workflow ID:** 8590
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 447
- **Downloads:** 44
- **Created:** 2025/9/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8590)

## 👤 Author

- **Name:** Ajay Yadav
- **Username:** @erplinker

## 🏷️ Categories

- Lead Nurturing
- AI Chatbot

## 🔗 Nodes Used

- **webhook** 
- **wait** (×3)
- **@n8n/n8n-nodes-langchain.googleGemini** 
- **if** 
- **httpRequest** (×4)
- **googleCalendar** (×2)
- **zoom** 
- **mailchimp** (×2)
- **gmail** (×2)
- **hubspot** (×2)
- **formTrigger** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
