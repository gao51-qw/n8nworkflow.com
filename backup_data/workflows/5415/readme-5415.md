# Multi-agent personal assistant orchestration with GPT-4o & WhatsApp

> ## Description  

'Elena AI' is a powerful n8n workflow that transforms your automation platform into a full-fledged, multi-agent AI hub. 🤖✨ By combining Redis state management with specialized “tool” sub-workflows, you can build contextual, scalable, and highly personalized conversational automations for WhatsApp, Telegram, email, and more.

## 🔥 Key Features  
- **Unified Ingestion** 📥  
  • Webhook trigger for text, audio, image, or document messages  
  • Automatic extraction of `remoteJid`, user ID, and payload metadata  
- **Stateful Context** 🔄  
  • Redis push/get queue to preserve conversation history  
  • Seamless handling of follow-ups and multi-turn dialogs  
- **Dynamic Routing** 🔀  
  • Smart Switch logic directs messages to the right agent workflow  
  • Agents available:  
    - 🗓️ **Malu**: Google Calendar scheduling & reminders  
    - 💰 **Maria**: Expense logging & budget tracking in Baserow  
    - 👥 **Mafalda**: Contact CRUD operations in Baserow  
    - 📸 **Marcela**: Audio transcription & image analysis  
    - ✉️ **Martina**: Gmail send/receive & template replies  
- **Bite-Sized Responses** ✂️  
  • Splits long AI replies into line-by-line messages  
  • Loop node controls rate & order for best UX  
- **Flexible Output** 📤  
  • HTTP Request node to deliver text, media, or files  
  • Customize headers, payloads, and endpoints  

## 🎯 Use Cases  
- AI-powered customer support bots  
- Automated lead qualification & follow-up  
- Intelligent scheduling & reminders  
- Expense approval workflows  
- Multimedia content analysis & response  

## 📋 Requirements  
- **n8n ≥ 1.0** with **Webhook**, **Redis**, **SplitInBatches**, **HTTP Request** & **Workflow** nodes  
- **Redis** server (connection credentials in n8n)  
- Service accounts / API keys for:  
  - Google Calendar (OAuth2)  
  - Baserow (API token)  
  - Gmail (OAuth2)  
  - Messaging API endpoint (HTTP)  
- Environment variables set in n8n:  
  - `REDIS_HOST`, `REDIS_PORT`, `REDIS_PASSWORD`  
  - `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`  
  - `BASEROW_API_TOKEN`  
  - `GMAIL_CLIENT_ID`, `GMAIL_CLIENT_SECRET`  
  - `MSG_API_URL`, `MSG_API_KEY`  

## 🚀 Quick Start  
1. **Import** the `ElenaAI.json` into n8n.  
2. **Configure** credentials and environment variables under **Settings → Credentials**.  
3. **Link** sub-workflows (Malu, Maria, Mafalda, Marcela, Martina) by updating their Workflow IDs in the main node.  
4. **Test** via Execute node or send a sample webhook payload.  
5. **Deploy** by exposing the Webhook endpoint to your messaging platform.  

Unlock seamless, AI-driven conversations across any channel—get MavenBot 2.0 running in minutes! 🚀  

## 📊 Basic Information

- **Workflow ID:** 5415
- **Complexity:** advanced
- **Node Count:** 49
- **Views:** 597
- **Downloads:** 59
- **Created:** 2025/6/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5415)

## 👤 Author

- **Name:** Amanda Benks
- **Username:** @amanda

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **redis** (×3)
- **wait** (×3)
- **if** (×3)
- **noOp** (×2)
- **set** (×10)
- **httpRequest** (×5)
- **convertToFile** (×3)
- **switch** (×2)
- **splitOut** 
- **splitInBatches** 
- **supabase** (×3)
- **@n8n/n8n-nodes-langchain.openAi** (×3)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **crypto** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.memoryPostgresChat** 
- **webhook** 
- **merge** 
- **extractFromFile** (×2)
- **supabaseTool** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 49 nodes with 47 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
