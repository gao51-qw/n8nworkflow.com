# Invoices from Gmail to Drive and Google Sheets

> # Attachments Gmail to Drive and Google Sheets

## Description
Automatically process invoice emails by saving attachments to Google Drive and extracting key invoice data to Google Sheets using AI. This workflow monitors your Gmail for unread emails with attachments, saves PDFs to a specified Google Drive folder, and uses OpenAI's GPT-4o to extract invoice details (date, description, amount) into a structured spreadsheet.

## Use cases
- **Invoice Management**: Automatically organize and track invoices received via email
- **Financial Record Keeping**: Maintain a structured database of all invoice information
- **Document Organization**: Keep digital copies of invoices organized in Google Drive
- **Automated Data Entry**: Eliminate manual data entry for invoice processing

## Resources
- Gmail account
- Google Drive account
- Google Sheets account
- OpenAI API key

## Setup instructions

### Prerequisites
1. Active Gmail, Google Drive, and Google Sheets accounts
2. OpenAI API key (GPT-4o model access)
3. n8n instance with credentials manager

### Steps
1. **Gmail and Google Drive Setup**:
   - Connect your Gmail account in n8n credentials
   - Connect your Google Drive account with appropriate permissions
   - Create a destination folder in Google Drive for invoice storage

2. **Google Sheets Setup**:
   - Connect your Google Sheets account
   - Create a spreadsheet with columns: Invoice date, Invoice Description, Total price, and Fichero
   - Copy your spreadsheet ID for configuration

3. **OpenAI Setup**:
   - Add your OpenAI API key to n8n credentials

4. **Configure Email Filter**:
   - Update the email filter node to match your specific sender requirements

## Benefits
- **Time Saving**: Eliminates manual downloading, filing, and data entry
- **Accuracy**: AI-powered data extraction reduces human error
- **Organization**: Consistent file naming and storage structure
- **Searchability**: Creates a searchable database of all invoice information
- **Automation**: Runs every minute to process new emails as they arrive

## Related templates
- Email Parser to CRM
- Document Processing Workflow
- Financial Data Automation

## 📊 Basic Information

- **Workflow ID:** 3016
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 36175
- **Downloads:** 3617
- **Created:** 2025/2/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3016)

## 👤 Author

- **Name:** Juan Carlos Cavero Gracia
- **Username:** @carlosgracia

## 🏷️ Categories

- Invoice Processing
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×3)
- **gmailTrigger** 
- **set** (×2)
- **httpRequest** 
- **googleDrive** (×3)
- **gmail** 
- **extractFromFile** 
- **@n8n/n8n-nodes-langchain.lmOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **googleSheets** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
