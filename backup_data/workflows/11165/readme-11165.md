# Create an AI-powered Telegram customer support bot with lead management

> 🧠 AI Telegram Customer Support Assistant + Lead Manager

This n8n workflow provides a fully automated AI-driven customer support assistant connected to Telegram, with built-in lead management, knowledge-base querying, and context-aware answers.

⭐ What this workflow does

Receives user messages from Telegram

Logs all incoming/outgoing messages into a Data Table

Checks if a lead exists for the user (via chat_id)

Creates new leads automatically if needed

Builds an AI-ready context (user info + lead info + latest message)

Uses the AI Agent to answer questions using:

FAQ database

Services table (programs, prices, descriptions)

Settings table (agency info)

Lead update tool

Sends a natural, friendly reply back to Telegram

Updates leads in real time (name, phone, email, notes…)

📦 Required Data Tables (to be created by the user)

leads
Stores all user information (full_name, phone, email, etc.)

services
List of available programs/services with prices, duration, category.

faq
Frequently asked questions with answers and optional tags.

settings
Company/agency details used by the assistant.

chat_logs
Logs all messages exchanged with users (user + bot).

🔧 Required Credentials

Telegram Bot API Key

AI Model Credential (OpenAI, OpenRouter, Groq…)

No other credentials required.

🚀 How to use it

Import the workflow into your n8n instance

Create the required Data Tables as defined inside the Sticky Notes

Add your credentials (Telegram + AI Model)

Customize the prompt to match your business

Activate the workflow — you're ready to go!

💡 Suitable for:

Travel agencies

Customer support chatbots

Lead qualification + automation

AI knowledge-based assistants

Telegram-first businesses

## 📊 Basic Information

- **Workflow ID:** 11165
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 432
- **Downloads:** 43
- **Created:** 2025/11/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11165)

## 👤 Author

- **Name:** osama goda
- **Username:** @osamagoda

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **stickyNote** (×8)
- **telegramTrigger** 
- **dataTable** (×4)
- **dataTableTool** (×4)
- **@n8n/n8n-nodes-langchain.agent** 
- **telegram** 
- **code** 
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
