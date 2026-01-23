# Convert PDF, DOC, and images to Markdown using Datalab.to API

> This n8n workflow converts various file formats (.pdf, .doc, .png, .jpg, .webp) to clean markdown text using the [datalab.to](https://datalab.to) API. Perfect for AI agents, LLM processing, and RAG (Retrieval Augmented Generation) data preparation for vector databases.

## Workflow Description

### Input
- **Trigger Node**: Form trigger or webhook to accept file uploads
- **Supported Formats**: PDF documents, Word documents (.doc/.docx), and images (PNG, JPG, WEBP)

### Processing Steps
1. **File Validation**: Check file type and size constraints
2. **HTTP Request Node**: 
   - Method: POST to `https://api.datalab.to/v1/marker`
   - Headers: `X-API-Key` with your datalab.to API key
   - Body: Multipart form data with the file
3. **Response Processing**: Extract the converted markdown text
4. **Output Formatting**: Clean and structure the markdown for downstream use

### Output
- Clean, structured markdown text ready for:
  - LLM prompt injection
  - Vector database ingestion
  - AI agent knowledge base processing
  - Document analysis workflows

## Setup Instructions
1. **Get API Access**: Sign up at [datalab.to](https://www.datalab.to/app/dashboard) to obtain your API key
2. **Configure Credentials**: 
   - Create a new credential in n8n
   - Add Generic Header: `X-API-Key` with your API key as the value
3. **Import Workflow**: Ready to process files immediately

## Use Cases
- **AI Workflows**: Convert documents for LLM analysis and processing
- **RAG Systems**: Prepare clean text for vector database ingestion
- **Content Management**: Batch convert files to searchable markdown format
- **Document Processing**: Extract text from mixed file types in automated pipelines

The workflow handles the complexity of different file formats while delivering consistent, AI-ready markdown output for your automation needs.

## 📊 Basic Information

- **Workflow ID:** 7887
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 853
- **Downloads:** 85
- **Created:** 2025/8/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7887)

## 👤 Author

- **Name:** Joseph
- **Username:** @mjomba

## 🏷️ Categories

- Document Extraction
- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **httpRequest** (×2)
- **set** 
- **wait** 
- **stickyNote** (×5)
- **switch** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
