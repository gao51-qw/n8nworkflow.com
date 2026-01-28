# Pdf RAG agent with Telegram chat & auto-ingestion from Google Drive

> 
## How it works

This workflow creates an intelligent document assistant called "Mookie" that can answer questions based on your uploaded documents. Here's how it operates:

- **Document Ingestion:** The system can automatically load PDF files from Google Drive or accept PDFs uploaded directly through Telegram, then processes and stores them in a PostgreSQL vector database using Mistral embeddings
- **Smart Retrieval:** When users ask questions via Telegram or a web chat interface, the AI agent searches through the stored documents to find relevant information using vector similarity matching
- **Contextual Responses:** Using GPT-4 and the retrieved document context, Mookie provides accurate answers based solely on the ingested documents, avoiding hallucination by refusing to answer questions not covered in the stored materials
- **Memory & Conversation:** The system maintains conversation history for each user, allowing for natural follow-up questions and contextual discussions

## Set up steps

**Estimated setup time:** 30-45 minutes
You'll need to configure several external services and credentials:

- Set up a PostgreSQL database with PGVector extension for document storage
- Create accounts and API keys for Azure OpenAI (GPT-4), Mistral Cloud (embeddings), and Google Drive access
	- Connect your own LLM's if you don't have these credentials.
- Configure a Telegram bot and obtain API credentials for chat functionality
- Update webhook URLs throughout the workflow to match your n8n instance
- Test the document ingestion pipeline with sample PDFs
- Verify the chat interfaces (both Telegram and web) are responding correctly

&gt;The workflow includes approval mechanisms for PDF ingestion and handles both automated bulk processing from Google Drive and real-time document uploads through Telegram. Read the sticky notes provided in the template code for clear instructions.

## 📊 Basic Information

- **Workflow ID:** 8860
- **Complexity:** advanced
- **Node Count:** 38
- **Views:** 683
- **Downloads:** 68
- **Created:** 2025/9/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8860)

## 👤 Author

- **Name:** Meelioo
- **Username:** @mookielian

## 🏷️ Categories

- Internal Wiki
- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.lmChatAzureOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **httpRequest** (×2)
- **@n8n/n8n-nodes-langchain.embeddingsMistralCloud** (×3)
- **@n8n/n8n-nodes-langchain.vectorStorePGVector** (×3)
- **splitInBatches** 
- **googleDrive** (×2)
- **manualTrigger** 
- **webhook** 
- **@n8n/n8n-nodes-langchain.textSplitterTokenSplitter** 
- **stickyNote** (×6)
- **telegramTrigger** 
- **telegram** (×6)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** (×2)
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **if** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 38 nodes with 27 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
