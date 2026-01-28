# Automated Discord chatbot for chat interaction in channel using Gemini 2.0 Flash

> A Discord bot that responds to mentions by sending messages to n8n workflows and returning the responses. Connects Discord conversations with custom automations, APIs, and AI services through n8n.

Full guide on: https://github.com/JimPresting/AI-Discord-Bot/blob/main/README.md 




# Discord Bot Summary

## Overview
The Discord bot listens for mentions, forwards questions to an n8n workflow, processes responses, and replies in Discord.
This workflow is intended for all Discord users who want to offer AI interactions with their respective channels.

## What do you need?
- You need a Discord account as well as a Google Cloud Project

## Key Features

### 1. Listens for Mentions
- The bot monitors Discord channels for messages that mention it.
- **Optional Configuration**: Can be set to respond only in a specific channel.

### 2. Forwards Questions to n8n
- When a user mentions the bot and asks a question:
  - The bot extracts the question.
  - Sends the question, along with channel and user information, to an n8n webhook URL.

### 3. Processes Data in n8n
- The n8n workflow receives the question and can:
  - Interact with AI services (e.g., generating responses).
  - Access databases or external APIs.
  - Perform custom logic.
- n8n formats the response and sends it back to the bot.

### 4. Replies to Discord with n8n's Response
- The bot receives the response from n8n.
- It replies to the user's message in the Discord channel with the answer.
- **Long Responses**: Handles responses exceeding Discord's 2000-character limit by chunking them into multiple messages.

### 5. Error Handling
- Includes error handling for:
  - Issues with n8n communication.
  - Response formatting problems.
- Manages cases where:
  - No question is asked.
  - An invalid response is received from n8n.

### 6. Typing Indicator
- While waiting for n8n's response, the bot sends a "typing..." indicator to the Discord channel.

### 7. Status Update
- For lengthy n8n processes, the bot sends a message to the Discord channel to inform the user that it is still processing their request.


## Step-by-Step Setup Guide as per Github Instructions


**Key Takeaways**

- You’ll configure an n8n webhook to receive Discord messages, process them with your workflow, and respond.  
- You’ll set up a Discord application and bot, grant the right permissions/intents, and invite it to your server.  
- You’ll prepare your server environment (Node.js), scaffold the project, and wire up environment variables.  
- You’ll implement message‐chunking, “typing…” indicators, and robust error handling in your bot code.  
- You’ll deploy with PM2 for persistence and know how to test and troubleshoot common issues.

---

## 1. n8n: Create & Expose Your Webhook

1. **New Workflow**  
   - Log into your n8n instance.  
   - Click **Create Workflow** (➕), name it e.g. `Discord Bot Handler`.  

2. **Webhook Trigger**  
   - Add a node (➕) → search **Webhook**.  
   - Set:  
     - **Authentication**: None (or your choice)  
     - **HTTP Method**: `POST`  
     - **Path**: e.g. `/discord-bot`  
   - Click **Execute Node** to activate.

3. **Copy Webhook URL**  
   - After execution, copy the **Production Webhook URL**.  
   - You’ll paste this into your bot’s `.env`.  

4. **Build Your Logic**  
   - Chain additional nodes (AI, database lookups, etc.) as required.

5. **Format the JSON Response**  
   - Insert a **Function** node before the end:  
     ```javascript
     return {
       json: { answer: "Your processed reply" }
     };
     ```

6. **Respond to Webhook**  
   - Add **Respond to Webhook** as the final node.  
   - Point it at your Function node’s output (with the `answer` field).

7. **Activate**  
   - Toggle **Active** in the top‐right and **Save**.

---

## 2. Discord Developer Portal: App & Bot

1. **New Application**  
   - Visit the [Discord Developer Portal](https://discord.com/developers/applications).  
   - Click **New Application**, name it.  
   - Go to **Bot** → **Add Bot**.

2. **Enable Intents & Permissions**  
   - Under **Privileged Gateway Intents**, toggle **Message Content Intent**.  
   - Under **Bot Permissions**, check:  
     - Read Messages/View Channels  
     - Send Messages  
     - Read Message History  

3. **Grab Your Token**  
   - In **Bot** → click **Copy** (or **Reset Token**).  
   - Store it securely.

4. **Invite Link (OAuth2 URL)**  
   - Go to **OAuth2** → **URL Generator**.  
   - Select scopes: `bot`, `applications.commands`.  
   - Under Bot Permissions, select the same permissions as above.  
   - Copy the generated URL, open it in your browser, and invite your bot.

---

## 3. Server Prep: Node.js & Project Setup

1. **Install Node.js v20.x**  
   ```bash
   sudo apt purge nodejs npm
   sudo apt autoremove
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt install -y nodejs
   node -v    # Expect v20.x.x
   npm -v     # Expect 10.x.x
   ```

2. **Project Folder**  
   ```bash
   mkdir discord-bot
   cd discord-bot
   ```

3. **Initialize & Dependencies**  
   ```bash
   npm init -y
   npm install discord.js axios dotenv
   ```

---

## 4. Bot Code & Configuration

1. **Environment Variables**  
   - Create `.env`:  
     ```bash
     nano .env
     ```  
   - Populate:  
     ```
     DISCORD_BOT_TOKEN=your_bot_token
     N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/discord-bot
     # Optional: restrict to one channel
     # TARGET_CHANNEL_ID=123456789012345678
     ```

2. **Bot Script**  
   - Create `index.js`:  
     ```bash
     nano index.js
     ```  
   - Implement:  
     - Import `dotenv`, `discord.js`, `axios`.  
     - Set up client with `MessageContent` intent.  
     - On `messageCreate`:  
       1. Ignore bots or non‐mentions.  
       2. (Optional) Filter by channel ID.  
       3. Extract and validate the user’s question.  
       4. Send “typing…” every 5 s; after 20 s send a status update if still processing.  
       5. POST to your n8n webhook with `question`, `channelId`, `userId`, `userName`.  
       6. Parse various response shapes to find `answer`.  
       7. If `answer.length ≤ 2000`, `message.reply(answer)`.  
       8. Else, split into ~1900‑char chunks at sentence/paragraph breaks and send sequentially.  
       9. On errors, clear intervals, log details, and reply with an error message.

3. **Login**  
   ```javascript
   client.login(process.env.DISCORD_BOT_TOKEN);
   ```

---

## 5. Deployment: Keep It Alive with PM2

1. **Install PM2**  
   ```bash
   npm install -g pm2
   ```

2. **Start & Monitor**  
   ```bash
   pm2 start index.js --name discord-bot
   pm2 status
   pm2 logs discord-bot
   ```

3. **Auto‐Start on Boot**  
   ```bash
   pm2 startup
   # Follow the printed command (e.g. sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u your_user --hp /home/your_user)
   pm2 save
   ```

---

## 6. Test & Troubleshoot

1. **Functional Test**  
   - In your Discord server:  
     ``` 
     @YourBot What’s the weather like?
     ```  
   - Expect a reply from your n8n workflow.

2. **Common Pitfalls**  
   - **No reply** → check `pm2 logs discord-bot`.  
   - **Intent Errors** → verify **Message Content Intent** in Portal.  
   - **Webhook failures** → ensure workflow is active and URL is correct.  
   - **Formatting issues** → confirm your Function node returns `json.answer`.

3. **Inspect Raw Data**  
   - Search your logs for **Complete response from n8n:** to debug payload shapes.

---





```

## 📊 Basic Information

- **Workflow ID:** 3456
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 3341
- **Downloads:** 334
- **Created:** 2025/4/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3456)

## 👤 Author

- **Name:** JPres
- **Username:** @stardawnai

## 🏷️ Categories

- Miscellaneous
- AI Chatbot

## 🔗 Nodes Used

- **webhook** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **respondToWebhook** 
- **code** 
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
