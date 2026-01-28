## 📘 Description
 This workflow performs automated inventory reconciliation between Notion (physical counts) and Airtable (system counts), ensuring both databases stay synchronized.
 It fetches records from both systems, merges them into a unified comparison payload, validates the structure, and calculates discrepancies.
 If a mismatch is detected, the workflow automatically updates Airtable with the corrected count and notifies the operations team on Slack.
 If everything matches, a simple “No action needed” Slack message is sent.
 Any malformed or incomplete payloads are logged into Google Sheets for audit tracking.

## ⚙️ What This Workflow Does (Step-by-Step)

🟢 Manual Trigger – Execute Workflow
 Starts the reconciliation process on demand.

📥 Fetch Records from Notion
 Retrieves physical stock data (cycle count) stored in Notion.

📦 Fetch Records from Airtable
 Loads inventory data from Airtable’s system-of-record table.

🔀 Merge Notion + Airtable Inputs
 Combines both datasets into a single payload for unified processing.

🔍 Validate Payload Structure (IF Node)
 Ensures that key fields (like id) exist.
 Valid → continue
 Invalid → logged to Google Sheets.

🧾 Log Invalid Versioning Requests to Google Sheets
 Stores broken or incomplete payload entries for later review.

🧮 Build Combined Notion + Airtable Payload (Code Node)
 Constructs the structured comparison object:
{ notion: {...}, airtable: [...] }

📊 Compare Notion Record With Airtable Record (Code Node)
 Performs core reconciliation logic:
Matches items by name
Compares physical vs. system count
Calculates difference
Determines if a correction is needed
If mismatch → flagged for update.

🔎 Check If Record Requires Update (IF Node)
 Branches logic into:
Mismatch → Update Airtable + Alert
Match → No action summary

🛠️ Update Airtable Record With Corrected Count
 Writes the accurate physical count from Notion into Airtable.

🧠 Configure GPT-4o – Slack Summary Models
 Two models:
For “no action needed” summaries
For “Airtable updated” discrepancy alerts

🤖 Generate Slack Summary / Generate Slack Summary1
 AI produces short, precise, operations-friendly Slack messages based on whether a discrepancy existed.

💬 Slack – Send Summary Notification / Send Update Notification
 Sends final Slack message to the operations user, confirming:
Stock match status
Updates made
Item details
Difference values

## 🧩 Prerequisites
- Notion API integration
- Airtable API credentials
- Azure OpenAI GPT-4o
- Slack API connection
- Google Sheets OAuth

## 💡 Key Benefits
 ✔ Eliminates manual reconciliation errors
 ✔ Keeps Airtable continuously aligned with real physical counts
 ✔ Provides instant Slack visibility to operations teams
 ✔ Logs all invalid or malformed cases
 ✔ Centralizes Notion + Airtable consistency checks

## 👥 Perfect For
-  Operations teams managing multi-system inventory
-  Warehouse cycle count workflows
-  Audit-driven companies needing accurate stock data
-  Businesses using Notion + Airtable as parallel systems