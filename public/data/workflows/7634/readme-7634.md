# Extract Data from Invoices with OCR, Gemini AI, and Airtable

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## 📖 Extract Data from Invoices with OCR, Gemini AI, and Airtable

This template automates the process of extracting key details from invoices (PDF, JPG, PNG) and storing them in Airtable using **OCR + AI**. It eliminates manual data entry by leveraging **Tesseract OCR**, **Google Gemini AI**, and **Airtable**, with optional **Telegram notifications**. The workflow is ideal for freelancers, small businesses, and finance teams who need a lightweight and automated solution for handling invoice data.

### 🔑 Features
- ✅ Supports **JPG, PNG, and PDF** invoices  
- 🧠 Automatically extracts: *Invoice Number, Invoice Date (standardized to YYYY-MM-DD), Subtotal, Tax, Total, Currency, Vendor Name, Email, Phone, and Ship-to Address*  
- 📤 Sends structured data into Airtable automatically  
- 📬 Sends a **Telegram notification** once data is processed (optional)  
- 🔁 Triggers automatically when new files are dropped into a folder  

### ⚠️ Disclaimer
This workflow uses **community nodes** (`n8n-nodes-tesseractjs`, `n8n-nodes-pdf-page-extract`).  
It works best on **self-hosted n8n** or n8n cloud instances where these nodes are available.  
You must install and configure these nodes before importing the workflow.

### ⚙️ Setup & Configuration
1. Install Docker with n8n.  
2. Mount your folder (e.g., `~/self-hosted-ai/ocr-bot:/shared`) so invoices can be dropped into `/shared/ocr/`.  
3. Import the provided JSON workflow into n8n.  
4. Replace credentials:  
   - **Google Gemini API key**  
   - **Airtable base + token**  
   - **Telegram bot token** (optional)  
5. Drop a sample invoice (PDF/JPG/PNG) into the configured folder.  
6. Check Airtable for structured data and Telegram (if enabled) for confirmation.  

### 🧠 Customization
- Modify the **AI prompt** to extract additional fields.  
- Replace Airtable with **Google Sheets** or another database if preferred.  
- Update the Telegram node with your own **Chat ID** for notifications.  

---

💡 *Tip: Add a screenshot of the workflow in n8n to help users quickly understand the node structure.*  


## 📊 Basic Information

- **Workflow ID:** 7634
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 641
- **Downloads:** 64
- **Created:** 2025/8/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7634)

## 👤 Author

- **Name:** Vinay
- **Username:** @doctor

## 🏷️ Categories

- AI Summarization
- Multimodal AI

## 🔗 Nodes Used

- **localFileTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **n8n-nodes-tesseractjs.tesseractNode** 
- **switch** 
- **aggregate** 
- **n8n-nodes-pdf-page-extract.pdfPageExtract** 
- **telegram** 
- **readWriteFile** 
- **stickyNote** (×7)
- **@n8n/n8n-nodes-langchain.agent** 
- **if** 
- **airtableTool** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
