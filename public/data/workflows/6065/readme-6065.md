# Conversational Google Calendar management with Claude 3.5 Haiku & Telegram

> 💬 Conversational Calendar Bot for Telegram
This workflow creates an AI chatbot on Telegram that intelligently manages your Google Calendar using natural language. It even checks for conflicts before scheduling!

![Screenshot 20250716 at 7.11.32 PM.png](fileId:1759)
---

AI Models: Anthropic Claude 3.5 Haiku (Primary) & OpenAI GPT-4.1-mini (Fallback)

How It Works
Listen 👂: Triggered by a message in your Telegram chat.

Understand 🧠: An AI Agent extracts the event details (title, date, time).

Check 🧐: It first checks Google Calendar for any conflicting events.

Decide ✅: If the slot is free, it creates the event. If not, it asks you for a new time.

Confirm 👍: Sends a final confirmation message back to you.

Nodes Used
Telegram Trigger

LangChain Agent

Anthropic & OpenAI Models

Google Calendar & Telegram Tools

Setup
Credentials: Add API keys for Telegram, Google Calendar, Anthropic, and OpenAI.

Configure Nodes:

Telegram Trigger: Add your specific Chat ID.

Google Calendar Nodes ("Create" & "Get"): Select your calendar from the dropdown list.

Example Usage
To create a timed event:

🗓️ "Add an appointment to pick up graduation certificates on July 17th at 9 AM"

To create an all-day event:

PASSPORT "Remind me to renew my passport on August 20th"

## 📊 Basic Information

- **Workflow ID:** 6065
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 418
- **Downloads:** 41
- **Created:** 2025/7/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6065)

## 👤 Author

- **Name:** M Sayed
- **Username:** @msayed-cs

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **telegramTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **googleCalendarTool** (×2)
- **telegramTool** 
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** 
- **telegram** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
