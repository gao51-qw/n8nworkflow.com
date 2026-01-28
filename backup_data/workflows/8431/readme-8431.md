# Extract invoice data from Slack PDFs to Google Sheets with GPT-4o

> Managing invoices manually can be time-consuming and error-prone. This workflow automates the process by extracting key invoice details from PDFs shared in Slack, structuring the information with AI, saving it to Google Sheets, and sending a confirmation back to Slack. It’s a seamless way to keep your financial records organized without manual data entry.

## How it works
1. Receive invoice in Slack – When a PDF invoice is uploaded to a designated Slack channel, the workflow is triggered.
2. Fetch the PDF – The file is downloaded automatically for processing.
3. Extract data from PDF – Basic text extraction is performed to capture invoice content.
4. AI-powered invoice parsing – An AI model interprets the extracted text and structures essential fields such as company name, invoice number, total amount, invoice date, and due date.
5. Save to Google Sheets – The structured invoice data is appended as a new row in a Google Sheet for easy tracking and reporting.
6. Slack confirmation – A summary of the saved invoice details is sent back to Slack to notify the team.

## How to use
1. Import the workflow into your n8n instance.
2. Connect Slack – Authenticate your Slack account and set up the trigger channel where invoices will be uploaded.
3. Connect Google Sheets – Authenticate with Google Sheets and specify the target spreadsheet and sheet name.
4. Configure the AI extraction – Adjust the parsing prompt or output structure to fit your preferred data fields (e.g., vendor name, invoice ID, amount, dates).
5. Test the workflow – Upload a sample invoice PDF in Slack and verify that the data is correctly extracted and saved to Google Sheets.

## Requirements
- An n8n instance (cloud)
- Slack account with permission to read uploaded files and post messages
- Google account with access to the spreadsheet you want to update
- AI integration (e.g., OpenAI GPT or another LLM with PDF parsing capabilities)
- A designated Slack channel for receiving invoice PDFs

## 📊 Basic Information

- **Workflow ID:** 8431
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 239
- **Downloads:** 23
- **Created:** 2025/9/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8431)

## 👤 Author

- **Name:** Toshiki Hirao
- **Username:** @hirao

## 🏷️ Categories

- Invoice Processing
- AI Summarization

## 🔗 Nodes Used

- **googleSheets** 
- **slack** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **slackTrigger** 
- **httpRequest** 
- **extractFromFile** 
- **@n8n/n8n-nodes-langchain.agent** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
