# Document Q&A chatbot with Gemini AI and Supabase vector search for Telegram

> This template creates a Telegram AI Assistant that answers questions based on your documents, powered by Google Gemini and Supabase. Key features include **Intelligent HTML Post-processing** for **rich formatting in Telegram** and **Adaptive Message Chunking** to handle long text responses.
## 📹 Watch the Bot in Action

[![𝗨𝗻𝗹𝗲𝗮𝘀𝗵𝗶𝗻𝗴 𝗔𝗜 𝗼𝗻 𝗠𝘆 𝗕𝗼𝗼𝗸𝘀𝗵𝗲𝗹𝗳: 𝗙𝗹𝗼𝘄 𝗣𝗿𝗼𝗴𝗿𝗮𝗺𝗺𝗶𝗻𝗴 𝗣𝗼𝘄𝗲𝗿𝘀 𝗮 𝗡𝗲𝘅𝘁-𝗟𝗲𝘃𝗲𝗹 𝗧𝗲𝗹𝗲𝗴𝗿𝗮𝗺 𝗕𝗼𝘁🤖](https://img.youtube.com/vi/r_KGyJApy5M/maxresdefault.jpg)](https://www.youtube.com/watch?v=r_KGyJApy5M)

**▶️ Click the image above to watch a live demo on YouTube.** 

This video provides a live demonstration of the bot's core features and how it interacts. See a quick walkthrough of its capabilities and user flow.

**How it works:**

* User uploads a PDF document to a Telegram bot.

* The workflow processes the PDF, creates embeddings using Google Gemini, and stores these embeddings in a **Supabase vector table**.

* Users then ask questions to the bot.

* The workflow performs a **vector search in Supabase** to find relevant document chunks based on the user's query.

* Google Gemini uses the retrieved relevant chunks to generate an intelligent answer.

* The bot sends the formatted answer back to the user on Telegram, utilizing **HTML markup** for enhanced presentation.

**Set up steps:**

Setup should take approximately 15-20 minutes.

1.  Import the workflow into your n8n instance.

2.  Configure credentials for Telegram, Google Gemini, and Supabase.

3.  Set up your Supabase vector table using the provided SQL script.

4.  Activate the workflow.

Detailed setup instructions, including how to get API keys and configure nodes, are available in the sticky notes within the workflow itself.

## 📊 Basic Information

- **Workflow ID:** 3940
- **Complexity:** advanced
- **Node Count:** 28
- **Views:** 19376
- **Downloads:** 1937
- **Created:** 2025/5/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3940)

## 👤 Author

- **Name:** Mohammad Ghaffarifar
- **Username:** @mohamadghaffari

## 🏷️ Categories

- Personal Productivity
- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **openWeatherMapTool** 
- **@n8n/n8n-nodes-langchain.agent** 
- **telegramTrigger** 
- **telegram** (×7)
- **@n8n/n8n-nodes-langchain.toolThink** 
- **@n8n/n8n-nodes-langchain.embeddingsGoogleGemini** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **extractFromFile** 
- **@n8n/n8n-nodes-langchain.toolVectorStore** 
- **@n8n/n8n-nodes-langchain.vectorStoreSupabase** (×2)
- **stickyNote** (×3)
- **switch** 
- **aggregate** 
- **splitOut** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **code** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 28 nodes with 21 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
