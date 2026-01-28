# Answer questions with factual web search using Telegram, Tavily and GPT-5

> # 🧠 Telegram Search Assistant — Tavily + AI/ML API

This **n8n workflow** lets users ask questions in Telegram and receive concise, fact-based answers.  
It performs a **web search with Tavily**, then uses **AIMLAPI (GPT-5)** to summarize results into a clear 3–4 sentence reply.  
The flow ensures grounded, non-hallucinated answers.

---

## 🚀 Features
- 📩 **Telegram-based input**
- ⌨️ **Typing indicator** for better UX
- 🔎 **Web search** with Tavily (JSON results)
- 🧠 **Summarization** with AIMLAPI (`openai/gpt-5-chat-latest`)
- 📤 **Replies** in the same chat/thread
- ✅ **Guardrails** against hallucinations

---

## 🛠 Setup Guide

### 1. 📲 Create Telegram Bot
- Talk to **[@BotFather](https://t.me/BotFather)**
- Use `/newbot` → choose a name and username
- Save the **bot token**

### 2. 🔐 Set Up Credentials in n8n
- **Telegram API**: use your bot token  
- **Tavily**: add your Tavily API key  
- **AI/ML API**: add your API key  
  - Base URL: `https://api.aimlapi.com/v1`  

### 3. 🔧 Configure the Workflow
- Open the **n8n editor** and import the JSON  
- Update credentials for **Telegram**, **Tavily**, and **AIMLAPI**  

---

## ⚙️ Flow Summary

| Node                    | Function                                      |
|--------------------------|-----------------------------------------------|
| 📩 Receive Telegram Msg  | Triggered when user sends text                |
| ⌨️ Typing Indicator      | Shows “typing…” to user                       |
| 🔎 Web Search            | Queries Tavily with user’s message            |
| 🧠 LLM Summarize         | Summarizes search JSON into a factual answer  |
| 📤 Reply to Telegram     | Sends concise answer back to same thread      |

---

## 📁 Data Handling
- By default: **no data stored**  
- Optional: log queries & answers to **Google Sheets** or a **database**

---

## 💡 Example Prompt Flow

**User sends:**
```

When is the next solar eclipse in Europe?

```

**Bot replies:**
```
The next solar eclipse in Europe will occur on August 12, 2026.
It will be visible as a total eclipse across Spain, with partial views in much of Europe.
The maximum eclipse will occur around 17:46 UTC.
```

---

## 🔄 Customization
- Add commands: `/help`, `/sources`, `/news`  
- Apply **rate-limits** per user  
- Extend logging to Google Sheets / DB  
- Add **NSFW / profanity filters** before search  

---

## 🧪 Testing
- Test **end-to-end in Telegram** (not just “Execute Node”)  
- Add a fallback reply if Tavily returns empty results  
- Use sticky notes for debugging & best practices  

---

## 📎 Resources
- 🔗 [AI/ML API Docs](https://docs.aimlapi.com)  
- 🔗 [Tavily Search API](https://tavily.com)  


## 📊 Basic Information

- **Workflow ID:** 8673
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 461
- **Downloads:** 46
- **Created:** 2025/9/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8673)

## 👤 Author

- **Name:** AI/ML API | D1m7asis
- **Username:** @d1m7asis

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **stickyNote** (×10)
- **telegram** (×2)
- **telegramTrigger** 
- **@tavily/n8n-nodes-tavily.tavily** 
- **n8n-nodes-aimlapi.aimlApi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
