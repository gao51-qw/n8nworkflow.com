# Upsert huge documents in a vector store with Supabase and Notion

> ## Purpose

This workflow adds the capability to build a RAG on living data. In this case Notion is used as a Knowledge Base. Whenever a page is updated, the embeddings get upserted in a Supabase Vector Store.

It can also be fairly easily adapted to PGVector, Pinecone, or Qdrant by using a custom HTTP request for the latter two.

## Demo

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/ELAxebGmspY/0.jpg)](https://youtu.be/ELAxebGmspY)

## How it works

- A trigger checks every minute for changes in the Notion Database. The manual polling approach improves accuracy and prevents changes from being lost between cached polling intervals.
- Afterwards every updated page is processed sequentially
- The Vector Database is searched using the Notion Page ID stored in the metadata of each embedding. If old entries exist, they are deleted.
- All blocks of the Notion Database Page are retrieved and combined into a single string
- The content is embedded and split into chunks if necessary. Metadata, including the Notion Page ID, is added during storage for future reference.
- A simple Question and Answer Chain enables users to ask questions about the embedded content through the integrated chat function

## Prerequisites

- To setup a new Vector Store in Supabase, follow [this guide](https://supabase.com/docs/guides/ai/vector-columns)
- Prepare a simple Database in Notion with each Database Page containing at least a title and some content in the blocks section. You can of course also connect this to an existing Database of your choice.

## Setup

- Select your credentials in the nodes which require those
- If you are on an n8n cloud plan, switch to the native Notion Trigger by activating it and deactivating the Schedule Trigger along with its subsequent Notion Node
- Choose your Notion Database in the first Node related to Notion
- Adjust the chunk size and overlap in the Token Splitter to your preference
- Activate the workflow

## How to use

Populate your Notion Database with useful information and use the chat mode of this workflow to ask questions about it. Updates to a Notion Page should quickly reflect in future conversations.

## 📊 Basic Information

- **Workflow ID:** 2568
- **Complexity:** advanced
- **Node Count:** 34
- **Views:** 13937
- **Downloads:** 1393
- **Created:** 2024/11/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2568)

## 👤 Author

- **Name:** Mario
- **Username:** @octionic

## 🏷️ Categories

- Internal Wiki
- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** 
- **@n8n/n8n-nodes-langchain.textSplitterTokenSplitter** 
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.chainRetrievalQa** 
- **@n8n/n8n-nodes-langchain.retrieverVectorStore** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **scheduleTrigger** 
- **stickyNote** (×15)
- **limit** (×2)
- **supabase** 
- **notion** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **noOp** 
- **notionTrigger** 
- **@n8n/n8n-nodes-langchain.vectorStoreSupabase** (×2)
- **summarize** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 34 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
