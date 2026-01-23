# Convert Gmail emails to Telegram voice messages with GPT-5 and Inworld TTS

> ## **Who’s it for**

For makers, founders, and productivity nerds who want to **listen to their inbox** instead of reading it.
No servers, no hosting — all done with **n8n**, a **Telegram bot**, and **AI/ML API** (LLM + TTS).

## **What it does / How it works**

This workflow listens for **new Gmail emails**, extracts the sender, subject, date, and snippet, generates a **2–3 sentence natural summary** using GPT-5 via AI/ML API, then converts the text into a **lifelike voice message** using **Inworld TTS-1-Max**.
The final audio file is downloaded and instantly delivered to your Telegram via a bot.

A separate auxiliary flow captures your **Telegram chat_id** once, stores it in a Data Table, and the main flow reuses it every time — no hardcoding required.

High-level flow:

1. Gmail Trigger detects new incoming email
2. Code node builds a clean `emailData` block
3. AI/ML API (GPT-5) generates a natural spoken summary
4. AI/ML API (Inworld TTS-1-Max) converts summary → voice
5. Audio file is downloaded
6. Voice message is sent to the same Telegram chat

## **Requirements**

* A working n8n instance (self-hosted or cloud)
* Gmail OAuth2 credentials
* Telegram bot token from **@BotFather**
* AI/ML API key

  * Base URL: `https://api.aimlapi.com/v1`
  * Supports GPT-5 and Inworld TTS-1-Max

## **Set up steps**

* Create a Telegram bot via **@BotFather** and add Telegram API credentials in n8n
* Create an **AI/ML API** credential using your API key
* Add Gmail OAuth2 credentials for inbox access
* Import the workflow JSON
* Open nodes and attach the correct credentials (no hardcoded tokens inside nodes)
* Run the Telegram Trigger once and send any message to your bot — this saves your `chat_id`
* Activate your workflow and receive your first voice-summary

## **How to customize**

* Replace GPT-5 with another LLM from AI/ML API (same schema)
* Change prompt style: tone, structure, language, or verbosity
* Add language selection or multi-voice support
* Add filters (e.g., only important emails, only starred emails)
* Log all activity to Google Sheets or a database
* Add IF conditions: voice only during certain hours, weekday vs weekend rules
* Add rate-limits or user allowlists
* Change the voice model for different notification styles: corporate, friendly, narrator

## 📊 Basic Information

- **Workflow ID:** 11397
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 43
- **Downloads:** 4
- **Created:** 2025/12/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11397)

## 👤 Author

- **Name:** AI/ML API | D1m7asis
- **Username:** @d1m7asis

## 🏷️ Categories

- Personal Productivity
- Multimodal AI

## 🔗 Nodes Used

- **httpRequest** (×2)
- **n8n-nodes-aimlapi.aimlApi** 
- **dataTable** (×2)
- **telegram** 
- **gmailTrigger** 
- **code** 
- **telegramTrigger** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
