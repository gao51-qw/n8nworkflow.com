# Inventory reconciliation between Notion & Airtable with GPT-4o Slack alerts

> ## 📘 Description
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

## 📊 Basic Information

- **Workflow ID:** 11479
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 56
- **Downloads:** 5
- **Created:** 2025/12/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11479)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatAzureOpenAi** (×2)
- **googleSheets** 
- **airtable** (×2)
- **notion** 
- **merge** 
- **code** (×2)
- **if** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **slack** (×2)
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
