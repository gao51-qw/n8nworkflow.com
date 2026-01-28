# Monitor competitor financial performance with Bright Data MCP, OpenAI & Google Sheets

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

This workflow automatically monitors publicly available competitor financial data—funding rounds, earnings, and SEC filings—and alerts your team to significant changes. Gain an edge by reacting to financial moves faster.

## Overview

Using Bright Data, the automation scrapes Crunchbase, press releases, and SEC Edgar filings. OpenAI extracts key figures (revenue, funding amount, valuation) and assesses the potential impact. Highlights are posted to Slack and stored in Airtable for long-term tracking.

## Tools Used

- **n8n** – Drives the automation
- **Bright Data** – Scrapes financial disclosure sites
- **OpenAI** – Extracts numbers and generates insights
- **Slack** – Sends real-time alerts
- **Airtable** – Maintains a financial timeline database

## How to Install

1. **Import the Workflow** into n8n.
2. **Configure Bright Data** credentials.
3. **Set Up OpenAI** API key.
4. **Authorize Slack & Airtable**.
5. **Customize Competitor List & Thresholds** in the Set node.

## Use Cases

- **Competitive Intelligence**: Track rivals’ financial health.
- **Investor Relations**: Benchmark against peers.
- **Strategic Planning**: Identify acquisition targets.
- **Sales Enablement**: Time outreach after funding events.

## Connect with Me

- **Website**: https://www.nofluff.online
- **YouTube**: https://www.youtube.com/@YaronBeen/videos
- **LinkedIn**: https://www.linkedin.com/in/yaronbeen/
- **Get Bright Data**: https://get.brightdata.com/1tndi4600b25 (Using this link supports my free workflows with a small commission)

#n8n #automation #financialmonitoring #competitoranalysis #brightdata #openai #secfilings #fundingrounds #n8nworkflow #nocode

## 📊 Basic Information

- **Workflow ID:** 5978
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 389
- **Downloads:** 38
- **Created:** 2025/7/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5978)

## 👤 Author

- **Name:** Yaron Been
- **Username:** @yaron-nofluff

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **set** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **n8n-nodes-mcp.mcpClientTool** 
- **googleSheets** 
- **code** 
- **gmail** 
- **stickyNote** (×7)
- **@n8n/n8n-nodes-langchain.outputParserAutofixing** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
