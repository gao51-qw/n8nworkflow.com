# Automate employee trip expense processing with Jotform, OpenAI and Google Sheets

> ## 👤 Who’s it for

This workflow is designed for employees who need to submit expense claims for business trips. It automates the process of extracting data from receipts/invoices, logging it to a Google Sheet, and notifying the finance team via email.

Ideal users:
- Employees submitting business trip expense claims
- HR or Admins reviewing travel-related reimbursements
- Finance teams responsible for processing claims

## ⚙️ How it works / What it does

1. **Employee submits a form** with trip information (name, department, purpose, dates) and uploads one or more receipts/invoices (PDF).
2. **Uploaded files are saved to Google Drive** for record-keeping.
3. Each PDF is passed to a **DocClaim Assistant agent**, which uses GPT-4o and a structured parser to extract structured invoice data.
4. The data is **transformed and formatted** into a standard JSON structure.
5. Two parallel paths are followed:
   - Invoice records are appended to a **Google Sheet** for centralized tracking.
   - A detailed **HTML email** summarizing the trip and expenses is generated and sent to the **finance department** for claim processing.

## 🛠 How to set up

1. **Create a form** to capture:
   - Employee Name
   - Department
   - Trip Purpose
   - From Date / To Date
   - Receipt/Invoice File Upload (multiple PDFs)

2. **Configure file upload node** to store files in a specific Google Drive folder.

3. **Set up DocClaim Agent** using:
   - GPT-4o or any LLM with document analysis capability
   - Output parser for standardizing extracted receipt data (e.g., vendor, total, tax, date)

4. **Transform extracted data** into a structured claim record (Code Node).

5. **Path 1**: Save records to a Google Sheet (one row per expense).

6. **Path 2**:
   - Format the employee + claim data into a dynamic **HTML email**
   - Use `Send Email` node to notify the finance department (e.g., `finance@yourcompany.com`)

## ✅ Requirements

- Jotform account with expense form setup [Sign up for free here](https://www.jotform.com/?partner=mediajade)
- n8n running with access to:
  - Google Drive API (for file uploads)
  - Google Sheets API (for logging expenses)
  - Email node (SMTP or Gmail for sending)
- GPT-4o or equivalent LLM with document parsing ability
- PDF invoices with clear formatting
- Shared Google Sheet for claim tracking
- Optional: Shared inbox for finance team



## 🧩 How to customize the workflow

- **Add approval steps**: route the email to a manager before finance
- **Attach original PDFs**: include uploaded files in the email as attachments
- **Localize for other languages**: adapt form labels, email content, or parser prompts
- **Sync to ERP or accounting system**: replace Google Sheet with QuickBooks, Xero, etc.
- **Set limits/validation**: enforce max claim per trip or required fields before submission
- **Auto-tag expenses**: add categories (e.g., travel, accommodation) for better reporting


## 📊 Basic Information

- **Workflow ID:** 9579
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 57
- **Downloads:** 5
- **Created:** 2025/10/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9579)

## 👤 Author

- **Name:** Jitesh Dugar
- **Username:** @jiteshdugar

## 🏷️ Categories

- Invoice Processing
- AI RAG

## 🔗 Nodes Used

- **stickyNote** (×5)
- **code** (×4)
- **googleDrive** 
- **extractFromFile** 
- **googleSheets** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **gmail** 
- **@n8n/n8n-nodes-langchain.agent** 
- **jotFormTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
