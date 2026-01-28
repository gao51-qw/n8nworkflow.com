# AI-powered customer feedback collection with GPT-4o, Google Sheets & Slack alerts

> ## Description
Automatically send personalized customer feedback requests once a support ticket is marked as closed and centralize responses for service quality tracking. Uses Google Sheets as the ticket source, filters only resolved tickets, and delivers tailored survey invitations via Gmail. Ensures timely, relevant outreach while reducing manual follow-ups. 📧✨

## What This Template Does
- Fetches support ticket data from a Google Sheets database (“Ticket status dummy”). 📊
- Filters for tickets where Status = closed only. 🎯
- Sends a personalized feedback request email via Gmail, including ticket details (ID, subject, customer name). 💌
- Provides a dynamic link to your survey form (Typeform/Google Form). 🔗
- Runs on manual trigger (can be scheduled/automated later). ▶️

## Key Benefits
- Targeted communication — only resolved tickets receive surveys.
- Personalized emails — includes customer name + ticket details.
- Zero manual work — feedback requests are automatically generated.
- Quality insights — structured process for customer satisfaction measurement.
- Improved experience — timely outreach builds trust and engagement. 🌟

## Features
- Smart filtering for closed tickets only. 🛡️
- Dynamic Gmail email templates with emojis + survey link. 💬
- Google Sheets integration for centralized ticket management. 📂
- Fully customizable email subject, body, and survey form. ✍️
- Manual trigger for testing; can be extended with schedules/webhooks. ⏱️

## Requirements
- n8n instance (cloud or self-hosted).
- Google Sheets with ticket data (must include: Status, Ticket No., Description, Email, Owner).
- Gmail account connected via OAuth2 credentials.
- Survey form (Typeform/Google Form) with accessible link.
- Target Audience
- Customer Support Teams seeking structured feedback. 🛎️
- HR & Internal IT Teams using ticket-based systems (Keka, Google Sheets). 👥
- Managers wanting data-driven insights into support quality. 📈
- Businesses committed to continuous service improvement. 🚀


## Step-by-Step Setup Instructions
- Prepare Google Sheet with required columns: Status, Ticket No., Description, Email, Owner.
- In n8n, connect Google Sheets and Gmail credentials.
- Update the Gmail node with your survey link.
- Import workflow JSON and assign credentials to nodes.
- Run Manual Trigger to test → verify email delivery.
- Extend automation with schedules or webhooks for ongoing campaigns.

## 📊 Basic Information

- **Workflow ID:** 8752
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 42
- **Downloads:** 4
- **Created:** 2025/9/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8752)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Ticket Management
- AI Summarization

## 🔗 Nodes Used

- **googleSheets** (×2)
- **if** (×2)
- **code** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatAzureOpenAi** 
- **switch** 
- **gmail** (×2)
- **slack** 
- **stickyNote** (×5)
- **manualTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
