# Conversational sales agent for WooCommerce with GPT-4, Stripe and CRM integration

> ## 📄 What this workflow does
This workflow transforms your n8n instance into a fully automated AI sales assistant for WooCommerce stores. It detects customer intent from chat, searches products, answers FAQs, generates Stripe payment links, captures leads into your CRM, and even escalates to human support when needed. It provides smooth conversational memory and syncs with your knowledge base to ensure accurate, human-like responses.

## 👤 Who is this for
- WooCommerce store owners who want to automate customer support and sales.
- Sales and marketing teams looking to scale personalized product recommendations.
- E-commerce managers who want to reduce manual chat handling.
- Anyone aiming to integrate AI assistants with payments, CRM, and FAQs.


## ✅ Requirements
- WooCommerce account with API access.
- Qdrant vector store (for FAQ and RAG retrieval).
- OpenAI/Gemini API credentials (for intent detection + message generation).
- Google Drive account (to sync and update knowledge base docs).
- Stripe account (to generate instant payment links).
- CRM account (HubSpot, Pipedrive, etc.) if lead capture is required.
- Telegram account for optional human escalation.

## ⚙️ How to set up
- Connect WooCommerce API credentials in n8n.
- Configure Gemini/OpenAI API for intent extraction and chat generation.
- Set up Qdrant for document retrieval, and link to your Google Drive Sales Docs folder.
- Configure Stripe API to enable instant payment link generation.
- Connect your CRM to capture new leads automatically.
- Add Telegram bot credentials for human escalation (optional).
- Enable conversational memory and test chat flows end-to-end.


## 🔁 How it works
1. Intent Extraction → AI analyzes chat messages to detect Product Search, FAQ, Payment, or Lead Capture.
2. Product Search → Queries WooCommerce catalog by keyword, SKU, or price range.
3. FAQ Answering → Retrieves company policies/docs from Qdrant + Google Drive, answered via RAG.
4. Payment Links → Stripe generates instant checkout links for customers ready to buy.
5. Lead Capture → Name + email are auto-stored into CRM.
6. Human Escalation → If intent is unclear, conversation is forwarded to Telegram.
7. Conversational Memory → Maintains last 12 exchanges for natural dialogue.
8. Knowledge Sync → Google Drive docs auto-update into Qdrant for live FAQ support.


## 💡 About Margin AI
[Margin AI](https://marginai.co/) is an AI-services agency that acts as your AI Service Companion. We design intelligent, human-centric automation solutions—turning your team’s best practices into scalable workflows and tools. Industries like marketing, sales, and operations benefit from our tailored AI consulting, automation tools, and chatbot development.


## 📊 Basic Information

- **Workflow ID:** 8011
- **Complexity:** advanced
- **Node Count:** 27
- **Views:** 591
- **Downloads:** 59
- **Created:** 2025/8/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8011)

## 👤 Author

- **Name:** Cong Nguyen
- **Username:** @cong-nguyen

## 🏷️ Categories

- Lead Nurturing
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **manualTrigger** 
- **set** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.vectorStoreQdrant** (×2)
- **@n8n/n8n-nodes-langchain.toolVectorStore** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **wooCommerceTool** (×2)
- **@n8n/n8n-nodes-langchain.toolWorkflow** (×2)
- **telegramTool** 
- **httpRequest** 
- **googleDrive** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterTokenSplitter** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 27 nodes with 22 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
