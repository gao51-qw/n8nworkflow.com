# AI agent to chat with you Search Console data, using OpenAI and Postgres

> **Edit 19/11/2024**: As explained on the workflow, the **AI Agent with the original system prompt was not effective when using `gpt4-o-mini`**.

To address this, I **optimized the prompt to work better with this model.** You can find the prompts I’ve tested on this **[Notion Page](https://dataki.notion.site/Prompts-for-n8n-Workflow-AI-Agent-to-Chat-with-Your-Search-Console-Data-143a162bd9cd8000b4d6dc8750a0d83f)**. And yes, there is one that **works well with `gpt4-o-mini`**.

## AI Agent to chat with you Search Console Data, using OpenAI and Postgres



This **AI Agent enables you to interact with your Search Console data** through a **chat interface**. Each node is **documented within the template**, providing sufficient information for setup and usage. You will also need to **configure Search Console OAuth credentials**.

Follow this **[n8n documentation](https://docs.n8n.io/integrations/builtin/credentials/google/oauth-generic/#configure-your-oauth-consent-screen)** to set up the OAuth credentials.

## Important Notes

### Correctly Configure Scopes for Search Console API Calls
- It’s essential to **configure the scopes correctly** in your Google Search Console API OAuth2 credentials. Incorrect **configuration can cause issues with the refresh token**, requiring frequent reconnections. Below is the configuration I use to **avoid constant re-authentication**:
![Search Console API oAuth2 config 1](https://i.imgur.com/vVLM7gG.png)
![Search Console API oAuth2 config 2](https://i.imgur.com/naT1NaX.png)

Of course, you'll need to add your **client_id** and **client_secret** from the **Google Cloud Platform app** you created to access your Search Console data.

### Configure Authentication for the Webhook

Since the **webhook will be publicly accessible**, don’t forget to **set up authentication**. I’ve used **Basic Auth**, but feel free to **choose the method that best meets your security requirements**.

## 🤩💖 Example of awesome things you can do with this AI Agent
![Example of chat with this AI Agent](https://i.imgur.com/jbfsYvT.png)


## 📊 Basic Information

- **Workflow ID:** 2541
- **Complexity:** advanced
- **Node Count:** 30
- **Views:** 8999
- **Downloads:** 899
- **Created:** 2024/11/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2541)

## 👤 Author

- **Name:** Dataki
- **Username:** @dataki

## 🏷️ Categories

- Internal Wiki
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.memoryPostgresChat** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **set** (×4)
- **stickyNote** (×14)
- **webhook** 
- **respondToWebhook** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** 
- **executeWorkflowTrigger** 
- **switch** 
- **httpRequest** (×2)
- **aggregate** (×2)
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 30 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
