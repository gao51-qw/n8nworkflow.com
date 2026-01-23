# AI data analyst agent and visualization agent for large spreadsheets

> **Purpose of workflow:**

This workflow transforms spreadsheet data into an interactive, AI-powered knowledge base that enables users to gain deep insights through natural language queries, searchability, and comparative analysis.

**How it works:**

1. Data Storage & Integration:
- Spreadsheet data is imported into a no-code database (NocoDB)
- System connects with an AI data analyst agent
- Agent accesses table metadata and column information

2. Query Processing:
- Users input natural language questions
- AI agent interprets queries and converts them to database filters
- System retrieves relevant data using filter formulas
- AI synthesizes responses with analysis and insights

3. Advanced Capabilities:
- Performs comparative analysis across multiple data points
- Handles complex multi-part queries

4. Automatically creates visualizations:
- Visualization AI Agent figures out the data and the chart type and generates professional visualization using Quickchart


**Step by step setup:**
1. Create account on nocodb.com
2. Create table by importing csv, copy table id
3. Create API token https://app.nocodb.com/#/account/tokens
4. In workflow, settings node, update with table id
5. In NocoDB tool node, setup authentication with API token created in step 3
6. Specify the workspace and base fields after connecting to NocoDB 

## 📊 Basic Information

- **Workflow ID:** 2653
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 6177
- **Downloads:** 617
- **Created:** 2024/12/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2653)

## 👤 Author

- **Name:** Derek Cheung
- **Username:** @derekcheungsa

## 🏷️ Categories

- Document Extraction
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **set** (×2)
- **nocoDbTool** 
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.agent** 
- **stickyNote** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
