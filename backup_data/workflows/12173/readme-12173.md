# Extract & organize email invoices with Gmail, Drive & OpenAI GPT

> ## Who’s it for

This template is for founders, finance teams, and solo operators who receive lots of invoices by email and want them captured automatically in a single, searchable source of truth. If you’re tired of hunting through your inbox for invoice PDFs or “that one receipt from three months ago,” this is for you.

## What it does / How it works

The workflow polls your Gmail inbox on a schedule and fetches new messages including their attachments. A JavaScript Code node restructures all attachments, and a PDF extraction node reads any attached PDFs.  
An AI “Invoice Recognition Agent” then analyzes the email body and attachments to decide whether the email actually contains an invoice. If not, the workflow stops.

If it is an invoice, a second AI “Invoice Data Extractor” pulls structured fields such as `date_email`, `date_invoice`, `invoice_nr`, `description`, `provider`, `net_amount`, `vat`, `gross_amount`, `label` (saas/hardware/other), and `currency`. Depending on whether the invoice is in an attachment or directly in the email text, the workflow either:

- uploads the invoice file to Google Drive, or  
- document a direct link to the mail,

then appends/updates a row in Google Sheets with all invoice parameters plus a Drive link, and finally marks the Gmail message as read.

## How to set up

1. Add and authenticate:
   - Gmail credentials  
   - Google Sheets credentials  
   - Google Drive credentials  
   - OpenAI (or compatible) credentials for the AI nodes
2. Create or select a Google Sheet with the expected columns (date_email, date_invoice, invoice_nr, description, provider, net_amount, vat, gross_amount, label, currency, link).
3. Create or select a Google Drive folder where invoices/docs should be stored.
4. Adjust the Gmail Trigger filters (labels, search query, polling interval) to match the mailbox you want to process.
5. Update node credentials and resource IDs (Sheet, Drive folder) via the node UIs, not hardcoded in HTTP nodes.

## Requirements

- n8n instance (cloud or self-hosted)  
- Gmail account with OAuth2 setup  
- Google Drive and Google Sheets access  
- OpenAI (or compatible) API key configured in n8n  
- Sufficient permissions to read emails, read/write Drive files, and edit the target Sheet

## How to customize the workflow

- **Change invoice categories**: Extend the `label` enum (e.g., add “services”, “subscriptions”) in the extraction schema and adjust any downstream logic.
- **Refine invoice detection**: Tweak the AI prompts to be more or less strict about what counts as an invoice or receipt.
- **Add notifications**: After updating the Sheet, send a Slack/Teams message or email summary for high-value invoices.
- **Filter by sender or subject**: Narrow the Gmail Trigger to specific vendors, labels, or keywords.
- **Extend the data model**: Add fields (e.g., cost center, project code) to the extractor prompt and Sheet mapping to fit your bookkeeping setup.

## 📊 Basic Information

- **Workflow ID:** 12173
- **Complexity:** advanced
- **Node Count:** 28
- **Views:** 246
- **Downloads:** 24
- **Created:** 2025/12/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12173)

## 👤 Author

- **Name:** Feras Dabour
- **Username:** @ferasdabour

## 🏷️ Categories

- Invoice Processing
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×3)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **noOp** 
- **gmailTrigger** 
- **googleDrive** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **extractFromFile** 
- **if** (×2)
- **stickyNote** (×8)
- **googleSheets** (×3)
- **gmail** (×2)
- **code** 
- **merge** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 28 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
