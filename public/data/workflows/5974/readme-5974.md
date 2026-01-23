# Real-time sales pipeline analytics with Bright Data, OpenAI, and Google Sheets

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

This workflow automatically tracks key sales pipeline metrics—new leads, deal stages, win rates—and sends actionable insights to your team. Eliminate manual CRM exports and stay on top of revenue health.

## Overview

The automation queries your CRM API (HubSpot, Salesforce, or Pipedrive) on a schedule, pulls pipeline data, and feeds it into OpenAI for anomaly detection (e.g., stalled deals). Summaries and alerts appear in Slack, while daily snapshots are archived in Google Sheets for trend analysis.

## Tools Used

- **n8n** – Pipeline orchestration
- **CRM API** – Connects to your chosen CRM
- **OpenAI** – Detects anomalies and highlights risks
- **Slack** – Notifies reps and managers in real time
- **Google Sheets** – Stores historical pipeline data

## How to Install

1. **Import the Workflow** into n8n.
2. **Connect Your CRM**: Provide API credentials in the HTTP Request node.
3. **Set Up OpenAI**: Add your API key.
4. **Authorize Slack & Google Sheets**.
5. **Customize Thresholds**: Adjust what constitutes a stalled deal or low conversion.

## Use Cases

- **Sales Management**: Monitor pipeline health without dashboards.
- **Revenue Operations**: Detect bottlenecks early.
- **Forecasting**: Use historical snapshots to improve predictions.
- **Rep Coaching**: Alert reps when deals stagnate.

## Connect with Me

- **Website**: https://www.nofluff.online
- **YouTube**: https://www.youtube.com/@YaronBeen/videos
- **LinkedIn**: https://www.linkedin.com/in/yaronbeen/
- **Get Bright Data**: https://get.brightdata.com/1tndi4600b25 (Using this link supports my free workflows with a small commission)

#n8n #automation #salespipeline #crm #openai #slackalerts #n8nworkflow #nocode #revenueops

## 📊 Basic Information

- **Workflow ID:** 5974
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 559
- **Downloads:** 55
- **Created:** 2025/7/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5974)

## 👤 Author

- **Name:** Yaron Been
- **Username:** @yaron-nofluff

## 🏷️ Categories

- CRM
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **set** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **n8n-nodes-mcp.mcpClientTool** 
- **code** 
- **googleSheets** 
- **stickyNote** (×6)
- **@n8n/n8n-nodes-langchain.outputParserAutofixing** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
