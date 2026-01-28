# Slack workflow router: AI-powered workflow selection

> ### Slack Workflow Router: AI-Powered Workflow Selection

#### Problem Statement
Slack only allows one webhook per Slack app, and n8n generates a unique webhook for each workflow. This limitation means you typically need to create multiple Slack apps to trigger multiple n8n workflows from Slack. This workflow solves that problem by acting as a gateway for a single Slack app, enabling it to trigger multiple n8n workflows.

#### How It Works
When a message is received from Slack, an AI agent analyzes the message and selects the most suitable workflow to execute. The available workflows are stored in a data table, including their ID, name, and description, which the agent uses to make its decision. This approach allows you to manage and trigger multiple workflows from a single Slack app, making your Slack-to-n8n integration much more scalable and maintainable.

#### Key Features
* Trigger multiple n8n workflows from a single Slack app mention.
* AI-powered workflow selection based on user message and workflow descriptions.
* Centralized management of available workflows via a data table.
* Scalable and easy to maintain—no need to create multiple Slack apps.

#### Setup Instructions
* Create a data table in your n8n project with these columns: workflow_id, workflow_name, and workflow_description.
* Add your workflows to the table.
* Connect your Slack and OpenAI accounts.
* Deploy the workflow and mention your Slack app to trigger automations.


This template is ideal for teams who want to centralize and scale their Slack automation without creating multiple Slack apps.

## 📊 Basic Information

- **Workflow ID:** 11838
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 46
- **Downloads:** 4
- **Created:** 2025/12/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11838)

## 👤 Author

- **Name:** Ertay Kaya
- **Username:** @ertay

## 🏷️ Categories

- Engineering
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **slackTrigger** 
- **dataTableTool** 
- **set** 
- **slack** (×4)
- **if** 
- **stickyNote** (×5)
- **executeWorkflow** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
