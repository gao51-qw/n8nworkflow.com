# Telegram voice assistant with OpenAI & Gmail: manage & draft emails via voice

> ## Telegram AI Voice & Email Assistant: Manage, Draft & Discuss Emails via Voice

### Who’s it for
This workflow is perfect for professionals and teams who want to manage email communications hands-free directly from Telegram. Simply send a voice message to your bot and seamlessly check your recent emails, draft or send a reply, and discuss email threads—all powered by OpenAI’s transcription and chat capabilities, with no third-party voice agent required.

### How it works / What it does
- Sends voice messages to a Telegram bot, which are then transcribed via OpenAI.
- Retrieves recent emails, drafts, or sends replies based on your commands.
- Engages the user in conversational discussion about email content using OpenAI chat.
- Responds in text or synthesized voice (OpenAI), creating a natural interactive experience.
- Automates email management from Telegram, keeping you efficient on the go.

### How to set up
1. Create a Telegram bot via @BotFather and obtain your API token.
2. Add the OpenAI API key and Gmail OAuth credentials to n8n.
3. Assign your credentials to the Telegram, OpenAI, and Gmail nodes (Draft/Send/Get Email).
4. Deploy and activate the workflow.
5. Interact with your Telegram bot: just send voice messages and let the assistant manage your emails!

### Requirements
- Telegram Bot Token
- OpenAI API Key
- Gmail OAuth Credentials

### How to customize the workflow
- Adjust the Switch node to route and handle new message types or responses.
- Integrate additional services such as Slack, Notion, or custom tools as needed.
- Fine-tune prompts or the OpenAI transcription settings for your specific use case.
- Modify email templates and memory/session nodes for advanced conversation flows.
- Embed video guides or extra sticky notes for enhanced onboarding and usability.


## 📊 Basic Information

- **Workflow ID:** 9339
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 845
- **Downloads:** 84
- **Created:** 2025/10/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9339)

## 👤 Author

- **Name:** Barbora Svobodova
- **Username:** @barb

## 🏷️ Categories

- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **telegramTrigger** 
- **set** 
- **switch** 
- **telegram** (×3)
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **gmailTool** (×3)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.agent** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
