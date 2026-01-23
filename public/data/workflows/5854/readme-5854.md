# Manage Google Calendar events via Telegram with Gemini AI assistant

> ## Who is this for?
This workflow is for businesses and individuals who want to automate calendar management via Telegram using n8n. It’s ideal for appointment-based services, consultants, and anyone who needs to streamline event scheduling, updates, or cancellations through a simple chat interface.

## What problem is this workflow solving?
Manually managing calendar events is time-consuming and error-prone, especially when clients communicate through messaging apps like Telegram. This workflow solves the problem by connecting Telegram to Google Calendar, enabling users to manage events directly via chat, reducing administrative overhead and response times.

## What this workflow does
This workflow enables Telegram-based interaction with Google Calendar. Users can:
- Create new events
- Update existing events
- Delete events
- Retrieve a list of scheduled events

Optionally, AI (like ChatGPT or Gemini) can be used to interpret natural language inputs, making the interaction even smoother.

## Setup
1. Add credentials:
   - Telegram: Connect your Telegram API.
   - Google Calendar: Add your Google account credentials to allow calendar access.
   - AI (optional): Add credentials for ChatGPT, Gemini, or another language model if using AI for natural language parsing.
2. Import the workflow into n8n and review all nodes.
3. Test the WhatsApp webhook to ensure it’s receiving messages correctly.
4. Connect to your Google Calendar and test event creation and retrieval.

## 📊 Basic Information

- **Workflow ID:** 5854
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 74
- **Downloads:** 7
- **Created:** 2025/7/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5854)

## 👤 Author

- **Name:** Andrew
- **Username:** @boanse

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **googleCalendarTool** (×4)
- **stickyNote** (×2)
- **if** 
- **telegram** (×2)
- **set** (×2)
- **telegramTrigger** 
- **switch** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
