# Generate SaaS product ideas from market gaps with OpenAI and Bright Data

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

This workflow automatically analyzes online data sources to uncover unmet customer needs and product opportunities. Instead of spending days on manual research, you receive an AI-driven report of market gaps directly in your inbox.

## Overview

The automation aggregates product reviews, forum discussions, and competitor feature lists via Bright Data scraping. OpenAI then clusters complaints and feature requests to highlight where demand is high but supply is low. A summary table is generated in Google Sheets and a concise report is emailed to stakeholders.

## Tools Used

- **n8n** – Automates the entire pipeline
- **Bright Data** – Scrapes review sites and competitor pages reliably
- **OpenAI** – Performs NLP clustering and gap analysis
- **Google Sheets** – Stores structured opportunity data
- **Gmail** – Delivers the weekly insight report

## How to Install

1. **Import the Workflow**: Add the `.json` to your n8n instance.
2. **Configure Bright Data**: Insert your credentials in the MCP Client node.
3. **Set Up OpenAI**: Provide your OpenAI API key.
4. **Connect Google Sheets & Gmail**: Authorize both services.
5. **Customize Keywords & Sources**: Edit the Set node to focus on your industry and competitors.

## Use Cases

- **Product Management**: Prioritize roadmap features that address true pain points.
- **Startup Ideation**: Validate gaps before building an MVP.
- **Competitive Strategy**: Identify areas where rivals are weak.
- **Investor Research**: Spot underserved niches for portfolio companies.

## Connect with Me

- **Website**: https://www.nofluff.online
- **YouTube**: https://www.youtube.com/@YaronBeen/videos
- **LinkedIn**: https://www.linkedin.com/in/yaronbeen/
- **Get Bright Data**: https://get.brightdata.com/1tndi4600b25 (Using this link supports my free workflows with a small commission)

#n8n #automation #marketanalysis #productmanagement #brightdata #openai #marketgaps #n8nworkflow #nocode #competitiveanalysis

## 📊 Basic Information

- **Workflow ID:** 5970
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 1175
- **Downloads:** 117
- **Created:** 2025/7/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5970)

## 👤 Author

- **Name:** Yaron Been
- **Username:** @yaron-nofluff

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** 
- **@n8n/n8n-nodes-langchain.agent** 
- **code** 
- **googleSheets** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **n8n-nodes-mcp.mcpClientTool** 
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
