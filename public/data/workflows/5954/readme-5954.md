# Monitor & alert on social media ad performance with Bright Data MCP

> This workflow automatically monitors social media advertising performance across platforms to track campaign effectiveness and ROI. It saves you time by eliminating the need to manually check multiple ad platforms and provides consolidated performance data for all your social media campaigns.

## Overview

This workflow automatically scrapes social media advertising platforms to extract campaign performance metrics including impressions, clicks, conversions, and cost data. It uses Bright Data to access ad platforms without being blocked and AI to intelligently parse advertising data into structured performance reports.

## Tools Used

- **n8n**: The automation platform that orchestrates the workflow
- **Bright Data**: For scraping social ad platforms without being blocked
- **OpenAI**: AI agent for intelligent ad performance data extraction and analysis
- **Google Sheets**: For storing and organizing advertising performance data

## How to Install

1. **Import the Workflow**: Download the .json file and import it into your n8n instance
2. **Configure Bright Data**: Add your Bright Data credentials to the MCP Client node
3. **Set Up OpenAI**: Configure your OpenAI API credentials
4. **Configure Google Sheets**: Connect your Google Sheets account and set up your ad performance tracking spreadsheet
5. **Customize**: Set target ad platform URLs and campaign monitoring parameters

## Use Cases

- **Digital Marketing**: Track ROI and performance across all social media ad campaigns
- **Performance Analysis**: Identify top-performing ads and optimize underperforming campaigns
- **Budget Management**: Monitor ad spend and cost-per-acquisition metrics
- **Campaign Optimization**: Make data-driven decisions for ad creative and targeting

## Connect with Me

- **Website**: https://www.nofluff.online
- **YouTube**: https://www.youtube.com/@YaronBeen/videos
- **LinkedIn**: https://www.linkedin.com/in/yaronbeen/
- **Get Bright Data**: https://get.brightdata.com/1tndi4600b25 (Using this link supports my free workflows with a small commission)

#n8n #automation #socialads #adperformance #brightdata #webscraping #digitalmarketing #n8nworkflow #workflow #nocode #adautomation #campaigntracking #socialmediamarketing #adanalytics #performancetracking #marketingautomation #admonitoring #campaignanalysis #socialadvertising #marketingdata #admetrics #digitaladvertising #adoptimization #campaignmonitoring #marketinganalysis #adinsights #socialmediaads #paidads #adcampaigns #marketingroi

## 📊 Basic Information

- **Workflow ID:** 5954
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 453
- **Downloads:** 45
- **Created:** 2025/7/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5954)

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
- **if** 
- **gmail** 
- **noOp** 
- **stickyNote** (×7)
- **@n8n/n8n-nodes-langchain.outputParserAutofixing** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
