# Autonomous customizable support chatbot on Intercom + Discord thread reports

> **[Click here to access this Workflow for free](https://www.bonzai.pro/auth?action=buyPrice%2Cpri_NdDM_5249)**.

---

# Connect your own LLM-boosted chatbot to Intercom (f*** their overly priced FlN Agent), and stay in touch on Discord
![ic.png](fileId:1731)

This workflow connects your Intercom chat system with your own AI Agent and sends a complete log of each conversation to Discord using threads. It allows you to run a fully automated support system while maintaining full visibility of the bot's behavior in real time.

For every new conversation in Intercom, a thread is created in a specified Discord channel. Each message from the user, the AI, and even manual human responses is logged to the thread, offering full traceability and transparency.

You also have fine-grained control over the AI agent. By simply clicking the ⭐️ star in Intercom’s UI, support agents can instantly pause or resume AI responses for a specific chat — no coding or config changes needed.

---

## Requirements

- A working n8n instance
- An Intercom account with permission to set up webhooks
- A Discord bot with the following permissions:
  - `Send Messages`
  - `Create Public/Private Threads`
  - `Manage Threads`
- API credentials for your preferred LLM (OpenAI is used by default)
- Google Chrome or any browser to access Intercom’s UI

---

## Setup

1. **Intercom:**
   - Go to Intercom’s webhook settings.
   - Add a webhook that listens to new incoming messages and points to the Webhook URL in this n8n workflow.
   - Make sure to send full conversation data.

2. **Discord:**
   - Create a Discord bot and invite it to your server with the required permissions.
   - In the Discord + Token node at the top of the workflow:
     - Add your bot token
     - Add the ID of the channel where threads should be created

3. **LLM / AI Agent:**
   - By default, the workflow uses OpenAI via HTTP Request.
   - You can substitute it with any LLM provider of your choice.
   - Make sure to set up your credentials in n8n and select them in the HTTP nodes.

4. **HTTP Authentication Tips:**
   - For both Intercom and Discord API calls, it's recommended to create credentials in n8n's Credential Manager.
   - Then, assign those credentials inside each HTTP Request node for a cleaner setup.

---

## Usage

- When a new conversation starts in Intercom, a Discord thread is created automatically.
- Each message — user input, AI response, and human reply — is logged into the Discord thread in real time.
- The AI replies automatically **unless the ⭐️ star is checked** in Intercom:
  - ☆ **Unchecked** = AI replies **enabled**
  - ⭐️ **Checked** = AI replies **disabled**, human takeover enabled

![screenshot intercoms inbox.png](fileId:1116)

This gives you on-the-fly control of each conversation’s automation level directly from the Intercom inbox.

---

## Customization

- You can replace OpenAI with any LLM that provides a compatible API.
- Discord channel ID, thread naming, and message formatting can be customized to match your team’s preferences.
- You can expand the workflow to handle events like conversation closure or satisfaction ratings for deeper analytics.

---
### If you need any help, or have any question, feel free to come discuss about it on **[Telegram](https://www.bonzai.pro/theo_marcadet/lp/7018)** 


## 📊 Basic Information

- **Workflow ID:** 3558
- **Complexity:** advanced
- **Node Count:** 58
- **Views:** 569
- **Downloads:** 56
- **Created:** 2025/4/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3558)

## 👤 Author

- **Name:** Theo Marcadet
- **Username:** @theomarcadet

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **splitOut** 
- **if** (×2)
- **switch** 
- **webhook** 
- **httpRequest** (×10)
- **filter** (×4)
- **set** (×6)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **stickyNote** (×22)
- **merge** 
- **aggregate** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.vectorStorePinecone** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** 
- **intercom** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 58 nodes with 26 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
