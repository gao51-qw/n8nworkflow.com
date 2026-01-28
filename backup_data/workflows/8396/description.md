## 📄 Description

This workflow automates the extraction of structured invoice data from PDF files sent via Telegram and stores it in Airtable. It leverages GPT-4o for intelligent parsing and includes conversational memory for a seamless user experience. Designed for businesses and freelancers who receive invoices digitally and want to streamline their record-keeping.

---

## ⚙️ How It Works

1. **Telegram Trigger** – Listens for incoming messages and PDF attachments.  
2. **Switch Node** – Filters messages to ensure only PDFs are processed.  
3. **Extract from File** – Parses the PDF content for text extraction.  
4. **Edit Fields** – Prepares the extracted data for AI processing.  
5. **AI Agent (GPT-4o)** – Orchestrates the workflow, prompts the user for missing info, and extracts structured data.  
6. **Simple Memory** – Maintains conversational context across sessions.  
7. **Create Invoice (Airtable Tool)** – Creates a new invoice record in Airtable.  
8. **Create Line Item (Airtable Tool)** – Adds individual line items linked to the invoice.  
9. **Telegram Response** – Sends confirmation back to the user.

---

## 🔐 Required Credentials

To run this workflow successfully, you’ll need:

- **Telegram Bot Token** (via @BotFather)  
- **OpenAI API Key** (with GPT-4o access)  
- **Airtable API Key** and access to:  
  - Base: `Invoice Tracker Proper`  
  - Tables: `Invoices` and `Line Items`

---

## 🧰 Airtable Structure

**Invoices Table Fields**:
- Invoice Number  
- Date  
- Supplier  
- Supplier Address  
- Tax ID  
- PO Number  
- Due Date  
- Receiver Name  
- Receiver Address  
- Delivery Date  
- Total Tax  
- Total Amount  

**Line Items Table Fields**:
- Product Code  
- Description  
- Unit Price  
- Quantity  
- Unit Type  
- Sub Total  
- Invoice (linked)

---

## 🧠 Features

- AI-powered invoice parsing  
- PDF text extraction  
- Airtable record creation with relational linking  
- Telegram-based user interaction  
- Conversational memory  
- Error handling and data validation
