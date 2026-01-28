# Article to LinkedIn post generator with Telegram, GPT-4 & Google Sheets

> # 🚀 **Automated LinkedIn Post Generator from Article Links (Telegram → AI → Google Sheets → LinkedIn)**

This workflow lets you collect article links through a Telegram bot, automatically analyze and summarize them with AI, store everything neatly in Google Sheets, and generate polished LinkedIn posts **on demand** whenever the user types “generate”.

Perfect for creators, marketers, and founders who want to post consistently without spending hours analyzing articles or writing drafts.

---

# 🧠 **How It Works**

### **1️⃣ User Sends Articles via Telegram**

Your Telegram bot is the main input point.
Whenever the user drops a link, the workflow:

* Detects the URL
* Fetches the content
* Sends it to AI for analysis

This keeps the process simple.

---

### **2️⃣ AI Analyzes & Summarizes the Article**

The workflow uses your LLM (OpenAI, Anthropic, etc.) to:

* Summarize the article
* Extract key insights
* Identify main arguments
* Capture tone and context

It produces a clean, structured dataset for each link.

---

### **3️⃣ Everything is Saved into Google Sheets**

Each article becomes a new row in your Google Sheet.
The sheet serves as your **content library** with fields like:

* Date
* Title
* Link
* Summary
* Insights Commentary

You can save dozens of articles and generate posts from any of them later.

---

### **4️⃣ User Requests a Post with “generate”**

When the user types **“generate”**, the workflow will:

* Pull the latest article(s) from Google Sheets (or any selection logic you choose)
* Build a LinkedIn-ready post using AI
* Apply the requested tone/style
* Format it as a clean, professional post

The final post is sent right back to Telegram — ready to copy/paste into LinkedIn.

---

# 🛠️ **Setup Steps**

### **🔧 1. Create a Telegram Bot**

1. Go to **@BotFather** on Telegram
2. Create a new bot
3. Copy the API token
4. Paste the token into the **Telegram Trigger** node in n8n

---

### **🔧 2. Add Your AI Credentials**

1. Go to **Credentials → OpenAI (or your provider)**
2. Add your API key
3. Select this credential in all AI nodes
   You can switch to GPT-4o, GPT-4o-mini, or any model you prefer.

---

### **🔧 3. Connect Google Sheets**

1. Go to **Credentials → Google**
2. Authenticate with your Google account
3. Make sure the sheet contains the required columns:

  * Date
* Title
* Link
* Summary
* Insights Commentary


You can customize or add additional columns as needed.

---

### **🔧 4. Adjust Workflow Logic (Optional)**

You can modify:

* How the AI summarizes
* The LinkedIn post style
* How posts are selected (latest, random, specific tone, etc.)
* Whether you store more metadata
* Multi-language support

Everything is modular.

---

### **🔧 5. Test the Flow**

1. Send yourself a link via the Telegram bot
2. Check that it appears in Google Sheets
3. Type **“generate”**
4. Receive your LinkedIn post instantly

---

# 🎉 **You’re Ready!**

This workflow helps you build a personal content pipeline that:

* Collects links
* Saves ideas
* Summarizes insights
* Generates LinkedIn posts on demand

All directly from your phone, inside Telegram.

If you remix or extend this template, I’d love to see what you build!


## 📊 Basic Information

- **Workflow ID:** 11279
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 177
- **Downloads:** 17
- **Created:** 2025/11/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11279)

## 👤 Author

- **Name:** Shachar Shamir
- **Username:** @dilldawn

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **set** (×2)
- **stickyNote** (×4)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **telegramTrigger** 
- **telegram** (×2)
- **if** (×2)
- **code** 
- **googleSheets** 
- **googleSheetsTool** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
