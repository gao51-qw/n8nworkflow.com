# Automate lead intent classification from Google Sheets to ClickUp with Azure GPT-4

> ## Description
Automatically analyze incoming lead replies from Google Sheets using Azure OpenAI GPT-4, classify their intent (Demo Request, Pricing, Objection, etc.), and create actionable follow-up tasks in ClickUp — all without manual intervention. Streamline your sales response workflow and never miss a lead again. 🤖📩📈

## What This Template Does
- Triggers every 15 minutes to check for new lead replies in Google Sheets. ⏰
- Prepares lead data for AI analysis by standardizing input fields. 🧩
- Uses Azure OpenAI GPT-4 to classify lead intent (Demo Request, Pricing Inquiry, Objection, etc.). 🧠
- Routes leads based on intent to the corresponding follow-up handler. 🔀
- Creates new ClickUp tasks with calculated due dates, descriptions, and pipeline stages. 🗂️
- Adds structured checklists to each task for consistent sales follow-ups. ✅
- Loops through multiple tasks while respecting ClickUp API rate limits. 🔁

## Key Benefits
✅ Saves hours of manual lead qualification and task creation.
 ✅ Ensures no lead reply is ignored or delayed.
 ✅ Standardizes intent-based follow-ups for sales teams.
 ✅ Enhances productivity with AI-driven decision logic.
 ✅ Maintains clear visibility across CRM and task systems.

## Features
- 15-minute recurring trigger to monitor new replies.
- AI-powered intent classification using Azure OpenAI GPT-4.
- Multi-category routing logic for personalized next steps.
- Seamless ClickUp integration for automated task generation.
- Smart checklist creation for follow-up management.
- Batch loop processing to avoid rate-limit errors.

## Requirements
- n8n instance (cloud or self-hosted).
- Google Sheets OAuth2 credentials with read access.
- Azure OpenAI GPT-4 API credentials.
- ClickUp API token with workspace permissions.
- Target Audience
- Sales and marketing teams managing inbound leads. 💼
- Agencies automating client qualification workflows. 🏢
- Startups improving lead follow-up efficiency. 🚀
- Teams integrating AI-driven insights into CRM processes. 🌐

## Step-by-Step Setup Instructions
- Connect Google Sheets with your lead replies document. 📊
- Add Azure OpenAI GPT-4 API credentials for intent analysis. 🧠
- Configure ClickUp workspace details — team, space, folder, and list IDs. ⚙️
- Set your preferred trigger interval (default: every 15 minutes). ⏰
- Run a test with sample data to confirm intent mapping and task creation. ✅
- Activate the workflow to automatically classify leads and create ClickUp tasks. 🚀


## 📊 Basic Information

- **Workflow ID:** 9346
- **Complexity:** advanced
- **Node Count:** 32
- **Views:** 118
- **Downloads:** 11
- **Created:** 2025/10/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9346)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×15)
- **scheduleTrigger** 
- **googleSheets** 
- **set** (×6)
- **switch** 
- **clickUp** 
- **httpRequest** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatAzureOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 32 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
