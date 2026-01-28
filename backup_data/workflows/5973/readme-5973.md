# Track regional sentiment from social media with Bright Data & OpenAI

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

This workflow automatically tracks regional sentiment across social media and news outlets, giving you a real-time pulse on how people in a specific area feel about your brand or topic.

## Overview

The automation queries Twitter, Reddit, and major news APIs filtered by geolocation. Bright Data handles location-specific scraping where APIs are limited. OpenAI performs sentiment and keyword extraction, aggregating scores into a daily report stored in Google Sheets and visualized in Data Studio.

## Tools Used

- **n8n** – Coordinates all steps
- **Bright Data** – Collects geo-targeted data beyond API limits
- **OpenAI** – Runs sentiment analysis and topic modeling
- **Google Sheets** – Houses cleaned sentiment metrics
- **Data Studio / Looker** – Optional dashboard for visualization

## How to Install

1. **Import the Workflow** into n8n with the provided `.json`.
2. **Configure Bright Data** credentials.
3. **Set Up OpenAI** API key.
4. **Connect Google Sheets** and create a destination spreadsheet.
5. **Customize Regions & Keywords** in the Start node.

## Use Cases

- **Brand Monitoring**: Measure public opinion in target markets.
- **Political Campaigns**: Gauge voter sentiment by district.
- **Market Entry**: Understand regional attitudes before launching.
- **Crisis Management**: Detect negative spikes early.

## Connect with Me

- **Website**: https://www.nofluff.online
- **YouTube**: https://www.youtube.com/@YaronBeen/videos
- **LinkedIn**: https://www.linkedin.com/in/yaronbeen/
- **Get Bright Data**: https://get.brightdata.com/1tndi4600b25 (Using this link supports my free workflows with a small commission)

#n8n #automation #sentimentanalysis #geolocation #brightdata #openai #sociallistening #n8nworkflow #nocode #brandmonitoring

## 📊 Basic Information

- **Workflow ID:** 5973
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 376
- **Downloads:** 37
- **Created:** 2025/7/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5973)

## 👤 Author

- **Name:** Yaron Been
- **Username:** @yaron-nofluff

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **set** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **n8n-nodes-mcp.mcpClientTool** 
- **@n8n/n8n-nodes-langchain.agent** 
- **trello** 
- **stickyNote** (×6)
- **@n8n/n8n-nodes-langchain.outputParserAutofixing** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
