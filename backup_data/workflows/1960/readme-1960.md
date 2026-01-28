# Ask questions about a PDF using AI

> The workflow first populates a Pinecone index with vectors from a Bitcoin whitepaper. Then, it waits for a manual chat message. When received, the chat message is turned into a vector and compared to the vectors in Pinecone. The most similar vectors are retrieved and passed to OpenAI for generating a chat response.

Note that to use this template, you need to be on n8n version 1.19.4 or later.

## 📊 Basic Information

- **Workflow ID:** 1960
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 138958
- **Downloads:** 13895
- **Created:** 2023/10/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1960)

## 👤 Author

- **Name:** David Roberts
- **Username:** @davidn8n

## 🏷️ Categories

- Internal Wiki
- AI RAG

## 🔗 Nodes Used

- **stickyNote** (×3)
- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.vectorStorePinecone** (×2)
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **set** 
- **googleDrive** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
