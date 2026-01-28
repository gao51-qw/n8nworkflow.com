# Personal assistant for calendar & tasks with GPT-4o-mini and Telegram

> Meet **Troy**, your intelligent personal assistant that seamlessly manages your Google Calendar and Tasks through Telegram. This workflow combines AI-powered natural language processing with MCP (Model Context Protocol) integration to provide a conversational interface for scheduling meetings, managing tasks, and organizing your digital life.
Key Features

📅 **Smart Calendar Management**

Create single and recurring events with conflict detection
Support for multiple attendees (1-2 attendee variants)
Automatic time zone handling (Bangladesh Standard Time)
Weekly recurring event scheduling
Event retrieval, updates, and deletion

✅ **Task Management**

Create, update, and delete tasks in Google Tasks
Mark tasks as completed
Retrieve task lists with completion status
Task repositioning and organization
Parent-child task relationships

🤖**Intelligent Processing**

Natural language understanding for scheduling requests
Automatic conflict detection before event creation
Context-aware responses with conversation memory
Error handling with fallback messages

📱 **Telegram Interface**

Real-time chat interaction
Simple commands and natural language
Instant confirmations and updates
Error notifications

## Workflow Components
**Core Architecture:**

Telegram Trigger for user messages
AI Agent with GPT-4o-mini processing
MCP Client Tools for Google services
Conversation memory for context
Error handling with backup responses

**MCP Integrations:**

Google Calendar MCP Server (6 specialized tools)
Google Tasks MCP Server (5 task operations)
Custom HTTP tool for advanced task positioning

## Use Cases
**Calendar Scenarios:**

"Schedule a meeting tomorrow at 3 PM with john@example.com"
"Set up weekly team standup every Monday at 10 AM"
"Check my calendar for conflicts this afternoon"
"Delete the meeting with ID xyz123"

**Task Management:**

"Add a task to buy groceries"
"Mark the project report task as completed"
"Update my presentation task due date to Friday"
"Show me all pending tasks"

## Setup Requirements
**Required Credentials:**

Google Calendar OAuth2
Google Tasks OAuth2
OpenAI API key
Telegram Bot token
**
MCP Configuration:**

Two MCP server endpoints for Google services
Proper webhook configurations
SSL-enabled n8n instance for MCP triggers

## Business Benefits

**Productivity:** Voice-to-action task and calendar management
**Efficiency: **Eliminate app switching with chat interface
**Intelligence:** AI prevents scheduling conflicts automatically
**Accessibility:** Simple Telegram commands for complex operations

## Technical Specifications
**Components:**

1 Telegram trigger
1 AI Agent with memory
2 MCP triggers (Calendar & Tasks)
13 Google service tools
Error handling flows

**Response Time:** Sub-second for most operations
**Memory: **Session-based conversation context
**Timezone:** Automatic Bangladesh Standard Time conversion

This personal assistant transforms how you interact with Google services, making scheduling and task management as simple as sending a text message to Troy on Telegram.
Tags: personal-assistant, mcp-integration, google-calendar, google-tasks, telegram-bot, ai-agent, productivity

## 📊 Basic Information

- **Workflow ID:** 8197
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 957
- **Downloads:** 95
- **Created:** 2025/9/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8197)

## 👤 Author

- **Name:** Khair Ahammed
- **Username:** @khair1212

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.mcpTrigger** (×2)
- **googleCalendarTool** (×6)
- **googleTasksTool** (×5)
- **stickyNote** (×4)
- **httpRequestTool** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **telegramTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.mcpClientTool** (×2)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **telegram** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
