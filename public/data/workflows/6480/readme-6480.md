# PDF invoice data extraction & tracking with Google Drive, Claude AI & Telegram

> 📥 Invoice Intake & Notification Workflow

This automated n8n workflow monitors a Google Drive folder for newly uploaded invoice PDFs, extracts essential information (like client name, invoice number, amount, due date), logs the data into a Google Sheet for recordkeeping, and sends a formatted Telegram message to notify the billing team.

For step-by-step video build of workflows like this:
https://www.youtube.com/@automatewithmarc

✅ What This Workflow Does
🕵️ Watches a Google Drive folder for new invoice files
📄 Extracts data from PDF invoices using AI (LangChain Information Extractor)
📊 Appends extracted data into a structured Google Sheet
💬 Notifies the billing team via Telegram with invoice details
🤖 Optionally uses Claude Sonnet AI model to format human-friendly summaries

⚙️ How It Works – Step-by-Step
Trigger: Workflow starts when a new PDF invoice is added to a specific Google Drive folder.

Download & Parse: The file is downloaded and its content extracted.

Data Extraction: AI-powered extractor pulls invoice details (invoice number, client, date, amount, etc.).

Log to Google Sheets: All extracted data is appended to a predefined Google Sheet.

AI Notification Formatting: An Anthropic Claude model formats a clear invoice notification message.

Telegram Alert: The formatted summary is sent to a Telegram channel or group to alert the billing team.

🧠 AI & Tools Used
Google Drive Trigger & File Download

PDF Text Extraction Node

LangChain Information Extractor

Google Sheets Node (Append Data)

Anthropic Claude (Telegram Message Formatter)

Telegram Node (Send Notification)

🛠️ Setup Instructions
Google Drive: Set up OAuth2 credentials and specify the folder ID to watch.

Google Sheets: Link the workflow to your invoice tracking sheet.

Telegram: Set up your Telegram bot and obtain the chat ID.

Anthropic & OpenAI: Add your Claude/OpenAI credentials if formatting is enabled.

💡 Use Cases
Automated bookkeeping and invoice tracking

Real-time billing alerts for accounting teams

AI-powered invoice ingestion and summary



## 📊 Basic Information

- **Workflow ID:** 6480
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 13919
- **Downloads:** 1391
- **Created:** 2025/7/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6480)

## 👤 Author

- **Name:** Automate With Marc
- **Username:** @marconi

## 🏷️ Categories

- Invoice Processing
- AI Summarization

## 🔗 Nodes Used

- **extractFromFile** 
- **googleDriveTrigger** 
- **googleDrive** 
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **googleSheets** 
- **noOp** 
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **telegram** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
