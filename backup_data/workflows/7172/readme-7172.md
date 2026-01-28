# Build a customer support RAG agent with GPT-5, Telegram & Pinecone

> 🧠 RAG-Based Customer Support Agent (GPT-5 + Telegram)
Description:

This workflow builds a powerful Retrieval-Augmented Generation (RAG) Customer Support Agent that interacts with users directly through Telegram using the GPT-5 model. It combines real-time conversational capabilities with context-aware responses by leveraging vector search via Pinecone, making it ideal for automated, intelligent support systems.

Watch Video Tutorial Build on Workflows Like These:
https://www.youtube.com/@Automatewithmarc

💬 Key Features:

Telegram Integration: Listens to customer queries via the Telegram Trigger node and sends back intelligent responses in the same chat.
GPT-5 Agent (LangChain): A powerful AI agent node orchestrates the conversation using OpenAI's GPT-5 model.
Contextual Memory: A Memory Buffer stores the last 15 interactions per user to provide more personalized and coherent multi-turn conversations.

RAG with Pinecone: Integrates with Pinecone to fetch relevant answers from your “Customer FAQ” vector namespace, enabling grounded and accurate responses.
Embeddings Generation: Uses OpenAI’s Embeddings node to process and vectorize documents for retrieval.
End-to-End AI Pipeline: Connects all components from input to output, providing seamless and intelligent customer support.

🔧 Tech Stack:

GPT-5 via OpenAI API
Pinecone vector store (namespace: Customer FAQ)
Telegram Bot API
LangChain agent, memory, and embedding tools
n8n self-hosted or cloud instance

📌 Ideal Use Cases:

Automated customer support for e-commerce, SaaS, or community support
FAQ bots with up-to-date product or policy documents
Multilingual support agents (customizable via GPT-5)

🛠️ Setup Instructions:

Set up your Telegram bot and insert credentials.
Add your OpenAI and Pinecone API keys.
Upload or index your support documents into the Customer FAQ namespace on Pinecone.
Deploy and test your Telegram bot.

## 📊 Basic Information

- **Workflow ID:** 7172
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 1402
- **Downloads:** 140
- **Created:** 2025/8/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7172)

## 👤 Author

- **Name:** Automate With Marc
- **Username:** @marconi

## 🏷️ Categories

- Support Chatbot
- Multimodal AI

## 🔗 Nodes Used

- **telegramTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.vectorStorePinecone** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** 
- **telegram** 
- **stickyNote** (×4)
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
