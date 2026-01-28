# Extract data from documents with GPT-4, PDFVector & PostgreSQL export

> ## Intelligent Document Processing & Data Extraction

Extract structured data from unstructured documents like invoices, contracts, reports, and forms. Uses AI to identify and extract key information automatically.

### Pipeline Features:
- Process multiple document types (PDFs, Word docs)
- AI-powered field extraction
- Custom extraction templates
- Data validation and cleaning
- Export to databases or spreadsheets

### Workflow Steps:
1. **Document Input**: Various sources supported
2. **Parse Document**: Convert to structured text
3. **Extract Fields**: AI identifies key data points
4. **Validate Data**: Check extracted values
5. **Transform**: Format for destination system
6. **Store/Export**: Save to database or file

### Use Cases:
- Invoice processing automation
- Contract data extraction
- Form digitization
- Report mining

## 📊 Basic Information

- **Workflow ID:** 7357
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 1068
- **Downloads:** 106
- **Created:** 2025/8/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7357)

## 👤 Author

- **Name:** PDF Vector
- **Username:** @pdfvector

## 🏷️ Categories

- Document Extraction
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** 
- **localFileTrigger** 
- **n8n-nodes-pdfvector.pdfVector** 
- **openAi** 
- **code** 
- **switch** 
- **postgres** (×2)
- **writeBinaryFile** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
