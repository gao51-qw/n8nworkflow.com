# Scrape local business directories with Bright Data & OpenAI for lead generation

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

This workflow automatically scrapes local business directories (Yelp, Yellow Pages, Google Maps, etc.) to build a structured database of prospects. Stop copying listings by hand—get fresh leads delivered straight to Google Sheets.

## Overview

Using Bright Data, the automation fetches business names, contact details, ratings, and categories for a given city or ZIP code. OpenAI cleans and normalizes the data, while duplicate detection ensures each business appears only once. The result is emailed as a CSV and stored in Sheets for easy filtering.

## Tools Used

- **n8n** – Workflow orchestration
- **Bright Data** – Handles large-scale directory scraping
- **OpenAI** – Performs entity cleanup and deduplication
- **Google Sheets** – Houses the resulting lead list
- **Gmail** – Sends the CSV file to your inbox

## How to Install

1. **Import the Workflow**: Load the `.json` into n8n.
2. **Configure Bright Data**: Add your credentials.
3. **Set Up OpenAI**: Enter your API key.
4. **Connect Google Sheets & Gmail**: Authorize both integrations.
5. **Customize Locations & Categories**: Adjust parameters in the Start node.

## Use Cases

- **Local Lead Generation**: Build outreach lists for agencies or SaaS.
- **Market Research**: Analyze density of businesses in a region.
- **Franchise Expansion**: Identify potential partners within a territory.
- **Startup Sales**: Discover SMBs that match your ICP.

## Connect with Me

- **Website**: https://www.nofluff.online
- **YouTube**: https://www.youtube.com/@YaronBeen/videos
- **LinkedIn**: https://www.linkedin.com/in/yaronbeen/
- **Get Bright Data**: https://get.brightdata.com/1tndi4600b25 (Using this link supports my free workflows with a small commission)

#n8n #automation #webscraping #localbusiness #brightdata #leadgeneration #n8nworkflow #nocode #businessdirectories #openai

## 📊 Basic Information

- **Workflow ID:** 5971
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 1227
- **Downloads:** 122
- **Created:** 2025/7/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5971)

## 👤 Author

- **Name:** Yaron Been
- **Username:** @yaron-nofluff

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **set** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **n8n-nodes-mcp.mcpClientTool** 
- **gmail** 
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
