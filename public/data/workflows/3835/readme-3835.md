# Analyze Google Sheets data with OpenAI-powered data agent

> ## Welcome to Ozki Your Data Analyst Agent V1.

The Ozki Data Analyst Agent is designed to analyze data from Google Sheets. To use it, you'll need to provide the URL of your Google Sheet file. The agent will then process the data and provide you with analysis results, including key performance indicators (KPIs).

### Configuration:

* Configure your credentials on the OpenAI model or select the n8n free OpenAI credits.
* Set up your agent memory. Use Simple Memory as default.
* Set your credentials to Google Sheets. Log in with the Google Sheet tool.

### Instructions:

* Start with a "Hi" to get the instructions.
* Ozki needs your Google Sheet URL, which you can get from the address bar of your browser when you have the file open.
* Follow the conversation with Ozki for your data analysis results.

## 📊 Basic Information

- **Workflow ID:** 3835
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 2740
- **Downloads:** 274
- **Created:** 2025/5/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3835)

## 👤 Author

- **Name:** ozkary
- **Username:** @ozkary

## 🏷️ Categories

- Document Extraction
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **stickyNote** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **googleSheetsTool** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
