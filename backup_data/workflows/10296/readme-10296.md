# Automate Telegram channel post reactions with bot rotation & GPT-5-mini

> ## 📋 WORKFLOW OVERVIEW

**Automate reactions for Telegram Channel Posts** - Automated Telegram reaction system for specific posts
##
**Flow:**

1. User sends message to a receiver bot
2. AI parses request (emoji type & quantity)
3. Code processes and validates data
4. Loop sends reactions one by one
5. User receives confirmation

##
**Key Features:**
- Natural language processing by sending a message to a chat bot to react to a post on a different channel
- Reiterates through bot token rotation. This means that if you use 100 bots then you will be able to have 100 reactions per post of your choice
- Rate limit protection
- Error handling with helpful messages
##
You will need to first add the bots that you personally own which can be acquired from BotFather to the channel that you would want them to react posts to and allow it to manage messages.
##
Required Bot Permissions:
1. Bot Must Be an Administrator
The bot needs to be added as an admin to the channel (regular member status won't work for reactions).
2. Specific Admin Rights Needed:
When adding the bot as admin, you need to enable:
✅ "Post Messages" - This is actually the key permission needed
✅ "Add Subscribers" (optional, but sometimes required depending on channel settings)
##
Credentials needed are:
Target Channel ID, Bot tokens, Bot Receiver token, OpenAI API
##
**Example Usage:**
- "https://t.me/channel/123 needs 10 hearts and 10 fire reactions

##
If in need of help contact me at:
elijahmamuri@gmail.com


## 📊 Basic Information

- **Workflow ID:** 10296
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 182
- **Downloads:** 18
- **Created:** 2025/10/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10296)

## 👤 Author

- **Name:** Cj Elijah Garay
- **Username:** @elijahbuilds-ai

## 🏷️ Categories

- Social Media
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×9)
- **httpRequest** 
- **splitInBatches** 
- **limit** 
- **wait** 
- **telegramTrigger** 
- **telegram** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **code** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
