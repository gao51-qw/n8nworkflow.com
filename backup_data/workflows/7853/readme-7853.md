# Manage schedule & contacts with Telegram Bot using GPT-4o-mini & Google Services

> # AI Personal Assistant Telegram Bot Template

## Description
Transform your Telegram into a powerful AI-powered personal assistant that manages your calendar, sends daily schedules, searches the web, and accesses your contacts - all through simple text messages.

## What This Template Does
This workflow creates an intelligent Telegram bot that serves as your personal assistant, capable of:

- **Daily Schedule Management**: Automatically checks your Google Calendar and emails you a formatted daily schedule summary
- **Intelligent Conversations**: Uses OpenAI GPT-4o-mini with conversation memory for natural interactions
- **Web Research**: Searches Wikipedia and the web using SerpAPI for any questions you have
- **Contact Management**: Accesses your Google Sheets contact database to find email addresses and information
- **Email Automation**: Sends emails on your behalf using Gmail integration
- **Calendar Integration**: Reads and manages your Google Calendar events

## Target Users
- **Busy Professionals** who need quick access to their schedule and want to automate daily planning
- **Small Business Owners** who want an AI assistant for managing contacts and communications
- **Personal Productivity Enthusiasts** who want to streamline their daily workflow
- **Anyone** who prefers text-based interaction over switching between multiple apps

## Key Features
✅ **Multi-Tool AI Agent**: Combines Wikipedia, web search, calendar, email, and contacts in one interface
✅ **Conversation Memory**: Remembers context across multiple interactions
✅ **Automatic Daily Scheduling**: Proactive daily schedule emails
✅ **Contact Intelligence**: Automatically finds contact information before sending emails
✅ **Telegram Integration**: Works through the familiar Telegram interface

## Use Cases
- "What's on my schedule today?" → Receives formatted email with daily agenda
- "Send an email to John about the meeting" → Finds John's email and sends message
- "What's the weather in Paris?" → Gets current weather information via web search
- "Tell me about quantum computing" → Provides Wikipedia information
- "Schedule a meeting with Sarah tomorrow at 2 PM" → Creates calendar event

## Prerequisites
Before setting up this template, you'll need accounts and API access for:
- **Telegram Bot** (free via @BotFather)
- **OpenAI API** (paid service)
- **Google Calendar API** (free)
- **Gmail API** (free)
- **Google Sheets API** (free)
- **SerpAPI** (freemium web search)

## Setup Instructions

### 1. Create Telegram Bot
1. Message @BotFather on Telegram
2. Use `/newbot` command and follow instructions
3. Save your bot token for later

### 2. Set Up Google APIs
1. Go to Google Cloud Console
2. Create a new project or select existing
3. Enable Google Calendar, Gmail, and Sheets APIs
4. Create OAuth2 credentials
5. Download credentials JSON file

### 3. Get API Keys
1. **OpenAI**: Visit platform.openai.com, create API key
2. **SerpAPI**: Sign up at serpapi.com, get API key

### 4. Configure Credentials in n8n
1. Add Telegram Bot credentials using your bot token
2. Set up Google OAuth2 for Calendar, Gmail, and Sheets
3. Add OpenAI API credentials
4. Add SerpAPI credentials

### 5. Customize the Workflow
1. **Update Calendar ID**: Replace `a________@gmail.com` with your calendar
2. **Set Google Sheets ID**: Replace the sheet ID with your contacts spreadsheet
3. **Modify System Message**: Update the AI agent's instructions to match your preferences
4. **Adjust Memory Settings**: Configure conversation memory window as needed

### 6. Test the Setup
1. Activate the workflow
2. Message your Telegram bot
3. Verify all integrations are working

## Customization Options
- **Change AI Model**: Switch between OpenAI models (GPT-3.5, GPT-4, etc.)
- **Adjust Memory**: Modify conversation memory window length
- **Add More Tools**: Integrate additional services like Notion, Slack, or weather APIs
- **Modify Schedule**: Change when daily schedule emails are sent
- **Customize Responses**: Update the system message to change assistant personality

## Important Notes
- **Privacy**: This bot has access to your calendar, contacts, and email - ensure proper security
- **API Costs**: OpenAI and SerpAPI usage will incur costs based on usage
- **Rate Limits**: Be aware of API rate limits for each service
- **Security**: Use environment variables for sensitive credentials

## Troubleshooting
- **Bot not responding**: Check Telegram credentials and webhook configuration
- **Calendar access issues**: Verify Google Calendar API permissions
- **Email not sending**: Confirm Gmail API scopes include send permissions
- **Memory not working**: Check that session keys are properly configured

## Support
For issues with this template, check:
1. n8n Community Forum
2. Individual API service documentation
3. Google Cloud Console for API errors
4. OpenAI usage dashboard for model issues

## 📊 Basic Information

- **Workflow ID:** 7853
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 251
- **Downloads:** 25
- **Created:** 2025/8/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7853)

## 👤 Author

- **Name:** Ronnie Craig
- **Username:** @ronnie-craig-2025

## 🏷️ Categories

- AI Chatbot
- Multimodal AI

## 🔗 Nodes Used

- **telegramTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **telegram** 
- **@n8n/n8n-nodes-langchain.toolWikipedia** 
- **@n8n/n8n-nodes-langchain.toolSerpApi** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **googleCalendarTool** (×2)
- **gmailTool** 
- **googleSheetsTool** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
