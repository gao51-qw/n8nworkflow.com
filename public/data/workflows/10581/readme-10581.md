# Automate bank statement and invoice reconciliation with GPT and Google Sheets

> 🟢 Manual Trigger

Workflow starts manually to initiate the reconciliation process on demand.

📄 Fetch Invoices & Bank Statements

Retrieves invoice data and bank statement data from Google Sheets for comparison.

🔀 Merge Data

Combines both datasets into a single structured dataset for processing.

🧩 Format Payload for AI

Function node prepares and structures the merged data into a clean JSON payload for AI analysis.

🤖 AI Reconciliation

AI Agent analyzes the invoice and bank statement data to identify matches, discrepancies, and reconciled entries.

🧮 Parse AI Output

Parses the AI response into a structured format suitable for adding back to Google Sheets.

📊 Update Sheets

Adds the reconciled data and reconciliation results into the target Google Sheet for recordkeeping.


🧾 Prerequisites

✅ OpenAI API Credentials
Required for the AI Reconciliation node to process and match transactions.

Add your OpenAI API key in n8n → Credentials → OpenAI.

✅ Google Sheets Credentials
Needed to read invoice and bank statement data and to write reconciled results.
Add credentials in n8n → Credentials → Google Sheets.

✅ Google Sheets Setup
The connected spreadsheet must contain the following tabs:
Invoices – for invoice data
Bank_Statement – for bank transaction data
Reconciled_Data – for storing the AI-processed reconciliation output

✅ Tab Structure & Required Headers

Invoices Sheet Columns:
Invoice_ID
Invoice_Date
Customer_Name
Amount
Status

Bank_Statement Sheet Columns:
Transaction_ID
Transaction_Date
Description
Debit/Credit
Amount

Reconciled_Data Sheet Columns:
Invoice_ID
Transaction_ID
Matched_Status
Remarks
Confidence_Score

⚙️ n8n Environment Setup

Ensure all nodes are connected correctly and the workflow has permission to access the required sheets.

Test each fetch and write operation before running the full workflow.

## 📊 Basic Information

- **Workflow ID:** 10581
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 432
- **Downloads:** 43
- **Created:** 2025/11/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10581)

## 👤 Author

- **Name:** Chintan Prajapati
- **Username:** @satva-technolabs

## 🏷️ Categories

- Invoice Processing
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **googleSheets** (×7)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.agent** 
- **merge** 
- **code** (×3)
- **switch** 
- **if** 
- **stickyNote** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
