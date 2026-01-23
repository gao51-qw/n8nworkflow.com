# AI personal assistant with GPT-4o: Email, calendar, search & CRM integration

> ## This n8n template demonstrates how to use AI as a comprehensive personal assistant with multiple specialized agents.

Use cases include email management, scheduling, web search, calculations, and more - all automated through AI coordination.

## Good to know
This template integrates multiple AI services through OpenRouter

Each agent specializes in different tasks (Gmail, Calendar, Search, etc.)

Memory persistence maintains context across interactions

## How it works

The workflow is triggered by Telegram messages (can be replaced with other triggers)

A router node directs requests to the appropriate specialized agent

Agents include:

Gmail for email management

Calculator for math operations

Google Search for information retrieval

Calendar for scheduling

Contacts for CRM functions

The OpenRouter Chat Model coordinates responses

Final responses are sent back through Telegram

## How to use
Connect your Telegram bot credentials

Configure each service with appropriate API keys

The system will automatically route requests to the right agent

## Requirements

OpenRouter account for AI services

Telegram bot token

Google API credentials for relevant services

## Customising this workflow
Add more specialized agents as needed

Replace Telegram with other communication channels

Adjust routing logic for different use cases


## 📊 Basic Information

- **Workflow ID:** 5552
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 15888
- **Downloads:** 1588
- **Created:** 2025/7/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5552)

## 👤 Author

- **Name:** Jordan Lee
- **Username:** @jordanlee

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.toolCalculator** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** (×4)
- **@n8n/n8n-nodes-langchain.toolSerpApi** 
- **telegram** 
- **telegramTrigger** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **perplexityTool** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
