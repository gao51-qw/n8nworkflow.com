# Talk to your SQLite database with a LangChain AI Agent 🧠💬  

> This n8n workflow demonstrates how to create an agent using LangChain and SQLite. The agent can understand natural language queries and interact with a SQLite database to provide accurate answers. 💪  
  
## 🚀 Setup  
  
Run the top part of the workflow once.  
It downloads the example SQLite database, extracts from a ZIP file and saves locally (`chinook.db`).  
  
## 🗣️ Chatting with Your Data  
  
1. Send a message in a chat window.  
2. Locally saved SQLite database loads automatically.  
3. User's chat input is combined with the binary data.  
4. The LangChain Agend node gets both data and begins to work.  
  
The AI Agent will process the user's message, perform necessary SQL queries, and generate a response based on the database information. 🗄️  
  
## 🌟 Example Queries  
  
Try these sample queries to see the AI Agent in action:  
  
1. "Please describe the database" - Get a high-level overview of the database structure, only one or two queries are needed.  
2. "What are the revenues by genre?" - Retrieve revenue information grouped by genre, LangChain agent iterates several time before producing the answer.  
  
The AI Agent will store the final answer in its memory, allowing for context-aware conversations. 💬 
 
Read the full article: 👉 https://blog.n8n.io/ai-agents/


## 📊 Basic Information

- **Workflow ID:** 2292
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 26460
- **Downloads:** 2646
- **Created:** 2024/6/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2292)

## 👤 Author

- **Name:** Yulia
- **Username:** @yulia

## 🏷️ Categories

- Internal Wiki
- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **manualTrigger** 
- **httpRequest** 
- **compression** 
- **readWriteFile** (×2)
- **stickyNote** (×3)
- **set** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
