# AI-powered receipt and expense tracker with Telegram, Google Sheets & OpenAI

> **Automatically capture, categorize, and log expenses from receipts, PDFs, voice notes, or text — powered by AI and integrated with Telegram and Google Sheets.**


### 🧑‍💼 Who is this for?

Small business owners, freelancers, digital nomads, and finance professionals who want to eliminate manual expense tracking and automate financial data entry through chat, AI, and cloud tools.


### ❓ What problem is this workflow solving?

Manually managing receipts and tracking expenses across various formats (paper, PDF, or voice) is time-consuming and error-prone. This workflow automates that entire process—OCR, categorization, validation, and reporting—so your finances stay organized with zero manual effort.

### 📦 What You Get

* ✅ Complete `Smart_Money_Manager.json` n8n workflow
* 📄 API credential setup guide
* 📈 Google Sheets sample template
* 🛠️ AI prompt customization examples
* 🧪 Troubleshooting & error handling logic
* 📺 Bonus video tutorial (if provided)
* 💬 Telegram support from the developer


### ⚙️ What this workflow does

#### 🎯 Triggers

* Runs on **Telegram message** (text, image, voice note, PDF)
* Smart **inline menu** to select income or expense tracking

#### 🧠 Processing

* Auto-detects content type (photo, PDF, voice note, or text)
* Transcribes voice using **OpenAI Whisper**
* Extracts data from images using **Google Vision OCR**
* Parses PDFs via **LlamaIndex**
* Uses **OpenAI GPT-4** for intelligent expense categorization and validation
* Categorizes by income/expense, with subcategories like Food, Transport, etc.
* Parses currency and performs logic validation on totals

#### 📊 Logging

* Automatically appends categorized transaction data into **Google Sheets**
* Adds details like date, merchant, item list, payment method, etc.
* Saves both income and expenses with conditional Google Sheet routing

#### 💬 Notifications

* Sends detailed transaction summaries via Telegram
* Warns users of errors or invalid inputs with friendly retry guidance
* Voice-command friendly for hands-free logging

---

### 🔧 How to customize this workflow to your needs

* 🧾 **Add custom expense types** — edit categorization prompts in the GPT node
* 🌎 **Enable multi-language or multi-currency support** by modifying AI prompts
* 🗂️ **Route to different Google Sheets** by user ID, business unit, or project
* 📣 **Expand to other platforms** — Add Slack or email notifications
* 🔍 **Enhance validation** with stricter logic for budgets, tax codes, or policy rules



### 🚀 Setup Instructions

#### Requirements:

* **[n8n instance](https://n8n.partnerlinks.io/khaisastudio) (Cloud or self-hosted)** (Cloud or self-hosted)
* Telegram Bot API credentials
* Google Cloud (Vision API)
* OpenAI API key
* LlamaIndex API key
* Google Sheets API
* Redis (optional, for session memory)

#### Step-by-step:

1. **Import `workflow.json`** into your n8n instance
2. Configure credentials for all services: Telegram, OpenAI, Google, Redis
3. Set up your **Google Sheets** with defined columns
4. Modify AI prompts (optional) for categories and business rules
5. Test by sending a receipt photo, PDF invoice, or voice note to your bot
6. Monitor output in Google Sheets and Telegram summaries



### 🧩 Nodes Used

* **Telegram Trigger + Chat Node** (bot interaction and input selection)
* **Switch/IF nodes** (content-type routing and condition checking)
* **OpenAI Whisper & GPT-4** (voice transcription and categorization)
* **Google Vision OCR** (receipt image processing)
* **LlamaIndex PDF API** (PDF parsing and extraction)
* **Google Sheets Append** (expense logging and formatting)
* **Redis** (session and state tracking)
* **Custom JS nodes** (data transformation and formatting)


---

Made by: [Khaisa Studio](https://khaisa.studio)  
Tag: youtube, summarizer, telegram, openai  
Category: AI Automation, Video Tools
Need a custom? [Contact Me](https://khmuhtadin.com/contact)


*💸 Take control of your finances with zero manual work. Let Smart Money Manager handle the receipts, so you can focus on growing your business.*



## 📊 Basic Information

- **Workflow ID:** 4950
- **Complexity:** advanced
- **Node Count:** 50
- **Views:** 796
- **Downloads:** 79
- **Created:** 2025/6/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4950)

## 👤 Author

- **Name:** Khairul Muhtadin
- **Username:** @khmuhtadin

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **code** (×3)
- **httpRequest** (×6)
- **set** (×4)
- **if** (×7)
- **wait** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **merge** 
- **telegram** (×11)
- **redis** (×3)
- **switch** 
- **telegramTrigger** 
- **stickyNote** (×5)
- **googleSheets** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 50 nodes with 40 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
