# LinkedIn content automation: AI post creation & images with sheet approval workflow

> ## Who’s it for
This workflow is designed for marketers, content creators, agency owners, and solopreneurs who want to automate LinkedIn content creation using AI. It helps turn Google Sheets entries into complete LinkedIn posts, including text, image prompts, and AI-generated images.

## What it does / How it works
The workflow monitors a Google Sheet for new campaign entries. When a row is added, it automatically collects details about the campaign, searches LinkedIn via Tavily to identify relevant trends, and turns the information into an AI-generated LinkedIn post using a local Ollama model or an LLM of your choice.
A second approval step lets you refine the text directly inside the sheet. Once approved, the workflow generates an image prompt, creates a ready-to-post visual with OpenAI Images, and finally publishes the post to LinkedIn.

## How to set up
• Add your own Google Sheets Trigger credentials.
• Add Tavily, Ollama/OpenAI, and LinkedIn OAuth credentials.
• Replace the sample Sheet URL with your own.
• Set your LinkedIn account/person ID in the posting node.

## Requirements
• Google Sheets account
• LinkedIn OAuth app
• Tavily API key
• Ollama (local) or OpenAI image generation

##   How to customize
You can change:
• AI model
• Image generation provider
• Search query logic
• Content tone
• Approval step (manual or automatic)

## 📊 Basic Information

- **Workflow ID:** 11355
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 665
- **Downloads:** 66
- **Created:** 2025/11/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11355)

## 👤 Author

- **Name:** Optimum Office Solution
- **Username:** @isight

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×4)
- **googleSheetsTrigger** 
- **@tavily/n8n-nodes-tavily.tavily** 
- **code** (×2)
- **googleSheets** 
- **filter** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.ollamaTool** 
- **@n8n/n8n-nodes-langchain.lmChatOllama** 
- **gmail** 
- **if** 
- **@n8n/n8n-nodes-langchain.ollama** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **linkedIn** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
