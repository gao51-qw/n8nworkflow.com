# Natural language database queries with dual-agent AI & PostgreSQL integration

> 
**AI Database Assistant with Smart Query's & PostgreSQL Integration**

# Description:

🚀 **Transform Your Database into an Intelligent AI Assistant**

This workflow creates a **smart database assistant** that safely handles natural language queries without crashing your system. Features dual-agent architecture with built-in query limits and PostgreSQL optimization – perfect for commercial applications!

✅ **Ideal for:**
* SaaS developers building database search features 🔍
* Database administrators providing safe AI access 🛡️
* Business teams needing user-friendly data queries 📊
* Anyone wanting ChatGPT-like database interaction 🤖

## 🔧 How It Works
1️⃣ **User asks a question** – "Show me top 10 popular products"
2️⃣ **Main AI Agent** – Interprets the request and ensures safety limits
3️⃣ **SQL Sub-Agent** – Generates precise PostgreSQL queries
4️⃣ **Database executes** – Returns formatted, limited results safely

## ⚡ Setup Instructions

### 1️⃣ Prepare Your Database
* Ensure **PostgreSQL** is accessible from n8n
* Note your table structure and column names
* Set up database connection credentials

### 2️⃣ Customize the Templates
* Replace `[YOUR_TABLE_NAME]` with your actual table name
* Update `[YOUR_FIELDS]` with your column names
* Modify examples to match your use case
* **Important**: Keep all LIMIT clauses intact!

### 3️⃣ Configure the Agents
* Copy **Main Agent** system message to your primary AI node
* Copy **Sub-Agent** system message to your SQL generator node
* Connect the sub-workflow between both agents

### 4️⃣ Test & Deploy
* Test with sample queries like "Show me 5 recent items"
* Verify query limits work (max 50 results)
* Deploy and monitor performance

## 🎯 Why Use This Workflow?
✔️ **System Protection** – Built-in limits prevent crashes from large queries
✔️ **Natural Language** – Users ask questions in plain English
✔️ **Commercial Ready** – Generic templates work with any database
✔️ **Dual-Agent Safety** – Smart interpretation + precise SQL generation
✔️ **PostgreSQL Optimized** – Handles complex schemas and data types

## 🚨 Critical Features
* **Query Limits**: Default 10, maximum 50 results (can be modified)
* **Error Prevention**: No unlimited data retrieval
* **Smart Routing**: Natural language → Safe SQL → Formatted results
* **Customizable**: Works with any PostgreSQL database schema

🔗 **Start building your AI database assistant today – safe, smart, and scalable!**

## 📊 Basic Information

- **Workflow ID:** 5012
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 7504
- **Downloads:** 750
- **Created:** 2025/6/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5012)

## 👤 Author

- **Name:** Paul
- **Username:** @diagopl

## 🏷️ Categories

- Engineering
- AI RAG

## 🔗 Nodes Used

- **executeWorkflowTrigger** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.toolThink** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** (×2)
- **@n8n/n8n-nodes-langchain.memoryPostgresChat** 
- **telegram** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 
- **telegramTrigger** 
- **switch** 
- **set** 
- **merge** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** 
- **postgres** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
