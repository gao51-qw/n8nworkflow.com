# Analyze USD/JPY rates with AI and Tavily news search for email reporting

> Who’s it for

Traders, operations teams, and finance-minded founders who want a low-maintenance USD/JPY monitor that blends live pricing with short, news-aware AI commentary—delivered straight to email on a reliable cadence.

How it works / What it does

On a fixed schedule (every 4 hours), the workflow fetches the latest USD→JPY spot rate, enriches it with recent market context via a search tool, and asks an AI agent to produce a concise, structured take (trend, key drivers, and a buy/sell/neutral stance with rationale). The final summary is sent by email so stakeholders can skim, log, or forward without opening n8n. The design favors clarity (renamed nodes, sticky notes) and safety (no hardcoded secrets).

How to set up

Open Set (Fields) — Configure me and enter your Tavily API key and notification email.

In Send results via Gmail, attach your email credential (or swap to SMTP/another provider).

(Optional) Point LLM provider (configure) to your preferred model/vendor.

Enable the schedule or adjust the interval to match your cadence.

Requirements

Tavily (or compatible) Search API key

Email credential in n8n (Gmail or SMTP)

An n8n instance with internet access

How to customize the workflow

Change the schedule frequency or trading window.

Swap the rate source, add indicators (MA/RSI), or log to Sheets/DB.

Extend the AI prompt and output schema for risk flags or position sizing.

Add Slack/Telegram delivery or dashboards for team visibility.

Disclaimer (community nodes)

If you use community/experimental nodes, publish as self-hosted only and include a static workflow image at the top of your listing.

## 📊 Basic Information

- **Workflow ID:** 9550
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 45
- **Downloads:** 4
- **Created:** 2025/10/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9550)

## 👤 Author

- **Name:** s3110
- **Username:** @s3110

## 🏷️ Categories

- Crypto Trading
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **stickyNote** (×4)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **@n8n/n8n-nodes-langchain.toolHttpRequest** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **gmail** 
- **set** 
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
