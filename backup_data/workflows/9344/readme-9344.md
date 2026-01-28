# Generate template descriptions from Google Drive with Azure GPT-4

> ## Description
Automatically generate polished, n8n-ready template descriptions from your saved JSON workflows in Google Drive. This AI-powered automation processes workflow files, drafts compliant descriptions, and delivers Markdown and HTML outputs directly to your inbox. 🚀💌📊💬

## What This Template Does
- Manually triggers the workflow to start processing.
- Searches a specified Google Drive folder for JSON workflow files.
- Iterates through each JSON file found in that folder.
- Downloads each file and prepares it for data extraction.
- Parses workflow data from the downloaded JSON content.
- Uses Azure OpenAI GPT-4 to generate concise titles and detailed descriptions.
- Converts the AI output into structured Markdown for n8n template publishing.
- Creates an HTML version of the description for email delivery.
- Logs generated details into a Google Sheet for record-keeping.
- Sends an email containing the Markdown and HTML descriptions to the target recipient.

## Key Benefits
✅ Fully automates n8n template description creation.
 ✅ Ensures consistency with official n8n publishing guidelines.
 ✅ Saves time while eliminating human writing errors.
 ✅ Provides dual Markdown + HTML outputs for flexibility.
 ✅ Centralizes workflow metadata in Google Sheets.
 ✅ Simplifies collaboration and version tracking via email delivery.

## Features
- Manual workflow trigger for controlled execution.
- Integration with Google Drive for locating and downloading JSON files.
- Intelligent parsing of workflow data from JSON structure.
- GPT-4-powered AI for title and description generation.
- Automatic Markdown + HTML formatting for n8n publishing.
- Google Sheets integration for persistent record-keeping.
- Automated Gmail delivery of generated documentation.

## Requirements
- n8n instance (cloud or self-hosted).
- Google Drive OAuth2 credentials with file read permissions.
- Google Sheets OAuth2 credentials with edit permissions.
- Azure OpenAI GPT-4 API key for AI text generation.
- Gmail OAuth2 credentials for email sending.

## Target Audience
- n8n content creators documenting workflows. 👩‍💼
- Automation teams handling multiple template deployments. 🔄
- Agencies and freelancers managing workflow documentation. 🏢
- Developers leveraging AI for faster template creation. 🌐
- Technical writers ensuring polished, standardized outputs. 📊

## Step-by-Step Setup Instructions
- Connect your Google Drive account and specify the folder containing JSON workflows. 🔑
- Authorize Google Sheets and confirm access to the tracking spreadsheet. ⚙️
- Add Azure OpenAI GPT-4 API credentials for AI-powered text generation. 🧠
- Connect Gmail credentials for automated email delivery. 📧
- Run the workflow manually using a test JSON file to validate all nodes. ✅
- Enable the workflow to automatically generate and send descriptions as needed. 🚀


## 📊 Basic Information

- **Workflow ID:** 9344
- **Complexity:** advanced
- **Node Count:** 27
- **Views:** 69
- **Downloads:** 6
- **Created:** 2025/10/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9344)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **manualTrigger** 
- **extractFromFile** 
- **googleDrive** (×2)
- **stickyNote** (×14)
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.agent** 
- **code** (×2)
- **googleSheets** 
- **gmail** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.lmChatAzureOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 27 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
