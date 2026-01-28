# Extract & process Q&A from URLs with Airtop, OpenRouter AI & Safety Guardrails

> Transform your Telegram bot into a secure content analyzer: send any URL, and get safe, structured Q&A extractions with AI-powered safety checks and web search capabilities.

## 📋 What This Template Does
This workflow activates when a user sends a valid URL to your Telegram bot. It extracts questions and answers from the webpage using Airtop, applies NSFW and PII guardrails to ensure safe content, then uses an OpenRouter AI agent (with optional Tavily search) to generate and send a concise response. If guardrails fail, it alerts the user instead.
- Filters for valid URLs only to prevent unnecessary processing
- Extracts structured Q&A from documents or forms
- Enforces safety checks for harmful or private content
- Supports web searches for enhanced responses when needed

## 🔧 Prerequisites
- A Telegram bot created via @BotFather
- Accounts with Airtop, OpenRouter, and Tavily

## 🔑 Required Credentials

### Telegram API Setup
1. Open Telegram → Search @BotFather → Use /newbot command
2. Follow prompts to create bot and obtain API token
3. Add to n8n as **Telegram API** credential type

### Airtop API Setup
1. Visit https://airtop.ai → Sign up or log in → Navigate to Dashboard → API Keys
2. Generate a new API key with extraction permissions
3. Add to n8n as **Airtop API** credential type

### OpenRouter API Setup
1. Go to https://openrouter.ai → Sign up or log in → Navigate to API Keys section
2. Generate and copy your API key (free tier sufficient for basic use)
3. Add to n8n as **OpenRouter API** credential type

### Tavily API Setup
1. Visit https://app.tavily.com → Sign up or log in → Go to API Keys
2. Generate and copy your API key
3. Add to n8n as **Tavily API** credential type

## ⚙️ Configuration Steps
1. Import the workflow JSON into n8n
2. Assign your Telegram, Airtop, OpenRouter, and Tavily credentials to the respective nodes
3. Activate the workflow to register the Telegram trigger
4. Test by sending a plain URL (no extra text) to your bot in Telegram
5. Monitor the first execution and adjust guardrail thresholds if needed

## 🎯 Use Cases
- Researchers summarizing academic papers or reports while ensuring no sensitive data leaks
- Support teams extracting info from customer-submitted docs/forms with automatic safety filtering
- Content creators pulling Q&A from articles for bots, blocking inappropriate responses
- Educators analyzing educational resources safely for student-facing chat tools

## ⚠️ Troubleshooting
- No response from bot: Verify the message contains only a valid URL; adjust regex in Filter Only URLs node if needed
- Guardrail failures: Lower NSFW threshold (e.g., from 0.7 to 0.5) or disable PII checks in Apply Safety Guardrails node
- Extraction errors: Test with public, text-heavy URLs; some JS-heavy sites may require alternative extractors
- Rate limits hit: Check OpenRouter/Tavily dashboards for usage; upgrade to paid tiers for heavy traffic

## 📊 Basic Information

- **Workflow ID:** 10849
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 66
- **Downloads:** 6
- **Created:** 2025/11/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10849)

## 👤 Author

- **Name:** Daniel Nkencho
- **Username:** @daniel-automates

## 🏷️ Categories

- Document Extraction
- AI Chatbot

## 🔗 Nodes Used

- **filter** 
- **airtop** 
- **@n8n/n8n-nodes-langchain.guardrails** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **telegram** (×2)
- **@tavily/n8n-nodes-tavily.tavilyTool** 
- **stickyNote** (×8)
- **telegramTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
