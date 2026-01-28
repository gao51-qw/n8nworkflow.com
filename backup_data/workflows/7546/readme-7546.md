# Parse and create LEDGERS contacts from unstructured data with GPT-4o

> # 🤖 AI Contact Creator for LEDGERS (Works with Any Trigger)

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

## 📊 Basic Information

- **Workflow ID:** 7546
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 188
- **Downloads:** 18
- **Created:** 2025/8/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7546)

## 👤 Author

- **Name:** LEDGERS
- **Username:** @ledgers

## 🏷️ Categories

- AI Summarization
- Multimodal AI

## 🔗 Nodes Used

- **googleSheetsTrigger** 
- **@ledgers/n8n-nodes-ledgers-cloud.ledgers** 
- **stickyNote** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **gmail** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **splitInBatches** (×2)
- **noOp** (×2)
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
