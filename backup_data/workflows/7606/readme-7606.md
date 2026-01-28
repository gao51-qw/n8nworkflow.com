# AI system prompt generator & optimizer (n8n + OpenAI)

> 
This workflow acts as a **System Prompt Optimizer Agent**.  
You send it a draft prompt or goal, and it returns:  
1. A rewritten **optimized system prompt** that is clear, specific, and actionable.  
2. A recommendation for the **best OpenAI model** to use based on reasoning needs, complexity, and latency/cost tradeoffs.  

The workflow uses **memory** for context, so you can iteratively refine prompts.  

---

## ⚙️ Setup Instructions

### 1️⃣ Set Up OpenAI Connection
1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)  
2. Navigate to [OpenAI Billing](https://platform.openai.com/settings/organization/billing/overview)  
3. Add funds to your billing account  
4. Copy your API key into the **OpenAI credentials** in n8n  

---

## 📝 Example Question


## 📊 Basic Information

- **Workflow ID:** 7606
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 1308
- **Downloads:** 130
- **Created:** 2025/8/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7606)

## 👤 Author

- **Name:** Robert Breen
- **Username:** @rbreen

## 🏷️ Categories

- Engineering
- AI Chatbot

## 🔗 Nodes Used

- **stickyNote** (×4)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
