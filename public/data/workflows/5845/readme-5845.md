# Slack AI ChatBot : context-aware, replies to mentions AND also DMs

> **[Click here to access this Workflow for free](https://www.bonzai.pro/auth?action=buyPrice%2Cpri_zmMq_5350)**.

---

# Get your own custom ChatGPT inside your Slack Workspace 
![sl.png](fileId:1734)

## Description
This n8n workflow enables a fully autonomous AI assistant within your Slack Workspace. It listens for both public mentions and direct messages (DMs), and replies in real-time using a large language model (OpenAI's GPT-4o by default). The assistant can dynamically fetch previous messages for better context, providing smart, coherent, and personalized responses.

---

### 🔧 **Key Features**

- **Dual Trigger**: Reacts to both public bot mentions and private DMs.
- **Context-Aware AI**: Dynamically fetches the last 20 messages from either public or private conversations.
- **Smart Routing**: Replies either in the original public channel or via DM, depending on where the message came from.
- **Custom Prompting**: Easily modify the system prompt to define the AI’s tone, behavior, and personality.
- **Fully Autonomous**: No manual intervention required — the bot always replies instantly.

---

### ✅ Requirements

- An operational **n8n instance**.
- A Slack workspace (you can create one for free [here](https://slack.com/get-started?entry_point=workspaces))
- A Slack account with **Admin** or **Owner** privileges (required to install apps)

---

### 🧰 **Setup Instructions**

#### **Slack Bot Setup**
- Create a Slack App with the necessary permissions and configurations
&gt; You will find in the next step a complete tutorial to craft your own bot with the right confirguration and permissions for this workflow to work
- Set your Slack bot token in n8n's credential manager.

---

### 🤖 **How It Works**

- When a **public mention** is detected, the bot replies directly in the channel, referencing the original message.
- When a **DM** is received, it responds privately.
- The AI uses a tool to **read the latest 20 public or private messages** to build accurate context before replying.

---

### 🛠 **Customization Options**

- **Change LLM**: Swap out OpenAI with any LLM that has an API.
- **Edit Prompt Behavior**: Modify the system prompt to control tone and personality.

---
### If you just need a tutorial on setting up your Slack bot, be my guest ➡️ [Here](https://www.bonzai.pro/theo_marcadet/posts/xZ18_21698/slack-bot-setup-tutorial)

---

### And if you need any help, or have any question, feel free to come discuss about it on **[Telegram](https://www.bonzai.pro/theo_marcadet/lp/7018/)**

## 📊 Basic Information

- **Workflow ID:** 5845
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 204
- **Downloads:** 20
- **Created:** 2025/7/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5845)

## 👤 Author

- **Name:** Theo Marcadet
- **Username:** @theomarcadet

## 🏷️ Categories

- Internal Wiki
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.vectorStorePinecone** 
- **set** 
- **if** 
- **stickyNote** (×7)
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.toolThink** 
- **slack** (×2)
- **slackTool** 
- **slackTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
