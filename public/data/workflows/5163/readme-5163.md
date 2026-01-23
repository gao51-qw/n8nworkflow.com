# AI-powered stock analysis assistant with Telegram, Claude & GPT-4O Vision

> "Ade Technical Analyst" is a dual-workflow AI system combining conversational intelligence with visual chart analysis through Telegram. The system features 11 primary nodes for conversation management and 8 secondary nodes for chart generation and analysis.

Core Components:

Telegram Integration: Message handling with dynamic typing indicators

AI Personality: "Ade" - a financial analyst with 50+ years NYSE/LSE experience using Claude 3.5 Sonnet

Chart Generation: TradingView integration via Chart-IMG API with MACD and volume indicators

Visual Analysis: GPT-4O vision for technical pattern recognition

Memory System: Session-based conversation context retention

Target Users
Individual traders seeking professional-grade analysis without subscription costs

Financial advisors wanting 24/7 AI-powered client support

Investment educators needing interactive learning tools

Fintech companies requiring white-label analysis solutions

Setup Requirements
Critical Security Fix Needed:

Remove hardcoded API key from Chart-IMG node immediately

Store all credentials securely in n8n credential manager

Required APIs:

OpenRouter (Claude 3.5 Sonnet)

OpenAI (GPT-4O vision)

Chart-IMG API

Telegram Bot Token

Technical Prerequisites:

n8n version 1.7+ with Langchain nodes

Webhook configuration for Telegram

Dual-workflow setup with proper ID referencing

Workflow Requirements
Security Compliance:

Never hardcode API keys in workflow JSON files

Use n8n credential manager for all sensitive data

Implement proper session isolation for user data

Include mandatory financial disclaimers

Performance Specifications:

Model temperature: 0.8 for balanced responses

Token limit: 500 for optimized performance

Dark theme charts with professional indicators

Session-based memory management

Need help customizing?
[Contact](Contact) me for consulting and support  or add me on [LinkedIn](LinkedIn)

## 📊 Basic Information

- **Workflow ID:** 5163
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 47182
- **Downloads:** 4718
- **Created:** 2025/6/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5163)

## 👤 Author

- **Name:** Femi Ad
- **Username:** @hgray

## 🏷️ Categories

- Crypto Trading
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.toolWorkflow** 
- **@n8n/n8n-nodes-langchain.agent** 
- **telegram** (×3)
- **stickyNote** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **set** (×4)
- **merge** 
- **telegramTrigger** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **executeWorkflowTrigger** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **httpRequest** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
