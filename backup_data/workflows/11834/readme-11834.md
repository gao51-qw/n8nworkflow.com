# Daily news curation with Gemini AI: auto-filter & publish to Notion & Telegram

> ## What this template does
This workflow creates a daily “n8n News Radar” briefing:
- Pulls the latest n8n ecosystem updates from Blog, Community, GitHub Releases, and Reddit.
- Filters to the last 24 hours + keyword relevance.
- Uses a Gemini “Editor-in-Chief” agent to semantically deduplicate topics and score them (only Score 3+ pass).
- Saves curated topics to a Notion database.
- Sends urgent alerts (Score 4+) to Telegram.

## How it works (high level)
1) Scheduled trigger (daily) or Manual trigger (testing)
2) Data ingestion from 4 sources (RSS + GitHub API)
3) Normalize + filter (24h)
4) Keyword pre-filter (reduce noise + LLM cost)
5) Batch items → Gemini agent (dedupe + scoring + Spanish strategic summary)
6) Parse JSON output + Notion-safe chunking
7) Save to Notion
8) If Score &gt;= 4 → send Telegram alert

## Setup steps (after import)
1) Connect these credentials in n8n:
- Google Gemini (AI Agent)
- Notion (Content DB)
- Telegram (alerts)

2) Replace placeholders inside nodes:
- **Add to Notion (Content DB)** → `databaseId.value` = `YOUR_NOTION_DATABASE_ID`
- **Telegram Notification** → `chatId` = `YOUR_TELEGRAM_CHAT_ID_OR_@channelusername`

## Requirements
- An n8n instance (Cloud or self-hosted)
- Google Gemini API access
- A Notion database with the properties used by the Notion node
- A Telegram bot + target chat/channel

## 📊 Basic Information

- **Workflow ID:** 11834
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 22
- **Downloads:** 2
- **Created:** 2025/12/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11834)

## 👤 Author

- **Name:** Vasyl Pavlyuchok
- **Username:** @vasylpavlyuchok

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×10)
- **merge** 
- **code** (×3)
- **telegram** 
- **notion** 
- **@n8n/n8n-nodes-langchain.googleGemini** 
- **scheduleTrigger** 
- **rssFeedRead** (×3)
- **httpRequest** 
- **aggregate** 
- **if** 
- **wait** 
- **noOp** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
