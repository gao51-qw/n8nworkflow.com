# Personal finance tracker with Telegram Bot, Google Gemini Vision, and Sheets

> # Personal Finance AI Agent – Telegram Bot (n8n Workflow)

A fully automated Telegram-based personal finance tracker that:
- Accepts receipts as **images**, **PDFs**, or plain text  
- Uses Google Gemini Vision for OCR & intelligent extraction  
- Logs every expense into **Google Sheets**  
- Stores receipt images/PDFs in **Google Drive**  
- Answers natural-language spending questions ("How much did I spend on food last month?", "Compare this month vs last month", etc.)

Built entirely with **n8n** – 100% self-hostable, no-code/low-code.

---

## How It Works (Overview)

1. **You send a message to your Telegram bot**  
   → Photo of a receipt, PDF, or just text like "Nov 10 – 2500 NGN – Uber"

2. **Switch node** detects the message type:
   - Photo → Branch 0
   - Document (PDF/other) → Branch 1  
   - Pure text → Branch 2 (goes straight to query agent)

3. **Receipt Processing Path (Images & PDFs)**
   - Files downloaded from Telegram → uploaded to Google Drive ("Monthly receipts" folder)
   - Images → OCR with Gemini Vision  
     PDFs → native PDF text extraction
   - Extracted text + Drive link → merged → sent to Gemini AI Agent
   - AI extracts: Date (YYYY-MM-DD) • Amount (NGN) • Description • Category  
     (food, transportation, subscriptions, takeouts, entertainment, gift, electricity, repairs, other stuffs)
   - Clean JSON → appended to Google Sheets → friendly confirmation sent back

4. **Spending Query Path (Text questions)**
   - Second AI Agent with access to the live Google Sheet + calculator + memory
   - Answers anything: totals, breakdowns, comparisons, trends, percentages…

---

## Live Google Sheet (Template)
You can make a copy of the exact sheet the bot uses:  
https://docs.google.com/spreadsheets/d/1kwWJquPpwL9vt9U06a4f4phXq5jZjaGazvh2V69FGoc/edit?usp=sharing

Just click **File → Make a copy** and use your copy’s ID in the workflow.

---

## Setup Steps (Step-by-Step)

### Prerequisites
- n8n instance (cloud or self-hosted)
- Telegram bot (created via @BotFather)
- Google account

### 1. Create Telegram Bot
1. Message @BotFather → `/newbot`
2. Copy the bot token
3. In n8n → Credentials → New **Telegram API** credential → paste token

### 2. Google Setup
1. **Make a copy** of the sheet above  
   → Copy the new spreadsheet ID from the URL
2. Create a Google Drive folder called **"Monthly receipts"** (or any name) → copy folder ID
3. Enable Gemini API in Google Cloud (or use your existing key)
4. In n8n create these credentials:
   - Google Sheets OAuth2 API
   - Google Drive OAuth2 API
   - Google Gemini (PaLM) API

### 3. Import Workflow
- Copy the full JSON from the original file
- n8n → Workflows → Import → paste → Import

### 4. Update IDs & Credentials
After import, configure these nodes:

| Node                              | What to Change                                      |
|-----------------------------------|-----------------------------------------------------|
| Telegram Trigger + all Telegram nodes | Your Telegram credential                            |
| Google Sheets nodes               | Your Google Sheets credential + new Sheet ID        |
| Google Drive "Upload file" nodes  | Paste your "Monthly receipts" folder ID             |
| Gemini nodes                      | Your Gemini credential                              |
| AI Agent & AI Agent1              | Verify model, memory, tools are connected           |

### 5. Activate & Test
- Click **Activate**
- Start chatting with your bot on Telegram

**Test commands**  
- Send a photo/PDF receipt  
- Type: `How much did I spend last month?`  
- Type: `Show me food spending this month vs last month`

You’ll get instant replies and see new rows appear in your sheet!

---

## Features
- Zero manual entry ever again
- Works with handwritten receipts
- Smart categorization
- Natural-language spending insights
- All data stays 100% in your Google account
- Completely private & self-hostable
- NGN-native (Naira)

Never track expenses manually again!

## 📊 Basic Information

- **Workflow ID:** 10871
- **Complexity:** advanced
- **Node Count:** 32
- **Views:** 686
- **Downloads:** 68
- **Created:** 2025/11/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10871)

## 👤 Author

- **Name:** Anakhuagbor Sule
- **Username:** @anakhuagborsule

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **telegramTrigger** 
- **aggregate** 
- **extractFromFile** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.toolCalculator** (×2)
- **switch** 
- **telegram** (×4)
- **googleSheets** 
- **code** 
- **googleSheetsTool** (×2)
- **googleDrive** (×2)
- **merge** (×2)
- **@n8n/n8n-nodes-langchain.googleGemini** 
- **if** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 32 nodes with 27 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
