# Automate daily AI news with Perplexity Sonar Pro (via Telegram)

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.* 

🧠 Perplexity-Powered Daily AI News Digest (via Telegram)


This ready-to-deploy n8n workflow automates the entire process of collecting, filtering, formatting, and distributing daily AI industry news summaries directly to your Telegram group or channel.

Powered by Perplexity and OpenAI, it fetches only high-signal AI updates from trusted sources (e.g. OpenAI, DeepMind, HuggingFace, MIT Tech Review), filters out duplicates based on a Google Sheet archive, and delivers beautifully formatted news directly to your team — every morning at 10AM.

For more such build and step-by-step tutorials, check out:
https://www.youtube.com/@Automatewithmarc

🚀 Key Features:
Perplexity AI Integration: Automatically fetches the most relevant AI developments from the last 24 hours.

AI Formatter Agent: Cleans the raw feed, removes duplicates, adds summaries, and ensures human-friendly formatting.

Google Sheets Log: Tracks previously reported news items to avoid repetition.

Telegram Delivery: Sends a polished daily digest straight to your chat, ready for immediate team consumption.

Customizable Scheduling: Preconfigured for daily use, but can be modified to fit your team's preferred cadence.

💼 Ideal For:
Anyone who wants to stay ahead of fast-moving AI trends with zero manual effort

🛠️ Tech Stack:
Perplexity AI

OpenAI (GPT-4 or equivalent)

Google Sheets

Telegram API

✅ Setup Notes:
You’ll need to connect your own OpenAI, Perplexity, Google Sheets, and Telegram credentials.

Replace the Google Sheet ID and Telegram channel settings with your own.

## 📊 Basic Information

- **Workflow ID:** 5157
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 8434
- **Downloads:** 843
- **Created:** 2025/6/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5157)

## 👤 Author

- **Name:** Automate With Marc
- **Username:** @marconi

## 🏷️ Categories

- Social Media
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **googleSheetsTool** 
- **googleSheets** 
- **perplexity** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **stickyNote** (×5)
- **telegram** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
