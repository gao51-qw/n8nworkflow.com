# Forex, crypto, mergers and financial markets AI analyst updates to Telegram

> # Purpose & Audience:
This workflow is designed for active traders, financial analysts, and market enthusiasts who want to stay informed about high-impact market news without information overload. It targets users interested in Forex, Crypto, Mergers, and general market-moving geopolitical news delivered directly to their Telegram channels or personal chats.

## What It Does:
The workflow fetches the latest market news from Finnhub’s API filtered by categories like forex, crypto, mergers, and general financial news. It then formats the news into clear, concise Telegram messages and sends updates on a schedule you choose — every hour, every 4 hours, or daily. This keeps traders focused on relevant, actionable news and avoids clutter from irrelevant updates.

## How to Set Up:
1. Sign up for a free account at Finnhub.io and obtain your API key.
2. Create a Telegram bot (using @botfather and get api key) and get your chat ID for the group or personal chat where you want to receive updates.
3. Import this workflow into your n8n instance.
4. Enter your Finnhub API key (copy from finhubb) and connect Telegram (using telegram bot api key) in their respective  nodes. Step by step guide is included in the sticky notes.
5. Configure the schedule trigger node to run at your preferred interval (hourly, 4-hourly, or daily).
6. Activate the workflow and start receiving curated market news updates on Telegram.

## Why Use This Workflow:
- Simple and quick to set up (under 2 minutes).
- Filters out noise, delivering only high-impact market news.
- Keeps traders informed without distraction.
- Fully customizable schedule to fit your trading routine.
- Leverages reliable Finnhub data and Telegram’s instant messaging.


## 📊 Basic Information

- **Workflow ID:** 5109
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 426
- **Downloads:** 42
- **Created:** 2025/6/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5109)

## 👤 Author

- **Name:** Malik Hashir
- **Username:** @malikx

## 🏷️ Categories

- Crypto Trading

## 🔗 Nodes Used

- **set** 
- **httpRequest** (×2)
- **code** 
- **scheduleTrigger** 
- **stickyNote** (×5)
- **telegram** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
