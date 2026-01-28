# 📊 AI token tracker for WhatsApp & Telegram – Save AI usage to Google Sheets

> ### 💸 GPT-4o Token Tracker – Measure AI Usage and Cost via WhatsApp or Telegram

Hi! I'm Amanda — I create smart, useful AI automations for n8n and Make.  
This workflow helps you monitor how many tokens are consumed per conversation with AI Agent Tokens, and logs that usage into **Google Sheets** — so you can track expenses and make smarter decisions about your AI usage.

You can connect it to **Telegram** or **WhatsApp (via Evolution API)**, and it will automatically capture:
- Prompt and completion tokens
- Total tokens
- Time of interaction
- The user/channel
- (Optional) Cost estimate in USD

---

### 📊 What this workflow does

- Logs token usage from LangChain agents  
- Calculates token totals for each request  
- Appends the data to a structured Google Sheet  
- Works with **WhatsApp (Evolution API)** or **Telegram bots**  
- Ideal for tracking AI Agent Tokens usage over time and controlling costs

---

### 🧪 Free Spreadsheet Template

You can duplicate and use this template for logging token usage:  
👉 [Google Sheets Template](https://docs.google.com/spreadsheets/d/1_HHTTT_gXEaH-LtZxNycSXeGGYE7dcS9vbuad0dZcnw/edit?usp=sharing)

Includes columns like:
- Date
- Input
- Output
- Tokens (Prompt / Completion / Total)
- Tool name or use case
- Estimated cost

---

### 🛠️ Setup Instructions

1. Import the workflow to your n8n (Cloud or self-hosted)
2. Connect your Google Sheets account  
3. Choose your trigger:
   - WhatsApp (Evolution API webhook)  
   - Telegram (Bot webhook or message input)  
4. Fill out:
   - AI Agent model used (e.g. `gpt-4o`)  
   - Cost per 1K tokens (optional, for USD estimation)  
5. Update spreadsheet ID and tab name in the Google Sheets node  
6. (Optional) Connect as a sub-tool to an AI agent for automatic logging

---

### 🧰 Tech Used

- OpenRouter
- LangChain  
- Google Sheets  
- Telegram or WhatsApp webhook (Evolution API)  
- Nodes: HTTP Request, Set, If, Google Sheets, Merge

---

### ✅ Who This Is For

- Developers or agencies that want to monitor AI Agent Tokens usage  
- Freelancers managing AI bots for clients  
- Teams that need billing visibility and cost control  
- Anyone who wants transparency in AI token spending

---

### ✅ Requirements

- OpenAI GPT-4o access  
- Google Sheets credential  
- Telegram Bot Token (or Evolution API access for WhatsApp)  
- n8n (Cloud or self-hosted)

---

### 🌐 Want this template?

❤️ Buy more workflows at: [https://iloveflows.com](https://iloveflows.com)  
☁️ Try n8n Cloud: [https://n8n.partnerlinks.io/amanda](https://n8n.partnerlinks.io/amanda)


## 📊 Basic Information

- **Workflow ID:** 3963
- **Complexity:** advanced
- **Node Count:** 37
- **Views:** 627
- **Downloads:** 62
- **Created:** 2025/5/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3963)

## 👤 Author

- **Name:** Amanda Benks
- **Username:** @amanda

## 🏷️ Categories

- Engineering
- AI Chatbot

## 🔗 Nodes Used

- **gmailTool** 
- **airtableTool** 
- **googleSheets** (×2)
- **googleCalendarTool** 
- **code** (×2)
- **telegram** (×2)
- **stickyNote** (×12)
- **@n8n/n8n-nodes-langchain.agent** 
- **webhook** 
- **httpRequest** (×3)
- **if** 
- **convertToFile** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **telegramTrigger** 
- **filter** 
- **set** (×3)
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **switch** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 37 nodes with 21 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
