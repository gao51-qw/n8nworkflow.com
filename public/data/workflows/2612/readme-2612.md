# AI agent to chat with Supabase/PostgreSQL DB

> ### Video Guide

I prepared a detailed guide that showed the whole process of building a resume analyzer.

[![OPENAI 14.png](https://res.cloudinary.com/de9jgixzm/image/upload/v1739773279/Youtube%20Thumbs/Chat%20With%20DB.png)](https://youtu.be/-GgKzhCNxjk)

### Who is this for?
This workflow is ideal for developers, data analysts, and business owners who want to enable conversational interactions with their database. It’s particularly useful for cases where users need to extract, analyze, or aggregate data without writing SQL queries manually.

### What problem does this workflow solve?
Accessing and analyzing database data often requires SQL expertise or dedicated reports, which can be time-consuming. This workflow empowers users to interact with a database conversationally through an AI-powered agent. It dynamically generates SQL queries based on user requests, streamlining data retrieval and analysis.

### What this workflow does
This workflow integrates OpenAI with a Supabase database, enabling users to interact with their data via an AI agent. The agent can:
- Retrieve records from the database.
- Extract and analyze JSON data stored in tables.
- Provide summaries, aggregations, or specific data points based on user queries.

1. **Dynamic SQL Querying**: The agent uses user prompts to create and execute SQL queries on the database.
2. **Understand JSON Structure**: The workflow identifies JSON schema from sample records, enabling the agent to parse and analyze JSON fields effectively.
3. **Database Schema Exploration**: It provides the agent with tools to retrieve table structures, column details, and relationships for precise query generation.

### Setup

#### Preparation
1. **Create Accounts**:
   - [N8N](https://n8n.partnerlinks.io/2hr10zpkki6a): For workflow automation.
   - [Supabase](https://supabase.com/): For database hosting and management.
   - [OpenAI](https://openai.com/): For building the conversational AI agent.
2. **Configure Database Connection**:
   - Set up a PostgreSQL database in Supabase.
   - Use appropriate credentials (`username`, `password`, `host`, and `database` name) in your workflow.

#### N8N Workflow

AI agent with tools:

1. **Code Tool**:
   - Execute SQL queries based on user input.
2. **Database Schema Tool**:
   - Retrieve a list of all tables in the database.
   - Use a predefined SQL query to fetch table definitions, including column names, types, and references.
3. **Table Definition**:
   - Retrieve a list of columns with types for one table.




## 📊 Basic Information

- **Workflow ID:** 2612
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 18659
- **Downloads:** 1865
- **Created:** 2024/12/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2612)

## 👤 Author

- **Name:** Mark Shcherbakov
- **Username:** @lowcodingdev

## 🏷️ Categories

- Engineering
- AI Chatbot

## 🔗 Nodes Used

- **stickyNote** (×5)
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **postgresTool** (×3)
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
