# 🤖 AI powered RAG chatbot for your docs + Google Drive + Gemini + Qdrant

> # 🤖 AI-Powered RAG Chatbot with Google Drive Integration

This workflow creates a powerful RAG (Retrieval-Augmented Generation) chatbot that can process, store, and interact with documents from Google Drive using Qdrant vector storage and Google's Gemini AI.

## How It Works

### Document Processing & Storage 📚
- Retrieves documents from a specified Google Drive folder
- Processes and splits documents into manageable chunks
- Extracts metadata using AI for enhanced search capabilities
- Stores document vectors in Qdrant for efficient retrieval

### Intelligent Chat Interface 💬
- Provides a conversational interface powered by Google Gemini
- Uses RAG to retrieve relevant context from stored documents
- Maintains chat history in Google Docs for reference
- Delivers accurate, context-aware responses

### Vector Store Management 🗄️
- Features secure delete operations with human verification
- Includes Telegram notifications for important operations
- Maintains data integrity with proper version control
- Supports batch processing of documents

## Setup Steps

1. Configure API Credentials:
   - Set up Google Drive & Docs access
   - Configure Gemini AI API
   - Set up Qdrant vector store connection
   - Add Telegram bot for notifications
   - Add OpenAI Api Key to the '**Delete Qdrant Points by File ID**' node

2. Configure Document Sources:
   - Set Google Drive folder ID
   - Define Qdrant collection name
   - Set up document processing parameters

3. Test and Deploy:
   - Verify document processing
   - Test chat functionality
   - Confirm vector store operations
   - Check notification system


This workflow is ideal for organizations needing to create intelligent chatbots that can access and understand large document repositories while maintaining context and providing accurate responses through RAG technology.


## 📊 Basic Information

- **Workflow ID:** 2982
- **Complexity:** advanced
- **Node Count:** 50
- **Views:** 81912
- **Downloads:** 8191
- **Created:** 2025/2/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2982)

## 👤 Author

- **Name:** Joseph LePage
- **Username:** @joe

## 🏷️ Categories

- Internal Wiki
- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterTokenSplitter** 
- **@n8n/n8n-nodes-langchain.vectorStoreQdrant** (×2)
- **splitInBatches** 
- **wait** 
- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **merge** (×3)
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **extractFromFile** 
- **googleDrive** (×3)
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **set** (×3)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.code** 
- **summarize** 
- **stickyNote** (×15)
- **telegram** (×3)
- **if** 
- **webhook** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **googleDocs** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 50 nodes with 32 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
