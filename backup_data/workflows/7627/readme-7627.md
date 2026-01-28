# Daily news summarization with OpenAI Perplexity AI delivered via Telegram

> Overview

This n8n workflow automatically fetches the latest news articles from multiple RSS sources, filters for the last 24 hours, summarizes them into a concise ~400-word digest in Vietnamese, and then delivers the result directly to Zalo and Telegram. It’s designed for professionals who need a quick, AI-curated overview of daily news without manually browsing multiple websites.

🧩 Key Features

⏰ Triggers

Schedule Trigger: Run at specific times (e.g., morning briefing).

Zalo & Telegram Triggers: Start workflow when requested via chat.

🌐 News Collection

Fetches news from 4 RSS sources (RSS.app, Google News, etc.).

Extracts standardized fields (title, pubDate, content).

🔍 Filtering & Processing

Keeps only news published in the last 24h.

Limits to 20 most recent items.

Aggregates multiple feeds into one dataset.

🧠 AI Summarization

Uses OpenAI Assistant to generate 15–19 highlights (~400 words).

Translates into Vietnamese, removes special symbols.

Optionally calls Perplexity AI to refine content into a financial–economic–political style summary.

Maintains short-term context with Memory Buffer for improved output.

📲 Delivery Channels

Sends digest directly to Zalo (personal & group chat).

Sends digest to Telegram bot.

⚙️ Workflow Steps

Trigger – schedule or chat command (Zalo/Telegram).

RSS Fetchers (4 feeds) – collect news.

Edit Fields – normalize title, date, and content.

Merge & Filter – unify feeds, keep only last 24h.

Limit & Aggregate – select top 20 articles.

AI Summarization – generate digest via OpenAI + Perplexity.

Delivery – send results to Zalo & Telegram.

🔐 Requirements

✅ RSS source URLs (already set in workflow).

🔑 OpenAI API key.

🔑 Perplexity API key.

📲 Zalo User API + Telegram Bot API credentials.

📥 Example Use Case

A financial analyst or business leader wants a daily briefing in Vietnamese.

At 7 AM, they automatically receive a curated 400-word digest via Telegram and Zalo.

Can also trigger the report on-demand from chat.

🛠 Customization Options

Add/remove RSS sources.

Adjust summary length (short/medium/long).

Output to other channels (Email, Slack, Notion).

Change language from Vietnamese → English.

⚠️ Limitations

RSS feeds must be valid & accessible.

Summaries depend on AI quality and may vary slightly.

Perplexity API requires active subscription.

📌 SEO Tags

n8n workflow, rss news summarizer, daily news digest, telegram news bot, zalo ai assistant, openai news summary, perplexity ai, financial political economic news

More template: https://auton8n.pw/

## 📊 Basic Information

- **Workflow ID:** 7627
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 756
- **Downloads:** 75
- **Created:** 2025/8/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7627)

## 👤 Author

- **Name:** DuyTran
- **Username:** @duytran82

## 🏷️ Categories

- AI Summarization
- Multimodal AI

## 🔗 Nodes Used

- **filter** 
- **set** (×4)
- **merge** 
- **limit** 
- **aggregate** 
- **scheduleTrigger** 
- **stickyNote** 
- **rssFeedRead** (×4)
- **@n8n/n8n-nodes-langchain.openAi** 
- **CUSTOM.n8nTrigger** 
- **CUSTOM.ZaloUser** 
- **perplexityTool** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **telegramTrigger** 
- **telegram** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
