# Fetch country-specific Google Trends reports via Telegram bot

> # 🚀 Telegram Google Trends Bot Workflow
![Screenshot 20250718 at 3.38.32 AM.png](fileId:1774)
---
This workflow creates a powerful, multi-country Google Trends bot on Telegram. Users can request the top trending search queries for any country by simply sending its two-letter country code (e.g., `EG`, `US`, `SA`). The bot fetches the latest data, formats it into a clean report, and sends it back to the chat.

## ✨ Key Features

* **🌍 Dynamic Country Selection:** Get trends for any country on the fly by providing its `geo` code
* **📡 Automated RSS Fetching:** Pulls the latest data directly from Google's official daily trends RSS feed
* **📊 Clean, Formatted Reports:** Uses a custom code node to generate a beautiful, Markdown-formatted message that is easy to read on mobile
* **📈 Rich Information:** Each trend includes:
   * 🔍 The search query title
   * 📊 Approximate search traffic volume (e.g., "20K+ searches")
   * 📰 Links to the top 2 related news articles, complete with their sources
* **🌟 Optimized for Arabic:** The report headers and labels are in Arabic, making it perfect for users in the MENA region, but can be easily adapted

## ⚙️ How It Works

1. **💬 Telegram Trigger:** A user sends a message containing a two-letter country code (e.g., `EG`)
2. **🌐 HTTP Request:** The workflow uses this code as the `geo` parameter in a request to the `trends.google.com/trending/rss` endpoint
3. **📄 XML Parser:** The native XML node converts the raw RSS feed data into a structured JSON format
4. **💻 Code (Format Report):** A JavaScript function processes the JSON data. It extracts the top 5 trends, formats the titles, traffic, and news items, and constructs the final Markdown text for the report
5. **📤 Send to Telegram:** The final, formatted report is sent back to the user who requested it

## 🛠️ Setup

1. **🔐 Telegram Credentials:** Add your Telegram API credentials to the `Telegram Trigger` and `Send a text message` nodes
2. **🌐 (Optional) Customize Language:** The text and labels in the `Code` node can be easily translated to any language you prefer

## 📊 Basic Information

- **Workflow ID:** 6108
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 471
- **Downloads:** 47
- **Created:** 2025/7/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6108)

## 👤 Author

- **Name:** M Sayed
- **Username:** @msayed-cs

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **httpRequest** 
- **xml** 
- **code** 
- **telegram** 
- **telegramTrigger** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
