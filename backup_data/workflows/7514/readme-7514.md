# Automated lead-to-client pipeline with Google Sheets email notifications & time tracking

> ## Google Sheets CRM Automations: Lead Stages → Emails, Client Tracking & Delivery Duration

*Turn a simple Google Sheet into a lightweight CRM powered by n8n.*

---

## Overview
This template monitors edits in your **Leads** and **Clients** tabs and reacts automatically:
- **Qualified?** → sends a Cal.com booking email  
- **Stage → Awaiting Proposal** → sends a “proposal coming soon” email  
- **Stage → Won** → appends the client to **Clients** with a **Start Date & Time**  
- **Clients: Project Status → Delivered** → stamps **End Date & Time** and computes **Time to Deliver** (e.g., `2d 5h 30m`)

---

## What This Template Does
- **Lead Qualification → Email**: When you mark **Qualified?** in **Leads**, a booking email is sent automatically.  
- **Awaiting Proposal → Email**: Sends a heads-up email that a proposal is coming soon.  
- **Won → Client Append**: Adds the client to **Clients** and records the start timestamp.  
- **Delivered → Completion Metrics**: Looks up the client, stamps the end timestamp, and calculates the delivery duration.

---

## How It Works
1. **Google Apps Script → Webhooks (onEdit)**
   - A small Apps Script (provided in the workflow’s Sticky Note) watches the sheet and posts JSON to these n8n webhooks:
     - `/webhook/lead-stage-changed`
     - `/webhook/lead-qualified`
     - `/webhook/client-status-changed`

2. **n8n Flow & Branching**
   - **lead-stage-changed**
     - If **Awaiting Proposal** → send proposal heads-up email
     - If **Won** → format timestamp → append to **Clients**
   - **lead-qualified**
     - If `qualified = true` → send **Cal.com** booking email
   - **client-status-changed**
     - If **Delivered** → lookup client row → stamp **End Date & Time** → compute **Time to Deliver** → update row

---

## Prerequisites
- Google Sheet with two tabs: **Leads** and **Clients**
- Gmail account (or use your preferred email/notification node)
- n8n instance with:
  - **Google Sheets OAuth2** credentials
  - **Gmail OAuth2** credentials (if using the Gmail node)

**Suggested columns**
- **Leads**: `Name (A)`, `Client Email (C)`, `Lead Source (D)`, `Stage (E)`, `Qualified? (H)`
- **Clients**: `Name (A)`, `Client Email (C)`, `Project Status (D)`, `Start Date & Time (F)`, `End Date & Time (G)`, `Time to Deliver (H)`

---

## Setup Steps
1. **Copy/prepare the Google Sheet**
   - Ensure both **Leads** and **Clients** tabs exist with the columns above.

2. **Install the Apps Script**
   - In Google Sheets: **Extensions → Apps Script** → paste the script from the workflow’s Sticky Note.
   - Replace webhook URLs with your n8n endpoints:
     - `https://{{YOUR_N8N_DOMAIN}}/webhook/lead-stage-changed`
     - `https://{{YOUR_N8N_DOMAIN}}/webhook/lead-qualified`
     - `https://{{YOUR_N8N_DOMAIN}}/webhook/client-status-changed`
   - Run `createInstallableTrigger()` once to enable `onEdit`.

3. **Open the workflow in n8n & replace placeholders**
   - `{{GOOGLE_SHEETS_DOC_ID}}`
   - `{{LEADS_GID}}`
   - `{{CLIENTS_GID}}`
   - `{{CAL_COM_BOOKING_URL}}`
   - `{{SENDER_NAME}}`
   - `{{GMAIL_CREDENTIAL_ID}}`, `{{GMAIL_CREDENTIAL_NAME}}`
   - `{{GSHEETS_CREDENTIAL_ID}}`, `{{GSHEETS_CREDENTIAL_NAME}}`

4. **Connect credentials**
   - Authorize **Google Sheets OAuth2** and **Gmail OAuth2** (or switch to SMTP/another email node).

5. **Activate & test**
   - Toggle **Qualified?** on a test row or change **Stage** to **Awaiting Proposal/Won**.
   - Verify the email, client append, and duration updates flow end-to-end.

---

## Customization Ideas
- Swap **Gmail** with **SMTP**, **Outlook**, or **Slack** messages.
- Add a **Stage = Lost** branch to trigger a re-engagement sequence.
- Add guards to prevent duplicate appends to **Clients**.
- Localize email copy and date formats.

---

## Troubleshooting
- **Nothing triggers**: Confirm Apps Script URLs and that `createInstallableTrigger()` was run.  
- **Wrong tab/GID**: Open each tab and copy its `gid` from the URL; update placeholders.  
- **Credential errors**: Re-authorize Google Sheets/Gmail OAuth2 in n8n.  
- **Wrong first name**: Ensure `Name` in **Leads** follows `First Last`; the workflow splits the first token.

---
## Video Walkthrough Demo

[Screen Studio Template Demo Video](https://screen.studio/share/f3sNqd9N?private-access=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaGFyZWFibGVMaW5rSWQiOiJjMTMyZjY0Ny1hODg3LTQzNzctYWUwMi1kMzgyM2E5ZmI2OTkiLCJpYXQiOjE3NTU0MzEyNzB9.6PquB48GkV8T6Ytsg9kVEK1eDaBge9yqxS4jKyTbVXg)

## 📊 Basic Information

- **Workflow ID:** 7514
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 634
- **Downloads:** 63
- **Created:** 2025/8/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7514)

## 👤 Author

- **Name:** Ziad Adel
- **Username:** @ziadadel

## 🏷️ Categories

- CRM
- Multimodal AI

## 🔗 Nodes Used

- **webhook** (×4)
- **set** 
- **gmail** (×2)
- **if** (×4)
- **dateTime** (×2)
- **googleSheets** (×4)
- **code** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
