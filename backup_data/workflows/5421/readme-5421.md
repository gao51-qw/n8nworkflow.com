# AI-powered lead enrichment with Explorium MCP & Telegram

> 
## 🤖 AI-Powered Lead Enrichment with Explorium MCP & Telegram

## Who it's for

Sales reps, agencies, and growth teams who want to turn basic company info into qualified leads with automated research . Perfect for B2B prospecting.

## What it does

This workflow lets you send a company name or domain via Telegram, and instantly returns:

✅ Enriched company profile (industry, size, tech, pain points)

✅ A clean, structured JSON — ready for your CRM or sales tools
How it works

💬 Send company info to your Telegram bot
🔎 Workflow pulls data from Explorium MCP + Tavily
🧠 AI analyzes model, tools, pain points & goals

📤 JSON response sent back via Telegram or logged to your database
Requirements

🔐 OpenAI API (GPT-4)
🧠 Explorium MCP API
🌐 Tavily Web Search API
🤖 Telegram Bot API
🗃️ PostgreSQL (for memory/logging)
How to set up

Add API keys in n8n
Connect Telegram bot to webhook
Set up PostgreSQL for memory persistence
Customize prompts (tone, niche, etc.)
Test by sending a company name via Telegram
Customization Options

🎯 Focus enrichment on specific industries or keywords
💬 Adjust the email sequence structure & style
🧩 Add extra data sources (e.g. Clearbit, Crunchbase)
🧾 Format JSON to match your CRM schema
⚙️ Add approval step before sending emails
Highlights

✅ Uses multi-source enrichment
✅ Works 100% from Telegram
✅ Integrates into any sales pipeline


## 📊 Basic Information

- **Workflow ID:** 5421
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 763
- **Downloads:** 76
- **Created:** 2025/6/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5421)

## 👤 Author

- **Name:** David Olusola
- **Username:** @dae221

## 🏷️ Categories

- Lead Generation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.mcpClientTool** 
- **stickyNote** (×4)
- **httpRequestTool** 
- **@n8n/n8n-nodes-langchain.memoryPostgresChat** 
- **telegramTrigger** 
- **telegram** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
