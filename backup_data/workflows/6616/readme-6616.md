# Automate weekly tech research with Perplexity AI, Notion & Gmail

> ## **How it works**

### This workflow automates a full weekly monitoring and reporting cycle using AI.

- **Scheduled Trigger**
Every Monday at 9 AM, the workflow starts automatically.

- **AI Agent Configuration**
A system prompt defines the role, objectives, and behavior of your AI agent for web monitoring or research tasks.

- **Language Model via OpenRouter**
The agent uses a powerful model (e.g., DeepSeek from Perplexity) to generate relevant insights.

- **Data Storage in Notion**
The results are saved and updated directly in a connected Notion database.

- **Email Dispatch**
A summary report is automatically sent by email to predefined recipients.

**Customizable elements:**

### - AI prompt and objectives

### - Trigger schedule

### - Target database and report structure

### - Email recipients and message content

## 📊 Basic Information

- **Workflow ID:** 6616
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 928
- **Downloads:** 92
- **Created:** 2025/7/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6616)

## 👤 Author

- **Name:** Léo
- **Username:** @leo-build-things

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **gmail** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **stickyNote** (×6)
- **notion** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.toolThink** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
