# AI Qwen-Vl-Plus powered car fleet maintenance alert system

> ## How It Works

Daily triggers automatically fetch fleet data and simulate key performance metrics for each vehicle. An AI agent analyzes maintenance requirements, detects potential issues, and routes alerts according to urgency levels. Fleet summaries are aggregated, logged into the database for historical tracking, and AI-enhanced insights are parsed to provide actionable information. Slack notifications are then sent to relevant teams, ensuring timely monitoring, informed decisions, and proactive fleet management.

## Setup Steps

1. Configure daily triggers to automatically fetch, process, and update fleet data.
2. Connect Slack, the database, and AI APIs to enable notifications and analytical processing.
3. Set AI parameters and provide API keys for accessing the models and ensuring proper scoring.
4. Configure PostgreSQL to log all fleet data, summaries, and alerts for historical tracking.
5. Define Slack channels to receive real-time alerts, summaries, and actionable insights for the team.

## Prerequisites
Slack workspace, database access, AI account (OpenRouter or compatible), fleet data source, n8n instance

## Use Cases
Fleet monitoring, predictive maintenance, multi-vehicle management, cost optimization, emergency alerts, compliance tracking

## Customization
Adjust AI parameters, alert thresholds, Slack message formatting, integrate alternative data sources, add email notifications, expand logging

## Benefits
Prevent breakdowns, reduce manual monitoring, enable data-driven decisions, centralize alerts, scale across vehicles, AI-powered insights





## 📊 Basic Information

- **Workflow ID:** 10620
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 73
- **Downloads:** 7
- **Created:** 2025/11/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10620)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Engineering
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** (×3)
- **if** 
- **code** (×4)
- **slack** (×3)
- **postgres** 
- **splitInBatches** 
- **aggregate** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **stickyNote** (×12)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
