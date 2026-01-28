# Monitor LinkedIn competitor engagement & analysis with Bright Data & AI

> This workflow automatically monitors competitor social media engagement on LinkedIn to track their content performance and posting strategies. It saves you time by eliminating the need to manually check competitor social media accounts and provides detailed analytics on their engagement metrics.

## Overview

This workflow automatically scrapes LinkedIn company profiles to extract the latest 5 posts and analyzes their engagement metrics including likes, comments, and content performance. It uses Bright Data to access LinkedIn without being blocked and AI to intelligently parse post data, calculating average engagement rates and storing detailed post information.

## Tools Used

- **n8n**: The automation platform that orchestrates the workflow
- **Bright Data**: For scraping LinkedIn company profiles without being blocked
- **OpenAI**: AI agent for intelligent post data extraction and analysis
- **Google Sheets**: For storing engagement metrics and detailed post information

## How to Install

1. **Import the Workflow**: Download the .json file and import it into your n8n instance
2. **Configure Bright Data**: Add your Bright Data credentials to the MCP Client node
3. **Set Up OpenAI**: Configure your OpenAI API credentials
4. **Configure Google Sheets**: Connect your Google Sheets account and set up your competitor tracking spreadsheets
5. **Customize**: Enter target LinkedIn company URLs and adjust engagement tracking parameters

## Use Cases

- **Social Media Marketing**: Analyze competitor content strategies and engagement patterns
- **Competitive Intelligence**: Track competitor posting frequency and content performance
- **Content Strategy**: Identify high-performing content types and messaging approaches
- **Brand Monitoring**: Monitor competitor social media presence and audience engagement

## Connect with Me

- **Website**: https://www.nofluff.online
- **YouTube**: https://www.youtube.com/@YaronBeen/videos
- **LinkedIn**: https://www.linkedin.com/in/yaronbeen/
- **Get Bright Data**: https://get.brightdata.com/1tndi4600b25 (Using this link supports my free workflows with a small commission)

#n8n #automation #socialmedia #competitoranalysis #linkedin #brightdata #webscraping #socialmonitoring #engagementtracking #n8nworkflow #workflow #nocode #socialautomation #competitormonitoring #contentanalysis #socialmediamonitoring #linkedinanalytics #engagementmetrics #competitorresearch #socialintelligence #contentperformance #socialmediaanalytics #brandmonitoring #competitortracking #socialmediastrategy #contentmarketing #socialmediadata #engagementanalysis #competitiveanalysis #linkedinscraping

## 📊 Basic Information

- **Workflow ID:** 5949
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 783
- **Downloads:** 78
- **Created:** 2025/7/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5949)

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
- **n8n-nodes-mcp.mcpClientTool** 
- **code** (×2)
- **googleSheets** (×2)
- **stickyNote** (×7)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.outputParserAutofixing** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
