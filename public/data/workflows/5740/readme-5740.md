# Generate data pipeline blueprints with Claude 3.5, Slack, and Tavily Search

> ## Architecture Agent

## Overview
The Architect Agent listens to Slack messages and generates full data architecture blueprints in response. Powered by Claude 3.5 (Anthropic) for reasoning and design, and Tavily for real-time web search, this agent creates production-ready data pipeline scaffolds on-demand — transforming natural language prompts into structured data engineering solutions.

## Capabilities
- Understands and interprets user requests from Slack
- Designs end-to-end data pipelines architectures using industry best practices.
- Outputs include High-level architecture diagrams

## Required Connections
To operate correctly, the following integrations must be in place:
- Slack API Token with permission to read messages and post responses
- Tavily API Key for external search functionality
- Claude 3.5 API Access via Anthropic

*Detailed configuration instructions are provided in the workflow*

## Setup time 
&lt;15 minutes

## Example input:
"Create a data pipeline orchestrated by Airflow, running on a Docker image. It should connect to a MySQL database, load in the data into a PostgreSQL DB (incremental load) and then transform the data into business-oriented tables also in the PostgreSQL database. Create an example setup with raw sales data."

## Customising this workflow
Try saving outputs to Google Drive to store all your architecture blueprints 

## 📊 Basic Information

- **Workflow ID:** 5740
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 138
- **Downloads:** 13
- **Created:** 2025/7/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5740)

## 👤 Author

- **Name:** Humble Turtle
- **Username:** @humbleturtle

## 🏷️ Categories

- Engineering
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.toolHttpRequest** 
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** 
- **set** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **slackTrigger** 
- **slack** 
- **stickyNote** (×9)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
