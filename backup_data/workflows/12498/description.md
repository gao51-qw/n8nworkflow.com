![image 7.png](fileId:3893)
## 📘 Description
 This workflow analyzes real-time stock market sentiment and intent from public social media discussions and converts those signals into operations-ready actions. It exposes a webhook endpoint where a stock-market–related query can be submitted (for example, a stock, sector, index, or market event). The workflow then scans Twitter/X and Instagram for recent public discussions that indicate buying interest, selling pressure, fear, uncertainty, or emerging opportunities.
An AI agent classifies each signal by intent type, sentiment, urgency, and strength. These insights are transformed into a prioritized Asana task for market or research teams and a concise Slack alert for leadership visibility. Built-in validation and error handling ensure reliable execution and fast debugging. This automation removes the need for manual social monitoring while keeping teams informed of emerging market risks and opportunities.
## ⚠️ Deployment Disclaimer
 This template is designed for self-hosted n8n installations only.
 It relies on external MCP tools and custom AI orchestration that are not supported on n8n Cloud.
## ⚙️ What This Workflow Does (Step-by-Step)
- 🌐 Receive Stock Market Query (Webhook Trigger)
 Accepts an external POST request containing a stock market query.
- 🧾 Extract Stock Market Query from Payload
 Normalizes and prepares the query for analysis.
- 🔎 Analyze Social Media for Stock Market Intent (AI)
 Scans public Twitter/X and Instagram posts to detect actionable market intent signals.
- 📡 Social Intelligence Data Fetch (MCP Tool)
 Retrieves relevant social data from external intelligence sources.
- 🧠 Transform Market Intent Signals into Ops-Ready Actions (AI)
 Structures insights into priorities, summaries, and recommended actions.
- 🧹 Parse Structured Ops Payload
 Validates and safely parses AI-generated JSON for downstream use.
- 📋 Create Asana Task for Market Signal Review
 Creates a prioritized task with key signals, context, and recommendations.
- 📣 Send Market Risk & Sentiment Alert to Slack
 Delivers an executive-friendly alert summarizing risks or opportunities.
- 🚨 Error Handler → Slack Alert
 Posts detailed error information if any workflow step fails.
## 🧩 Prerequisites
 • Self-hosted n8n instance
 • OpenAI and Azure OpenAI API credentials
 • MCP (Xpoz) social intelligence credentials
 • Asana OAuth credentials
 • Slack API credentials
## 🛠 Setup Instructions
- Deploy the workflow on a self-hosted n8n instance
- Configure the webhook endpoint and test with a sample query
- Connect OpenAI, Azure OpenAI, MCP, Asana, and Slack credentials
- Set the correct Asana workspace and project ID
- Select the Slack channel for alerts
## 🛠 Customization Tips
 • Adjust intent and sentiment classification rules in AI prompts
 • Modify task priority logic or due-date rules
 • Extend outputs to email reports or dashboards if required
## 💡 Key Benefits
 ✔ Real-time market sentiment detection from social media
 ✔ Converts unstructured signals into actionable tasks
 ✔ Provides leadership-ready Slack alerts
 ✔ Eliminates manual market monitoring
 ✔ Built-in validation and error visibility
## 👥 Perfect For
 - Market research teams
 - Investment and strategy teams
 - Operations and risk teams
 - Founders and analysts tracking market sentiment