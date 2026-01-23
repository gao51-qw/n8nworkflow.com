# Discover buying-intent leads on Twitter and Instagram with GPT-4o-mini and send summaries to Slack and Notion

> ## 📊 Description
Automate B2B lead discovery by identifying high-intent prospects directly from Reddit discussions using AI-powered intent analysis. 🎯🤖 This workflow scans Reddit for conversations related to CRM and marketing automation tools, analyzes snippets to detect buying intent, identifies relevant decision-makers on LinkedIn, enriches contact details via RocketReach, and logs qualified leads into Google Sheets. Running every three hours, it ensures your sales team never misses fresh outbound opportunities without manual research. 🚀📊

## 🔁 What This Template Does
1️⃣ Runs automatically every 3 hours to search Reddit for tool-related discussions. ⏰
 2️⃣ Extracts Reddit snippets, links, and highlighted keywords from search results. 🔍
 3️⃣ Uses AI to classify buying intent as High, Medium, or Low. 🤖
 4️⃣ Identifies the core problem and suggests a safe, non-salesy outreach angle. 💬
 5️⃣ Filters only High and Medium intent opportunities. 🚦
 6️⃣ Searches LinkedIn for matching decision-makers based on role and seniority. 👥
 7️⃣ Enriches lead profiles with emails and company data using RocketReach. 📇
 8️⃣ Saves qualified leads into Google Sheets with deduplication logic. 📊
 9️⃣ Sends Slack alerts when enrichment fails or API limits are hit. 🚨
 🔟 Sends Gmail alerts if any workflow error occurs. ✉️

## ⭐ Key Benefits
✅ Discovers real buying intent directly from public Reddit discussions
 ✅ Eliminates manual lead research and qualification
 ✅ Uses AI for consistent, conservative intent classification
 ✅ Enriches leads with verified contact data automatically
 ✅ Builds a clean, ready-to-use outbound lead list in Google Sheets
 ✅ Runs continuously to capture fresh opportunities

## 🧩 Features
Scheduled Reddit monitoring via SerpAPI
AI-based intent detection using GPT-4o-mini
Conservative intent scoring to avoid false positives
LinkedIn decision-maker discovery
RocketReach contact enrichment
Google Sheets lead storage with update logic
Slack alerts for API and enrichment issues
Gmail-based error notifications
Scalable batch processing

## 🔐 Requirements
OpenAI API key (GPT-4o-mini)
SerpAPI API key
RocketReach API key
Google Sheets OAuth2 credentials
Slack API credentials
Gmail OAuth2 credentials

## 🎯 Target Audience
B2B sales and outbound teams
Growth and demand-generation teams
Lead generation agencies
SaaS founders targeting niche audiences
RevOps teams automating prospect research


## 📊 Basic Information

- **Workflow ID:** 12110
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 46
- **Downloads:** 4
- **Created:** 2025/12/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12110)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.mcpClientTool** 
- **@n8n/n8n-nodes-langchain.lmChatAzureOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.chat** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **slack** 
- **notion** 
- **errorTrigger** 
- **gmail** 
- **stickyNote** (×9)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
