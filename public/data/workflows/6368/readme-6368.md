# Validate n8n JSON workflows with GPT-4 & LangChain: Google Drive to Sheets

> **Description:**

This advanced n8n automation template checks the validity and production-readiness of multiple JSON workflow files using AI-powered analysis. 

It scans a designated Google Drive folder for uploaded JSON files, downloads them one by one, parses their structure, and sends each JSON to GPT-4 via LangChain Agent for intelligent validation. Results are automatically logged into a Google Sheet with structured feedback.

Ideal for QA analysts, workflow engineers, or product teams maintaining large libraries of automation blueprints—this template removes manual review from your JSON pipeline.

**What This Template Does (Step-by-Step)**

🟢 Manual Trigger: Starts the flow when user clicks "Execute Workflow".

📁 Google Drive File Search: Connects to a specified folder (e.g., Edtech) and fetches a list of all JSON files.

🔁 Batch Processor (SplitInBatches): Loops through each file one-by-one to prevent overload or parallel conflicts.

📥 File Downloader: Downloads each file using its unique File ID from Google Drive.

📤 JSON Extractor: Converts each downloaded file from binary to structured JSON.

🤖 LangChain AI Agent + Azure GPT-4

🟢 Sends each JSON structure to a GPT-4-powered 🟢 LangChain Agent.
🟢 AI validates and analyzes:
- JSON structure integrity
- Presence of required nodes/connections
- Proper use of credentials
- Industry-readiness
🟢 Observations on modularity, error handling, or fragility

📊 Google Sheets Logger: Writes AI-generated insights back into a Google Sheet (e.g., tab: final) for team visibility and tracking.

**Required Integrations**

- Google Drive API (OAuth2)
- Google Sheets API (OAuth2)
- Azure OpenAI or OpenAI GPT-4 API Key
- LangChain AI Agent & Memory Modules

**Perfect For**

🧪 QA teams validating hundreds of n8n workflows
⚙️ Workflow engineers ensuring automation design standards
📊 Ops teams tracking AI-generated feedback at scale
💼 SaaS platforms that auto-upload workflows for approval
🧠 Internal AI audit tools for low-code/no-code ecosystems

**Why Use This Template?**

✅ Fully automated JSON parsing and review
✅ AI-powered structural audit with actionable feedback
✅ Zero manual checking—great for scale
✅ Write-back to Google Sheets for traceability
✅ Modular, loop-safe, and scalable for enterprise ops


## 📊 Basic Information

- **Workflow ID:** 6368
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 111
- **Downloads:** 11
- **Created:** 2025/7/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6368)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Engineering
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **googleDrive** (×2)
- **googleSheets** 
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatAzureOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **extractFromFile** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
