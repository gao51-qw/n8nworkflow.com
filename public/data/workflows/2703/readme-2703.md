# AI agent : Google calendar assistant using OpenAI

> This template is a **simple AI Agent that acts as a Google Calendar Assistant**. 
It is designed for beginners to have their **"first AI Agent"** performing **common tasks** and to help them understand how it works.

## For new users of n8n, AI Agents, and OpenAI:
This template **involves using an OpenAI API Key**. If you are new to AI Agents, make sure to **research and understand key concepts** such as:
- **"Tokens"** (used for API requests),
- **"Tool calling"** (how the AI interacts with external tools),
- **OpenAI's usage costs** (how you will be billed for API usage).

## Functionality

It has two main functionalities:
- **Create events** in a calendar
- **Retrieve events** from a calendar

## How you can use it
Everything is **explained with sticky notes in the workflow**. 
It is **ready-to-use**: all you need to do is connect your OpenAI credentials, and you can start using the workflow.


## 📊 Basic Information

- **Workflow ID:** 2703
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 66220
- **Downloads:** 6622
- **Created:** 2025/1/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2703)

## 👤 Author

- **Name:** Dataki
- **Username:** @dataki

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **googleCalendarTool** (×2)
- **stickyNote** (×7)
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
