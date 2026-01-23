# Automate investment risk monitoring with Qwen-Max AI, Slack & email alerts

> ## How It Works
Automates financial risk evaluation by intelligently consolidating information from five critical sources: financial, operational, legal, insurance, and regulatory systems. Hourly triggers enable continuous, AI-driven risk assessment using the OpenRouter Chat Model, producing dynamic risk scores while simultaneously identifying emerging compliance gaps and potential exposure areas. High-risk findings automatically initiate corrective actions, trigger secondary investigations, and send real-time alerts through Slack notifications as well as investor email updates. Designed for financial institutions, compliance teams, risk managers, and investment firms, it provides continuous, scalable, and fully data-driven monitoring of risk across complex regulatory and operational environments.

## Setup Steps
1. Configure hourly/daily schedule trigger. 
2. Authenticate all five data APIs. 
3. Set OpenRouter credentials. 
4. Configure Slack webhook. 
5. Set Gmail for email distribution. 
6. Define risk thresholds and compliance rules.

## Prerequisites
OpenRouter API key, five data source APIs, Slack access, Gmail account, investor contacts 

## Use Cases
Banking risk audits, insurance compliance monitoring, portfolio risk tracking 

## Customization
Swap AI models, modify data sources, adjust thresholds 

## Benefits
90% faster risk assessment, eliminates manual aggregation 

## 📊 Basic Information

- **Workflow ID:** 12092
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 82
- **Downloads:** 8
- **Created:** 2025/12/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12092)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** (×2)
- **httpRequest** (×6)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **if** 
- **code** 
- **gmail** 
- **slack** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **merge** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
