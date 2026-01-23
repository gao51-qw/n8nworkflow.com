Overview

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