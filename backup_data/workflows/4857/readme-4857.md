# Create a Notion AI assistant with Google Gemini for managing tasks & content

> **This n8n workflow template uses community nodes and is only compatible with the self-hosted version of n8n.** 

# Build an AI agent for Notion (with Notion official MCP server)

![Screenshot 20250610 at 15.11.56.png](fileId:1475)

## Use case

This template empowers Notion power-users to build their own AI assistant, deeply integrated with their workspace. It solves the constant problem of copy-pasting and context-switching between a separate AI chat and Notion by creating a direct, conversational bridge. Now you can interact with an intelligent agent that can create, retrieve, and update your Notion databases and pages on your behalf, turning your workspace into a truly dynamic productivity hub.

![Screenshot 20250610 at 13.52.46.png](fileId:1474)

## How it works

When you send a message via the chat interface, the workflow passes it to your chosen AI model. The model, connected to the official Notion tool server, analyzes your request to see if it can be fulfilled by one of its available Notion actions. If it matches a tool, the workflow executes the command using the Notion API—like creating a new page or searching a database—and the AI then confirms the action is complete back in the chat.

## Setup

**Prerequisite:** This template is for **self-hosted n8n instances only**, as it requires a community node. 

1. Copy this workflow into your self-hosted n8n instance 
2. Install the required community node (n8n-nodes-mcp).
3. Add your credentials for your chosen AI Model and the Notion MCP Server.
4. Test the workflow by starting chatting with your new Notion assistant.

## How to adjust it to your needs

- You can use the AI model you want and even easily compare different AI models.
- You can start from this template and then provide other tools to your AI agent to build more powerful workflows.

## 📊 Basic Information

- **Workflow ID:** 4857
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 1182
- **Downloads:** 118
- **Created:** 2025/6/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4857)

## 👤 Author

- **Name:** Laura Piraux
- **Username:** @lauraslap

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.agent** 
- **stickyNote** (×7)
- **n8n-nodes-mcp.mcpClientTool** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
