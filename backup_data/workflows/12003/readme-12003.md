# Build a voice & text Telegram Bot with GPT-4.1-Mini and Gemini transcription

> **How it works:**
This Telegram automation works with voice and text messages given to the Telegram bot, and it returns the response in voice form if the input is in voice form. If the input is in text form, it will return a response in text form.

**Use Cases:**
- Customer Support
- Personal Chatbot

**Prerequisites:**
- OpenAI API Key
- Gemini API Key
- Telegram Bot built by BotFather
- Telegram Bot's API Key

**Target Audience:**
AI Automation learners who want to learn how to build and set up a basic Telegram Bot using n8n.

**How to set up:**

1. Create a telegram bot using BotFather, and the BotFather will give you an API key
2. Copy the API key and set it up in a Telegram node inside n8n
3. Get a free gemini api from https://aistudio.google.com/
4. Set up the Gemini API in the Transcribe recording node
5. Get an OpenAI API key from https://platform.openai.com/docs/overview and make sure to top up your credits
6. Copy the API key from the OpenAI platform and set it up in any OpenAI Chat Model, and it will be configured for all other nodes automatically by n8n

That's it! Now you can activate the workflow and test it by sending a simple message to your Telegram bot

## 📊 Basic Information

- **Workflow ID:** 12003
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 97
- **Downloads:** 9
- **Created:** 2025/12/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12003)

## 👤 Author

- **Name:** Hussam Muhammad Kazim
- **Username:** @hussammuhammadkazim

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **telegramTrigger** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **telegram** (×4)
- **if** 
- **@n8n/n8n-nodes-langchain.googleGemini** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **@n8n/n8n-nodes-langchain.guardrails** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
