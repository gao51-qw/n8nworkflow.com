# Telegram AI bot assistant: ready-made template for voice & text messages

> ## Free template for voice & text messages with short-term memory 
 
This n8n workflow template is a blueprint for an AI Telegram bot that processes both voice and text messages. Ready to use with minimal setup. 
 
The bot remembers the last several messages (10 by default), understands commands and provides responses in HTML. 
 
You can easily swap GPT-4 and Whisper for other language and speech-to-text models to suit your needs. 
 
### Core Features 
   - Text: send or forward messages 
   - Voice: transcription via Whisper 
 
Extend this template by adding [LangChain tools](https://community.n8n.io/t/review-node-as-tools-is-finally-here/57539). 
 
### Requirements 
- Telegram Bot API 
- OpenAI API (for GPT-4 and Whisper) 
 
💡 **New to Telegram bots?** Check our [step-by-step guide](https://blog.n8n.io/create-telegram-bot/#how-to-build-a-telegram-bot-with-n8n) on creating your first bot and setting up OpenAI access. 
 
### Use Cases 
- Personal AI assistant 
- Customer support automation 
- Knowledge base interface 
- Integration hub for services that you use: 
  - Connect to any API via [HTTP Request Tool](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolhttprequest/) 
  - Trigger other n8n workflows with [Workflow Tool](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolworkflow/)

## 📊 Basic Information

- **Workflow ID:** 2534
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 43584
- **Downloads:** 4358
- **Created:** 2024/11/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2534)

## 👤 Author

- **Name:** Yulia
- **Username:** @yulia

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **telegram** (×5)
- **telegramTrigger** 
- **set** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **stickyNote** (×3)
- **@n8n/n8n-nodes-langchain.agent** 
- **switch** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
