# 🌍 AI interpreter and translator for WhatsApp – translate voice & text

> ![AI Translation N8N](https://i.ibb.co/JWJWP03y/AI-Translator-for-Whats-App-N8-N.png)

### 🌍 AI WhatsApp Translator – Multilingual Voice & Text Translator for n8n

Hi! I'm Bruno — I’ve been building AI-powered workflows for n8n and Make for 2+ years, focused on smart automation and real conversational agents.

This powerful workflow allows you to receive WhatsApp messages (text or audio), automatically **detect the sender’s language** using their phone prefix, **translate the content** using GPT-4o via LangChain, and **reply instantly** via WhatsApp — all with native tone and cultural fluency.

It’s ideal for international support, global communities, multilingual bots, and agencies managing clients from different countries.

---

### 🔧 How it works

1. Message (text or voice) is received via webhook (WhatsApp API or Evolution API)
2. Sender's prefix is mapped to a country/language
3. Audio messages are transcribed using **OpenAI Whisper**
4. The text is translated using **LangChain agent with GPT-4o**
5. The reply is structured in JSON and sent back via WhatsApp

---

### 🧰 Nodes & Tech Used

- **HTTP Request** (Webhook & API calls)
- **OpenAI Whisper** (Audio transcription)
- **LangChain + GPT-4o** (LLM for translation)
- **If, Set, Merge** (Routing and logic)
- **Custom JSON response** for WhatsApp formats

---

### 📌 What you’ll need

- OpenAI API key  
- WhatsApp API or Evolution API access  
- n8n (Cloud or self-hosted)  
- (Optional) Typebot, Airtable, CRM for integration

---

### 🛒 Want to use it?

❤️ Buy workflows: [https://iloveflows.com](https://iloveflows.com)  
☁️ Try n8n Cloud: [https://n8n.partnerlinks.io/amanda](https://n8n.partnerlinks.io/amanda)


## 📊 Basic Information

- **Workflow ID:** 3875
- **Complexity:** advanced
- **Node Count:** 69
- **Views:** 1012
- **Downloads:** 101
- **Created:** 2025/5/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3875)

## 👤 Author

- **Name:** Bruno Dias
- **Username:** @brunodias

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **convertToFile** (×3)
- **@n8n/n8n-nodes-langchain.openAi** (×3)
- **webhook** 
- **@n8n/n8n-nodes-langchain.agent** (×3)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×4)
- **filter** (×3)
- **@n8n/n8n-nodes-langchain.toolCalculator** (×3)
- **httpRequest** (×6)
- **if** (×5)
- **code** (×4)
- **@n8n/n8n-nodes-langchain.textClassifier** (×2)
- **@n8n/n8n-nodes-langchain.lmChatGroq** 
- **stickyNote** (×25)
- **@n8n/n8n-nodes-langchain.toolThink** (×3)
- **set** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 69 nodes with 41 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
