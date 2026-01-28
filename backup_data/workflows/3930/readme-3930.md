# Voice-to-email response system with Telegram, OpenAI Whisper & Gmail

> This workflow gives you the ability to reply to a long email with a voice note, rather than having to type everything out. 

ChatGPT will format your audio response and create an email draft for you.


### How it works
When a new email arrives in your inbox, the workflow checks if it needs a response, and it it does, it sends a message to you on Telegram via a VoiceEmailer bot.

When you reply to that message with an audio message, the second part of this workflow is triggered. It checks if the message is in the right format, transcribes the audio, and creates a draft response that shows up in the same email thread.

### Set up steps
- Add your credentials for Gmail and OpenAI
- Create an Telegram bot following the instructions [here](https://core.telegram.org/bots/tutorial).
- Connect your telegram credentials so the workflow will use your bot.
- Turn on the workflow, and message the bot from your telegram. Find the Chat ID from the Executions tab of your workflow, and enter it in as a variable.

![Screenshot 20250508 at 12.23.57.png](fileId:1296)


## 📊 Basic Information

- **Workflow ID:** 3930
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 3723
- **Downloads:** 372
- **Created:** 2025/5/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3930)

## 👤 Author

- **Name:** Adam Janes
- **Username:** @adamjanes

## 🏷️ Categories

- Personal Productivity
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **telegram** (×4)
- **@n8n/n8n-nodes-langchain.openAi** 
- **gmailTrigger** 
- **if** (×3)
- **telegramTrigger** 
- **gmail** 
- **stickyNote** (×7)
- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
