# Extract PDF itineraries to Google Sheets with GPT-4.1-Mini & Gmail notifications

> # Extract PDF Itineraries to Google Sheets with GPT-4.1-Mini & Gmail Notifications

## Overview
Automates PDF data extraction using OpenAI GPT, saves to Google Sheets, sends email confirmations. Reduces manual entry by 90%.

## How It Works
1. Receives PDF uploads via form
2. Splits & loops through files
3. AI extracts structured data
4. Appends to Sheets with timestamps
5. Sends confirmation email

## Prerequisites
- OpenAI API key ([platform.openai.com](https://platform.openai.com))
- Google Workspace (Sheets & Gmail)
- n8n v1.0.0+

## Setup
1. Add OpenAI API key to n8n credentials
2. Create Google Sheet with extraction columns, authorize OAuth2
3. Configure Gmail OAuth2
4. Import workflow JSON
5. Edit AI prompt for your fields
6. Activate & share form URL

## Customization
- Modify extraction prompts
- Adjust Sheets mapping
- Customize email templates
- Add error handling/validation
- Extend to Word/Excel files

## Use Cases
Invoices, expense reports, resumes, contracts, forms, legal docs



## 📊 Basic Information

- **Workflow ID:** 9281
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 389
- **Downloads:** 38
- **Created:** 2025/10/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9281)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.openAi** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **stickyNote** 
- **googleSheets** 
- **splitInBatches** 
- **formTrigger** 
- **splitOut** 
- **gmail** 
- **@n8n/n8n-nodes-langchain.informationExtractor** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
