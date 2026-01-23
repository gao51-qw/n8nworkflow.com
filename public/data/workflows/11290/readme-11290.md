# Financial document extraction from Gmail to Google Sheets

> ## Overview
Manual financial reconciliation is tedious and prone to error. This workflow functions as an AI Financial Controller, automatically monitoring your inbox for invoices, receipts, and bills, extracting the data using OCR, and syncing it to Google Sheets for approval.

Unlike simple scrapers, this workflow uses a "Guardrail" AI agent to filter out non-financial emails (like newsletters) before they are processed, ensuring only actual transactions are recorded.

## Who is it for?
* **Finance Teams:** To automate the collection of vendor invoices.
* **Freelancers:** To track expenses and receipts for tax season.
* **Operations Managers:** To monitor budget spend and categorize costs automatically.

## How it works
1.  **Ingest:** The workflow watches a specific Gmail label (e.g., "INBOX") for new emails.
2.  **Guardrail:** A Gemini-powered AI agent analyzes the email text to determine if it is a valid financial transaction. If not, the workflow stops.
3.  **Extraction (OCR):**
    * **If an attachment exists:** An AI Agent (GPT-4o) extracts data from the PDF.
    * **If no attachment:** An AI Agent extracts data directly from the email body.
4.  **Validation:** Code nodes check for missing fields or invalid amounts.
5.  **Business Logic:** The system automatically assigns General Ledger (GL) categories (e.g., "Uber" -&gt; "Travel") and sets approval statuses based on amount thresholds.
6.  **Sync:** Validated data is logged to Google Sheets, and a confirmation email is sent. Errors are logged to a separate error sheet.

## How to set up
1.  **Google Sheets:** Copy [this Google Sheet template](https://docs.google.com/spreadsheets/d/1IaovDHswLKbcQdEyfw-2JSYHOVX1pLNcTIYlJQzxYGU/copy) to your drive. It contains the necessary tabs (Invoices, Error Logs, Success Metrics).
2.  **Configure Workflow:**
    * Open the node named **"Configuration: User Settings"**.
    * Paste your Google Sheet ID (found in the URL of your new sheet).
    * Enter the Admin Email address where you want to receive error notifications.
3.  **Credentials:**
    * Connect your **Gmail** account.
    * Connect your **Google Sheets** account.
    * Connect your **OpenAI** (for OCR) and **Google Gemini/PaLM** (for Guardrails) accounts.

## Requirements
* n8n version 1.0 or higher.
* Gmail account.
* OpenAI API Key.
* Google Gemini (PaLM) API Key.

## 📊 Basic Information

- **Workflow ID:** 11290
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 1110
- **Downloads:** 111
- **Created:** 2025/11/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11290)

## 👤 Author

- **Name:** Gtaras
- **Username:** @tarasidis

## 🏷️ Categories

- Invoice Processing
- AI Summarization

## 🔗 Nodes Used

- **gmailTrigger** 
- **gmail** (×3)
- **@n8n/n8n-nodes-langchain.guardrails** 
- **set** 
- **if** (×3)
- **filter** 
- **extractFromFile** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **code** (×2)
- **googleSheets** (×3)
- **stickyNote** (×6)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
