# Query business data with OpenAI chatbot using RAG and text-to-SQL via Peliqan

> ![Peliqan n8n chatbot with RAG and Text-To-SQL](https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/99465134-7cb5-46cd-a26c-c44c11a3317e/Peliqan_n8n_AI_Agent_template_with_RAG_and_Text_to_SQL/w=1920,quality=90,fit=scale-down)

## How it works

This template is an end-to-end demo of a chatbot using business data from multiple sources (e.g. Notion, Chargebee, Hubspot etc.) with RAG + SQL.

Peliqan.io is used as a "cache" of all business data. Peliqan uses one-click ELT to sync all your business data to its built-in data warehouse, allowing for fast & accurate RAG and "Text to SQL" queries.

The workflow will write source data to Supabase as a vector store, for RAG searches by the chatbot. The source URL (e.g. the URL of a Notion page) is added in metadata.

The AI Agent will decide for each question to use either RAG or Text-to-SQL or a combination of both.
Text-to-SQL is performed via the Peliqan node, added as a tool to the AI Agent. The question of the user in natural language is converted to an SQL query by the AI Agent. The query is executed by Peliqan.io on the source data and the result is interpreted by the AI Agent.

RAG is typically used to answer knowledge questions, often on non-structured data (Notion pages, Google Drive etc.).
Text-to-SQL is typically used to answer analytical questions, for example "Show list of customers with number of open support tickets and add customer revenue based on invoiced amounts".

## Preconditions

* You signed up for a Peliqan.io free trial account
* You have one or more data sources, e.g. a CRM, ERP, Accounting software, files, Notion, Google Drive etc.

## Set up steps

* Sign up for a free trial on peliqan.io: https://peliqan.io
* Add one or more sources in Peliqan (e.g. Hubspot, Pipedrive...)
* Copy your Peliqan API key under settings and use it here to add a Peliqan connection
* Run the "RAG" workflow to feed Supabase, change the name of the table in the Peliqan node "Get table data".
* Update the list of tables & columns that can be used for SQL in the System Message of the AI Agent.

Visit https://peliqan.io/n8n for more information.

Disclaimer: This template contains a community node and therefore only works for n8n self-hosted users.

## 📊 Basic Information

- **Workflow ID:** 6706
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 469
- **Downloads:** 46
- **Created:** 2025/7/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6706)

## 👤 Author

- **Name:** Peliqan
- **Username:** @peliqan

## 🏷️ Categories

- Internal Wiki
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **stickyNote** (×6)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.vectorStoreSupabase** (×2)
- **n8n-nodes-peliqan.peliqan** 
- **n8n-nodes-peliqan.peliqanTool** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
