# WhatsApp AI assistant for Google Calendar & Gmail management with Gemini/GPT

> ⚠️ **Disclaimer:** This workflow uses WhatsApp, Google Calendar, and Gmail nodes that must be configured manually.  

## Who’s it for  
This workflow is built for professionals, teams, and automation enthusiasts who want to **manage their Google Calendar and Gmail directly from WhatsApp**, powered by an AI assistant using OpenAI GPT or Google Gemini. It enables users to chat naturally through WhatsApp to schedule meetings, send emails, and check events — all without opening Gmail or Google Calendar.  

## How it works  
- The **WhatsApp Trigger** node captures incoming messages from users.  
- The **AI Agent** (powered by Gemini or GPT) interprets user queries and determines the best tool to use.  
- The **Simple Memory** node keeps context between messages using the user’s phone number.  
- The **Google Calendar nodes** handle:  
  - Listing, creating, and updating events.  
  - Checking your availability before scheduling.  
- The **Gmail nodes** handle:  
  - Sending emails.  
  - Reading and summarizing recent messages.  
- The **Date & Time node** converts natural language like “next Monday at 3 PM” into proper ISO time format.  
- The assistant responds via **Send WhatsApp Response**, sending clear confirmations and replies.  

## Features  
- Manage Gmail and Calendar entirely via WhatsApp.  
- AI-powered understanding of natural language commands.  
- Integrated with Google Meet for automatic conferencing links.  
- Short-term memory for context retention.  
- Fully modular – swap Gemini with OpenAI GPT or any LLM.  

## Setup Steps  
1. Configure WhatsApp Cloud API via Meta for Developers.  
2. Set up Google Calendar and Gmail OAuth2 credentials.  
3. Add your Google API keys and calendar email.  
4. Connect your OpenAI or Gemini model credentials.  
5. Activate and test the workflow with messages like:  
   - “Schedule a meeting tomorrow at 5 PM.”  
   - “Check my latest emails.”  
   - “Send an email to alex@example.com about our project.”  

## Requirements  
- n8n instance (self-hosted or cloud)  
- WhatsApp Business API (Meta Developer Account)  
- Google Workspace or Gmail account  
- OpenAI API key or Google Gemini API key  
- Properly configured webhooks for WhatsApp Trigger  

## Example Prompts  
- “What’s on my calendar this week?”  
- “Email John to confirm our meeting.”  
- “When am I free tomorrow afternoon?”  

## Customization  
- Replace Gemini with OpenAI GPT in the AI Agent node.  
- Adjust memory length for longer or shorter conversations.  
- Add Slack or Teams notification nodes.  
- Modify the prompt personality or response tone.  

## Credits  
Created by [Praneel](https://www.praneel.tech)  
For detailed setup help, visit [praneel.tech/contact](https://www.praneel.tech/contact)


## 📊 Basic Information

- **Workflow ID:** 9931
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 690
- **Downloads:** 69
- **Created:** 2025/10/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9931)

## 👤 Author

- **Name:** Praneel S
- **Username:** @praneel7015

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **gmailTool** (×2)
- **googleCalendarTool** (×4)
- **dateTimeTool** 
- **stickyNote** (×9)
- **whatsAppTrigger** 
- **set** 
- **whatsApp** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
