# Extract and process invoices with GPT-4, Google Drive, and Google Sheets

> ![Bildschirmfoto 20251208 um 19.25.48.heic](fileId:3572)

This template is a fully automated AI invoice processing workflow for n8n.
It watches a Google Drive folder for new invoice PDFs, extracts all key information using an AI Agent, assigns the correct booking account, saves the renamed invoice in the right Drive folder, and updates your Google Sheets booking list.

A perfect starter template if you want to build your own AI-powered accounting automation.


## What this workflow does
- Monitors a Google Drive folder for new invoice PDFs.
- Downloads and extracts invoice text from the uploaded PDF.
- Uses an AI Agent (OpenAI + Structured Output Parser) to extract:
	- invoice date
	- vendor
	- currency
	- total amount
	- invoice number
	- booking text
	- booking account
	- matching Google Drive folder ID
- Automatically renames the PDF to a clean, consistent format (e.g. 250912 Vendor.pdf).
- Saves the invoice into the correct accounting folder in Google Drive.
- Updates your booking list in Google Sheets with all extracted fields.
- Moves the processed invoice to an output folder to avoid duplicates.

Everything runs hands-free after setup.



## Key features
- 🧠 AI Invoice Reading using OpenAI + LangChain
- 📑 Structured Output Parser guarantees clean, validated fields
- 📁 Automated Google Drive File Routing
- 📊 Google Sheets logging for accounting records
- 🔄 File movement logic to keep input/output folders organized
- ⚙️ Chart of Accounts integration from your Google Sheet
- 🟦 Works out of the box with Invoice Agent – Folder Structure Setup (recommended)



## Typical use cases
- Automated accounting workflows
- Pre-processing invoices before importing into ERP or sevDesk
- AI-powered invoice extraction for small businesses or freelancers
- Structured archiving of invoices for tax and audit requirements
- Fully automated Google Drive invoice inbox



## How to use this template
1. Connect your Google Drive & Sheets credentials in all relevant nodes.
2. Select your:
• Input folder (where invoices are uploaded)
• Output folder (where processed invoices go)
• Folder structure sheet + booking accounts sheet
3. Upload any invoice PDF into the input folder.
4. The workflow starts automatically and processes the invoice end-to-end.

⸻

## Requirements
• Google Drive OAuth2
• Google Sheets OAuth2
• OpenAI API key
• A Google Sheet containing your chart of accounts
• A prepared folder structure (use the “Google Drive Structure Setup” template)

## 📊 Basic Information

- **Workflow ID:** 11058
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 201
- **Downloads:** 20
- **Created:** 2025/11/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11058)

## 👤 Author

- **Name:** Wolfgang Renner
- **Username:** @naviqo

## 🏷️ Categories

- Invoice Processing
- AI Summarization

## 🔗 Nodes Used

- **googleSheets** 
- **googleSheetsTool** 
- **googleDrive** (×3)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **extractFromFile** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **stickyNote** (×5)
- **googleDriveTrigger** 
- **set** 
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
