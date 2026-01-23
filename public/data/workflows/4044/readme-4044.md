# AI chatbot call center: Telegram call in (production-ready, part 1a)

> ### Workflow Name: 🤙 **Telegram Call In**

Template was created in n8n v1.90.2

### Skill Level: High

### Categories: n8n, Chatbot

### Stacks

- Chat Trigger node
- Telegram Trigger node
- Redis node
- Postgres node
- Execute Sub-workflow
- If node, Code node, Edit Fields (Set), Extract From File

### Prerequisite

- Community nodes: **n8n-nodes-google-speech**
- Sub-workflow: **Demo Call Back**
- Sub-workflow: **Demo Call Center**

# Production Features

- **Scaling Design** for n8n **Queue mode** in production environment
- Optional **Member Data** from **external Database** with **Caching Mechanism**.
- Optional **Voice Message to Text Message** via Google STT API with **Multi-Languages** support.
- **Testing Flow** with or without dependance on other workflow.
- **Error Management**

# What this workflow does?

This is a n8n **Telegram Call In Workflow**. It will wait for message from Telegram bot and sent to the Call Center to process.

# **How it works**

- The **Telegram Trigger** node will wait for the message from the Telegram bot.
- When message is received, it will first check for the matching Member from the PostgreSQL database.
- Then determine if it is a Text message or Voice message.
- For voice message, use the **Google Speech to Text API** to transcript it into text.
- Finally, pass the text to the next flow, i.e. the **Call Center**.

# **Set up instructions**

**n8n-nodes-google-speech**

1. Pull and Set up the required SQL from our [Github repository](https://github.com/ChatPayLabs/n8n-chatbot-core).
2. Go User &gt; Settings &gt; Community nodes, install **n8n-nodes-google-speech** node
    1. Follow https://www.npmjs.com/package/n8n-nodes-google-speech
    2. Setup the **Google STT node**
3. Create you **Telegram credentials**, refer to [n8n integration documentation](https://docs.n8n.io/integrations/builtin/credentials/slack/?utm_source=n8n_app&utm_medium=credential_settings&utm_campaign=create_new_credentials_modal) for more information.
4. Select your Credentials in **Telegram Trigger**
5. Create you **Redis credentials**, refer to [n8n integration documentation](https://docs.n8n.io/integrations/builtin/credentials/slack/?utm_source=n8n_app&utm_medium=credential_settings&utm_campaign=create_new_credentials_modal) for more information.
6. Select your Credentials in **Member Cache** and **Save Member Cache**.
7. Create you **Postgres credentials**, refer to [n8n integration documentation](https://docs.n8n.io/integrations/builtin/credentials/slack/?utm_source=n8n_app&utm_medium=credential_settings&utm_campaign=create_new_credentials_modal) for more information.
8. Select your Credentials in **Load Member Data.**
9. FOR TEST ONLY. Enable the **Telegram Test Output** for testing from the **Test Input**.
10. **Remember to activate this workflow for incoming message.**

# How to adjust it to your needs

1. By default, this template will use the **sys_member** table for member information, you could change it for your own design.
2. The demo implementation does not include failed member loading situation, you should implement based on your needs, e.g. if is_active is not true, do…
3. You can replace the sub-workflow Demo Call Back and Demo Call Center to another flow as needs.


## 📊 Basic Information

- **Workflow ID:** 4044
- **Complexity:** advanced
- **Node Count:** 35
- **Views:** 410
- **Downloads:** 41
- **Created:** 2025/5/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4044)

## 👤 Author

- **Name:** ChatPayLabs
- **Username:** @chatpaylabs

## 🏷️ Categories

- Support Chatbot
- Multimodal AI

## 🔗 Nodes Used

- **telegramTrigger** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **set** (×11)
- **switch** (×2)
- **telegram** (×2)
- **extractFromFile** 
- **n8n-nodes-google-speech.googleSpeech** 
- **stickyNote** (×6)
- **if** (×4)
- **code** 
- **redis** (×2)
- **postgres** 
- **executeWorkflow** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 35 nodes with 25 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
