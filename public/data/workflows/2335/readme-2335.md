# Build a financial documents assistant using Qdrant and Mistral.ai

> This n8n workflow demonstrates how to manage your Qdrant vector store when there is a need to keep it in sync with local files. It covers creating, updating and deleting vector store records ensuring our chatbot assistant is never outdated or misleading.

## Disclaimer
This workflow depends on local files accessed through the local filesystem and so will only work on a self-hosted version of n8n at this time. It is possible to amend this workflow to work on n8n cloud by replacing the local file trigger and read file nodes.

## How it works
* A local directory where bank statements are downloaded to is monitored via a local file trigger. The trigger watches for the file create, file changed and file deleted events.
* When a file is created, its contents are uploaded to the vector store.
* When a file is updated, its previous records are replaced.
* When the file is deleted, the corresponding records are also removed from the vector store.
* A simple Question and Answer Chatbot is setup to answer any questions about the bank statements in the system.

## Requirements
* A self-hosted version of n8n. Some of the nodes used in this workflow only work with the local filesystem.
* Qdrant instance to store the records.

## Customising the workflow

This workflow can also work with remote data. Try integrating accounting or CRM software to build a managed system for payroll, invoices and more.

## Want to go fully local?

A version of this workflow is available which uses Ollama instead. You can download this template here: https://drive.google.com/file/d/189F1fNOiw6naNSlSwnyLVEm_Ho_IFfdM/view?usp=sharing

## 📊 Basic Information

- **Workflow ID:** 2335
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 18963
- **Downloads:** 1896
- **Created:** 2024/7/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2335)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- Document Extraction
- AI RAG

## 🔗 Nodes Used

- **localFileTrigger** 
- **manualTrigger** 
- **set** (×3)
- **stickyNote** (×6)
- **readWriteFile** 
- **@n8n/n8n-nodes-langchain.embeddingsMistralCloud** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.chainRetrievalQa** 
- **@n8n/n8n-nodes-langchain.lmChatMistralCloud** 
- **@n8n/n8n-nodes-langchain.retrieverVectorStore** 
- **httpRequest** (×4)
- **if** (×2)
- **switch** 
- **@n8n/n8n-nodes-langchain.vectorStoreQdrant** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 20 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
