# Automate email & calendar management with Gmail, Google Calendar & GPT-4o AI

> Boost your productivity with this AI-powered email and calendar assistant:

This AI-powered template has 2 workflows. It manages your Gmail inbox and Google Calendar, classifies emails with custom labels, and suggests replies and meeting times — all fully automated with OpenAI and n8n.


Automatically analyze your Gmail inbox

Suggest replies, priorities, and meeting times

Checks your Google Calendar for conflicts and free slots

Maintain conversation context using Thread History Vector Store

The agent proactively acts using a Tools Agent architecture, with integrated memory and real-time tool invocation. It's perfect for busy professionals who want a personal assistant for communication and scheduling.

Included features:

✅ Do actions on incoming mails 8like Labeling etc)
✅ Summarize and Assist fot the latest emails
✅ Draft replies and schedule meetings contextually
✅ Handle time zone conversion and MessageID referencing
✅ Context retention of last conversation history - using VectorStore

📦 Requirements:

Gmail + Google Calendar credentials via n8n credentials

OpenAI API key

n8n VectorStore nodes (or external integration like Pinecone, Qdrant, or Chroma)

## 📊 Basic Information

- **Workflow ID:** 4366
- **Complexity:** advanced
- **Node Count:** 38
- **Views:** 19338
- **Downloads:** 1933
- **Created:** 2025/5/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4366)

## 👤 Author

- **Name:** AOE Agent Lab
- **Username:** @aoepeople

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×3)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **executeWorkflowTrigger** 
- **noOp** 
- **gmailTool** (×5)
- **googleCalendarTool** (×2)
- **stickyNote** (×6)
- **manualTrigger** 
- **gmail** (×4)
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterTokenSplitter** 
- **code** 
- **gmailTrigger** 
- **@n8n/n8n-nodes-langchain.toolVectorStore** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.textClassifier** 
- **@n8n/n8n-nodes-langchain.vectorStoreInMemory** (×3)
- **dateTimeTool** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 38 nodes with 28 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
