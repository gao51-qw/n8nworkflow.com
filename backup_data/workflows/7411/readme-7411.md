# AI-powered personal finances manager with Gemini, Telegram & Google Sheets

> ### Who’s it for

This template is designed for individuals who want to gain full control over their personal finances without the hassle of manual tracking. Ideal for freelancers, small business owners, or anyone who wants a simple, automated way to monitor income and expenses.

### How it works / What it does

Using **n8n**, **Telegram**, and **Google Sheets**, this workflow allows you to log, edit, and query your financial transactions through simple Telegram messages. The AI interprets your input—whether text or audio—and automatically categorizes your income and expenses. Responses are delivered **fully formatted in Telegram HTML**, giving you clean, readable summaries and insights.

Features include:

* Add, edit, and delete transactions automatically
* Query totals and category-specific expenses, e.g., “How much did I spend on food this month?”
* Generate financial summaries and monthly reports
* Automatic ID assignment and date handling

### How to set up

1. Deploy this workflow on your **self-hosted n8n instance**.
2. Connect your **Telegram Bot** and **Google Sheets** account.
3. Configure the **Google Gemini AI node** for message interpretation.
4. Update sheet headers and categories if needed.
5. Start sending messages to your Telegram bot to track expenses instantly.

## How to Set Up the Google Sheet

To use this workflow, you’ll need a Google Sheet with the following structure:

| Column Name         | Description                                     |
| ------------------- | ----------------------------------------------- |
| **id**              | Unique sequential identifier (auto-incremented) |
| **type**            | "income" or "expense"                           |
| **value**           | Monetary value (format: 1234.56)                |
| **category**        | Classification of the transaction               |
| **payment\_method** | Payment method used (e.g., card, cash, PIX)     |
| **description**     | Details about the transaction                   |
| **date**            | Transaction date (format: yyyy-MM-dd)           |

Make sure the column headers match exactly as shown above, and leave the rows empty for the bot to fill automatically.

### Requirements

* n8n (self-hosted or cloud instance)
* Telegram Bot API
* Google Sheets
* Google Gemini AI or equivalent AI node

## 📊 Basic Information

- **Workflow ID:** 7411
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 3529
- **Downloads:** 352
- **Created:** 2025/8/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7411)

## 👤 Author

- **Name:** Vitorio Magalhães
- **Username:** @vikthyr

## 🏷️ Categories

- Personal Productivity
- Multimodal AI

## 🔗 Nodes Used

- **switch** 
- **telegram** (×3)
- **@n8n/n8n-nodes-langchain.googleGemini** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.toolCalculator** 
- **googleSheetsTool** (×4)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.agent** 
- **stickyNote** (×7)
- **telegramTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
