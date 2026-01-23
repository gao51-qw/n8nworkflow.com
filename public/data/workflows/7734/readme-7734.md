# Create a Slack chatbot with GPT-4o for automated responses

> ## 🧑‍💻 Description
This workflow integrates **Slack** with an **OpenAI Chat Agent** to create a fully interactive chatbot inside your Slack workspace.

It works in a **bidirectional loop**:
1. A user sends a message in Slack.  
2. The workflow captures the message and logs it back into Slack (so you can monitor what’s being passed into the agent).  
3. The message is sent to an **OpenAI-powered agent** (e.g., GPT-4o).  
4. The agent generates a response.  
5. The response is formatted and posted back to Slack in the same channel or DM thread.

This allows you to **monitor, test, and interact** with the agent directly from Slack.

### 📌 Use Cases
- **Team Support Bot**: Provide quick AI-generated answers to FAQs in Slack.  
- **E-commerce Example**: The default prompt makes the bot act like a store assistant, but you can swap in your own domain knowledge.  
- **Conversation Monitoring**: Log both user and agent messages in Slack for visibility and review.  
- **Custom AI Agents**: Extend with RAG, external APIs, or workflow automations for specialized tasks.  

---

## ⚙️ Setup Instructions

### 1️⃣ OpenAI Setup
1. Sign up at [OpenAI](https://platform.openai.com).  
2. Generate an API key from the [API Keys page](https://platform.openai.com/account/api-keys).  
3. In **n8n** → **Credentials → New → OpenAI** → paste your key and save.  
4. In the **OpenAI Chat** node, select your credential and configure the system prompt.  
   - Example included: *“You are an ecommerce bot. Help the user as if you were working for a mock store.”*  
   - You can edit this prompt to fit your use case (support bot, HR assistant, knowledge retriever, etc.).

### 2️⃣ Slack Setup
1. Go to [Slack API Apps](https://api.slack.com/apps) → click **Create New App**.  
2. Under **OAuth & Permissions**, add the following scopes:  
   - Read: `channels:history`, `groups:history`, `im:history`, `mpim:history`, `channels:read`, `groups:read`, `users:read`.  
   - Write: `chat:write`.  
3. **Install** the app to your workspace → copy the **Bot User OAuth Token**.  
4. In **n8n** → **Credentials → New → Slack OAuth2 API** → paste the token and save.  
5. In the **Slack nodes** (e.g., *Send User Message in Slack*, *Send Agent’s Response in Slack*), select your credential and specify the Channel ID or User ID to send/receive messages.

---

## 🎛️ Customization Guidance
- **Change Agent Behavior**: Update the system message in the **Chat Agent** node.  
- **Filter Channels**: Limit listening to a specific channel by adjusting the Slack node’s Channel ID.  
- **Format Responses**: The **Format Response** node shows how to structure agent replies before posting back to Slack.  
- **Extend Workflows**: Add integrations with databases, CRMs, or APIs for dynamic data-driven responses.  

---

## 🔄 Workflow Flow (Simplified)

Slack User Message → Send User Message in Slack → Chat Agent → Format Response → Send Agent Response in Slack

---

## 📬 Contact
Need help customizing this workflow (e.g., multi-channel listening, advanced AI logic, or external integrations)?

📧 **robert@ynteractive.com**  
🔗 **[Robert Breen](https://www.linkedin.com/in/robert-breen-29429625/)**  
🌐 **[ynteractive.com](https://ynteractive.com)**


## 📊 Basic Information

- **Workflow ID:** 7734
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 386
- **Downloads:** 38
- **Created:** 2025/8/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7734)

## 👤 Author

- **Name:** Robert Breen
- **Username:** @rbreen

## 🏷️ Categories

- AI Chatbot
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **stickyNote** (×3)
- **slack** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **code** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
