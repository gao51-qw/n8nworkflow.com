# Document-based chatbot with memory using OpenAI, Pinecone and Google Drive

> **Who is This For?**
This is for normal people or people just starting off and wanting to have a AI chatbot that can process data to use when talking to the user.

**How to Use**
You will need to have your own OpenRouter (Free) and OpenAI APIs as well as Google Drive, Pinecone, and Airtable.

**What Do You Want?**
If you want to have your AI Agent remember the user's preferences even after the session is over then you can keep the Airtable node in, if not you can delete it.

## 📊 Basic Information

- **Workflow ID:** 4930
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 3880
- **Downloads:** 388
- **Created:** 2025/6/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4930)

## 👤 Author

- **Name:** Sally
- **Username:** @dark-pixel

## 🏷️ Categories

- Personal Productivity
- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **airtableTool** 
- **airtable** 
- **aggregate** 
- **merge** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **manualTrigger** 
- **googleDrive** (×2)
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.vectorStorePinecone** (×2)
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **@n8n/n8n-nodes-langchain.toolVectorStore** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **stickyNote** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
