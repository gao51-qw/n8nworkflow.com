# Create a code assistant that learns from your GitHub repository using OpenAI

> # AI Agent for GitHub
AI Agent to learn directly from your **GitHub repository**.  
It automatically syncs source files, converts them into vectorized knowledge

## How It Works

Provide your **GitHub repository** — the workflow will automatically **pull your source files** and **update the knowledge base (vectorstore)** for the AI Agent.  
This allows the AI Agent to answer questions directly based on your repository’s content.

---

## How to Use

1. **Commit** your files to your GitHub repository.  
2. **Trigger** the `Sync Data` workflow.  
3. **Ask** questions to the AI Agent — it will respond using your repository knowledge.

---

## Requirements

- A valid **GitHub account**  
- An **existing repository** with accessible content  

---

## Customization Options

- Customize the **prompt** for specific or detailed tasks  
- Replace or connect to your own **vector database provider**  


## 📊 Basic Information

- **Workflow ID:** 9993
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 508
- **Downloads:** 50
- **Created:** 2025/10/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9993)

## 👤 Author

- **Name:** Nghia Nguyen
- **Username:** @nghiaaidev

## 🏷️ Categories

- Internal Wiki
- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.toolVectorStore** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **stickyNote** (×3)
- **set** 
- **github** 
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.vectorStoreInMemory** (×2)
- **manualTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
