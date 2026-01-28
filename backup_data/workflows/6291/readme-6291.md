# Query MySQL database with natural language using GPT AI

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## How it works
- Using chat node, ask a question pertaining to information stored in your MySQL database
- AI Agent converts your question to a SQL query
- AI Agent executes the SQL query and returns a result
- AI Agent can remember the previous 5 questions

## How to set up:
- Add your OpenAI API Key in "OpenAI Chat Model" node
- Add your MySQL credentials in the "SQL DB - List Tables and Schema" and "Execute a SQL Query in MySQL nodes"
- Update the database name in "SQL DB - List Tables and Schema" node. Replace "your_query_name" under the Query field with your actual database name
- After the above steps are completed, use the "When chat message received" node to ask a question about your data using plain English


## 📊 Basic Information

- **Workflow ID:** 6291
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 2448
- **Downloads:** 244
- **Created:** 2025/7/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6291)

## 👤 Author

- **Name:** Moe Ahad
- **Username:** @moe-ahad

## 🏷️ Categories

- Engineering
- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **mySqlTool** (×2)
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
