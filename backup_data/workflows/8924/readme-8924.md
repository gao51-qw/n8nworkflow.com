# Multi-agent salon appointment management with Telegram, GPT5-mini & Claude MCP

> # 🤖 Multi-Agent AI Telegram Bot for Service Businesses

Transform your salon/service business with this streamlined Telegram automation system featuring Claude integration, zero-setup database management, and intelligent conversation handling.

## How It Works

### Core Architecture
- **Claude MCP Integration** - Direct connection to Claude Sonnet 4 via Model Context Protocol
- **Streamlined 2-Agent System** - Booking Agent and Admin Agent (simplified from 5 for better reliability)
- **GPT-5 Mini Primary** with Gemini 2.5 Flash backup for cost-effective processing
- **Multi-Media Support** - Handles text, voice (Whisper transcription), images, and PDFs with cost extraction
- **Smart Acknowledgments** - "One moment…", "Let me check availability…" during processing
- **Rate Limiting & Spam Protection** - Configurable limits (default: 100 msg/hour) with professional UX

## Zero-Setup Database Management

- **Autonomous Airtable Creation** - Bot creates all necessary tables automatically
- **Complete CRUD Operations** - Create, edit, delete services and settings via Telegram
- **Dynamic Business Configuration** - Modify hours, pricing, services conversationally
- **Friend Booking Support** - "Book for my friend Sarah" functionality

## Setup Steps

1. **Telegram Business API** setup (detailed instructions included)
2. **Airtable Base ID** extraction (store in Redis or hardcode - recommended)
3. **Google Calendar** integration for scheduling
4. **Redis** for caching, rate limiting, and conversation memory
5. **MCP Server** deployment for Claude integration
6. **Telegram** for notifications

## Key Features

### Booking Management
- **Booking Limit Control** - Default 6 appointments per customer (configurable in workflow)
- **Service Name Matching** - GPT-5 Nano workflow for cost-optimized service recognition
- **24-Hour Advance Reminders** - Automatic Telegram reminders sent at 8 PM

### Conversation Handling
- **Conversation Memory** maintains context across interactions
- **Error Resilience** with backup models and graceful failure handling

## Use Cases

Perfect for:
- Salons
- Spas
- Clinics
- Consulting services
- Any appointment-based business

Complete business setup happens through conversational commands - no manual database configuration required.

---

*Transform your service business with intelligent automation powered by AI and Telegram integration.*

## 📊 Basic Information

- **Workflow ID:** 8924
- **Complexity:** advanced
- **Node Count:** 67
- **Views:** 320
- **Downloads:** 32
- **Created:** 2025/9/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8924)

## 👤 Author

- **Name:** Denis
- **Username:** @denisholc7

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **set** (×5)
- **redis** (×8)
- **wait** 
- **if** (×5)
- **code** (×6)
- **executeWorkflow** 
- **stickyNote** (×15)
- **@n8n/n8n-nodes-langchain.agentTool** 
- **googleCalendar** (×2)
- **@n8n/n8n-nodes-langchain.memoryRedisChat** 
- **@n8n/n8n-nodes-langchain.mcpClientTool** 
- **telegramTrigger** 
- **switch** 
- **telegram** (×6)
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **httpRequest** (×5)
- **extractFromFile** 
- **scheduleTrigger** 
- **telegramTool** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 67 nodes with 47 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
