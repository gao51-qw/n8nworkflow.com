# Automated local event monitor with Bright Data MCP and OpenAI analysis

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

This workflow automatically monitors local event platforms (Eventbrite, Meetup, Facebook Events) and aggregates upcoming events that match your criteria. Never miss a networking or sponsorship opportunity again.

## Overview

A scheduled trigger scrapes multiple event sites via Bright Data, filtering by location, date range, and keywords. OpenAI classifies each event (conference, meetup, workshop) and extracts key details such as venue, organizers, and ticket price. Updates are posted to Slack and archived in Airtable for quick lookup.

## Tools Used

- **n8n** – Core automation engine
- **Bright Data** – Reliable multi-site scraping
- **OpenAI** – NLP-based event categorization
- **Slack** – Delivers daily event digests
- **Airtable** – Stores enriched event records

## How to Install

1. **Import the Workflow**: Add the `.json` file to n8n.
2. **Configure Bright Data**: Provide your account credentials.
3. **Set Up OpenAI**: Insert your API key.
4. **Connect Slack & Airtable**: Authorize both services.
5. **Customize Filters**: Edit the initial Set node to adjust city, radius, and keywords.

## Use Cases

- **Community Managers**: Curate a calendar of relevant events.
- **Sales Teams**: Identify trade shows and meetups for prospecting.
- **Event Planners**: Track competing events when choosing dates.
- **Marketers**: Spot speaking or sponsorship opportunities.

## Connect with Me

- **Website**: https://www.nofluff.online
- **YouTube**: https://www.youtube.com/@YaronBeen/videos
- **LinkedIn**: https://www.linkedin.com/in/yaronbeen/
- **Get Bright Data**: https://get.brightdata.com/1tndi4600b25 (Using this link supports my free workflows with a small commission)

#n8n #automation #eventmonitoring #brightdata #openscraping #openai #slackalerts #n8nworkflow #nocode #meetup #eventbrite

## 📊 Basic Information

- **Workflow ID:** 5972
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 396
- **Downloads:** 39
- **Created:** 2025/7/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5972)

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
- **code** 
- **@n8n/n8n-nodes-langchain.openAi** 
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
