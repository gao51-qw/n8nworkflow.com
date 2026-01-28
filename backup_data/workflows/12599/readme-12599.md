# Analyze market demand using GPT-4o, XPOZ MCP, Notion and email reports

> ## 📘 Description
This workflow performs automated market demand research for a defined niche on a scheduled basis and converts raw public discussions into actionable business insights. It continuously scans search engines and social platforms to identify real customer pain points, unmet needs, buying or switching intent, and dissatisfaction with existing tools or solutions.
An AI market research agent analyzes public conversations to filter out noise and extract only high-signal demand indicators. These insights are then transformed into two outputs: a concise Notion-ready research summary for internal knowledge tracking and a professional, customer-ready email that communicates key findings in clear, business-friendly language. Built-in validation and error handling ensure reliability and traceability.
This workflow replaces repetitive manual market research with a consistent, insight-driven intelligence pipeline that supports founders, marketers, and growth teams.
⚠️ Deployment Disclaimer
 This template is intended for self-hosted n8n instances only.
 It relies on external MCP-based social intelligence tools and advanced AI agents not supported on n8n Cloud.

## ⚙️ What This Workflow Does (Step-by-Step)
⏰ Scheduled Market Research Trigger
 Runs automatically on a defined schedule.
🧾 Inject Niche, Query, and Research Context
 Sets the niche, keywords, and analyst notes to guide research focus.
🔎 Analyze Public Discussions for Market Demand (AI)
 Scans public search and social platforms to identify real demand signals, pain points, and buying intent.
📡 Public Search & Social Intelligence (MCP Tool)
 Fetches relevant public discussions for analysis.
🧠 Convert Market Signals into Structured Insights (AI)
 Transforms raw findings into a Notion-ready summary and a customer-friendly email.
🧹 Parse & Validate AI Output
 Ensures structured JSON output for safe downstream use.
📘 Save Market Research Insight to Notion
 Stores summarized insights for long-term research and tracking.
📧 Send Market Insight Email to Stakeholder
 Delivers a concise, value-focused email highlighting key findings.
🚨 Workflow Error Handler → Email Alert
 Sends detailed error notifications if any step fails.

## 🧩 Prerequisites
 • Self-hosted n8n instance
 • OpenAI API credentials
 • MCP (Xpoz) public search & social intelligence credentials
 • Notion API access
 • Gmail OAuth credentials

## 💡 Key Benefits
 ✔ Automates recurring market research
 ✔ Identifies real demand and buying intent signals
 ✔ Produces clean Notion documentation automatically
 ✔ Generates customer-ready insight emails
 ✔ Eliminates manual scanning of forums and social media
 ✔ Built-in error alerts for reliability

## 👥 Perfect For
-  Startup founders validating ideas
-  Growth and marketing teams
-  Product strategy teams
-  Market research and competitive intelligence teams

## 📊 Basic Information

- **Workflow ID:** 12599
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 110
- **Downloads:** 11
- **Created:** 2026/1/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12599)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Market Research
- AI RAG

## 🔗 Nodes Used

- **errorTrigger** 
- **gmail** (×2)
- **stickyNote** (×8)
- **scheduleTrigger** 
- **set** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.mcpClientTool** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **code** 
- **notion** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
