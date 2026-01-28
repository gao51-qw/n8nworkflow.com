# 🤖 AI Contact Creator for LEDGERS (Works with Any Trigger)

**### Before using this template:**
==**#### 👉 Search for LEDGERS in the nodes list and install it from Community Nodes (required for this workflow to run).**==

##### 🔧 What This Workflow Does:

This smart n8n template automatically creates contacts in LEDGERS using AI, triggered by any node (like Google Sheets, Webhook, Airtable, Forms, etc.).

It’s designed for teams who maintain contact data across platforms and want to auto-parse raw data using AI and sync it to LEDGERS—without manual entry.

#### ⚙️ Flow Overview:

Trigger Node – Can be anything: Google Sheets, Webhook, API call, etc.

Chat Model (Claude / GPT-4o) – Uses AI to generate structured contact data from raw inputs.

Structured Output Parser – Parses AI response into clean JSON.

Form Loop & Iteration – Loops through fields in the structured output.

Create a Contact – Sends the data to LEDGERS via API.

LEDGERS Loop & Iteration – Supports bulk contact creation if needed.

Success/Failure Path – Sends email notifications via Gmail node depending on the outcome.

#### 💡 Use Case:

Automate contact creation from form submissions, CRM exports, sheet updates, webhook data, etc.

Clean and structure messy data with AI before syncing to LEDGERS.

Save manual hours and reduce errors in contact data entry.