# Extract context from voice notes with OpenRouter AI & Milvus for RAG systems

> # Voice Note Context Extraction Pipeline with AI Agent & Vector Storage


### This n8n template demonstrates how to automatically extract and store contextual information from voice notes using AI agents and vector databases for future retrieval.


### How it works

- **Webhook trigger** receives voice note data including title, transcript, and timestamp from external services (example here: voicenotes.com)
- **Field extraction** isolates the key data fields (title, transcript, timestamp) for processing
- **AI Context Agent** processes the transcript to extract meaningful context while:
  - Correcting speech-to-text errors
  - Converting first-person references to third-person facts
  - Filtering out casual conversation and focusing on significant information
- **Output formatting** structures the extracted context with timestamps for embedding
- **File conversion** prepares the context data for vector storage
- **Vector embedding** uses OpenAI embeddings to create searchable representations
- **Milvus storage** stores the embedded context for future retrieval in RAG applications

### How to use

- Configure the webhook endpoint to receive data from your voice note service
- Set up credentials for OpenRouter (LLM), OpenAI (embeddings), and Milvus (vector storage)
- Customize the AI agent's system prompt to match your context extraction needs
- The workflow automatically processes incoming voice notes and stores extracted context

### Requirements

- OpenRouter account for LLM access
- OpenAI API key for embeddings
- Milvus vector database (cloud or self-hosted)
- Voice note service with webhook capabilities (e.g., Voicenotes.com)

### Customizing this workflow

- **Modify the context extraction prompt** to focus on specific types of information (preferences, facts, relationships)
- **Add filtering logic** to process only voice notes with specific tags or keywords
- **Integrate with other storage** systems like Pinecone, Weaviate, or local vector databases
- **Connect to RAG systems** to use the stored context for enhanced AI conversations
- **Add notification nodes** to confirm successful context extraction and storage

### Use cases

- **Personal AI assistant** that remembers your preferences and context from voice notes
- **Knowledge management** system for capturing insights from recorded thoughts
- **Content creation** pipeline that extracts key themes from voice recordings
- **Research assistant** that builds context from interview transcripts or meeting notes

## 📊 Basic Information

- **Workflow ID:** 7430
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 546
- **Downloads:** 54
- **Created:** 2025/8/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7430)

## 👤 Author

- **Name:** Daniel Rosehill
- **Username:** @danielrosehill

## 🏷️ Categories

- Engineering
- Multimodal AI

## 🔗 Nodes Used

- **webhook** 
- **set** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **convertToFile** 
- **@n8n/n8n-nodes-langchain.vectorStoreMilvus** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
