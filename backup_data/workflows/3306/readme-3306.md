# Analyze Telegram messages with OpenAI and send notifications via Gmail & Telegram

> # AI-powered Telegram message analysis with multi-tool notifications (Gmail, Telegram)

 
*This workflow triggers on Telegram updates, analyzes messages with an AI Agent using MCP tools, and sends notifications via Gmail and Telegram.*

## Detailed Description

### Who is this for?
This template is for teams, businesses, or individuals using Telegram for communication who need automated, AI-driven insights and notifications. It’s ideal for customer support teams, project managers, or tech enthusiasts wanting to process Telegram messages intelligently and receive alerts via Gmail and Telegram.

### What problem is this workflow solving?  Use case
This workflow solves the challenge of manually monitoring Telegram messages by automating message analysis and notifications. For example, a support team can use it to analyze customer queries on Telegram with AI tools (OpenAI, Airbnb, Brave, FireCrawl) and get notified via Gmail and Telegram for quick responses.

### What this workflow does
The workflow:  
1. Triggers on a Telegram update (e.g., a new message) using the **Listen for Telegram Updates** node.  
2. Processes the message with the **Analyze Message with AI** node, an AI Agent using MCP tools like OpenAI Chat, Airbnb search, Brave search, and FireCrawl.  
3. Sends notifications via the **Send Gmail Notification** and **Send Telegram Alert** nodes, including AI-generated insights.

### Setup
**Prerequisites:**  
- Telegram bot token for the trigger and notification nodes.  
- Gmail API credentials for sending emails.  
- API keys for OpenAI, Airbnb, Brave, and FireCrawl (used in the AI Agent).  

**Steps:**  
1. Configure the **Listen for Telegram Updates** node with your Telegram bot token.  
2. Set up the **Analyze Message with AI** node with your OpenAI API key and other tool credentials.  
3. Configure the **Send Gmail Notification** node with your Gmail credentials.  
4. Set up the **Send Telegram Alert** node with your Telegram bot token.  
5. Test by sending a Telegram message to trigger the workflow.  

Setup takes ~15-30 minutes. Detailed instructions are in sticky notes within the workflow.

### How to customize this workflow to your needs
- Add more AI tools (e.g., sentiment analysis) in the **Analyze Message with AI** node.  
- Modify the notification message in the **Send Gmail Notification** and **Send Telegram Alert** nodes to include specific AI outputs.  
- Add nodes for other channels like Slack or SMS after the AI Agent.

### Disclaimer
*This workflow uses Community nodes (e.g., Airbnb, Brave, FireCrawl), which are available only in self-hosted n8n instances. Ensure your n8n setup supports Community nodes before using this template.*

## 📊 Basic Information

- **Workflow ID:** 3306
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 853
- **Downloads:** 85
- **Created:** 2025/3/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3306)

## 👤 Author

- **Name:** Immanuel
- **Username:** @spectrabit

## 🏷️ Categories

- Ticket Management
- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **n8n-nodes-mcp.mcpClientTool** (×6)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **stickyNote** 
- **telegramTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **gmail** 
- **telegram** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
