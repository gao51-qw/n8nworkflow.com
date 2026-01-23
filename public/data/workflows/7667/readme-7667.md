# PDF proposal knowledge base with S3, OpenAI GPT-4o & Qdrant RAG agent

> ## This template has a two part setup:
1. Ingest PDF files from S3, extract text, chunk, embed with OpenAI embeddings, and index into a Qdrant collection with metadata.
2. Provide a chat entry point that uses an Agent with OpenAI to retrieve from the same Qdrant collection as a tool and answer proposal knowledge questions.

## What it does
- Lists objects in an S3 bucket, loops through keys, downloads each file, and extracts text from PDFs.
- Chunks text and loads it into Qdrant with metadata for retrieval.
- Exposes a chat trigger wired to an Agent using an OpenAI chat model.
- Adds a retrieve as tool Qdrant node so the Agent can ground answers in the indexed corpus.

## Why it is useful
- Simple pattern for building a proposal or knowledge base from PDFs stored in S3.
- End to end path from ingestion to retrieval augmented answers.
- Easy to swap models or collections, and to extend with more tools.

## Setup notes
- Attach your own AWS credentials to the two S3 nodes and set your bucket name.
- Attach your Qdrant credentials to both Qdrant nodes and set your collection.
- Attach your OpenAI credentials to the embedding and chat nodes.
- The sanitized template uses placeholders for bucket and collection names.

## 📊 Basic Information

- **Workflow ID:** 7667
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 904
- **Downloads:** 90
- **Created:** 2025/8/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7667)

## 👤 Author

- **Name:** Joe Swink
- **Username:** @dhawk

## 🏷️ Categories

- AI RAG
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **splitInBatches** 
- **extractFromFile** 
- **@n8n/n8n-nodes-langchain.vectorStoreQdrant** (×2)
- **awsS3** (×2)
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
