# AI guest post generator with OpenAI & Google Sheets automation

> ✨ About this Template

This n8n template automates the process of writing SEO guest post content using OpenAI, based on rules and topics provided in a Google Sheet. The generated articles are saved into a separate sheet for outreach or publishing.

Use cases include:

SEO guest post generation

Content marketing automation for agencies

Outreach planning and editorial automation

💡 Good to Know

OpenAI API usage costs apply based on the selected model (e.g., GPT-4).

This automation uses Google Sheets and OpenAI; credentials are required to connect your accounts.

Status filtering ensures only content marked as “Start” is processed — making it safe to use in multi-user workflows.

⚙️ How It Works

Trigger the workflow manually (can be changed to schedule/cron or webhook).

Reads from a Google Sheet with guest post planning data.

Merges the writing prompt, brand guidelines, and posting rules.

Sends the merged data to OpenAI (via the AI Agent node) to generate a guest post in German.

Saves the result into another Google Sheet.

Updates the original row's status from “Start” to “Finished” to prevent duplicates.

▶️ How to Use

You must connect your Google Sheets and OpenAI accounts.

Customize the AI prompt, tone, or language by editing the input structure.

You can modify the filter to run only on certain months or categories.

The Gmail node is optional and only used to notify when no action was taken.

🧰 Requirements

OpenAI account (API key for GPT-4 or GPT-3.5)

Google account with access to the configured Sheets

Basic knowledge of how n8n expressions work (optional)

🛠️ Customising This Workflow

This guest post writer workflow can easily be adapted to other use cases:

Write social media content from a spreadsheet

Generate product descriptions from catalog data

Automatically translate or rewrite articles in different tones/languages

Create personalized outreach emails using AI

🎁 The workflow includes built-in explanations (sticky notes) to guide you through each part of the process.

## 📊 Basic Information

- **Workflow ID:** 7666
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 528
- **Downloads:** 52
- **Created:** 2025/8/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7666)

## 👤 Author

- **Name:** Juan de Dios Estrella Sáez
- **Username:** @juanestrella

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **manualTrigger** 
- **googleSheets** (×6)
- **if** 
- **merge** 
- **@n8n/n8n-nodes-langchain.agent** 
- **gmail** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
