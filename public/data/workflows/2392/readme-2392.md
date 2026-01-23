# Telegram chat with PDF

> ## What this template does
This template serves as a Chatbot that enables you to ask questions about the content of a PDF directly in Telegream.

It checks incoming Telegram messages if they contain a document. If they do, it stores the PDF in a Pinecone Vector store. If there's no document, it will search the Vector Store for information and try to answer your question.

## Setup
1. Open the Telegram app and search for the BotFather user (@BotFather) 
2. Start a chat with the BotFather 
3. Type /newbot to create a new bot 
4. Follow the prompts to name your bot and get a unique API token 
5. Save your access token and username
Once you set your bot, you can send the pdf, and then ask questions about the content.

## How to adjust it to your needs
- You can exchange the Groq chat model with any model that you like
- Exchange Pinecone with any other vector store tool you like (e.g. Supabase, Postgres or QDrant)

#Telegram, #Pinecone, #Openai, #GroQ

## 📊 Basic Information

- **Workflow ID:** 2392
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 18222
- **Downloads:** 1822
- **Created:** 2024/8/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2392)

## 👤 Author

- **Name:** felipe biava cataneo
- **Username:** @felipecataneo

## 🏷️ Categories

- Document Extraction
- AI RAG

## 🔗 Nodes Used

- **telegramTrigger** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **stopAndError** (×2)
- **@n8n/n8n-nodes-langchain.chainRetrievalQa** 
- **@n8n/n8n-nodes-langchain.retrieverVectorStore** 
- **@n8n/n8n-nodes-langchain.vectorStorePinecone** (×2)
- **@n8n/n8n-nodes-langchain.lmChatGroq** 
- **stickyNote** (×2)
- **if** 
- **code** 
- **telegram** (×3)
- **limit** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
