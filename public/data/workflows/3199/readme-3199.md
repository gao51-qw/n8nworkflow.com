# Google Drive to Pinecone vector storage workflow

> # Document Chat Bot with Automated RAG System

This workflow creates a conversational assistant that can answer questions based on your Google Drive documents. It automatically processes various file types and uses Retrieval-Augmented Generation (RAG) to provide accurate answers based on your document content.

## How It Works

1. **Monitors Google Drive for New Documents**: Automatically detects when files are created or updated in designated folders
2. **Processes Multiple File Types**: Handles PDFs, Excel spreadsheets, and Google Docs
3. **Builds a Knowledge Base**: Converts documents into searchable vector embeddings stored in Supabase
4. **Provides Chat Interface**: Users can ask questions about their documents through a web interface
5. **Retrieves Relevant Information**: Uses advanced RAG techniques to find and present the most relevant information

## Setup Steps (Estimated time: 25-30 minutes)

1. **API Credentials**: Connect your OpenAI API key for text processing and embeddings
2. **Google Drive Integration**: Set up Google Drive triggers to monitor specific folders
3. **Supabase Configuration**: Configure Supabase vector database for document storage
4. **Chat Interface Setup**: Deploy the web-based chat interface using the provided webhook

The workflow automatically chunks documents into manageable segments, generates embeddings, and stores them in a vector database for efficient retrieval. When users ask questions, the system finds the most relevant document sections and uses them to generate accurate, contextual responses.

## 📊 Basic Information

- **Workflow ID:** 3199
- **Complexity:** advanced
- **Node Count:** 35
- **Views:** 281
- **Downloads:** 28
- **Created:** 2025/3/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3199)

## 👤 Author

- **Name:** Muhammad Asadullah
- **Username:** @asadtech

## 🏷️ Categories

- AI
- Personal Productivity

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **stickyNote** (×3)
- **googleDrive** 
- **googleDriveTrigger** (×2)
- **extractFromFile** (×3)
- **supabase** 
- **respondToWebhook** 
- **set** (×4)
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **webhook** 
- **@n8n/n8n-nodes-langchain.textSplitterCharacterTextSplitter** 
- **summarize** 
- **@n8n/n8n-nodes-langchain.agent** 
- **switch** 
- **@n8n/n8n-nodes-langchain.vectorStoreSupabase** (×2)
- **@n8n/n8n-nodes-langchain.toolCalculator** 
- **splitInBatches** (×2)
- **wait** 
- **splitOut** (×2)
- **code** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 35 nodes with 29 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
