# Instant competitor product launch monitor with Bright Data & OpenAI to email/sheets

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

This workflow automatically monitors competitor product launches across news sites, press releases, and social channels. It saves you hours of manual tracking and ensures your team is instantly alerted when a rival announces something new.

## Overview

The automation regularly scrapes predefined sources for mentions of your competitors combined with launch-related keywords. Bright Data provides reliable scraping, while OpenAI analyzes each article to extract key details (product name, features, launch date, pricing). Summaries are pushed to Slack and logged in Google Sheets so your marketing and product teams can react quickly.

## Tools Used

- **n8n** – Orchestrates the entire workflow
- **Bright Data** – Scrapes news, blogs, and social posts without blocks
- **OpenAI** – Extracts and summarizes launch information
- **Slack** – Sends real-time alerts to a chosen channel
- **Google Sheets** – Creates a searchable launch database

## How to Install

1. **Import the Workflow**: Upload the provided `.json` to your n8n instance.
2. **Configure Bright Data**: Add your Bright Data credentials in the MCP Client node.
3. **Set Up OpenAI**: Enter your OpenAI API key.
4. **Connect Slack & Google Sheets**: Authorize both services and choose the target channel / spreadsheet.
5. **Customize Sources**: Edit the list of competitor domains and launch keywords in the initial Set node.

## Use Cases

- **Product Marketing**: Track rival announcements to refine positioning.
- **Sales Enablement**: Equip reps with up-to-date competitive intel.
- **Competitive Intelligence**: Maintain a historical log of launches for trend analysis.
- **Investor Relations**: Stay informed of market movements that affect valuation.

## Connect with Me

- **Website**: https://www.nofluff.online
- **YouTube**: https://www.youtube.com/@YaronBeen/videos
- **LinkedIn**: https://www.linkedin.com/in/yaronbeen/
- **Get Bright Data**: https://get.brightdata.com/1tndi4600b25 (Using this link supports my free workflows with a small commission)

#n8n #automation #competitiveintelligence #productlaunch #brightdata #webscraping #openai #slackalerts #n8nworkflow #nocode #marketintel

## 📊 Basic Information

- **Workflow ID:** 5969
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 376
- **Downloads:** 37
- **Created:** 2025/7/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5969)

## 👤 Author

- **Name:** Yaron Been
- **Username:** @yaron-nofluff

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **n8n-nodes-mcp.mcpClientTool** 
- **scheduleTrigger** 
- **set** 
- **@n8n/n8n-nodes-langchain.agent** 
- **code** 
- **gmail** 
- **googleSheets** 
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
