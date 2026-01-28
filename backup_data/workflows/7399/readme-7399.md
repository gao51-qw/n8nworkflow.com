# Automate email triage with GPT-4.1-mini classification and Gmail auto-replies

> ## How it works:
- Detects new unread Gmail messages
- Extracts sender name for personalized replies
- Classifies the email into one of four categories
- Applies the correct Gmail label and either sends an auto-reply, creates a draft, or logs the contact in Google Sheets

## Setup steps:
- Takes about 5–10 minutes to connect accounts and set labels
- Connect Gmail, OpenAI, and optional Google Sheets in n8n
- Add label IDs, Google Sheet ID, sheet name, and phone number in Set – Config
- Create four Gmail labels for the categories
- Keep full setup instructions in the sticky notes inside the workflow

## 📊 Basic Information

- **Workflow ID:** 7399
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 721
- **Downloads:** 72
- **Created:** 2025/8/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7399)

## 👤 Author

- **Name:** Giovanni Beggiato
- **Username:** @giovannibeggiato

## 🏷️ Categories

- Ticket Management
- Multimodal AI

## 🔗 Nodes Used

- **gmailTrigger** 
- **if** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **set** (×3)
- **gmail** (×7)
- **@n8n/n8n-nodes-langchain.openAi** 
- **stickyNote** (×5)
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **merge** 
- **@n8n/n8n-nodes-langchain.textClassifier** 
- **googleSheets** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
