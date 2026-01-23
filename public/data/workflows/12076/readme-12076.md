# Manage recruitment tasks in Slack with Recrutei ATS & GPT-4 Agent

> ## Overview: Recrutei ATS - Ultimate Internal AI Agent

This workflow transforms Slack into a powerful command center for recruitment. Using an AI Agent (LangChain) integrated with the Recrutei ATS API and MCP, your team can manage candidates, vacancies, tags and a lot more directly through Slack messages.

## Key Features
* **Natural Language Processing:** Use GPT-4 to interpret complex requests like "Find candidates for the Python role and tag them as 'Senior'".
* **Candidate Management:** Create prospects, disqualify candidates, or move them between pipeline stages.
* **Vacancy Insights:** Add and read comments on vacancies directly from the chat.
* **Tagging System:** Create, list, and delete tags dynamically.

## Setup Instructions
1.  **Slack Trigger:** Connect your Slack account and invite the bot to your desired channel.
2.  **OpenAI:** Configure your API Key. This agent uses GPT-4o-mini (or GPT-4) for high-reasoning capabilities.
3.  **HTTP Request Tools:** Every "Tool" node (Pink nodes) needs your Recrutei API Token.
    * Replace the `Authorization` header with your `Bearer YOUR_TOKEN`.
    * Update the Base URL if necessary.
4.  **Slack Post:** Ensure the bot has permissions to write in the channel.

## 📊 Basic Information

- **Workflow ID:** 12076
- **Complexity:** advanced
- **Node Count:** 27
- **Views:** 40
- **Downloads:** 4
- **Created:** 2025/12/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12076)

## 👤 Author

- **Name:** Recrutei  Automações 
- **Username:** @paulo-lazari

## 🏷️ Categories

- HR
- AI Chatbot

## 🔗 Nodes Used

- **slackTrigger** 
- **set** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **slack** 
- **@n8n/n8n-nodes-langchain.mcpClientTool** 
- **httpRequestTool** (×11)
- **stickyNote** (×9)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 27 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
