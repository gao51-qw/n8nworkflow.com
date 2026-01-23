# Query Slack channel history with natural language using OpenAI

> 
Chat with a Slack channel using AI. This workflow fetches the channel’s message history and lets you ask natural-language questions (“what were the decisions?”, “who’s blocked?”, “summarize yesterday”). The assistant **only** answers from the channel’s actual messages—no guessing.

---

## ⚙️ Setup Instructions

### 1️⃣ Set Up OpenAI Connection
1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)  
2. Navigate to [OpenAI Billing](https://platform.openai.com/settings/organization/billing/overview)  
3. Add funds to your billing account  
4. Copy your API key into the **OpenAI credentials** in n8n

### 2️⃣ Connect Slack API
1. Create an app → &lt;https://api.slack.com/apps&gt;  
2. **OAuth & Permissions** → add scopes you need to read channel history (typical:  
   `channels:history`, `groups:history`, `im:history`, `mpim:history`, plus `channels:read`, `groups:read`, `users:read`. Add `chat:write` if you want the bot to reply in Slack.)  
3. **Install** the app to your workspace → copy the **Bot User OAuth Token**  
4. In n8n → **Credentials → New → Slack OAuth2 API** → paste token and save  
5. In the **Slack History** node, select your Slack credential and the **Channel ID** to read

---

## 🗣️ Example Questions You Can Ask
- “Give me a 5-bullet summary of the last 24 hours.”  
- “What action items were assigned, and to whom?”  
- “List open questions that haven’t been answered yet.”  
- “Who was mentioned most this week?”  
- “Summarize decisions from the last sprint planning.”  
- “Show messages with the word ‘blocker’ from the past 2 days.”  
- “What files/links were shared today?”

---

## 📬 Contact
Need help customizing this or adding auto-replies back into Slack?

- 📧 **robert@ynteractive.com**  
- 🔗 **[Robert Breen](https://www.linkedin.com/in/robert-breen-29429625/)**  
- 🌐 **[ynteractive.com](https://ynteractive.com)**


## 📊 Basic Information

- **Workflow ID:** 7669
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 261
- **Downloads:** 26
- **Created:** 2025/8/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7669)

## 👤 Author

- **Name:** Robert Breen
- **Username:** @rbreen

## 🏷️ Categories

- AI RAG
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **stickyNote** (×5)
- **slackTool** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
