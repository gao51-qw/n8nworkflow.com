# 🧑‍⚖️ Ai legal assistant agent — AI-powered legal Q&A with document retrieval

> 🧑‍⚖️ AI Legal Assistant Agent — AI-Powered Legal Q&A with Document Retrieval

Category: LegalTech / AI Agent / RAG / Chatbot

Description:
This no-code AI agent acts as a legal assistant chatbot that can answer user queries by retrieving information from a pre-indexed legal document library. It’s powered by OpenAI + Pinecone + Telegram and designed for law firms, compliance teams, or anyone who needs instant answers from contracts, policies, or regulatory documents.

For more of such builds and step-by-step video tutorial, check out:
https://www.youtube.com/@Automatewithmarc

🔍 How it Works:

Telegram Trigger – Starts when a user sends a message via Telegram.

AI Agent (Open AI Model) – Uses a retrieval-augmented generation (RAG) setup to understand the question and pull relevant context.

Pinecone Vector Store – Searches across a vectorized legal contract library for relevant clauses or documents.

OpenAI Embeddings – Converts uploaded documents into vector embeddings for efficient search.

Memory Buffer – Maintains conversation flow and context for follow-up questions.

Telegram Response – Sends the final AI-generated answer directly to the user.

🎯 Use Cases:

In-house legal teams automating internal policy Q&A

Law firms building client-facing legal bots

Startups offering legal tech services with document-based queries

Compliance teams monitoring contract terms and obligations

✅ Key Features:

Real-time legal Q&A via Telegram

Pinecone + OpenAI-powered vector search

Retrieval-Augmented Generation (RAG) setup

Factual, memory-aware assistant with fallback if info is unavailable

Fully customizable and extendable

⚙️ Setup Instructions:

Connect OpenAI, Pinecone, and Telegram credentials

Upload your contracts or policy docs into Pinecone

Customize the system prompt or expand document sources as needed

Activate and test via Telegram

This workflow is a solid foundation for any AI-powered legal assistant or chatbot solution—highly relevant for modern LegalOps and knowledge management teams.

## 📊 Basic Information

- **Workflow ID:** 5294
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 12196
- **Downloads:** 1219
- **Created:** 2025/6/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5294)

## 👤 Author

- **Name:** Automate With Marc
- **Username:** @marconi

## 🏷️ Categories

- Internal Wiki
- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** 
- **@n8n/n8n-nodes-langchain.vectorStorePinecone** 
- **telegram** 
- **telegramTrigger** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
