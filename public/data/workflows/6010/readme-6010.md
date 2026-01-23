# Multi-department support bot with slash commands, Pinecone & Telegram

> ## My Telegram bot provides specialized support through dedicated slash commands for different departments. Users can directly access the right support team using:

- /billing - For payment and invoice questions
- /tech-support - For technical assistance
- /return-policy - For returns and refunds

## **Key Features:**

- Command-based routing 
- Direct department access via slash commands
## State management 
- Tracks active conversations in PostgreSQL
## Knowledge base integration 
- Pinecone vector stores for each department
## Auto-updating 
- New Google Drive documents automatically populate the knowledge base 
- Context-aware 
- Maintains department choice

## 📊 Basic Information

- **Workflow ID:** 6010
- **Complexity:** advanced
- **Node Count:** 52
- **Views:** 455
- **Downloads:** 45
- **Created:** 2025/7/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6010)

## 👤 Author

- **Name:** moosa
- **Username:** @moosa

## 🏷️ Categories

- Support Chatbot
- AI RAG

## 🔗 Nodes Used

- **switch** (×2)
- **telegram** (×8)
- **@n8n/n8n-nodes-langchain.vectorStorePinecone** (×6)
- **googleDriveTrigger** (×3)
- **googleDrive** (×3)
- **stickyNote** (×6)
- **@n8n/n8n-nodes-langchain.embeddingsCohere** (×6)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** (×3)
- **@n8n/n8n-nodes-langchain.textSplitterCharacterTextSplitter** (×3)
- **telegramTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **postgres** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 52 nodes with 34 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
