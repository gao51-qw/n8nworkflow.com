# ✨🔪 Advanced AI powered document parsing & text extraction with Llama Parse

> # Description

This workflow automates document processing using LlamaParse to extract and analyze text from various file formats. It intelligently processes documents, extracts structured data, and delivers actionable insights through multiple channels.

## How It Works

### Document Ingestion & Processing 📄
- Monitors Gmail for incoming attachments or accepts documents via webhook
- Validates file formats against supported LlamaParse extensions
- Uploads documents to LlamaParse for advanced text extraction
- Stores original documents in Google Drive for reference

### Intelligent Document Analysis 🧠
- Automatically classifies document types (invoices, reports, etc.)
- Extracts structured data using customized AI prompts
- Generates comprehensive document summaries with key insights
- Converts unstructured text into organized JSON data

### Invoice Processing Automation 💼
- Extracts critical invoice details (dates, amounts, line items)
- Organizes financial data into structured formats
- Calculates tax breakdowns, subtotals, and payment information
- Maintains detailed records for accounting purposes

### Multi-Channel Delivery 📱
- Saves extracted data to Google Sheets for tracking and analysis
- Sends concise summaries via Telegram for immediate review
- Creates searchable document archives in Google Drive
- Updates spreadsheets with structured financial information

## Setup Steps

### Configure API Credentials 🔑
- Set up LlamaParse API connection
- Configure Gmail OAuth for email monitoring
- Set up Google Drive and Sheets integrations
- Add Telegram bot credentials for notifications

### Customize AI Processing ⚙️
- Adjust document classification parameters
- Modify extraction templates for specific document types
- Fine-tune summary generation prompts
- Customize invoice data extraction schema

### Test and Deploy 🚀
- Test with sample documents of various formats
- Verify data extraction accuracy
- Confirm notification delivery
- Monitor processing pipeline performance




## 📊 Basic Information

- **Workflow ID:** 3005
- **Complexity:** advanced
- **Node Count:** 54
- **Views:** 19334
- **Downloads:** 1933
- **Created:** 2025/2/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3005)

## 👤 Author

- **Name:** Joseph LePage
- **Username:** @joe

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **webhook** 
- **gmail** (×2)
- **gmailTrigger** 
- **limit** 
- **stickyNote** (×18)
- **httpRequest** (×2)
- **@n8n/n8n-nodes-langchain.chainLlm** (×3)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×4)
- **googleSheets** (×2)
- **googleDrive** (×3)
- **set** (×5)
- **telegram** (×4)
- **@n8n/n8n-nodes-langchain.textClassifier** 
- **if** (×2)
- **aggregate** 
- **merge** (×2)
- **noOp** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 54 nodes with 27 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
