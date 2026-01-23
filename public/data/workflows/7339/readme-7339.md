# Build a PDF search system with Mistral OCR and Weaviate DB

> # Build a PDF to Vector RAG System: Mistral OCR, Weaviate Database and MCP Server

A comprehensive RAG (Retrieval-Augmented Generation) workflow that transforms PDF documents into searchable vector embeddings using advanced AI technologies.

## 🚀 Features

- **PDF Document Processing**: Upload and extract text from PDF files using Mistral's OCR capabilities
- **Vector Database Storage**: Store document embeddings in Weaviate vector database for efficient retrieval
- **AI-Powered Search**: Search through documents using semantic similarity with Cohere embeddings
- **MCP Server Integration**: Expose the knowledge base as an AI tool through MCP (Model Context Protocol)
- **Document Metadata**: Basic document metadata including filename, content, source, and upload timestamp
- **Text Chunking**: Automatic text splitting for optimal vector storage and retrieval

## 🛠️ Technologies Used

- **Mistral AI**: OCR and text extraction from PDF documents
- **Weaviate**: Vector database for storing and retrieving document embeddings
- **Cohere**: Multilingual embeddings and reranking for improved search accuracy
- **MCP (Model Context Protocol)**: AI tool integration for external AI workflows
- **n8n**: Workflow automation and orchestration

## 📋 Prerequisites

Before using this template, you'll need to set up the following credentials:

1. **Mistral Cloud API**: For PDF text extraction
2. **Weaviate API**: For vector database operations
3. **Cohere API**: For embeddings and reranking
4. **HTTP Header Auth**: For MCP server authentication

## 🔧 Setup Instructions

1. **Import the template** into your n8n instance
2. **Configure credentials** for all required services
3. **Set up Weaviate collection** named "KnowledgeDocuments"
4. **Configure webhook paths** for the MCP server and form trigger
5. **Test the workflow** by uploading a PDF document

## 📊 Workflow Overview

```
PDF Upload → Text Extraction → Document Processing → Vector Storage → AI Search
     ↓              ↓                ↓                ↓              ↓
  Form Trigger → Mistral OCR → Prepare Metadata → Weaviate DB → MCP Server
```

## 🎯 Use Cases

- **Knowledge Base Management**: Create searchable repositories of company documents
- **Research Documentation**: Process and search through research papers and reports
- **Legal Document Search**: Index and search through legal documents and contracts
- **Technical Documentation**: Make technical manuals and guides searchable
- **Academic Literature**: Process and search through academic papers and publications

## ⚠️ Important Notes

- **Model Consistency**: Use the same embedding model for both storage and retrieval
- **Collection Management**: Ensure your Weaviate collection is properly configured
- **API Limits**: Be aware of rate limits for Mistral, Cohere, and Weaviate APIs
- **Document Size**: Consider chunking large documents for optimal processing

## 🔗 Related Resources

- [n8n Documentation](https://docs.n8n.io/)
- [Weaviate Documentation](https://weaviate.io/developers/weaviate)
- [Mistral AI Documentation](https://docs.mistral.ai/)
- [Cohere Documentation](https://docs.cohere.com/)
- [MCP Protocol Documentation](https://modelcontextprotocol.io/)

## 📝 License

This template is provided as-is for educational and commercial use.

## 📊 Basic Information

- **Workflow ID:** 7339
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 1046
- **Downloads:** 104
- **Created:** 2025/8/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7339)

## 👤 Author

- **Name:** Dietmar
- **Username:** @docd

## 🏷️ Categories

- Document Extraction
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.embeddingsCohere** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.rerankerCohere** 
- **@n8n/n8n-nodes-langchain.mcpTrigger** 
- **@n8n/n8n-nodes-langchain.vectorStoreWeaviate** (×2)
- **stickyNote** (×3)
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **formTrigger** 
- **mistralAi** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
