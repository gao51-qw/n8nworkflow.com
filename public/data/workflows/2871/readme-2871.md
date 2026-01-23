# RAG: context-aware chunking | Google Drive to Pinecone via OpenRouter & Gemini

> Workflow based **on** the following article.
https://www.anthropic.com/news/contextual-retrieval

This n8n automation is designed to extract, process, and store content from documents into a **Pinecone** vector store using context-based chunking. The workflow enhances retrieval accuracy in **RAG (Retrieval-Augmented Generation)** setups by ensuring each chunk retains meaningful context.

**Workflow Breakdown:**
🔹 **Google Drive** - Retrieve Document:
The automation starts by fetching a source document from Google Drive. This document contains structured content, with predefined boundary markers for easy segmentation.

🔹 **Extract Text Content** - Once retrieved, the document’s text is extracted for processing. Special section boundary markers are used to divide the text into logical sections.

🔹 **Code Node** - Create Context-Based Chunks:
A custom code node processes the extracted text, identifying section boundaries and splitting the document into meaningful chunks. Each chunk is structured to retain its context within the entire document.

🔹 **Loop Node** - Process Each Chunk:
The workflow loops through each chunk, ensuring they are processed individually while maintaining a connection to the overall document context.

🔹 **Agent Node** - Generate Context for Each Chunk:
We use an Agent node powered by OpenAI’s GPT-4.0-mini via OpenRouter to generate contextual metadata for each chunk, ensuring better retrieval accuracy.

🔹 **Prepend Context to Chunks & Create Embeddings** - The generated context is prepended to the original chunk, creating context-rich embeddings that improve searchability.

🔹 **Google Gemini** - Text Embeddings:
The processed text is passed through Google Gemini text-embedding-004, which converts the text into semantic vector representations.

🔹 **Pinecone Vector Store** - Store Embeddings:
The final embeddings, along with the enriched chunk content and metadata, are stored in Pinecone, making them easily retrievable for RAG-based AI applications.

**Use Case:**
This automation enhances RAG retrieval by ensuring each chunk is contextually aware of the entire document, leading to more accurate AI responses. It’s perfect for applications that require semantic search, AI-powered knowledge management, or intelligent document retrieval.

By implementing context-based chunking, this workflow ensures that LLMs retrieve the most relevant data, improving response quality and accuracy in AI-driven applications.

[![Video Thumbnail](https://img.youtube.com/vi/qBeWP65I4hg/maxresdefault.jpg)](https://www.youtube.com/watch?v=qBeWP65I4hg)

## 📊 Basic Information

- **Workflow ID:** 2871
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 10040
- **Downloads:** 1004
- **Created:** 2025/2/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2871)

## 👤 Author

- **Name:** Udit Rawat
- **Username:** @ailistmaster

## 🏷️ Categories

- Engineering
- AI RAG

## 🔗 Nodes Used

- **manualTrigger** 
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **@n8n/n8n-nodes-langchain.vectorStorePinecone** 
- **@n8n/n8n-nodes-langchain.embeddingsGoogleGemini** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **googleDrive** 
- **extractFromFile** 
- **code** 
- **splitOut** 
- **stickyNote** (×4)
- **@n8n/n8n-nodes-langchain.agent** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
