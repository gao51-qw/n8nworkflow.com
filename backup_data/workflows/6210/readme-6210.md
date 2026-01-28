# Automatic expense tracking with Telegram, AI, and Google Sheets

> The Problem 😫
Tired of manually logging every coffee and cab ride? Stop wrestling with spreadsheets! This template automates your expense tracking so you can manage your finances effortlessly.

It's perfect for freelancers, small business owners, and anyone who wants a simple, chat-based way to track spending.

---
![Screen Shot 20250724 at 16.23.52 PM.png](fileId:1855)
---
How It Works ✨
Just send a message to your personal Telegram bot like "5 usd for coffee with my card" and this workflow will automatically:

📲 Get your message from Telegram.

🤖 Use AI to understand the amount, category, currency, and payment method.

💱 Convert currencies automatically using live exchange rates.

✍️ Log everything neatly into a new row in your Google Sheet.

🛠️ Quick Setup Guide
1. Google Sheets 📝
Create a new Google Sheet.

Make sure your first row has these exact column names:
date, amount, category, description, user_id, payment_method, currency, exchange_rate, amount_converted

Copy the Sheet ID from the browser's URL bar.

2. Telegram Bot 🤖
Chat with @BotFather on Telegram, use the /newbot command, and get your API Token.

Chat with @userinfobot to get your personal Chat ID.

3. n8n Workflow 🔗
Add your credentials for Google Sheets, Telegram, and your AI model.

Paste your Chat ID into the Telegram Trigger node.

Paste your Sheet ID into the Append row in sheet node.

Activate the workflow and start tracking! ✅

## 📊 Basic Information

- **Workflow ID:** 6210
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 1599
- **Downloads:** 159
- **Created:** 2025/7/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6210)

## 👤 Author

- **Name:** M Sayed
- **Username:** @msayed-cs

## 🏷️ Categories

- Personal Productivity
- AI Summarization

## 🔗 Nodes Used

- **telegramTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** 
- **httpRequestTool** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **googleSheets** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
