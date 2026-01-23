# Voice-to-task manager with Telegram, GPT-4o & Notion database

> 📌 How it works

This workflow turns voice or text messages from Telegram into structured tasks in Notion, using AI-powered intent detection and task generation.

It supports:
- 🆕 Task creation
- ✏️ Task updates (like changing priority, title, or deadline)
- 🧠 Task analysis (e.g., workload, goal alignment, emotional fatigue)

The assistant uses OpenAI to:
- Detect intent (create, update, or analyze)
- Extract or update task fields (title, priority, due date, etc.)
- Auto-format list-style descriptions with bullet points
- Detect relevant tags like health, money, sport, etc.

⚙️ Setup steps
1. Clone the [GitHub repo](https://github.com/YahorDubrouski/ai-planner) or import the .json into n8n manually.
2. Configure:
- OpenAI credentials
- Telegram Bot Token
- Notion credentials
3. Use Telegram to send messages like:
- “Create a task to call mom tomorrow”
- “Update the grocery task to add milk”
- “Am I overbooked today?”

## 📊 Basic Information

- **Workflow ID:** 7925
- **Complexity:** advanced
- **Node Count:** 38
- **Views:** 775
- **Downloads:** 77
- **Created:** 2025/8/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7925)

## 👤 Author

- **Name:** Yahor Dubrouski
- **Username:** @yahordubrouski

## 🏷️ Categories

- AI Chatbot
- Multimodal AI

## 🔗 Nodes Used

- **telegramTrigger** 
- **switch** (×2)
- **telegram** (×4)
- **@n8n/n8n-nodes-langchain.openAi** 
- **set** (×3)
- **stickyNote** (×5)
- **@n8n/n8n-nodes-langchain.chainLlm** (×6)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **code** (×5)
- **notion** (×3)
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 38 nodes with 30 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
