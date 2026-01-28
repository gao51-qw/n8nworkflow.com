# AI chatbot call center: demo call back (production-ready, part 6)

> ### Workflow Name: 💬 Demo Call Back

Template was created in n8n v1.90.2

### Skill Level: High

### Categories: n8n, Chatbot

### Stacks

- Execute Sub-workflow Trigger node
- Chat Trigger node
- Redis node
- Postgres node
- Telegram node
- HTTP Request node
- If node, Code node, Edit Fields (Set)

### Prerequisite

- Execute Sub-workflow Trigger: your own node
- MiniMax Account (https://www.minimax.io/)

# Production Features

- **Scaling Design** for n8n **Queue mode** in production environment
- Optional **Provider Data** from **external Database** with **Caching Mechanism**.
- Optional **AI Clone Voice Message** response via MiniMax API with **Multi-Languages** support.
- Optional **Backup Chat Log** to Database, so you can use in APP/API building.
- **Testing Flow** with or without dependance on other workflow.
- **Multi Chatbot** (This is a demo for Telegram, you can add WhatsApp, Line, etc)
- **Error Management**

# What this workflow does?

This is a n8n **Telegram Output Workflow**. It will receive message from other Sub-workflow then output to Telegram for **Message**, or **Replay Message** and extra **Voice Message**.

# **How it works**

- The **Flow Trigger** node will wait for the message from other Sub-workflow.
- When message is received, it will first check for the matching **Provider** from the PostgreSQL database.
- Then determine if it is a Voice message to Text message.
- OPTIONAL. For voice message, use the **MiniMax API** to generate a voice message, then send it to Telegram.
- Finally, send the text to Telegram.

# **Set up instructions**

1. Pull and Set up the required SQL from our [Github repository](https://github.com/ChatPayLabs/n8n-chatbot-core).
2. Create you **Redis credentials**, refer to [n8n integration documentation](https://docs.n8n.io/integrations/builtin/credentials/slack/?utm_source=n8n_app&utm_medium=credential_settings&utm_campaign=create_new_credentials_modal) for more information.
3. Select your Credentials in **Provider Cache** and **Save Provider Cache**.
4. Create you **Postgres credentials**, refer to [n8n integration documentation](https://docs.n8n.io/integrations/builtin/credentials/slack/?utm_source=n8n_app&utm_medium=credential_settings&utm_campaign=create_new_credentials_modal) for more information.
5. Select your Credentials in **Load Member Data, Create Chat Log Input,** and **Create Chat Log Output.**
6. Create you **Telegram credentials**, refer to [n8n integration documentation](https://docs.n8n.io/integrations/builtin/credentials/slack/?utm_source=n8n_app&utm_medium=credential_settings&utm_campaign=create_new_credentials_modal) for more information.
7. Select your Credentials in **Telegram Voice Output**, **Telegram Reply Output**, and **Telegram Output**.

# AI Clone Voice setup instructions (Optional)

You can clone any voice with MiniMax

1. Go to https://www.minimax.io/ and create a MiniMax account
2. Setup the Database with the required variables found in the **MiniMax TTS** node
3. That’s it

# How to adjust it to your needs

1. By default, this template will use the **sys_provider** table provider information, you could change it for your own design.
2. The demo use **MiniMax API** for AI voice cloning, you could implement any other AI your choice.
3. The **Backup Chat Log** will backup all chat conversion line by line. You can use it for you own APP/API development.

## 📊 Basic Information

- **Workflow ID:** 4050
- **Complexity:** advanced
- **Node Count:** 35
- **Views:** 439
- **Downloads:** 43
- **Created:** 2025/5/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4050)

## 👤 Author

- **Name:** ChatPayLabs
- **Username:** @chatpaylabs

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **switch** (×3)
- **executeWorkflowTrigger** 
- **set** (×8)
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **httpRequest** (×2)
- **telegram** (×3)
- **stickyNote** (×6)
- **if** (×5)
- **redis** (×2)
- **postgres** (×3)
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 35 nodes with 27 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
