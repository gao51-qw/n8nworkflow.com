# Parse CVs from emails with OCR & GPT for Notion database

> It allows you to automate candidate retrieval and onboarding in your HR processes. 

## How it works
- It monitors a Gmail address for new emails with a PDF attachment

- It expects the PDF to be a candidate’s CV, extracts the text using OCR, and then structures the data using ChatGPT

- Once the data is processed, it connects to Notion and adds (or updates) an entry in the specified database

## How to use
- Configure your Gmail account and provide your ChatGPT API key

- Provide an API key for the OCR service in a variable named OCR_SPACE_API_KEY

- Connect your Notion account

- Once everything is configured, the workflow will monitor your inbox for new emails. Just send an email with a PDF attachment to the configured address

## Requirements
- In addition to Gmail, ChatGPT, and Notion, the system uses a third-party OCR API (OCR SPACE). You’ll need to create an account and obtain an API key

- You must map the fields returned by ChatGPT to the Notion database, or use the same field names we are using

## Customising
It should be easy to replace Notion with PostgreSQL or another database if needed



## 📊 Basic Information

- **Workflow ID:** 6326
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 423
- **Downloads:** 42
- **Created:** 2025/7/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6326)

## 👤 Author

- **Name:** Blue Code
- **Username:** @bluecode

## 🏷️ Categories

- HR
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.openAi** 
- **httpRequest** 
- **if** (×3)
- **gmailTrigger** 
- **code** 
- **stickyNote** (×3)
- **set** 
- **notion** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
