# Automate customer support with GPT-4o, Slack, and CRM integration

> 🧾 Short Description

An AI-powered customer support workflow that automatically triages, summarizes, classifies, and routes tickets to the right Slack and CRM queues. It sends personalized auto-replies, logs results to Google Sheets, and uses a DLQ for failed cases.

⚙️ How It Works

Trigger: Captures messages from email or form submissions.

AI Triage: Summarizes and classifies issues, scores urgency, and suggests next steps.

Routing: Directs to Slack or CRM queue based on type and priority.

Logging: Records summaries, urgency, and responses in Google Sheets.

Auto-Reply: Sends an acknowledgment email with ticket ID and SLA timeframe.

Error Handling: Failed triage or delivery attempts are logged in a DLQ.

🧩 How to Use

1. Configure triggers (email or webhook) and connect credentials for OpenAI, Slack, Gmail, and Google Sheets.

2. In Workflow Configuration, set:

    * Slack Channel IDs

    * CRM Type (HubSpot, Salesforce, or custom)

    * Google Sheet URL

    * SLA thresholds (e.g., 2h, 6h, 24h)

3. Test with a sample ticket and verify routing and summaries in Slack and Sheets.

🔑 Requirements

OpenAI API key (GPT-4o-mini or newer)

Slack OAuth credentials

Google Sheets API access

Gmail/SMTP credentials

CRM API (HubSpot, Salesforce, or custom endpoint)

💡 Customization Ideas

Add sentiment detection for customer tone.

Localize responses for multilingual support.

Extend DLQ logging to Notion or Airtable.

Add escalation alerts for SLA breaches.





## 📊 Basic Information

- **Workflow ID:** 10184
- **Complexity:** advanced
- **Node Count:** 32
- **Views:** 80
- **Downloads:** 8
- **Created:** 2025/10/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10184)

## 👤 Author

- **Name:** NodeAlchemy
- **Username:** @robertsantini

## 🏷️ Categories

- Ticket Management
- AI Summarization

## 🔗 Nodes Used

- **webhook** 
- **set** (×3)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **switch** 
- **slack** (×4)
- **httpRequest** (×8)
- **googleSheets** (×4)
- **if** 
- **code** 
- **gmail** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 32 nodes with 25 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
