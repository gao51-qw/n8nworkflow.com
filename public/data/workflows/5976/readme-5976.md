# Analyze sales territory performance with Bright Data MCP & GPT-4o

> This workflow automatically analyzes sales territory performance, comparing revenue, win rates, and activity across regions. Remove the guesswork from territory planning and drive balanced growth.

## Overview

On a weekly schedule, the workflow pulls CRM data for each territory, merges it with demographic and market size info scraped via Bright Data, and feeds everything into OpenAI for performance benchmarking. Outliers—both high and low performers—are highlighted in a Google Data Studio dashboard and summarized in a Slack message.

## Tools Used

- **n8n** – Orchestrates data collection and analysis
- **CRM API** – Source of sales metrics by territory
- **Bright Data** – Scrapes external market indicators (population, GDP, etc.)
- **OpenAI** – Normalizes and benchmarks territories
- **Google Sheets / Data Studio** – Stores and visualizes results
- **Slack** – Sends the weekly summary

## How to Install

1. **Import the Workflow** into n8n.
2. **Connect Your CRM** API credentials.
3. **Configure Bright Data** credentials.
4. **Set Up OpenAI** API key.
5. **Authorize Google services & Slack**.
6. **Customize Territory Definitions** in the Set node.

## Use Cases

- **Sales Leadership**: Rebalance territories based on potential.
- **Revenue Operations**: Identify underserved regions.
- **Financial Planning**: Allocate resources where ROI is highest.
- **Incentive Design**: Reward reps fairly based on potential.

## Connect with Me

- **Website**: https://www.nofluff.online
- **YouTube**: https://www.youtube.com/@YaronBeen/videos
- **LinkedIn**: https://www.linkedin.com/in/yaronbeen/
- **Get Bright Data**: https://get.brightdata.com/1tndi4600b25 (Using this link supports my free workflows with a small commission)

#n8n #automation #territorymanagement #salesanalytics #brightdata #openai #n8nworkflow #nocode #revenueops

## 📊 Basic Information

- **Workflow ID:** 5976
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 399
- **Downloads:** 39
- **Created:** 2025/7/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5976)

## 👤 Author

- **Name:** Yaron Been
- **Username:** @yaron-nofluff

## 🏷️ Categories

- CRM
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** 
- **@n8n/n8n-nodes-langchain.agent** 
- **gmail** 
- **code** 
- **googleSheets** 
- **n8n-nodes-mcp.mcpClientTool** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **stickyNote** (×6)
- **@n8n/n8n-nodes-langchain.outputParserAutofixing** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
