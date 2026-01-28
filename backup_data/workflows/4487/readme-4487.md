# Automate LinkedIn content from Twitter AI posts with GPT-4 and Google Sheets

> How it works
- Automates daily LinkedIn post creation from trending AI tweets.
- Fetches latest tweets, processes content, checks for duplicates, converts to LinkedIn-ready format, schedules, and posts automatically.

Set up steps
- Setup required: Google Sheets, LinkedIn, Telegram, RapidAPI, and OpenAI/OpenRouter API credentials.
- Approximate setup time: 30-45 mins for all integrations and triggers.
- Detailed credential/config instructions are in sticky notes inside the workflow.

## 📊 Basic Information

- **Workflow ID:** 4487
- **Complexity:** advanced
- **Node Count:** 35
- **Views:** 968
- **Downloads:** 96
- **Created:** 2025/5/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4487)

## 👤 Author

- **Name:** Archit Jain
- **Username:** @architjn

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×3)
- **scheduleTrigger** (×2)
- **httpRequest** (×2)
- **code** (×2)
- **splitInBatches** (×3)
- **googleSheets** (×6)
- **noOp** (×2)
- **switch** 
- **wait** (×3)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **limit** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **telegram** (×2)
- **aggregate** 
- **googleSheetsTrigger** 
- **filter** 
- **linkedIn** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 35 nodes with 29 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
