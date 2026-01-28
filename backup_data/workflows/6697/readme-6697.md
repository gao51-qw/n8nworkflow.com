# Telegram fitness bot: Custom workout plans from photo/text using Gemini AI

> ## A Telegram Fitness Bot that creates personalized 7-day workout plans by analyzing user photos or text input. It uses Google Gemini AI for image and text understanding combined with LangChain for conversational flow and memory to deliver motivating fitness routines directly through Telegram.

Use cases include virtual fitness coaching, AI-powered personal training assistants, and health & wellness engagement bots.

## Who’s it for
- Fitness coaches and personal trainers seeking to automate client workout plans
- Developers building Telegram bots with AI-powered personalization
- Startups creating virtual fitness assistants or health engagement tools

## What it does
- Users send a full-body photo or message to the Telegram bot.
- The workflow detects if the input is photo or text.
- For photos, Gemini AI analyzes body type, posture, and muscle tone.
- For text, LangChain asks fitness questions (age, goals, activity level, etc.).
- Based on input, a personalized 7-day workout plan is generated in Telegram-compatible HTML.
- The plan is formatted and split as needed to fit message size limits.
- The workout plan is sent back to the user via Telegram.

## Requirements
- Telegram Bot token with messaging and file permissions
- Google Gemini API access with image and language model capabilities
- n8n instance (cloud or self-hosted)
- Basic knowledge of LangChain and n8n AI nodes for customization

## How to customize the workflow
- Modify LangChain system prompts for your coaching tone and style
- Add or change fitness questions in the conversation flow
- Enable PDF export of workout plans
- Add daily workout reminders and streak tracking via Cron and Telegram nodes
- Swap AI models or add new tools to enhance functionality
- Embed videos or images to enrich workout plans








## 📊 Basic Information

- **Workflow ID:** 6697
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 275
- **Downloads:** 27
- **Created:** 2025/7/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6697)

## 👤 Author

- **Name:** Parth Pansuriya
- **Username:** @parthpansuriya

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.googleGemini** 
- **telegramTrigger** 
- **switch** 
- **code** (×3)
- **telegram** (×3)
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
