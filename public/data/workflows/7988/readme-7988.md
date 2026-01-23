# Query PostgreSQL database with natural language using GPT-4o-mini

> ## This Database SQL Query Agent convert natural language into sql query to get results

Turn your PostgreSQL database into a conversational AI agent! Ask questions in plain English and get instant data results without writing SQL.

## ✨ What It Does

- **Natural Language Queries**: "Show laptops under $500 in stock" → Automatic SQL generation
- **Smart Column Mapping**: Understands your terms and maps them to actual database columns
- **Conversational Memory**: Maintains context across multiple questions
- **Universal Compatibility**: Works with any PostgreSQL table structure

## 🎯 Perfect For

- Business analysts querying data without SQL knowledge
- Customer support finding information quickly
- Product managers analyzing inventory/sales data
- Anyone who needs database insights fast

## 🚀 Quick Setup

### Step 1: Prerequisites
- n8n instance (cloud/self-hosted)
- PostgreSQL database with read access
- OpenAI API key/You can use other LLM as well

### Step 2: Import & Configure
1. Import this workflow template into n8n
2. **Add Credentials**:
   - OpenAI API: Add your API key
   - PostgreSQL: Configure database connection
3. **Set Table Name**: Edit "Set Table Name" node → Replace `"table_name"` with your actual table
4. **Test Connection**: Ensure your database user has SELECT permissions

### Step 3: Deploy & Use
1. Start the workflow
2. Open the chat interface
3. Ask questions like:
   - *"Show all active users"*
   - *"Find orders from last month over $100"*
   - *"List products with low inventory"*

## 🔧 Configuration Details

### Required Settings
- **Table Name**: Update in "Set Table Name" node
- **Database Schema**: Default is 'public' (modify SQL if different)
- **Result Limit**: Default 50 rows (adjustable in system prompt)

### Optional Customizations
- **Multi-table Support**: Modify system prompt and add table selection logic
- **Custom Filters**: Add business rules to restrict data access
- **Output Format**: Customize response formatting in the agent prompt

## 💡 Example Queries

### E-commerce
*"Show me all electronics under $200 that are in stock"*

### HR Database
*"List employees hired in 2024 with salary over 70k"*

### Customer Data
*"Find VIP customers from California with recent orders"*

## 🛡️ Security Features

- **Read-only Operations**: Only SELECT queries allowed
- **SQL Injection Prevention**: Parameterized queries and validation
- **Result Limits**: Prevents overwhelming queries
- **Safe Schema Discovery**: Uses information_schema tables

## 🔍 How It Works

1. **Schema Discovery**: Agent fetches table structure and column info
2. **Query Planning**: Maps natural language to database columns
3. **SQL Generation**: Creates safe, optimized queries
4. **Result Formatting**: Returns clean, user-friendly data

## ⚡ Quick Troubleshooting

- **No Results**: Check table name and ensure data exists
- **Permission Error**: Verify database user has SELECT access
- **Connection Failed**: Confirm PostgreSQL credentials and network access
- **Unexpected Results**: Try more specific queries with exact column names

## 🎨 Use Cases

- **Inventory Management**: "Show low-stock items by category"
- **Sales Analysis**: "Top 10 products by revenue this quarter" 
- **Customer Support**: "Find customer orders with status 'pending'"
- **Data Exploration**: "What are the unique product categories?"

## 🔧 Advanced Tips

- **Performance**: Add database indexes on frequently queried columns
- **Customization**: Modify the system prompt for domain-specific terminology
- **Scaling**: Use read replicas for high-query volumes
- **Integration**: Connect to Slack/Teams for team-wide data access

---

**Tags**: AI, PostgreSQL, Natural Language, SQL, Business Intelligence, LangChain, Database Query

**Difficulty**: Beginner to Intermediate  
**Setup Time**: 10-15 minutes

## 📊 Basic Information

- **Workflow ID:** 7988
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 512
- **Downloads:** 51
- **Created:** 2025/8/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7988)

## 👤 Author

- **Name:** Babish Shrestha
- **Username:** @bbz

## 🏷️ Categories

- AI Chatbot
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **stickyNote** (×2)
- **set** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **postgresTool** (×2)
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
