# Generate daily Jira summaries & weekly reports with Azure OpenAI and Gmail

> ## Description 
Automates daily EOD summaries from Jira issues into an Excel sheet, then compiles a weekly summary using Azure OpenAI (GPT-4o-mini) and delivers it to stakeholders via email. Gain consistent reporting, clear insights, and hands-free delivery. ✨📧

## What This Template Does 
- Fetches Jira issues and extracts key fields. 🧩
- Generates End‑of‑Day summaries and stores them in Excel daily. 📄
- Aggregates the week’s EOD data from Excel. 📚
- Creates a weekly summary using Azure OpenAI (GPT-4o-mini). 🤖
- Delivers the weekly report to stakeholders via email. 📬

## Key Benefits 
- Saves time with fully automated daily and weekly reporting. ⏱️
- Ensures consistent, structured summaries every time. 📏
- Improves clarity for stakeholders with readable insights. 🪄
- Produces mobile-friendly email summaries for quick consumption. 📱
- No-code customization inside n8n. 🛠

## Features 
- Jira issue ingestion and transformation.
- Daily EOD summary generation and Excel storage.
- Weekly AI summarization with Azure OpenAI (GPT-4o-mini).
- Styled HTML email output to stakeholders.
- Scheduling for hands-free execution.

## Requirements 
- An n8n instance (cloud or self-hosted).
- Jira access to read issues.
- Azure OpenAI (GPT-4o-mini) for weekly AI summarization.
- Email service (Gmail/SMTP) configured in n8n credentials.
- Excel/Sheet storage set up to append and read daily EOD entries.

## Target Audience 
- Engineering and product teams needing routine summaries.
- Project managers tracking daily progress.
- Operations teams consolidating weekly reporting.
- Stakeholders who prefer clean email digests.

## Step-by-Step Setup Instructions 
- Jira: Connect your Jira credentials and confirm issue read access.
- Azure OpenAI: Deploy GPT-4o-mini and add Azure OpenAI credentials in n8n.
- Gmail/SMTP: Connect your email account in n8n Credentials and authorize sending.
- Excel/Sheet: Configure the sheet used to store daily EOD summaries.
- Import the workflow, assign credentials to nodes, replace placeholders, then run and schedule.

## Security Best Practices 
- Use scoped API tokens for Jira with read-only permissions. 🔐
- Store Azure OpenAI and email credentials in n8n’s encrypted credentials manager. 🧯
- Limit email recipients to approved stakeholder lists. 🚦
- Review logs regularly and rotate credentials on a schedule. ♻
 

## 📊 Basic Information

- **Workflow ID:** 9683
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 304
- **Downloads:** 30
- **Created:** 2025/10/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9683)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Project Management
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatAzureOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **stickyNote** (×11)
- **jira** 
- **code** (×3)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **googleSheets** (×2)
- **scheduleTrigger** (×2)
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
