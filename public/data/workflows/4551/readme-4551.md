# AI-Powered RAG Document Processing & Chatbot with Google Drive, Supabase, OpenAI

> ## **Who is this for?**

This workflow is perfect for:

* Businesses and teams who need an automated solution to organize, analyze, and retrieve insights from their internal documents.
* Researchers who want to quickly analyze and query large collections of research papers, reports, or datasets.
* Customer support teams looking to streamline access to product documentation and support resources.
* Legal and compliance professionals needing to reference and query legal documents with confidence.
* AI enthusiasts and developers wanting to implement Retrieval-Augmented Generation (RAG) systems without starting from scratch.

## **What problem is this workflow solving?**

Manually organizing, processing, and searching through documents can be time-consuming, error-prone, and inefficient. This workflow solves that by:

* **Automating document processing** from Google Drive, supporting multiple formats like PDFs, CSVs, and Google Docs.
* **Extracting, chunking, and enhancing document text**, preserving context and improving AI comprehension.
* **Storing vector embeddings** in a secure, scalable Supabase vector database, enabling semantic search and retrieval.
* **Providing an interactive AI chat interface** that allows users to ask natural language questions and get precise, document-based answers.

This means teams can quickly access relevant insights from their document repositories—boosting productivity and ensuring accurate information retrieval.

## **Key Features**

* 🚀 **End-to-End Document Processing**: From Google Drive upload detection to vector embedding and storage.
* 🔍 **Semantic Search & Retrieval**: Users can ask complex, natural-language questions and receive contextually relevant answers.
* 🤖 **AI-Powered Summaries & Metadata**: Automatically generates document titles and summaries using Google Gemini AI.
* 📝 **Smart Chunking & Contextual Enhancement**: Breaks documents into smart chunks with overlap, preserving context and table integrity.
* 🔐 **Secure & Scalable Vector Database**: Stores and retrieves embeddings in a Supabase vector store for fast, reliable searches.
* 💬 **Conversational AI Interface**: Uses OpenAI to power natural, accurate, and cost-effective AI chat interactions.

## **How does this workflow work?**

* Monitors Google Drive for new files
* Extracts text from PDFs and CSVs (or Google Docs auto-converted)
* Splits text into context-preserving chunks
* Enhances chunk quality and stores embeddings in Supabase
* Enables natural language search and AI-powered chat interactions with the stored documents

## **Typical Use Cases**

* 📚 Corporate Knowledge Base
* 🔬 Research Paper Analysis
* 📞 Customer Support Document Query
* ⚖️ Legal Document Review and Analysis
* 🔍 Internal Team Documentation Search

## **Why You’ll Love It**

This workflow lets you build a scalable, searchable, and AI-powered document system—without needing to write complex code or manage multiple systems. With this, you can:

* Stay organized with automated document processing.
* Deliver faster, more accurate answers to user queries.
* Reduce manual work and improve productivity.
* Gain a competitive edge with cutting-edge AI search capabilities.

## **Setup Requirements**

* An n8n instance with Google Drive, Supabase, OpenAI, and Gemini credentials configured.
* Access to a Supabase vector store for storing document embeddings.
* Configurable chunk size, overlap, and processing limits (default: 1000 characters per chunk, 20 chunks max).

**Contact me for consulting and support:**   
📧 **billychartanto@gmail.com**

## 📊 Basic Information

- **Workflow ID:** 4551
- **Complexity:** advanced
- **Node Count:** 36
- **Views:** 12894
- **Downloads:** 1289
- **Created:** 2025/6/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4551)

## 👤 Author

- **Name:** Billy Christi
- **Username:** @billy

## 🏷️ Categories

- Internal Wiki
- AI RAG

## 🔗 Nodes Used

- **splitInBatches** 
- **extractFromFile** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **googleDriveTrigger** 
- **@n8n/n8n-nodes-langchain.textSplitterCharacterTextSplitter** 
- **set** (×2)
- **googleDrive** 
- **switch** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **splitOut** 
- **limit** 
- **summarize** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.vectorStoreSupabase** (×2)
- **stickyNote** (×9)
- **code** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 36 nodes with 25 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
