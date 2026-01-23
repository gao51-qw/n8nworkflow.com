# Discord AI ChatBot : Context-Aware, Replies to Mentions AND also DMs

> **[Click here to access this Workflow for free](https://www.bonzai.pro/auth?action=buyPrice%2Cpri_XVAx_5246)**.

---

# Get your own custom ChatGPT inside your Discord Server
![DS.png](fileId:1737)


## Description
This n8n workflow enables a fully autonomous AI assistant within your Discord server. It listens for both public mentions and direct messages (DMs), and replies in real-time using a language model (OpenAI's GPT-4o by default). The assistant can dynamically fetch previous messages for better context, providing smart, coherent, and personalized responses.

---

### 🔧 **Key Features**

- **Dual Trigger**: Reacts to both public bot mentions and private DMs.
- **Context-Aware AI**: Dynamically fetches the last 30 messages from either public or private conversations.
- **Smart Routing**: Replies either in the original public channel or via DM, depending on where the message came from.
- **Custom Prompting**: Easily modify the system prompt to define the AI’s tone, behavior, and personality.
- **Fully Autonomous**: No manual intervention required — the bot always replies instantly.

---

### ✅ Requirements

- An operational **n8n instance**.
- A **Discord bot** with at least these permissions:
  - Send Messages  
  - Read Message History  
  - Manage Messages
- **OpenAI API key** (or compatible LLM credentials).
- The community package: `n8n-nodes-discord-trigger`.

---

### 🧰 **Setup Instructions**

#### 1. **Discord Bot Setup**
- Create and invite your Discord bot to your server with required permissions.
&gt; You will find in the next step a complete tutorial to craft your own bot with the right code and permissions for this workflow to work
- Set your Discord bot token in n8n's credential manager.

#### 2. **Install the Community Node** (please read ⚠️ Disclaimer first)
- Go to `Settings &gt; Community Nodes &gt; Install`
- Paste: `n8n-nodes-discord-trigger` and install.

#### 3. **Configure the Workflow**
- Add your Discord bot credentials.
- Update the LLM credentials with your OpenAI key or alternative.
- Customize the AI agent system prompt if needed.

---

### 🤖 **How It Works**

- When a **public mention** is detected, the bot replies directly in the channel, referencing the original message.
- When a **DM** is received, it responds privately.
- The AI uses tools to **read the latest 30 public or private messages** to build accurate context before replying.

---

### 🛠 **Customization Options**

- **Change LLM**: Swap out OpenAI with any LLM that has an API.
- **Edit Prompt Behavior**: Modify the system prompt to control tone and personality.
- **Adjust Trigger Filters**: Choose which roles, channels, or patterns activate the flow.

---
### If you just need a tutorial on setting up your Discord bot, be my guest ➡️ [Here](https://www.bonzai.pro/theo_marcadet/posts/oNz0_19715/discord-bot-setup-tutorial)

---

### And if you need any help, or have any question, feel free to come discuss about it on **[Telegram](https://www.bonzai.pro/theo_marcadet/lp/7018/)** 

## 📊 Basic Information

- **Workflow ID:** 3692
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 1110
- **Downloads:** 111
- **Created:** 2025/4/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3692)

## 👤 Author

- **Name:** Theo Marcadet
- **Username:** @theomarcadet

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **set** 
- **if** 
- **discord** (×2)
- **webhook** 
- **n8n-nodes-discord-trigger.discordTrigger** 
- **stickyNote** (×7)
- **discordTool** 
- **@n8n/n8n-nodes-langchain.toolHttpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
