# Manage Jira issues with natural language via Telegram and GPT-4o

> ## Manage Jira Issues with Natural Language via Telegram and GPT-4o  
## Overview
The Jira Agent is an AI-powered assistant that allows users to interact with Jira directly through messaging platform Telegram. It leverages OpenAI's GPT-4o model to interpret natural language commands and perform various Jira-related actions. On Telegram, it enables users to create Jira stories by triggering a guided form when prompted with "create story." Additionally, it provides more extensive functionality, including creating, updating, searching, and transitioning Jira issues through natural language commands.

## How it works
**Normal interaction** 
Using messages as "Please give all my issues".

**Standardized process of creating stories:** 
1. Message: "create story"
2. Open the Form that Telegram responds back to you
3. Fill in the essential story information in the form
4. The story automatically gets created in your backlog. 

## Required Connections
To use the Jira Agent effectively, users need access to:
- A Telegram account, Telegram setup involves deploying the bot and starting a chat; story creation is triggered with a simple text command.
- A connected Jira workspace
- Permissions to create and modify Jira issue
- Access to GPT-4o API-key

*Detailed configuration instructions are provided in the workflow*

## Setup Time
&lt;15 minutes

## Customising this workflow

- Try adding more details to the form for more complete Jira ticket creation.
- Try connecting a Google Calendar node to plan your work

## 📊 Basic Information

- **Workflow ID:** 5742
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 222
- **Downloads:** 22
- **Created:** 2025/7/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5742)

## 👤 Author

- **Name:** Humble Turtle
- **Username:** @humbleturtle

## 🏷️ Categories

- Project Management
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **set** (×3)
- **jiraTool** (×5)
- **@n8n/n8n-nodes-langchain.agent** 
- **stickyNote** (×8)
- **telegramTrigger** 
- **function** 
- **telegram** (×2)
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
