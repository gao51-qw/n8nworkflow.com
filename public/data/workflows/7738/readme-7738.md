# Query Monday.com tasks with natural language using GPT-4o

> 
Ask natural-language questions about your Monday.com tasks (e.g., “Which tasks are overdue?”, “Show me all items stuck”, “Summarize what’s due this week”).  
The assistant fetches **real data from your Monday.com board** and answers based only on that.

---

## ⚙️ Setup Instructions

### 1️⃣ Set Up OpenAI Connection
1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)  
2. Navigate to [OpenAI Billing](https://platform.openai.com/settings/organization/billing/overview)  
3. Add funds to your billing account  
4. Copy your API key into the **OpenAI credentials** in n8n  

---

### 2️⃣ Connect Monday.com Node
1. In **Monday.com** → go to your **Admin → API**  
   - Copy your **Personal API Token**  
   - Docs: [Generate Monday API Token](https://developer.monday.com/api-reference/docs/authentication)  
2. In **n8n** → **Credentials → New → Monday.com API**  
   - Paste your token and save.  
3. Open the **Get many items** node → choose your credential → select your **Board ID** and **Group ID**.  

---

## 🧠 How it works
- **Sample Chatbot**: webhook/chat trigger for your questions  
- **Get many items (Monday.com)**: pulls board/group tasks  
- **Set Fields → Combine → Convert to text**: formats task data  
- **OpenAI Chat Model + Memory**: lets you ask questions and keeps context across turns  
- **Chat with Monday.com**: generates the final AI answer  

---

## 📬 Contact
Need help customizing this for your own board structure?

📧 **robert@ynteractive.com**  
🔗 **[Robert Breen](https://www.linkedin.com/in/robert-breen-29429625/)**  
🌐 **[ynteractive.com](https://ynteractive.com)**


## 📊 Basic Information

- **Workflow ID:** 7738
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 422
- **Downloads:** 42
- **Created:** 2025/8/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7738)

## 👤 Author

- **Name:** Robert Breen
- **Username:** @rbreen

## 🏷️ Categories

- AI Chatbot
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **mondayCom** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **stickyNote** (×4)
- **set** (×2)
- **aggregate** 
- **merge** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
