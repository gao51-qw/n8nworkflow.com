# Generate comprehensive client brief reports with Llama 3 AI & Google Workspace

> **How It Works**

- Trigger:
The workflow starts automatically when a new file (PDF, DOCX, or TXT) is uploaded to a specific Google Drive folder for client briefs.

- Configuration:
The workflow sets up key variables, such as the folder for storing reports, the account manager’s email, the tracking Google Sheet, and the error notification email.

- File Type Check & Text Extraction:
It checks the file type and extracts the text using the appropriate method for PDF, DOCX, or TXT files.

- Extraction Validation:
If text extraction fails or the file is empty, an error notification is sent to the designated email.

- AI Analysis:
The extracted text is analyzed using Groq AI (Llama 3 model) to summarize the brief, extract client needs, goals, challenges, and more.

- Industry Research:
The workflow performs additional AI-powered research on the client’s industry and project type, using Wikipedia and Google Search tools.

- Report Generation:
The analysis and research are combined into a comprehensive, formatted report.

- Google Doc Creation:
The report is saved as a new Google Doc in a specified folder.

- Logging:
Key details are logged in a Google Sheet for tracking and record-keeping.

- Notification:
The account manager receives an email with highlights and a link to the full report.

- Error Handling:
If any step fails (e.g., text extraction), an error email is sent with troubleshooting advice.

**Setup Steps**

1. Google Drive Folders:
Create a folder for incoming client briefs.
Create a folder for storing generated client summary reports.

2. Google Sheet:
Create a Google Sheet with a sheet/tab named “Brief Analysis Log” for tracking analysis results.

3. Google Cloud Project:
Set up a Google Cloud project and enable APIs for Google Drive, Google Docs, Google Sheets, and Gmail.
Create OAuth2 credentials for n8n and connect them in your n8n instance.

4.  Groq AI Credentials:
Obtain API credentials for Groq AI and add them to n8n.

5. SerpAPI (Optional, for Google Search):
If using Google Search in research, get a SerpAPI key and add it to n8n.

**n8n Workflow Configuration:**

In the “Workflow Configuration” node, set the following variables:
- clientSummariesFolderId: Google Drive folder ID for reports.
- accountManagerEmail: Email address to notify.
- trackingSheetId: Google Sheet ID for logging.
- errorNotificationEmail: Email for error alerts.

**Connect All Required Credentials:**

Make sure all Google and AI nodes have the correct credentials selected in n8n.
Test the Workflow:

Upload a sample client brief to the monitored Google Drive folder.
Check that the workflow runs, generates a report, logs the result, and sends the notification email.

## 📊 Basic Information

- **Workflow ID:** 11879
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 111
- **Downloads:** 11
- **Created:** 2025/12/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11879)

## 👤 Author

- **Name:** DigiMetaLab
- **Username:** @digimetalab

## 🏷️ Categories

- Market Research
- AI RAG

## 🔗 Nodes Used

- **googleDriveTrigger** 
- **set** 
- **if** (×2)
- **extractFromFile** (×3)
- **@n8n/n8n-nodes-langchain.lmChatGroq** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **googleDocs** 
- **gmail** (×2)
- **@n8n/n8n-nodes-langchain.toolWikipedia** 
- **merge** 
- **code** 
- **googleSheets** 
- **@n8n/n8n-nodes-langchain.toolSerpApi** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
