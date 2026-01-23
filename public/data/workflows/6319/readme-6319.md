# Telegram shopping assistant: Amazon product search with Apify & OpenRouter AI

> ## Automate Amazon searches to Telegram with AI-powered scraping
This workflow connects Amazon product lookups to Telegram using AI-enhanced scraping and automation. It lets users send a product name to a Telegram bot and instantly receive pricing, discount, and product links — all pulled dynamically from Amazon.

## Who’s it for
- Amazon affiliates
- Telegram shopping groups
- Product reviewers & resellers
- Deal-focused communities
- Anyone wanting fast price checks without browsing

## How it works
- Telegram Trigger receives messages from the user.
- AI Classifier (via OpenRouter & LangChain) detects whether the user is asking for a product.
- If yes, it sends the query to Apify's Amazon Scraper to fetch real product listings.
- The scraped data (price, discount, rating, link) is formatted into a Telegram response.
- If not a product query, an AI fallback response is sent instead.

## Requirements
- Telegram Bot Token
- Apify API Token
- OpenRouter API Key (or compatible LLM provider)






## 📊 Basic Information

- **Workflow ID:** 6319
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 712
- **Downloads:** 71
- **Created:** 2025/7/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6319)

## 👤 Author

- **Name:** Parth Pansuriya
- **Username:** @parthpansuriya

## 🏷️ Categories

- Market Research
- AI Chatbot

## 🔗 Nodes Used

- **code** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **httpRequest** 
- **stickyNote** 
- **telegramTrigger** 
- **switch** 
- **telegram** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
