# Notion AI assistant generator

> This n8n workflow template lets teams easily generate a custom AI chat assistant based on the schema of any Notion database. Simply provide the Notion database URL, and the workflow downloads the schema and creates a tailored AI assistant designed to interact with that specific database structure.

## Set Up
Watch this quick set up video 👇
[![Notion AI Assistant Generator](https://uploads.n8n.io/devrel/notion-db-assistant-thumb#full-width)](https://youtu.be/iK87ppcaNgM)

## Key Features
- **Instant Assistant Generation**: Enter a Notion database URL, and the workflow produces an AI assistant configured to the database schema.
- **Advanced Querying**: The assistant performs flexible queries, filtering records by multiple fields (e.g., tags, names). It can also search inside Notion pages to pull relevant content from specific blocks.
- **Schema Awareness**: Understands and interacts with various Notion column types like text, dates, and tags for accurate responses.
- **Reference Links**: Each query returns direct links to the exact Notion pages that inform the assistant’s response, promoting transparency and easy access.
- **Self-Validation**: The workflow has logic to check the generated assistant, and if any errors are detected, it reruns the agent to fix them.

## Ideal for
- **Product Managers**: Easily access and query product data across Notion databases.
- **Support Teams**: Quickly search through knowledge bases for precise information to enhance support accuracy.
- **Operations Teams**: Streamline access to HR, finance, or logistics data for fast, efficient retrieval.
- **Data Teams**: Automate large dataset queries across multiple properties and records.

## How It Works
This AI assistant leverages two HTTP request tools—one for querying the Notion database and another for retrieving data within individual pages. It’s powered by the Anthropic LLM (or can be swapped for GPT-4) and always provides reference links for added transparency.


## 📊 Basic Information

- **Workflow ID:** 2415
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 47683
- **Downloads:** 4768
- **Created:** 2024/9/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2415)

## 👤 Author

- **Name:** Max Tkacz
- **Username:** @max-n8n

## 🏷️ Categories

- Internal Wiki
- AI Chatbot

## 🔗 Nodes Used

- **stickyNote** (×6)
- **notion** 
- **set** (×6)
- **@n8n/n8n-nodes-langchain.outputParserAutofixing** 
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** (×3)
- **code** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **switch** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.textClassifier** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
