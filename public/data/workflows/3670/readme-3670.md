# Medical Q&A chatbot for urology using RAG with Pinecone and GPT-4o

> # Medical Q&A Chatbot for Urology using RAG with Pinecone and GPT-4o

This template provides an AI-powered Q&A assistant for the Urology domain using Retrieval-Augmented Generation (RAG). It uses Pinecone for vector search and GPT-4o for conversational responses.

## 🧠 Use Case

This chatbot is designed for clinics or medical pages that want to automate question answering for Urology-related conditions. It uses a vector store of domain knowledge to return verified responses.

## 🔧 Requirements

- ✅ OpenAI API key (GPT-4o or GPT-4o-mini)
- ✅ Pinecone account with an active index
- ✅ Verified Urology documents embedded into Pinecone

## ⚙️ Setup Instructions

1. Create a Pinecone vector index and connect it using the Pinecone credentials node.
2. Upload Urology-related documents to embed using the `Create Embeddings for Urology Docs` node.
3. Customize the chatbot system message to reflect your medical specialty.
4. Deploy this chatbot on your website or link it with Telegram via the chat trigger node.

## 🛠️ Components

- `chatTrigger`: Listens for user messages and starts the workflow.
- `Medical AI Agent`: GPT-based agent guided by domain-specific instructions.
- `RAG Tool Vector Store`: Fetches relevant documents from Pinecone using vector search.
- `Memory Buffer`: Maintains conversation context.
- `Create Embeddings for Urology Docs`: Encodes documents into vector format.

## 📝 Customization

You can replace the knowledge base with any other medical domain by:
- Updating the documents stored in Pinecone.
- Modifying the system prompt in the AI Agent node.

## 📣 CTA

This chatbot is ideal for clinics, medical consultants, or educational websites wanting a reliable AI assistant in Urology.


## 📊 Basic Information

- **Workflow ID:** 3670
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 3916
- **Downloads:** 391
- **Created:** 2025/4/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3670)

## 👤 Author

- **Name:** HoangSP
- **Username:** @hoangsp

## 🏷️ Categories

- Support Chatbot
- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.toolVectorStore** 
- **@n8n/n8n-nodes-langchain.vectorStorePinecone** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
