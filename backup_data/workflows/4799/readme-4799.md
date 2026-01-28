# Telegram AI chatbot with document-based answers using OpenAI and PGVector RAG

> # 🤖 AI Q&A Chatbot Workflow – Build Your Own AI Agent Trained on Private Documents

This powerful AI automation add-on upgrades your [Telegram Bot Starter Template](https://n8n.io/workflows/2402-telegram-bot-starter-template-setup-and-ai-chatbot/) by integrating a fully functional **AI chatbot** and a **context-aware AI agent** that answers user questions using your internal documents.

Unlike generic bots, this chatbot uses **your own data** to respond with deeply personalized, context-relevant information — perfect for **support**, **onboarding**, **internal knowledge access**, and **client-facing** interactions.

It connects to any **PostgreSQL database** — including [Neon.tech](https://neon.tech), Supabase, or a self-hosted Postgres setup — allowing you to build **custom AI-powered FAQ assistants**, **internal support bots**, or **knowledge-based customer service tools**.

---

## 🧠 Why It Works: Contextual Retrieval

The secret is **Contextual Retrieval** — a powerful technique where your documents are stored in a way that preserves **meaning and context**. This allows the AI to fetch **highly relevant, source-backed responses**, eliminating hallucinations and guesswork.

&gt; Data is embedded, chunked, and saved in a **vector database** (Postgres + PGVector), enabling smart **semantic search** tailored to your needs.

📖 [Learn more about this approach in this article by Anthropic →](https://www.anthropic.com/news/contextual-retrieval)

---

## ✨ Key Features

- **Chat with your internal documents**: Uses your content to answer questions with precision  
- **Built-in document vectorization**: Pre-configured Google Drive ingestion flow (Notion, Airtable, Dropbox available separately)  
- **Contextual memory**: Past chats stored in PostgreSQL for personalized conversations  
- **Plug-and-play architecture**: Connect Supabase, OpenAI, custom APIs via n8n’s interface  

---

## 👤 Who Can Use This Workflow?

- **Entrepreneurs & startups** building branded AI chatbots without code  
- **Customer support teams** automating answers using documentation  
- **Ops teams** creating internal FAQ bots for onboarding and training  
- **No-code developers** using n8n to build Telegram bots with AI features  

---

## ⚙️ Setup Instructions

You'll find **step-by-step instructions** inside the workflow.

### Quick Setup Overview:

1. Import the workflow into n8n (cloud or self-hosted)  
2. Add your Telegram Bot credentials  
3. Connect your PostgreSQL DB (Neon, Supabase, etc.)  
4. Set up document ingestion from Google Drive  
5. Activate the workflow and start chatting  

---

## 🧩 Extensibility

This workflow is modular and ready to expand. Build powerful assistants by connecting additional workflows:

- **Vectorization modules** for Notion, Airtable, Dropbox, and others  
- **Any vector DB**: Neon.tech, Supabase, or self-hosted PGVector  
- ✍🏻 [Telegram User Registration Module →](https://viktorgubanov.gumroad.com)  
- 💵 [Telegram Payment, Invoicing & Refund Module →](https://viktorgubanov.gumroad.com)

---

## 🧠 More Smart AI Agents

Explore more AI workflows and agents on [my Gumroad →](https://viktorgubanov.gumroad.com)

- 🌐 **Agent: Find in the Internet** — fetches live info from the web  
- 📁 **Agent: Search Internal Docs** — queries Notion, Google Drive, etc.  
- 📦 **Agent: Check Order Status** — reads status from Airtable or CRM  
- 💰 **Agent: Calculate Cost or Quote** — builds pricing logic from inputs  

📨 [Submit your idea here for a custom AI agent →](https://tally.so/r/wQaeJA)

## 📊 Basic Information

- **Workflow ID:** 4799
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 959
- **Downloads:** 95
- **Created:** 2025/6/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4799)

## 👤 Author

- **Name:** Victor Gold
- **Username:** @victorlucky

## 🏷️ Categories

- Support Chatbot
- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **stickyNote** (×5)
- **googleDrive** 
- **googleDriveTrigger** (×2)
- **extractFromFile** 
- **set** (×3)
- **@n8n/n8n-nodes-langchain.agent** 
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **code** 
- **splitOut** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.vectorStorePGVector** (×2)
- **postgres** 
- **executeWorkflowTrigger** 
- **@n8n/n8n-nodes-langchain.memoryPostgresChat** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 23 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
