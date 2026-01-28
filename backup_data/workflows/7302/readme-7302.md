# Extract & structure invoice data with Google Vision OCR, Gemini LLM & Google Sheets

> # Automated Invoice Collection & Data Extraction Using Vision API and LLM

This workflow automates the process of collecting uploaded invoices, extracting text using **Google Vision API**, and processing the extracted text with an LLM to produce structured data containing key transaction details such as **date, voucher number, transaction detail, vendor, and transaction value**.  
The final data is saved to **Google Sheets** and a notification is sent to **Telegram** in real time.

## ✨ Key Features
- **Invoice Upload Form**  
  Users can upload invoice images through a provided form.
- **Google Drive Integration**  
  Files are stored in a specified Google Drive folder with a shareable preview link.
- **OCR via Google Vision API**  
  Converts invoice images to text using `TEXT_DETECTION`.
- **Data Structuring via LLM**  
  Uses LLM model to parse and structure data.
- **Structured Output Parser**  
  Ensures consistent output with required columns.
- **Data Cleaning**  
  Cleans and formats numeric values without currency symbols.
- **Google Sheets Sync**  
  Appends or updates transaction data in Google Sheets (matched by file ID).  
  **Template:** [Google Sheets](https://docs.google.com/spreadsheets/d/1HMzQtFK9T-GDxGFSD7ErW_QLlq-PvCvoFASiHGG2fGM/edit?gid=0#gid=0)
- **Telegram Notification**  
  Sends a transaction summary directly to a Telegram chat/group.

---

## 🔐 Required Credentials
- **Google Vision API Key** → for OCR processing.  
- **OpenRouter API Key** → to access the Gemini Flash LLM.  
- **Google Drive OAuth2** → to upload and download invoice files.  
- **Google Sheets OAuth2** → to write or update spreadsheet data.  
- **Telegram Bot Token** → to send notifications to Telegram.  
- **Telegram Chat ID** → target chat/group for notifications.

---

## 🎁 Benefits
- **Fully automated** from invoice upload to structured reporting.
- **Time-saving** by eliminating manual transaction data entry.
- **Real-time integration** with Google Sheets for reporting and auditing.
- **Instant notifications** via Telegram for quick transaction monitoring.
- **Duplicate prevention** using file ID as a matching key.
- **Flexible** for accounting, finance, or administrative teams.

## 📊 Basic Information

- **Workflow ID:** 7302
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 1729
- **Downloads:** 172
- **Created:** 2025/8/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7302)

## 👤 Author

- **Name:** Budi SJ
- **Username:** @budisj

## 🏷️ Categories

- Invoice Processing
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×5)
- **set** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **googleDrive** (×2)
- **httpRequest** 
- **telegram** 
- **code** (×2)
- **googleSheets** 
- **formTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
