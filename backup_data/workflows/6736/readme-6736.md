# Categorize emails & get Telegram alerts with Azure OpenAI & Google Sheets

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## Understanding This Workflow

- In simple terms, this workflow triggers when you receive an e-mail in your inbox; classifies this e-mail based on the subject and notifies you using Telegram. It's fully customizable so you can change, add categoies and continue each data flow separately.

- E-Mails can hold pretty important information. But one can forget to check-up or rather not prefer to do so. This workflow keeps you updated of what's most important to you. Not only that, you can always talk to the bot to checkup on E-Mails you've missed.

### Set Up Overview
- **IMAP E-Mail Trigger:** You can switch to a Gmail node aswell.
- **Google Sheets:** Google Sheets is easy to use so I recommend you to keep it.
- **AI Model:** Use any model of your preferance. As long as it is smart and uses less tokens.
- **Telegram:** Refer to documentation to understand how to create a bot.

	&gt; There is no correct line of setting up these credentials, as the workflow needs all to work; as long as you don't change the logic of the workflow.

#### Note
Please refer to the sticky notes in the workflow for a clear guide on setup, workflow description etc. If you need any help or need a hand, you can always message me. 
&gt;https://community.n8n.io/u/mookie_lian

## 📊 Basic Information

- **Workflow ID:** 6736
- **Complexity:** advanced
- **Node Count:** 27
- **Views:** 377
- **Downloads:** 37
- **Created:** 2025/7/31
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6736)

## 👤 Author

- **Name:** Meelioo
- **Username:** @mookielian

## 🏷️ Categories

- Ticket Management
- AI Summarization

## 🔗 Nodes Used

- **emailReadImap** 
- **telegramTrigger** 
- **telegram** (×4)
- **noOp** (×3)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatAzureOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **stickyNote** (×4)
- **googleSheets** (×4)
- **if** 
- **googleSheetsTool** 
- **set** (×2)
- **aggregate** 
- **@n8n/n8n-nodes-langchain.textClassifier** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 27 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
