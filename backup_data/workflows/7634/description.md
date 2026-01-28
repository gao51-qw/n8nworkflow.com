*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

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
