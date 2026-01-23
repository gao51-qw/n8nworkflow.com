# ✨📊Multi-AI agent chatbot for Postgres/Supabase DB and QuickCharts + tool router

> # Multi-AI Agent Chatbot for Postgres/Supabase Databases and QuickChart Generation

## Who is this for?  
This workflow is ideal for **data analysts**, **developers**, and **business intelligence teams** who need an AI-powered chatbot to query Postgres/Supabase databases and generate dynamic charts for data visualization.

## What problem does this solve?  
It simplifies data exploration by combining conversational AI with database querying and chart generation. Users can interact with their database using natural language, retrieve insights, and visualize data without manual SQL queries or chart configuration.

## What this workflow does  
1. **AI-Powered Chat Interface**:  
   - Accepts natural language prompts to query databases or generate charts.  
   - Routes user requests through a tool agent system to determine the appropriate action (query or chart).  

2. **Database Querying**:  
   - Executes SQL queries on Postgres/Supabase databases based on user input.  
   - Retrieves schema information, table definitions, and specific data records.  

3. **Dynamic Chart Generation**:  
   - Uses QuickChart to create bar charts, line charts, or other visualizations from database records.  
   - Outputs a shareable chart URL or JSON configuration for further customization.  

4. **Memory Integration**:  
   - Maintains chat history using Postgres memory nodes, enabling context-aware interactions.  

Workflow diagram showcasing AI agents, database querying, and chart generation paths.

## Setup  
1. **Prerequisites**:  
   - A Postgres-compatible database (e.g., Supabase).  
   - API credentials for OpenAI.  

2. **Configuration Steps**:  
   - Add your database connection credentials in the Postgres nodes.  
   - Set up OpenAI credentials for GPT-4o-mini in the language model nodes.  
   - Adjust the QuickChart schema in the "QuickChart Object Schema" node to fit your use case.  

3. **Testing**:  
   - Trigger the chat workflow via the "When chat message received" node.  
   - Test with prompts like "Generate a bar chart of sales data" or "Show me all users in the database."

## How to customize this workflow  
- **Modify AI Prompts**
- **Add Chart Types**
- **Integrate Other Tools**


## 📊 Basic Information

- **Workflow ID:** 3090
- **Complexity:** advanced
- **Node Count:** 40
- **Views:** 12806
- **Downloads:** 1280
- **Created:** 2025/3/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3090)

## 👤 Author

- **Name:** Joseph LePage
- **Username:** @joe

## 🏷️ Categories

- Internal Wiki
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **postgresTool** (×3)
- **executeWorkflowTrigger** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** (×2)
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×3)
- **stickyNote** (×21)
- **@n8n/n8n-nodes-langchain.agent** (×3)
- **switch** 
- **@n8n/n8n-nodes-langchain.memoryPostgresChat** 
- **set** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 40 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
