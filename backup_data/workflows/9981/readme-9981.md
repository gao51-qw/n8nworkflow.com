# Voice & text Telegram assistant with GPT-4.1-mini and conversation memory

> # Personal AI Assistant on Telegram

**Who It’s For:**

- This workflow is designed for developers, founders, community managers, and automation enthusiasts who want to bring a personal AI assistant directly into their Telegram chat.
- It lets users interact naturally—either through text or voice messages—and get instant, AI-powered replies without switching apps or opening dashboards.

⚡ What It Does / How It Works

📥 Message Trigger: A Telegram Trigger node listens for incoming messages.
🧭 Smart Routing: A Switch node decides if the user sent a text or voice message.
🗣️ Voice to Text: If it’s voice, the workflow uses OpenAI Whisper Transcription to convert it into text.
🧠 AI Processing: The text is passed to an AI Agent powered by GPT-4.1-mini to understand intent and craft a response.
💬 Reply: The bot sends a clean, structured, and polite answer back to the user on Telegram.
🧠 Memory: A buffer memory node keeps short-term conversation history for a more contextual, human-like experience.

🧰 **How to Set It Up:**
1. Telegram Integration

- Create a bot via @BotFather on Telegram.
- https://telegram.me/BotFather
- Add your Telegram API Key to n8n credentials.
- Connect the Telegram Trigger and Send a Message nodes.

2. OpenAI Setup

- Get your API key from platform.openai.com.
- https://platform.openai.com/api-keys
- Configure the OpenAI Chat Model and Transcribe a Recording nodes with GPT-4.1-mini.

3. Workflow Logic

- Use the Switch node to detect message type (text or voice).
- Route voice messages through transcription before sending them to the AI agent.
- Add Simple Memory to maintain short conversational context.

4. Go Live

- Activate the workflow.
- Send a message or voice note to your bot.
- Get instant replies from your personal AI assistant. 🚀

🛡️ **Requirements:**

- n8n (self-hosted or cloud)
- Telegram Bot API key
- OpenAI API key (for GPT-4.1-mini)
- Basic understanding of n8n nodes and connections

🌟 **Why Use This Workflow:**

✅ Hands-free experience: Just talk or type.
🧠 AI-powered responses: Natural language understanding with GPT.
⚡ Real-time interaction: Fast replies via Telegram.
🔁 Memory-aware conversations: Feels more human.
🧩 Modular design: Easily extend to other AI tools or platforms.

## 📊 Basic Information

- **Workflow ID:** 9981
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 951
- **Downloads:** 95
- **Created:** 2025/10/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9981)

## 👤 Author

- **Name:** Balakrishnan C
- **Username:** @balakrishnandevops

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **telegramTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **set** (×2)
- **telegram** (×2)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **switch** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **stickyNote** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
