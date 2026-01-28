# Daily AI stock briefing right to your email: OpenAI + Tavily + Gmail

> **This n8n workflow template uses community nodes and is only compatible with the self-hosted version of n8n.** 

📈 StockPulse: AI-Picked Daily News for Your Portfolio
Stay ahead of the market with this automated, AI-powered stock market news briefing delivered straight to your inbox — no code required.

Watch Step-by-step Video Tutorial Here:
https://www.youtube.com/watch?v=iZvPej9eLYE&t=201s

⚙️ What it does:
This workflow runs every morning and:

Triggers a scheduled prompt to a Langchain AI Agent (OpenAI)

Uses the Tavily Web Search API to fetch fresh financial news relevant to your watchlist or portfolio

Summarizes the top stories, highlighting:

🔍 Key headlines

💡 Investment opportunities

⚠️ Risks and macro trends

📊 Suggested trades

Sends a clean, readable email via Gmail to your preferred address

🔧 Built with:
🧠 Langchain AI Agent (OpenAI GPT-4o)

🔍 Tavily Search Tool

📬 Gmail Node for Email Delivery

⏰ Daily Cron Trigger (customizable)

💼 Who it’s for:
Investors and traders who want to save time on news gathering

Financial creators looking for curated, actionable insights

Non-technical users interested in automating stock news monitoring

Anyone who wants to combine AI + automation + market data

🟢 Customize easily: Edit your stock list or news focus inside the Agent prompt
📨 Email ready: Just plug in your Gmail credentials and you’re good to go
⏱️ 10-minute setup — no coding required!

## 📊 Basic Information

- **Workflow ID:** 4617
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 1214
- **Downloads:** 121
- **Created:** 2025/6/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4617)

## 👤 Author

- **Name:** Automate With Marc
- **Username:** @marconi

## 🏷️ Categories

- Crypto Trading
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@tavily/n8n-nodes-tavily.tavilyTool** 
- **gmail** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
