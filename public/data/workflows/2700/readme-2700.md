# AI agent to chat with Airtable and analyze data

> ### Video Guide

I prepared a detailed guide that shows the entire process of building an AI agent that integrates with Airtable data in n8n. This template covers everything from data preparation to advanced configurations.

[![Youtube Thumbnail](https://cflobdhpqwnoisuctsoc.supabase.co/storage/v1/object/public/my_storage/Video%2012%20-%20Chat%20with%20Airtable%20Blur.png)](https://youtu.be/SotqsAZEhdc)

[Youtube Link](https://youtu.be/SotqsAZEhdc)

### Who is this for?
This workflow is designed for developers, data analysts, and business owners who want to create an AI-powered conversational agent integrated with Airtable datasets. It is particularly useful for users looking to enhance data interaction through chat interfaces.

### What problem does this workflow solve?
Engaging with data stored in Airtable often requires manual navigation and time-consuming searches. This workflow allows users to interact conversationally with their datasets, retrieving essential information quickly while minimizing the need for complex queries.

### What this workflow does
This workflow enables an AI agent to facilitate chat interactions over Airtable data. The agent can:
- Retrieve order records, product details, and other relevant data.
- Execute mathematical functions to analyze data such as calculating averages and totals.
- Optionally generate maps for geographic data visualization.

1. **Dynamic Data Retrieval**: The agent uses user prompts to dynamically query the dataset.
2. **Memory Management**: It retains context during conversations, allowing users to engage in a more natural dialogue.
3. **Search and Filter Capabilities**: Users can perform tailored searches with specific parameters or filters to refine their results.

### Set up steps

1. **Separate workflows**:
	- Create additional workflow and move there Workflow 2.

2. **Replace credentials**:
	- Replace connections and credentials in all nodes.

3. **Start chat**:
	- Ask questions and don't forget to mention required base name.

## 📊 Basic Information

- **Workflow ID:** 2700
- **Complexity:** advanced
- **Node Count:** 41
- **Views:** 15548
- **Downloads:** 1554
- **Created:** 2025/1/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2700)

## 👤 Author

- **Name:** Mark Shcherbakov
- **Username:** @lowcodingdev

## 🏷️ Categories

- Internal Wiki
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.agent** 
- **stickyNote** (×11)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **executeWorkflowTrigger** 
- **set** (×3)
- **switch** 
- **aggregate** (×3)
- **merge** 
- **if** (×2)
- **@n8n/n8n-nodes-langchain.toolWorkflow** (×4)
- **@n8n/n8n-nodes-langchain.toolCode** 
- **airtable** (×2)
- **httpRequest** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 41 nodes with 27 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
