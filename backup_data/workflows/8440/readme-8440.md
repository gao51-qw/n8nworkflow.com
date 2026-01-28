# Extract and organize contract details from PDFs with Slack, GPT-4o, and Google Sheets

> Managing contracts manually is time-consuming and prone to human error, especially when documents need to be shared, tracked, and stored across different tools. This workflow automates the entire process by capturing contract PDFs and Words uploaded to Slack, extracting key information with GPT, and organizing the data into a structured format inside Google Sheets. Essential fields such as client, service provider, contract value, and important dates are automatically parsed and logged, eliminating repetitive manual entry. Once the data is saved, a confirmation message is posted back to Slack so your team can quickly verify that everything has been recorded accurately.


## Who’s it for
This workflow is ideal for operations teams, legal departments, or growing businesses that manage multiple contracts and want to maintain accuracy without spending hours on administration. By integrating Slack, GPT, and Google Sheets, you gain a simple but powerful contract management system that reduces risk, improves visibility, and keeps everyone aligned. Instead of scattered files and manual spreadsheets, you have a single automated pipeline that ensures your contract data is always up to date and accessible.


## How it works
- The workflow is triggered when a contract in PDF or Word format is shared in the designated Slack channel.
- The uploaded file is automatically retrieved for processing.
- Its content is extracted and converted into plain text.
- If the file is not in PDF or Word format, an error message is sent.
- GPT interprets the extracted text and structures the essential fields (e.g., Client, Service Provider, Effective Date, Expiration Date, Signature Date, Contract Value).
- The structured contract information is appended as a new row in the contract tracker spreadsheet on Google Sheets.
- A summary of the saved data is posted back to Slack for quick validation.

## How to set up
- You need to import this workflow into your n8n instance.
- You must authenticate your Slack account and select the target channel for contract submissions.
- You should link your Google account and specify the spreadsheet where the contract data will be stored. In this template, the required columns are Client, Service Provider, Effective Date, Expiration Date, Signature Date, and Contract Value.
- You can adjust the GPT parsing prompt to match the specific fields that your organization requires.
- You upload a sample contract in PDF or Word format to Slack and verify that the extracted data is correctly recorded in Google Sheets.

## Requirements
- You must have an active n8n instance in the cloud.
- You need a Slack account with permission to upload files and send messages.
- You must use a Google Sheets account with edit access to the target spreadsheet.
- You need a GPT integration (e.g., OpenAI) to enable AI-powered text parsing.

## How to customize the workflow
You can modify this workflow to fit your organization’s unique contract needs. For example, you may update the GPT parsing prompt to capture additional fields, change the target Google Sheets structure, or integrate notifications into other tools. You have full flexibility to expand or simplify the steps so the workflow matches your team’s processes and compliance requirements.


## 📊 Basic Information

- **Workflow ID:** 8440
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 332
- **Downloads:** 33
- **Created:** 2025/9/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8440)

## 👤 Author

- **Name:** Toshiki Hirao
- **Username:** @hirao

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **slackTrigger** 
- **switch** 
- **httpRequest** (×2)
- **extractFromFile** (×2)
- **slack** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **googleSheets** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
