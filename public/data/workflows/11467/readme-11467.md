# Automate n8n workflow documentation with Google Gemini AI and Telegram

> ## AI Workflow Description and Template Generator

This workflow automates the creation of professional documentation and template-ready sticky notes for any n8n workflow using AI.
## How it works
1. Receives an n8n workflow JSON file via Telegram
2. Validates the input file type and extracts workflow data
3. Scrubs sensitive information and analyzes workflow structure
4. Uses Google Gemini AI to generate comprehensive documentation
5. Assembles a complete template with main workflow sticky note and logical section stickies
6. Sends back the documented workflow file, usage checklist, and setup guide via Telegram

## Setup
1. Configure Telegram Trigger credentials for receiving files
2. Configure Telegram API credentials for sending messages
3. Configure Google Gemini Chat Model (Google PaLM API) credentials

## Customization
Adjust the prompt in the "AI Template Generator" node to modify documentation style, detail level, or specific requirements for your use case.

## 📊 Basic Information

- **Workflow ID:** 11467
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 94
- **Downloads:** 9
- **Created:** 2025/12/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11467)

## 👤 Author

- **Name:** Panth1823
- **Username:** @panth1823

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×4)
- **telegramTrigger** 
- **telegram** (×5)
- **code** (×2)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **if** 
- **extractFromFile** 
- **@n8n/n8n-nodes-langchain.chainLlm** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
