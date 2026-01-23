# Automate invoice processing with OCR.Space, GPT-4 & Google Drive to Gmail

> # How it works
- Watches a Google Drive folder for new (scanned) invoices. Each new file automatically triggers the workflow.
- Downloads and processes each invoice through OCR Space to extract the text.
- Extracts the company name (e.g. from the “billed to” field) and uses an AI agent to cross-reference it against a database in Google Sheets.
- If a match is found, retrieves the correct recipient email and sends the invoice as an attachment.
- If no match or an error occurs, the workflow alerts an operator by email for manual review.


## Setting up the workflow

1. Connect Google Drive
	•	In n8n, connect your Google Drive account.
	•	Create or select a folder where you will upload scanned invoices.

2. Connect Gmail (or another email service)
	•	Add your Gmail account as a credential in n8n.
	•	This will be used to send the processed invoice to the correct recipient.

3. Set up OCR.Space
	•	Create a free OCR.Space account: https://ocr.space
	•	In n8n, create a Generic Credential (Header Auth).
	•	Use apikey as the name and your OCR API key as the value.

4. Connect the AI Agent
	•	Add your OpenAI API key as a credential in n8n.
	•	The AI Agent will extract the company name from the invoice text and match it against your database.
	•	If a match is found, it retrieves the correct email.

5. Prepare the Google Sheet database
	•	Make a copy of the database sheet: Google Sheet Template
	•	Fill it with company names and recipient emails.
	•	Connect your Google account to n8n and link this sheet to the workflow.

6. Run the workflow
	•	When a new invoice is uploaded to your Google Drive folder, the workflow will:
	•	Extract the text with OCR.Space
	•	Use the AI Agent to identify the company name
	•	Cross-reference it with your Google Sheet database
	•	Send the invoice automatically to the correct recipient via Gmail
	•	If no match is found, an error email is sent to you for manual review

## 📊 Basic Information

- **Workflow ID:** 8139
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 306
- **Downloads:** 30
- **Created:** 2025/9/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8139)

## 👤 Author

- **Name:** Michael Taleb
- **Username:** @michaeltaleb

## 🏷️ Categories

- Invoice Processing
- AI Summarization

## 🔗 Nodes Used

- **merge** (×2)
- **splitInBatches** 
- **httpRequest** 
- **googleDrive** 
- **googleSheetsTool** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.agent** 
- **set** 
- **code** 
- **noOp** (×2)
- **gmail** (×3)
- **if** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **stickyNote** (×11)
- **googleDriveTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
