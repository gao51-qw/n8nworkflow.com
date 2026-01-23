# Analyze real estate submarket trends with GPT-4, Gmail, and Slack alerts

> ## How It Works
Automates daily real estate market opportunity analysis by aggregating MLS listings, public property records, demographic information, and macroeconomic indicators, applying GPT-4 for investment evaluation, assessing investment thresholds, and notifying investors of high-potential properties. Simultaneously collects MLS data, public records, demographic profiles, and economic metrics, consolidates the datasets, applies GPT-4 to perform comprehensive investment analysis including ROI projections and risk assessment, calculates key financial metrics via an investment calculator, validates opportunities against predefined thresholds, and sends alerts to acquisition teams and investors through email and Slack. Designed for real estate investors and property acquisition firms seeking automated, data-driven investment insights.

## Setup Steps
1. Connect MLS data provider, public records database, and demographic data source APIs.
2. Configure OpenAI GPT-4 API for investment analysis and opportunity scoring.
3. Set up investment calculator integration and ROI calculation parameters.
4. Connect Gmail and Slack for team notifications; define investment thresholds.

## Prerequisites
MLS data access; public records database; demographic data provider; macroeconomic data source 

## Use Cases
Real estate investment firms automating deal sourcing across markets; 

## Customization
Adjust investment analysis criteria and thresholds 

## Benefits
Identifies investment opportunities automatically 

## 📊 Basic Information

- **Workflow ID:** 12039
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 50
- **Downloads:** 5
- **Created:** 2025/12/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12039)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** 
- **httpRequest** (×4)
- **aggregate** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.toolCalculator** 
- **httpRequestTool** 
- **if** 
- **gmail** 
- **slack** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
