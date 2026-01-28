# Analyze competitor content performance with Bright Data MCP & GPT-4o

> This workflow automatically analyzes competitor content performance across various platforms to understand what content resonates with their audience. It saves you time by eliminating the need to manually track competitor content and provides insights into successful content strategies and engagement patterns.

## Overview

This workflow automatically scrapes competitor websites, blogs, and social media to analyze content performance metrics including engagement rates, shares, comments, and audience response. It uses Bright Data to access competitor content without restrictions and AI to intelligently analyze performance data and extract actionable insights.

## Tools Used

- **n8n**: The automation platform that orchestrates the workflow
- **Bright Data**: For scraping competitor content platforms without being blocked
- **OpenAI**: AI agent for intelligent content performance analysis
- **Google Sheets**: For storing competitor content analysis and performance metrics

## How to Install

1. **Import the Workflow**: Download the .json file and import it into your n8n instance
2. **Configure Bright Data**: Add your Bright Data credentials to the MCP Client node
3. **Set Up OpenAI**: Configure your OpenAI API credentials
4. **Configure Google Sheets**: Connect your Google Sheets account and set up your content analysis spreadsheet
5. **Customize**: Define competitor URLs and content performance tracking parameters

## Use Cases

- **Content Strategy**: Learn from high-performing competitor content to improve your own strategy
- **Competitive Analysis**: Track competitor content trends and audience engagement patterns
- **Content Optimization**: Identify content types and topics that drive the most engagement
- **Market Research**: Understand what content resonates with your target audience

## Connect with Me

- **Website**: https://www.nofluff.online
- **YouTube**: https://www.youtube.com/@YaronBeen/videos
- **LinkedIn**: https://www.linkedin.com/in/yaronbeen/
- **Get Bright Data**: https://get.brightdata.com/1tndi4600b25 (Using this link supports my free workflows with a small commission)

#n8n #automation #competitoranalysis #contentperformance #brightdata #webscraping #contentmarketing #n8nworkflow #workflow #nocode #contentanalysis #competitormonitoring #contentresearch #engagementanalysis #marketresearch #contentintelligence #competitiveintelligence #contentoptimization #performancetracking #contentmetrics #marketanalysis #contentaudit #brandanalysis #contentstrategy #digitalmarketing #contentinsights #socialmediaanalysis #contentmonitoring #performanceanalysis #competitorresearch

## 📊 Basic Information

- **Workflow ID:** 5957
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 557
- **Downloads:** 55
- **Created:** 2025/7/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5957)

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
