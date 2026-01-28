# Weekly SEO keyword research & competitor analysis with GPT-4 and Bright Data

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

This workflow automatically performs weekly keyword research and competitor analysis to discover trending keywords in your industry. It saves you time by eliminating the need to manually research keywords and provides a constantly updated database of trending search terms and opportunities.

## Overview

This workflow automatically researches trending keywords for any specified topic or industry using AI-powered search capabilities. It runs weekly to gather fresh keyword data, analyzes search trends, and saves the results to Google Sheets for easy access and analysis.

## Tools Used

- **n8n**: The automation platform that orchestrates the workflow
- **Bright Data**: For accessing search engines and keyword data sources
- **OpenAI**: AI agent for intelligent keyword research and analysis
- **Google Sheets**: For storing and organizing keyword research data

## How to Install

1. **Import the Workflow**: Download the .json file and import it into your n8n instance
2. **Configure Bright Data**: Add your Bright Data credentials to the MCP Client node
3. **Set Up OpenAI**: Configure your OpenAI API credentials
4. **Configure Google Sheets**: Connect your Google Sheets account and set up your keyword tracking spreadsheet
5. **Customize**: Define your target topics or competitors for keyword research

## Use Cases

- **SEO Teams**: Discover new keyword opportunities and track trending search terms
- **Content Marketing**: Find trending topics for content creation and strategy
- **PPC Teams**: Identify new keywords for paid advertising campaigns
- **Competitive Analysis**: Monitor competitor keyword strategies and market trends

## Connect with Me

- **Website**: https://www.nofluff.online
- **YouTube**: https://www.youtube.com/@YaronBeen/videos
- **LinkedIn**: https://www.linkedin.com/in/yaronbeen/
- **Get Bright Data**: https://get.brightdata.com/1tndi4600b25 (Using this link supports my free workflows with a small commission)

#n8n #automation #keywordresearch #seo #brightdata #webscraping #competitoranalysis #contentmarketing #n8nworkflow #workflow #nocode #seoresearch #keywordmonitoring #searchtrends #digitalmarketing #keywordtracking #contentautomation #marketresearch #trendingkeywords #keywordanalysis #seoautomation #keyworddiscovery #searchmarketing #keyworddata #contentplanning #seotools #keywordscraping #searchinsights #markettrends #keywordstrategy

## 📊 Basic Information

- **Workflow ID:** 5945
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 3714
- **Downloads:** 371
- **Created:** 2025/7/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5945)

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
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **n8n-nodes-mcp.mcpClientTool** 
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

This workflow contains 15 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
