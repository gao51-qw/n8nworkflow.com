# Build a WhatsApp assistant for text, audio & images using GPT-4o & Evolution API

> Build an intelligent WhatsApp assistant that automatically responds to customer messages using AI. This template uses the Evolution API community node for WhatsApp integration and OpenAI for natural language processing, with built-in conversation memory powered by Redis to maintain context across messages.

&gt; ⚠️ **Self-hosted requirement:** This workflow uses the Evolution API community node, which is only available on self-hosted n8n instances. It will not work on n8n Cloud.

## What this workflow does

1. Receives incoming WhatsApp messages via Evolution API webhook
2. Filters and processes text, audio, and image messages
3. Transcribes audio messages using OpenAI Whisper
4. Analyzes images using GPT-4 Vision
5. Generates contextual responses with conversation memory
6. Sends replies back through WhatsApp

## Who is this for?

- Businesses wanting to automate customer support on WhatsApp
- Teams needing 24/7 automated responses with AI
- Developers building multimodal chat assistants
- Companies looking to reduce response time on WhatsApp

## Setup instructions

1. **Evolution API**: Install and configure Evolution API on your server. Create an instance and obtain your API key and instance name.
2. **Redis**: Set up a Redis instance for conversation memory. You can use a local installation or a cloud service like Redis Cloud.
3. **OpenAI**: Get your API key from platform.openai.com with access to GPT and Whisper models.
4. **Webhook**: Configure your Evolution API instance to send webhooks to your n8n webhook URL.

## Customization options

- Modify the system prompt in the AI node to change the assistant's personality and responses
- Adjust the Redis TTL to control how long conversation history is retained
- Add additional message type handlers for documents, locations, or contacts
- Integrate with your CRM or database to personalize responses

## Credentials required

- Evolution API credentials (self-hosted)
- OpenAI API key
- Redis connection

## 📊 Basic Information

- **Workflow ID:** 11754
- **Complexity:** advanced
- **Node Count:** 54
- **Views:** 1223
- **Downloads:** 122
- **Created:** 2025/12/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11754)

## 👤 Author

- **Name:** Antonio Gasso
- **Username:** @akav

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **stickyNote** (×11)
- **webhook** 
- **set** (×10)
- **filter** 
- **wait** (×3)
- **n8n-nodes-evolution-api.evolutionApi** (×4)
- **switch** 
- **convertToFile** (×3)
- **@n8n/n8n-nodes-langchain.openAi** (×3)
- **noOp** (×3)
- **redis** (×3)
- **if** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.memoryPostgresChat** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **splitOut** 
- **splitInBatches** 
- **aggregate** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 54 nodes with 40 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
