# Stock portfolio analysis with Perplexity AI, GPT-4, and Google Sheets

> 📊 Dynamic Portfolio Advisor – Daily Stock Market Intelligence with Google Sheets
Description:
This advanced AI-powered n8n workflow automatically delivers a daily market intelligence briefing tailored to your stock holdings portfolio stored in Google Sheets. It uses real-time data from Perplexity AI, combines it with your portfolio, and generates personalized insights, risk alerts, and trade suggestions — all delivered via Telegram or any messaging app of your choice.

For step-by-step build of workflows like this, check out:
https://www.youtube.com/@Automatewithmarc

⚙️ How It Works:
🕒 Daily Trigger
 Starts every day at a scheduled time (default: 10 AM) to fetch the most recent market data.

📈 Holdings Fetch
 Reads your current portfolio dynamically from Google Sheets — no hardcoding required.

🧠 AI Analysis Agent
 Combines:

Market headlines

Company-specific developments

Macroeconomic updates
 And analyzes how they might affect your holdings.

🔍 Perplexity Web Research Tool
 Finds and summarizes the most relevant stock market news from the past 24 hours.

💬 Telegram Delivery
 Sends a customized summary of:

Market highlights

Asset-specific impacts

Opportunities and risks

Actionable trade ideas (buy/sell/hold)

🛠️ Tools & Integrations:
Google Sheets (live holdings feed)

Perplexity AI (real-time market research)

OpenAI GPT (financial summarization)

Telegram (output, customizable)

💡 Use Cases:
Portfolio-aware market intelligence

Automated investor briefing assistant

Risk alert + opportunity scanner

Daily trade idea generator

Finance bloggers or equity analysts streamlining prep work

📍Note: You can easily replace Telegram with Slack, Email, Notion, or any output tool supported by n8n.

This template is perfect for active investors, financial advisors, or automation-savvy traders who want to turn AI and data into actionable daily signals.

## 📊 Basic Information

- **Workflow ID:** 5783
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 1582
- **Downloads:** 158
- **Created:** 2025/7/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5783)

## 👤 Author

- **Name:** Automate With Marc
- **Username:** @marconi

## 🏷️ Categories

- Crypto Trading
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **googleSheetsTool** 
- **@n8n/n8n-nodes-langchain.agent** 
- **perplexityTool** 
- **telegram** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
