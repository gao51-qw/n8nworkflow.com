# Process documents & build semantic search with OpenAI, Gemini & Qdrant

> ## 🎯 Overview

This n8n workflow automates the process of ingesting documents from multiple sources (Google Drive and web forms) into a Qdrant vector database for semantic search capabilities. It handles batch processing, document analysis, embedding generation, and vector storage - all while maintaining proper error handling and execution tracking.

## 🚀 Key Features

- **Dual Input Sources**: Accepts files from both Google Drive folders and web form uploads
- **Batch Processing**: Processes files one at a time to prevent memory issues and ensure reliability
- **AI-Powered Analysis**: Uses Google Gemini to extract metadata and understand document context
- **Vector Embeddings**: Generates OpenAI embeddings for semantic search capabilities
- **Automated Cleanup**: Optionally deletes processed files from Google Drive (configurable)
- **Loop Processing**: Handles multiple files efficiently with Split In Batches nodes
- **Interactive Chat Interface**: Built-in chatbot for testing semantic search queries against indexed documents

## 📋 Use Cases

- **Knowledge Base Creation**: Build searchable document repositories for organizations
- **Document Compliance**: Process and index legal/regulatory documents (like Fair Work documents)
- **Content Management**: Automatically categorize and store uploaded documents
- **Research Libraries**: Create semantic search capabilities for research papers or reports
- **Customer Support**: Enable instant answers to policy and documentation questions via chat interface

## 🔧 Workflow Components

### Input Methods

1. **Google Drive Integration**
   - Monitors a specific folder for new files
   - Processes existing files in batch mode
   - Supports automatic file conversion to PDF

2. **Web Form Upload**
   - Public-facing form for document submission
   - Accepts PDF, DOCX, DOC, and CSV files
   - Processes multiple file uploads in a single submission

### Processing Pipeline

1. **File Splitting**: Separates multiple uploads into individual items
2. **Document Analysis**: Google Gemini extracts document understanding
3. **Text Extraction**: Converts documents to plain text
4. **Embedding Generation**: Creates vector embeddings via OpenAI
5. **Vector Storage**: Inserts documents with embeddings into Qdrant
6. **Loop Control**: Manages batch processing with proper state handling

### Key Nodes

- **Split In Batches**: Processes files one at a time with `reset: false` to maintain state
- **Google Gemini**: Analyzes documents for context and metadata
- **Langchain Vector Store**: Handles Qdrant insertion with embeddings
- **HTTP Request**: Direct API calls for custom operations
- **Chat Interface**: Interactive chatbot for testing vector search queries

## 🛠️ Technical Implementation

### Batch Processing Logic

The workflow uses a clever looping mechanism:
- `Split In Batches` with `batchSize: 1` ensures single-file processing
- `reset: false` maintains loop state across iterations
- Loop continues until all files are processed

### Error Handling

- All nodes include `continueOnFail` options where appropriate
- Execution logs are preserved for debugging
- File deletion only occurs after successful insertion

### Data Flow

```
Form Upload → Split Files → Batch Loop → Analyze → Insert → Loop Back
Google Drive → List Files → Batch Loop → Download → Analyze → Insert → Delete → Loop Back
```

## 📊 Performance Considerations

- **Processing Time**: ~20-30 seconds per file
- **Batch Size**: Set to 1 for reliability (configurable)
- **Memory Usage**: Optimized for files under 10MB
- **API Costs**: Uses OpenAI embeddings (text-embedding-3-large model)

## 🔐 Required Credentials

1. **Google Drive OAuth2**: For file access and management
2. **OpenAI API**: For embedding generation
3. **Qdrant API**: For vector database operations
4. **Google Gemini API**: For document analysis

## 💡 Implementation Tips

1. **Start Small**: Test with a few files before processing large batches
2. **Monitor Costs**: Track OpenAI API usage for embedding generation
3. **Backup First**: Consider archiving instead of deleting processed files
4. **Check Collections**: Ensure Qdrant collection exists before running

## 🎨 Customization Options

- **Change Embedding Model**: Switch to `text-embedding-3-small` for cost savings
- **Adjust Chunk Size**: Modify text splitting parameters for different document types
- **Add Metadata**: Extend the Gemini prompt to extract specific fields
- **Archive vs Delete**: Replace delete operation with move to "processed" folder

## 📈 Real-World Application

This workflow was developed to process business documents and legal agreements, making them searchable through semantic queries. It's particularly useful for organizations dealing with large volumes of regulatory documentation that need to be quickly accessible and searchable.

### Chat Interface Testing

The integrated chatbot interface allows users to:
- Query processed documents using natural language
- Test semantic search capabilities in real-time
- Verify document indexing and retrieval accuracy
- Ask questions about specific topics (e.g., "What are the pay rates for junior employees?")
- Get instant AI-powered responses based on the indexed content

## 🌟 Benefits

- **Automation**: Eliminates manual document processing
- **Scalability**: Handles individual files or bulk uploads
- **Intelligence**: AI-powered understanding of document content
- **Flexibility**: Multiple input sources and processing options
- **Reliability**: Robust error handling and state management

## 👨‍💻 About the Creator

**Jeremy Dawes** is the CEO of [Jezweb](https://www.jezweb.com.au), specializing in AI and automation deployment solutions. This workflow represents practical, production-ready automation that solves real business challenges while maintaining simplicity and reliability.

## 📝 Notes

- The workflow intelligently handles the n8n form upload pattern where multiple files create a single item with multiple binary properties (Files_0, Files_1, etc.)
- The Split In Batches pattern with `reset: false` is crucial for proper loop execution
- Direct API integration provides more control than pure Langchain implementations

## 🔗 Resources

- [Qdrant Documentation](https://qdrant.tech/documentation/)
- [OpenAI Embeddings](https://platform.openai.com/docs/guides/embeddings)
- [n8n Documentation](https://docs.n8n.io/)
- [Jezweb](https://www.jezweb.com.au) - AI & Automation Solutions

---

*This workflow demonstrates practical automation that bridges document management with modern AI capabilities, creating intelligent document processing systems that scale with your needs.*

## 📊 Basic Information

- **Workflow ID:** 7882
- **Complexity:** advanced
- **Node Count:** 35
- **Views:** 856
- **Downloads:** 85
- **Created:** 2025/8/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7882)

## 👤 Author

- **Name:** Jez
- **Username:** @jez

## 🏷️ Categories

- AI RAG
- Multimodal AI

## 🔗 Nodes Used

- **googleDrive** (×3)
- **@n8n/n8n-nodes-langchain.vectorStoreQdrant** (×3)
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×3)
- **stickyNote** (×12)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** (×2)
- **formTrigger** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** (×2)
- **splitInBatches** 
- **googleDriveTrigger** 
- **code** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **manualTrigger** 
- **merge** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 35 nodes with 22 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
