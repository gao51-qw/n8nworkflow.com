# Automated business KPI insights with GPT-4, MSSQL, analytics & multi-channel alerts

> ## WORKFLOW OVERVIEW

This workflow is an AI-powered business intelligence agent designed for founders and business owners.
It automatically collects key business metrics, calculates performance KPIs, applies decision logic, uses AI reasoning, and sends clear, actionable notifications — without dashboards or manual reports.

## Key Features:

✅ Aggregates multiple data sources (MSSQL, Google Analytics, Google Sheets)
✅ Calculates critical KPIs: ROAS, CAC, Revenue & User Growth
✅ Applies rule-based decision logic for business risk and opportunity detection
✅ AI-powered reasoning: summarizes insights and recommends actions
✅ Multi-channel notifications: Email, WhatsApp, Slack, Telegram
✅ Fully automated daily execution via Cron trigger
✅ Enterprise-ready: error handling, structured data, KPI validation

## Setup & Requirements:


- API access to data sources (MSSQL, Google Analytics, Google Sheets)
- OpenAI or Google Gemini API for AI reasoning
- Messaging integration: Gmail, Twilio (WhatsApp), Slack, Telegram
- 
## Workflow Flow:

- Cron Trigger – runs daily at a chosen time
- Data Collection – revenue, users, marketing spend, website analytics
- Merge Node – combines all data sources
- Function Node – consolidates into a single JSON object
- KPI Calculation – calculates ROAS, CAC, growth rates
- Business Logic Engine – identifies risks and opportunities
- AI Reasoning Agent – summarizes insights, suggests actions
- Notification Formatter – builds founder-friendly message
- Notification Delivery – sends via WhatsApp, Email, Slack, or Telegram

## Example Data Formation

These data below Getting from all different channels.

`{
  "revenue": 4290,
  "registeredUsers": 20,
  "totalUsers": 3,
  "adSpend": 800
}`

Applies rule-based logic to detect potential risks or opportunities

`{
  "ROAS": 5.36,
  "CAC": 40,
  "agentStatus": "normal",
  "agentPriority": "low",
  "insights": ["Marketing campaigns are performing very well"]
}`

## Workflow Highlights

Fully automated, runs daily without human intervention
Integrates multiple business data sources
Converts raw data into KPIs for actionable insight
Applies both rule-based logic and AI reasoning
Generates concise, human-friendly notifications
Sending notification to different channels.


## 📊 Basic Information

- **Workflow ID:** 12008
- **Complexity:** advanced
- **Node Count:** 31
- **Views:** 223
- **Downloads:** 22
- **Created:** 2025/12/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12008)

## 👤 Author

- **Name:** Mohamed Abubakkar
- **Username:** @mohamed-abubakkar

## 🏷️ Categories

- Market Research
- AI Chatbot

## 🔗 Nodes Used

- **scheduleTrigger** 
- **microsoftSql** (×2)
- **googleAnalytics** 
- **if** (×4)
- **googleSheets** 
- **summarize** (×3)
- **set** 
- **emailSend** (×2)
- **merge** (×2)
- **code** (×3)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.toolCalculator** 
- **whatsApp** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 31 nodes with 21 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
