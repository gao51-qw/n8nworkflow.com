# Natural language Q&A for Pipedrive leads using GPT-4o-mini

> 
## 📖 Description
Ask natural-language questions about your **Pipedrive leads**. This workflow pulls live lead data from Pipedrive and has OpenAI answer questions like “leads added this week”, “stuck leads by owner”, or “next activities due today.” Responses are grounded **only** in your Pipedrive data.

---

## ⚙️ Setup Instructions

### 1️⃣ Set Up OpenAI Connection
1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)  
2. Navigate to [OpenAI Billing](https://platform.openai.com/settings/organization/billing/overview)  
3. Add funds to your billing account  
4. Copy your API key into the **OpenAI credentials** in n8n

### 2️⃣ Connect Pipedrive
1. In **Pipedrive** → **Personal preferences → API** → copy your **API token**  
   - URL shortcut: `https://{your-company}.pipedrive.com/settings/personal/api`  
2. In **n8n** → **Credentials → New → Pipedrive API**  
   - **Company domain**: `{your-company}` (the subdomain in your Pipedrive URL)  
   - **API Token**: paste the token from step 1 → **Save**  
3. In the **Pipedrive Tool** node, select your Pipedrive credential and (optionally) set filters (e.g., owner, label, created time).

---

## 🗣️ Example Questions You Can Ask
- “Summarize leads added this week by owner.”  
- “Which leads have **no upcoming activity**?”  
- “Show **overdue activities** and who owns them.”  
- “Top 10 leads by value that are still open.”  
- “Leads created in the last 7 days with the label ‘Inbound’.”  
- “What are the **next actions due today**?”  
- “Which leads are **stuck &gt;14 days** without updates?”  
- “Give me a one-paragraph **pipeline health** summary.”

---

## 📬 Contact
Need help extending this (e.g., posting summaries to Slack/Email or auto-creating activities)?

- 📧 **robert@ynteractive.com**  
- 🔗 **[Robert Breen](https://www.linkedin.com/in/robert-breen-29429625/)**  
- 🌐 **[ynteractive.com](https://ynteractive.com)**


## 📊 Basic Information

- **Workflow ID:** 7670
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 153
- **Downloads:** 15
- **Created:** 2025/8/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7670)

## 👤 Author

- **Name:** Robert Breen
- **Username:** @rbreen

## 🏷️ Categories

- AI RAG
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **pipedriveTool** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **stickyNote** (×4)
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
