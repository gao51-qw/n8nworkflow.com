# Mistral OCR, GPT-4o-mini, and Google Sheets integration for enhanced data processing

> Process multiple invoices automatically using Mistral's dedicated OCR model—at approximately $0.002 per page. Upload batches of PDF, PNG, or JPG invoices through a simple form, extract structured financial data with AI, validate results with confidence scoring, and save everything to Google Sheets.

## What this workflow does

1. Accepts multiple invoice uploads via n8n Form Trigger
2. Processes files in batch with rate limiting
3. Converts each file to base64 and sends to Mistral OCR API
4. Extracts 9 standard fields using GPT-4o-mini Information Extractor
5. Validates data and assigns confidence scores (high/medium/low)
6. Saves all results to Google Sheets with status tracking

## Fields extracted

Invoice Number, Date, Vendor Name, Tax ID, Subtotal, Tax Rate, Tax Amount, Total Amount, Currency

## Use cases

- Accountants processing client invoices in bulk
- Small businesses digitizing paper receipts
- Bookkeepers automating repetitive data entry
- Finance teams building searchable invoice databases

## Setup requirements

- Mistral API Key (console.mistral.ai) — HTTP Header Auth credential
- OpenAI API Key (platform.openai.com)
- Google Sheets OAuth connection
- Google Sheet with 15 columns (template in workflow notes)

## 📊 Basic Information

- **Workflow ID:** 11755
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 78
- **Downloads:** 7
- **Created:** 2025/12/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11755)

## 👤 Author

- **Name:** Antonio Gasso
- **Username:** @akav

## 🏷️ Categories

- Invoice Processing
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×6)
- **formTrigger** 
- **code** (×4)
- **splitInBatches** 
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **googleSheets** 
- **wait** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
