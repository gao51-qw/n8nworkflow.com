# Track Google Trends search data locally with Bright Data MCP & AI analysis

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

This workflow automatically tracks local search trends and geographic-specific search patterns to optimize local SEO and marketing strategies. It saves you time by eliminating the need to manually research local search behavior and provides location-based insights for targeted marketing campaigns.

## Overview

This workflow automatically scrapes local search results, geographic search trends, and location-based query data to understand regional search behavior and local market opportunities. It uses Bright Data to access location-specific search data and AI to intelligently analyze local trends and optimization opportunities.

## Tools Used

- **n8n**: The automation platform that orchestrates the workflow
- **Bright Data**: For scraping location-based search data without being blocked
- **OpenAI**: AI agent for intelligent local search trend analysis
- **Google Sheets**: For storing local search trend data and geographic insights

## How to Install

1. **Import the Workflow**: Download the .json file and import it into your n8n instance
2. **Configure Bright Data**: Add your Bright Data credentials to the MCP Client node
3. **Set Up OpenAI**: Configure your OpenAI API credentials
4. **Configure Google Sheets**: Connect your Google Sheets account and set up your local trends tracking spreadsheet
5. **Customize**: Define target locations and local search monitoring parameters

## Use Cases

- **Local SEO**: Optimize for location-specific search queries and trends
- **Regional Marketing**: Tailor campaigns to local search behavior and preferences
- **Multi-location Businesses**: Track search trends across different geographic markets
- **Market Expansion**: Identify new geographic opportunities based on search trends

## Connect with Me

- **Website**: https://www.nofluff.online
- **YouTube**: https://www.youtube.com/@YaronBeen/videos
- **LinkedIn**: https://www.linkedin.com/in/yaronbeen/
- **Get Bright Data**: https://get.brightdata.com/1tndi4600b25 (Using this link supports my free workflows with a small commission)

#n8n #automation #localsearch #localseo #searchtrends #brightdata #webscraping #geographictrends #n8nworkflow #workflow #nocode #localmarketing #regionalseo #locationbased #localbusiness #searchgeography #localtrends #geoseo #localdata #regionalmarketing #localanalytics #geographicseo #localsearchdata #localoptimization #regionalsearch #locationmarketing #localsearchtrends #geomarketing #localinsights #regionalsearch

## 📊 Basic Information

- **Workflow ID:** 5964
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 1166
- **Downloads:** 116
- **Created:** 2025/7/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5964)

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
