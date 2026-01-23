# Search Outlook emails with natural language queries using GPT-4o

> 
This workflow allows you to **search your Outlook mailbox with natural language**. You type what you’re looking for (e.g., “invoice from last week”), and the workflow:  
1. Uses **OpenAI** to generate a search query.  
2. Searches Outlook emails and ranks them by relevance.  
3. Outputs results in a simple table with **score + link** to each email.  

👉 The number of results can be changed (default: **5**).  

---

## ⚙️ Setup Instructions

### 1️⃣ Set Up OpenAI Connection
1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)  
2. Navigate to [OpenAI Billing](https://platform.openai.com/settings/organization/billing/overview)  
3. Add funds to your billing account  
4. Copy your API key into the **OpenAI credentials** in n8n  

### 2️⃣ Set Up Outlook Connection
1. In n8n → **Credentials → New → Microsoft Outlook OAuth2 API**  
2. Log in with your Outlook account & approve access  
3. Attach this credential to the **Search Outlook** node in the workflow  
4. (Optional) Change the `limit` parameter in the node if you want more/less than 5 results  

---

## 📬 Contact Information
Need help customizing this workflow or building similar automations?  

📧 [robert@ynteractive.com](mailto:robert@ynteractive.com)  
🔗 [Robert Breen](https://www.linkedin.com/in/robert-breen-29429625/)  
🌐 [ynteractive.com](https://ynteractive.com)  


## 📊 Basic Information

- **Workflow ID:** 7600
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 765
- **Downloads:** 76
- **Created:** 2025/8/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7600)

## 👤 Author

- **Name:** Robert Breen
- **Username:** @rbreen

## 🏷️ Categories

- AI RAG
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **stickyNote** (×4)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×3)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **merge** 
- **@n8n/n8n-nodes-langchain.agent** (×3)
- **microsoftOutlook** 
- **aggregate** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
