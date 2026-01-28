# AI-powered Telegram task assistant with Notion integration

> This workflow creates a powerful AI assistant in Telegram that helps you manage your tasks in Notion. The assistant leverages OpenAI's language models to understand natural language commands, process voice messages, and maintain context through conversations.

Key features:
- Processes both text and voice messages in Telegram
- Transcribes voice messages automatically
- Maintains conversation context with memory
- Manages Notion tasks through a custom tool:
  • List all tasks
  • Add new tasks with priority (today/later)
  • Complete or uncomplete tasks
  • Change task timing

The workflow consists of two main parts:
1. AI Agent section: Handles Telegram connectivity, message processing, voice transcription, and conversation management
2. Notion Tool section: Implements the custom tool that connects to your Notion database, allowing the AI to interact with your tasks

Setup requires:
- A Telegram bot token
- OpenAI API credentials
- Notion integration token and database ID

[Example Notion Database](https://minglesai.notion.site/1feb53dccd6a81a1a12aedea55bff6a6?v=1feb53dccd6a81f5880c000c0387b716&pvs=4)


Perfect for personal productivity, team task management, or as a foundation for building more complex AI assistants with additional tools.

## 📊 Basic Information

- **Workflow ID:** 4142
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 1684
- **Downloads:** 168
- **Created:** 2025/5/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4142)

## 👤 Author

- **Name:** Alexey from Mingles.ai
- **Username:** @alexx

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **telegramTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **set** (×4)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **telegram** (×3)
- **@n8n/n8n-nodes-langchain.openAi** 
- **executeWorkflowTrigger** 
- **manualTrigger** 
- **notion** (×4)
- **switch** (×2)
- **code** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 20 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
