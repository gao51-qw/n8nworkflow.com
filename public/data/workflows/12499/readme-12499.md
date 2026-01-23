# Create a founder digest and leads from Hacker News with GPT-4o and Gmail

> ![image 8.png](fileId:3894)
## 📊 Description
 Automate daily founder intelligence from Hacker News without manual monitoring. This workflow scans Hacker News discussions (Show HN, launches, AI, startups, SaaS), filters out noise and non-discussion pages, and extracts only high-signal threads. AI then converts these discussions into a concise, founder-ready daily digest highlighting key trends, why they matter, and practical actions. The digest is delivered via email, while structured insights are logged to Google Sheets for long-term tracking and analysis. 
## ⚠️ Deployment Disclaimer
 This template is designed for self-hosted n8n installations only.
 It relies on external MCP tools and custom AI orchestration that are not supported on n8n Cloud.

## 🔄 What This Template Does
 1️⃣ Runs automatically on a daily schedule ⏰
 2️⃣ Searches Hacker News discussions via Google using SerpAPI 🔍
 3️⃣ Extracts titles, summaries, links, and metadata from results 📄
 4️⃣ Filters out guidelines, index pages, and non-discussion links 🚫
 5️⃣ Aggregates valid discussion threads into a single dataset 📦
 6️⃣ Uses AI to identify key trends, problems, and founder-relevant signals 🧠
 7️⃣ Generates a concise daily founder digest (trend, why it matters, actions) ✍️
 8️⃣ Sends the digest automatically via email 📧
 9️⃣ Cleans and normalizes insights for storage 🧹
 🔟 Appends structured founder intelligence to Google Sheets for tracking 📊
## ✅ Key Benefits
 ✅ Eliminates manual Hacker News scanning
 ✅ Surfaces only high-signal, founder-relevant discussions
 ✅ Converts raw discussions into clear, actionable insights
 ✅ Delivers a daily, skimmable founder digest automatically
 ✅ Builds a historical intelligence log in Google Sheets
 ✅ Creates a repeatable founder research workflow
## ⚙️ Features
 - Daily scheduled execution
 - Hacker News discovery via Google Search (SerpAPI)
 - Noise filtering with custom JavaScript logic
 - AI-powered trend and insight extraction
 - Founder-focused digest generation
 - Email delivery via Gmail
 - Insight archiving in Google Sheets
## 🔑 Requirements
 - SerpAPI account
 - Azure OpenAI credentials
 - Gmail account connected to n8n
 - Google Sheets account
 - Self-hosted n8n instance
## 🎯 Target Audience
 - Startup founders tracking early signals
 - Product and growth leaders monitoring trends
 - VCs and analysts scouting emerging tools
 - Teams needing automated market and founder intelligence

## 📊 Basic Information

- **Workflow ID:** 12499
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 0
- **Downloads:** 0
- **Created:** 2026/1/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12499)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Market Research
- AI RAG

## 🔗 Nodes Used

- **stickyNote** (×7)
- **scheduleTrigger** 
- **n8n-nodes-serpapi.serpApi** 
- **code** (×3)
- **aggregate** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.lmChatAzureOpenAi** (×2)
- **gmail** 
- **googleSheets** 
- **@n8n/n8n-nodes-langchain.mcpClientTool** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
