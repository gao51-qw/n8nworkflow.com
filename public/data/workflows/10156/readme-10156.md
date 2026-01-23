# Automate lead intelligence & outreach with GPT-4o, LinkedIn, HubSpot & Outlook

> # AI Lead Intelligence & Outreach: Verified Emails, HubSpot Sync & Outlook Drafts
![leadoutreach](https://i.ibb.co/KpWWKSWq/Chat-GPT-Image-Oct-25-2025-02-57-54-PM.png)



## Who is this for?

This workflow is designed for **sales/RevOps teams, B2B founders, SDR/AE teams, and agencies** who live in HubSpot and need consistent, compliant first-touch outreach at scale. If you regularly build reusable, multi-client n8n automations, this template will save you hours of manual work.

---

## What problem is this workflow solving? / Use case

Manual lead handling is **slow and inconsistent**:

- Leads arrive messy across forms, lists, and imports; ownership and priority are unclear.
- Finding the right decision-maker and a deliverable email takes too long.
- Outreach copy drifts from brand guidelines, and CRM updates get missed.

This workflow solves the problem by **creating a reliable pipeline** from capture → enrichment → verification → CRM sync → Outlook draft, cutting handoffs and preserving auditability.

---

## What this workflow does

1. **Capture and batching** - Triggers on new/updated leads in HubSpot or pulls "ready" rows from Google Sheets; processes items sequentially to stay rate-safe.

2. **Normalize and score (ICP)** - Cleans names, company, and domains; applies configurable ICP rules and writes score plus reasoning back to HubSpot/Sheets.

3. **Enrich contacts** - Confirms official company details and identifies likely decision-makers via focused people searches; dedupes and role-normalizes.

4. **Verify emails** - Finds work emails, checks deliverability, and logs confidence and timestamps to a tracking sheet immediately after each result.

5. **Compose outreach** - Calls the approved template in `Email content`; personalizes only the first name; validates structure via `Structured Output Parser`.

6. **Draft in Outlook** - Uses Microsoft Graph to create an HTML draft; embeds an inline signature image fetched from Google Drive.

7. **CRM sync and tasks** - Creates/updates HubSpot contacts and associations, stores the composed email in properties, and opens a next-day follow-up task for the owner.

8. **Safety and observability** - Deterministic prompts, strict parsing, idempotent writes, and clear flags prevent duplicates; optional Slack/Teams alerts for failures.

---

## Setup

1. **Connect your accounts**:
   - HubSpot (app token)
   - Microsoft Graph (OAuth2)
   - Google Sheets
   - Google Drive
   - Your LLM provider (for `Level 2 Orchestrator` and `Email content`)

2. **Set your credentials** in the respective nodes.

3. **Adjust the Google Sheet IDs** to match your own sheet structure.

4. **Map HubSpot properties** (owner, contact/company IDs, custom fields for score, reasoning, and email content).

5. **Paste your approved HTML** in `Email content` and upload your signature image to Drive.

6. **Configure schedule**, batch size, and any Slack/Teams webhooks for notifications.

---

## How to customize this workflow to your needs

- **ICP logic**: Edit scoring weights and required qualifiers (industry, region, size, tech stack).
- **Personas**: Change role detection and caps (e.g., Ops, Finance, Procurement).
- **Copy control**: Swap the template in `Email content` or add A/B variants while keeping structure validation.
- **Triggers**: Use webhook capture from forms, list-based pulls, or time-based recrawls.
- **Delivery**: Switch the mail node to Gmail API if preferred; keep the same compose/verify/track sequence.
- **Governance**: Add holdouts, opt-out checks, and rate limits per domain or owner; expand logs for export to a data warehouse.

---

✨ With this workflow, you go from **messy inbound leads → verified contacts → synchronized HubSpot records → ready-to-send Outlook drafts** in just minutes, with almost no manual work.



---

## Need help customizing?

Contact me for consulting and support:  
[click here](https://kumarshivam.link/)

## 📊 Basic Information

- **Workflow ID:** 10156
- **Complexity:** advanced
- **Node Count:** 114
- **Views:** 206
- **Downloads:** 20
- **Created:** 2025/10/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10156)

## 👤 Author

- **Name:** Kumar Shivam
- **Username:** @shivam840708

## 🏷️ Categories

- Lead Generation
- AI Chatbot

## 🔗 Nodes Used

- **googleDriveTrigger** 
- **hubspot** (×7)
- **splitInBatches** (×3)
- **filter** (×2)
- **scheduleTrigger** (×3)
- **set** (×3)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** (×9)
- **@n8n/n8n-nodes-langchain.toolCalculator** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×6)
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** (×15)
- **hubspotTool** (×2)
- **perplexityTool** (×3)
- **stickyNote** (×21)
- **wait** 
- **@n8n/n8n-nodes-langchain.agent** (×5)
- **@n8n/n8n-nodes-langchain.agentTool** (×4)
- **limit** (×2)
- **googleSheetsTool** (×6)
- **if** 
- **@apify/n8n-nodes-apify.apify** (×2)
- **executeWorkflowTrigger** 
- **googleSheets** (×7)
- **@n8n/n8n-nodes-langchain.toolWorkflow** (×2)
- **hunterTool** (×2)
- **httpRequest** (×3)
- **extractFromFile** 
- **googleDrive** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 114 nodes with 90 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
