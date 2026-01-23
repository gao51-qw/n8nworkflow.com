# Llama AI model for Google Sheets tracking

> How it works:

- Accesses a target website, searches for new PDFs, and downloads them automatically.
- Extracts content from each PDF and sends it to an AI for summarization.
- Delivers the AI-generated summary directly to a Discord channel.
- Marks processed URLs in Google Sheets to avoid duplicates.

Set up steps:

- Configure the website URL in the HTTP Request node.
- Connect to Google Cloud API (enable Drive & Sheets) and link your spreadsheet.
- Set up an OpenRouter API key and choose your preferred AI model.
- Create a Discord webhook for notifications.



## 📊 Basic Information

- **Workflow ID:** 7062
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 237
- **Downloads:** 23
- **Created:** 2025/8/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7062)

## 👤 Author

- **Name:** Cristian Baño Belchí
- **Username:** @babelbots

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** (×2)
- **html** 
- **code** (×2)
- **extractFromFile** 
- **scheduleTrigger** 
- **discord** 
- **googleSheets** (×3)
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **stickyNote** (×7)
- **set** 
- **merge** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
