# Automated email management with Gemini AI: Gmail summarizing, labeling and Notion/Sheets logging

> ### AI Email Manager: Auto Summary, Labeling, and CRM Logging via n8n + Gemini

### Overview

This workflow turns your Gmail inbox into a fully autonomous AI Email Agent that reads, summarizes, categorizes, and organizes emails in real-time.
Built with n8n, Google Gemini, Notion, and Google Sheets, it’s perfect for founders, freelancers, and agencies who receive a ton of emails daily and want to automate the triage process without losing control.

##### How It Works

1. Gmail Trigger — Detects new incoming emails.

2. Process Email Data — Extracts sender info, subject, and content in a clean structured format.

3. AI Email Analyzer — Uses Gemini AI to summarize the email and decide the most relevant label (e.g., Project Updates, Client Requests, Invoices, etc.).

4. Create Gmail Label (if not exists) — Dynamically creates a new label if the AI recommends one that doesn’t exist.

5. AI Agent + Add Label to Email — Applies the correct Gmail label automatically using the message ID.

6. Logs in Notion & Google Sheets — Every processed email (summary, sender, date, label) is logged for tracking and analytics.


Who It’s For

- Entrepreneurs & Founders — Manage investor, client, and product update emails automatically.
- Agencies & Teams — Classify and track client emails effortlessly across projects.
- Freelancers & Consultants — Get AI summaries and organize leads without manually labeling emails.
- Tech Builders — Anyone building AI automation tools and SaaS products around inbox management.


## 📊 Basic Information

- **Workflow ID:** 9679
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 579
- **Downloads:** 57
- **Created:** 2025/10/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9679)

## 👤 Author

- **Name:** Apurva Mishra
- **Username:** @apurvamishra13

## 🏷️ Categories

- Ticket Management
- AI Summarization

## 🔗 Nodes Used

- **code** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **gmail** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **gmailTool** 
- **notion** 
- **googleSheets** 
- **gmailTrigger** 
- **stickyNote** (×7)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
