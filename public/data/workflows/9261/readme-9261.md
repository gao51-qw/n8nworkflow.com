# Extract invoice data from PDFs with Gemini AI to Google Sheets 📄

> ## 📄 Automated Invoice Processing (n8n + AI + Google Workspace)

This workflow automates the extraction and processing of invoice data from PDFs stored in a Google Drive folder. It leverages **Google Drive, Google Sheets, and Gemini AI** to streamline invoice management.

### Key Features
- **Automatic Detection:** Monitors a Google Drive folder for new invoices.
- **AI-Powered Extraction:** Uses Gemini AI to extract structured data including Supplier, Buyer, Items, Total Amount, Tax, and Payment Terms.
- **Data Logging:** Appends extracted invoice information to a Google Sheet and tracks processed documents to avoid duplicates.
- **Notifications:** Sends email alerts once invoices are successfully processed.
- **Flexible & Extensible:** Can be integrated with ERP/CRM systems, Slack/Telegram notifications, or OCR for scanned PDFs.

💡 **Perfect for:** Small to medium businesses, accountants, and operations teams looking to reduce manual invoice data entry and improve accuracy.


## 📊 Basic Information

- **Workflow ID:** 9261
- **Complexity:** advanced
- **Node Count:** 28
- **Views:** 94
- **Downloads:** 9
- **Created:** 2025/10/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9261)

## 👤 Author

- **Name:** Louis
- **Username:** @louisdl

## 🏷️ Categories

- Invoice Processing
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×11)
- **compareDatasets** 
- **extractFromFile** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **googleSheets** (×3)
- **code** (×2)
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.agent** 
- **googleDriveTrigger** 
- **googleDrive** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **limit** 
- **gmail** 
- **splitInBatches** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 28 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
