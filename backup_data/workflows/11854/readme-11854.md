# AI-powered ticket triage with multi-model classification & knowledge base

> ## How It Works
This workflow automates enterprise ticket management by combining AI-powered classification with knowledge base retrieval. It receives support tickets via webhook, routes them through multiple AI models (OpenAI ChatGPT, NVIDIA's text classification APIs, and embeddings-based search) to determine optimal resolution strategies. The system generates contextual diagnostic logs, formats responses, updates ticket systems, notifies engineers when escalation is needed, and seamlessly integrates with knowledge bases for continuous learning. It solves the critical problem of manual ticket sorting and delayed responses by automating intelligent triage, reducing resolution time, and ensuring consistent quality across support operations. Target audience includes support operations teams, technical support managers, and enterprises managing high-volume ticket queues seeking to improve efficiency and SLA compliance.

## Setup Steps
1. Configure the OpenAI API key in credentials.
2. Add NVIDIA API credentials for embedding and classification models.
3. Set up Google Sheets for knowledge base storage and retrieval.
4. Connect your ticketing system (Jira, Zendesk, or webhook) for incoming tickets.
5. Link a notification service (Gmail or Slack) for engineer alerts.
6. Map custom fields to your ticket system schema.

 
## Prerequisites
OpenAI API account with GPT access. NVIDIA API credentials (Embeddings & Classification). Google Sheets for KB management. Ticketing system with webhook capability.  

## Use Cases
SaaS support teams triaging 100+ daily tickets, reducing manual sorting by 80%. Technical support escalating complex issues intelligently while documenting solutions.  

## Customization
Swap OpenAI models for Claude or Anthropic APIs. Replace Google Sheets with database systems (PostgreSQL, Airtable).  

## Benefits
Reduces manual ticket sorting by 70-80%, freeing support staff for complex issues. Decreases average resolution time through intelligent routing. 


## 📊 Basic Information

- **Workflow ID:** 11854
- **Complexity:** advanced
- **Node Count:** 31
- **Views:** 94
- **Downloads:** 9
- **Created:** 2025/12/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11854)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Ticket Management
- AI RAG

## 🔗 Nodes Used

- **webhook** 
- **set** (×3)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **@n8n/n8n-nodes-langchain.mcpClientTool** (×2)
- **@n8n/n8n-nodes-langchain.vectorStorePGVector** (×2)
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **if** (×2)
- **code** 
- **slack** 
- **postgres** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **stickyNote** (×9)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 31 nodes with 21 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
