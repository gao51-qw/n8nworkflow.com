# Track & analyze sales performance with AI insights and Google Sheets

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

This workflow automatically tracks individual sales rep performance—calls, emails, meetings, quota attainment—and surfaces coaching insights. Free your managers from manual report building and focus on improvement.

## Overview

On a daily schedule, the workflow queries CRM and telephony/email logs, aggregating activity metrics per rep. OpenAI analyzes patterns, flags underperformance or standout achievements, and suggests tailored coaching tips. Results are delivered as a nicely formatted Slack message and stored in Airtable.

## Tools Used

- **n8n** – Automation backbone
- **CRM + Telephony APIs** – Provide activity data
- **OpenAI** – Generates insights and coaching tips
- **Slack** – Sends manager digest
- **Airtable** – Maintains historical performance records

## How to Install

1. **Import the Workflow** into n8n.
2. **Connect Data Sources**: Add CRM, VoIP, and email API keys.
3. **Set Up OpenAI**: Enter your API key.
4. **Authorize Slack & Airtable**.
5. **Customize Metrics**: Modify the aggregation node to focus on your KPIs.

## Use Cases

- **Sales Coaching**: Provide reps with daily feedback.
- **Performance Management**: Quickly identify top and low performers.
- **Incentive Programs**: Track achievements for rewards.
- **Revenue Operations**: Unify activity data into one source.

## Connect with Me

- **Website**: https://www.nofluff.online
- **YouTube**: https://www.youtube.com/@YaronBeen/videos
- **LinkedIn**: https://www.linkedin.com/in/yaronbeen/
- **Get Bright Data**: https://get.brightdata.com/1tndi4600b25 (Using this link supports my free workflows with a small commission)

#n8n #automation #salesperformance #openai #salescoaching #n8nworkflow #nocode #revenueops

## 📊 Basic Information

- **Workflow ID:** 5975
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 691
- **Downloads:** 69
- **Created:** 2025/7/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5975)

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
