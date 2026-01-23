# Pdf to markdown converter with LlamaCloud parser

> PDF to Markdown Converter (LlamaCloud)
Description:
How it works
This workflow extracts structured content from complex PDFs using LlamaCloud's advanced parsing engine:

Download PDF – Retrieves your PDF from Google Drive (or any source)
Upload to LlamaCloud – Sends the PDF to LlamaCloud's parsing API and receives a job ID
Poll for completion – Automatically checks parsing status every 30 seconds until complete
Retrieve markdown – Fetches the clean, structured markdown output with preserved tables, layouts, and formatting

The workflow handles complex PDFs with multi-column layouts, tables, and embedded images that traditional parsers struggle with.
Set up steps
Time estimate: ~5 minutes
You'll need to configure one main integration:

LlamaCloud API key – Sign up at cloud.llamaindex.ai, generate an API key, and create a Generic Header Auth credential in n8n with Authorization: Bearer YOUR_API_KEY
Google Drive OAuth (optional) – Connect your Google account if using the Drive node, or replace with any PDF source

Once configured, the workflow automatically handles parsing, retry logic, and markdown extraction. Output is ready for AI processing or content transformation workflows.

## 📊 Basic Information

- **Workflow ID:** 11811
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 159
- **Downloads:** 15
- **Created:** 2025/12/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11811)

## 👤 Author

- **Name:** Patrick Campbell 
- **Username:** @therealpjc014

## 🏷️ Categories

- Document Extraction
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×5)
- **wait** (×2)
- **httpRequest** (×3)
- **googleDrive** 
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
