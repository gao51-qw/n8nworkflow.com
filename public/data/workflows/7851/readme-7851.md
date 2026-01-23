# Cheaper, faster, accurate answers with memory summarization & dynamic routing!

> # 🤖💬 Smart Telegram AI Assistant with Memory Summarization & Dynamic Model Selection

&gt; **Optimize your AI workflows, cut costs, and get faster, more accurate answers.**

---

## 📋 Description

Tired of expensive AI calls, slow responses, or bots that forget your context?  
This **Telegram AI Assistant template** is designed to **optimize cost, speed, and precision** in your AI-powered conversations.  

By combining **PostgreSQL chat memory**, **AI summarization**, and **dynamic model selection**, this workflow ensures you only pay for what you really need. Simple queries get routed to lightweight models, while complex requests automatically trigger more advanced ones. The result? **Smarter context, lower costs, and better answers.**

This template is perfect for anyone who wants to:  
- ⚡ **Save money** by using cheaper models for easy tasks.  
- 🧠 **Keep context relevant** with AI-powered summarization.  
- ⏱️ **Respond faster** thanks to optimized chat memory storage.  
- 💬 **Deliver better answers** directly inside Telegram.  

---

### ✨ Key Benefits
- 💸 **Cost Optimization**: Automatically routes simple requests to Gemini Flash Lite and reserves Gemini Pro only for complex reasoning.  
- 🧠 **Smarter Context**: Summarization ensures only the most relevant chat history is used.  
- ⏱️ **Faster Workflows**: Storing user + agent messages in a single row reduces DB queries by half and saves ~0.3s per response.  
- 🎤 **Voice Message Support**: Convert Telegram voice notes to text and reply intelligently.  
- 🛡️ **Error-Proof Formatting**: Safe MarkdownV2 ensures Telegram-ready answers.  

---

## 💼 Use Case

This template is for **anyone who needs an AI chatbot on Telegram** that balances **cost, performance, and intelligence**.  

- Customer support teams can **reduce expenses** by using lightweight models for FAQs.  
- Freelancers and consultants can **offer faster AI-powered chats** without losing context.  
- Power users can **handle voice + text seamlessly** while keeping conversations memory-aware.  

Whether you’re scaling a business or just want a smarter assistant, this workflow adapts to your needs and budget.  

---

## 💬 Example Interactions
- **Quick Q&A** → Routed to Gemini Flash Lite for fast, low-cost answers.  
- **Complex problem-solving** → Sent to Gemini Pro for in-depth reasoning.  
- **Voice messages** → Automatically transcribed, summarized, and answered.  
- **Long conversations** → Context is summarized, ensuring precise and efficient replies.  

---

## 🔑 Required Credentials
- **Telegram Bot API** (Bot Token)  
- **PostgreSQL** (Database connection)  
- **Google Gemini API** (Flash Lite, Flash, Pro)  

---

## ⚙️ Setup Instructions
1. 🗄️ **Create the PostgreSQL table** (`chat_memory`) from the Gray section SQL.  
2. 🔌 Configure the **Telegram Trigger** with your bot token.  
3. 🤖 Connect your **Gemini API credentials**.  
4. 🗂️ Set up PostgreSQL nodes with your DB details.  
5. ▶️ Activate the workflow and start chatting with your AI-powered Telegram bot.  

---

## 🏷 Tags
`telegram` `ai-assistant` `chatbot` `postgresql`  
`summarization` `memory` `gemini` `dynamic-routing`  
`workflow-optimization` `cost-saving` `voice-to-text`

---

## 🙏 Acknowledgement

A special thank you to Davide for the inspiration behind this template.  
His work on the [**AI Orchestrator that dynamically selects models based on input type**](https://n8n.io/workflows/7004-ai-orchestrator-dynamically-selects-models-based-on-input-type/) served as a foundational guide for this architecture.


---

## 💡 Need Assistance?

Want to customize this workflow for your business or project? Let’s connect:  

📧 Email: [johnsilva11031@gmail.com](mailto:johnsilva11031@gmail.com)  
🔗 LinkedIn: [John Alejandro Silva Rodríguez](https://www.linkedin.com/in/john-alejandro-silva-rodriguez-48093526b/)  


## 📊 Basic Information

- **Workflow ID:** 7851
- **Complexity:** advanced
- **Node Count:** 36
- **Views:** 1211
- **Downloads:** 121
- **Created:** 2025/8/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7851)

## 👤 Author

- **Name:** John Alejandro SIlva
- **Username:** @alejandro-silva

## 🏷️ Categories

- AI Chatbot
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.modelSelector** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×4)
- **postgres** (×3)
- **code** (×2)
- **telegram** (×3)
- **set** (×4)
- **@n8n/n8n-nodes-langchain.googleGemini** 
- **switch** 
- **telegramTrigger** 
- **aggregate** 
- **@n8n/n8n-nodes-langchain.agent** 
- **stickyNote** (×11)
- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.chainLlm** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 36 nodes with 22 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
