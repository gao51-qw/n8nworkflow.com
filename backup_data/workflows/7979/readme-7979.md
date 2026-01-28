# Chat with Google Drive documents using GPT, Pinecone, and RAG

> ## 📌 Short Overview

Automatically sync files from Google Drive into a searchable AI knowledge base with Pinecone, and answer user queries using GPT-4o with conversational memory.

⸻

## 🛠️ Workflow Usage Steps

### 1.	Watch Google Drive for file changes
Trigger the workflow when a new file is uploaded or an existing file is updated in a specific Google Drive folder.
### 2.	Download and process the file
Retrieve the file, split it into smaller text chunks with a Recursive Character Text Splitter, and generate vector embeddings using OpenAI.
### 3.	Store embeddings in Pinecone
Save the embeddings in a Pinecone vector database to keep your knowledge base continuously updated and searchable.
### 4.	Search context for chat queries
When a user asks a question, query Pinecone for relevant context, combine results with conversational memory, and process them with GPT-4o.
### 	5.	Respond with AI-powered answers
Provide a concise response (100–200 words) that blends knowledge from your documents with the conversation history.

⸻

## ✅ Use Cases
•	Keep a live, AI-ready knowledge base from your Google Drive files.
	•	Enable team members to query company documents instantly.
	•	Build a personal assistant that stays up to date with your latest uploads.


## ⚙️ Setup Steps
1.	Google Drive
	•	Create a Google Cloud project.
	•	Enable the Google Drive API.
	•	Generate OAuth credentials and connect them in n8n.
2.	OpenAI
	•	Sign up at OpenAI.
	•	Copy your API key from the dashboard.
	•	Add it to n8n under Credentials → OpenAI API.
3.	Pinecone
	•	Create an account at Pinecone.
	•	Create a new index (e.g., docs-embeddings).
	•	Copy your API key and environment, then add them to n8n under Credentials → Pinecone API.
4.	Workflow Configuration
	•	Import this workflow into your n8n instance.
	•	Select the Google Drive folder you want to monitor.
	•	Set the Pinecone index name in the workflow.
	•	Adjust chunk size / overlap in the text splitter if needed.
5.	Test the Workflow
	•	Upload a new document to your Google Drive folder.
	•	Run the workflow to confirm embeddings are created and stored in Pinecone.
	•	Ask a sample query and verify the AI returns a context-aware answer.

## 📊 Basic Information

- **Workflow ID:** 7979
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 1769
- **Downloads:** 176
- **Created:** 2025/8/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7979)

## 👤 Author

- **Name:** Marko
- **Username:** @perspectalog

## 🏷️ Categories

- AI RAG
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.toolVectorStore** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **stickyNote** (×4)
- **@n8n/n8n-nodes-langchain.agent** 
- **googleDrive** (×2)
- **googleDriveTrigger** (×2)
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.vectorStorePinecone** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
