# Automate salon appointment management with WhatsApp, GPT & Google Calendar

> # 🤖Multi-Agent AI WhatsApp Bot for Service Businesses

Transform your salon/service business with this streamlined WhatsApp automation system featuring Claude integration, zero-setup database management, and intelligent conversation handling.

## How it works

- **Claude MCP Integration** - Direct connection to Claude Sonnet 4 via Model Context Protocol
- **Streamlined 2-Agent System** - Booking Agent and Admin Agent (simplified from 5 for better reliability)
- **GPT-5 Mini Primary** with Gemini 2.5 Flash backup for cost-effective processing
- **Multi-Media Support** - Handles text, voice (Whisper transcription), images, and PDFs with cost extraction
- **Smart Acknowledgments** - "One moment...", "Let me check availability..." during processing
- **Rate Limiting & Spam Protection** - Configurable limits (default: 100 msg/hour) with professional UX

## Zero-Setup Database Management

- **Autonomous Airtable Creation** - Bot creates all necessary tables automatically
- **Complete CRUD Operations** - Create, edit, delete services and settings via WhatsApp
- **Dynamic Business Configuration** - Modify hours, pricing, services conversationally
- **Friend Booking Support** - "Book for my friend Sarah" functionality

## Set up steps

- **WhatsApp Business API** setup (detailed instructions included)
- **Airtable Base ID** extraction (store in Redis or hardcode - recommended)
- **Google Calendar** integration for scheduling
- **Redis** for caching, rate limiting, and conversation memory
- **MCP Server** deployment for Claude integration
- **Whatsapp** for notifications

## Key Features

- **Booking Limit Control** - Default 6 appointments per customer (configurable in workflow)
- **Service Name Matching** - GPT-5 Nano workflow for cost-optimized service recognition
- **24-Hour Advance Reminders** - Automatic WhatsApp reminders sent at 8 PM
- **Conversation Memory** maintains context across interactions
- **Error Resilience** with backup models and graceful failure handling

Perfect for salons, spas, clinics, consulting services, or any appointment-based business. Complete business setup happens through conversational commands - no manual database configuration required.

## 📊 Basic Information

- **Workflow ID:** 4926
- **Complexity:** advanced
- **Node Count:** 71
- **Views:** 5138
- **Downloads:** 513
- **Created:** 2025/6/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4926)

## 👤 Author

- **Name:** Denis
- **Username:** @denisholc7

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **whatsAppTrigger** 
- **whatsApp** (×9)
- **switch** 
- **set** (×5)
- **redis** (×8)
- **wait** 
- **if** (×7)
- **code** (×6)
- **gmail** 
- **executeWorkflow** 
- **httpRequest** (×3)
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **extractFromFile** 
- **stickyNote** (×15)
- **@n8n/n8n-nodes-langchain.agentTool** 
- **googleCalendar** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.memoryRedisChat** 
- **whatsAppTool** 
- **@n8n/n8n-nodes-langchain.mcpClientTool** 
- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 71 nodes with 50 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
