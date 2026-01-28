# Trustpilot review sentiment analysis with OpenAI & Bright Data to Google Sheets

> This workflow automatically scrapes customer reviews from Trustpilot and performs sentiment analysis to extract valuable customer insights. It saves you time by eliminating the need to manually read through reviews and provides structured data on customer feedback, sentiment, and pain points.

## Overview

This workflow automatically scrapes the latest customer reviews from any Trustpilot company page and uses AI to analyze each review for sentiment, extract key complaints or praise, and identify recurring customer pain points. It stores all structured review data in Google Sheets for easy analysis and reporting.

## Tools Used

- **n8n**: The automation platform that orchestrates the workflow
- **Bright Data**: For scraping Trustpilot review pages without being blocked
- **OpenAI**: AI agent for intelligent review analysis and sentiment extraction
- **Google Sheets**: For storing structured review data and analysis results

## How to Install

1. **Import the Workflow**: Download the .json file and import it into your n8n instance
2. **Configure Bright Data**: Add your Bright Data credentials to the MCP Client node
3. **Set Up OpenAI**: Configure your OpenAI API credentials
4. **Configure Google Sheets**: Connect your Google Sheets account and set up your review tracking spreadsheet
5. **Customize**: Enter target Trustpilot company URLs and adjust review analysis parameters

## Use Cases

- **Product Teams**: Identify customer pain points and feature requests from reviews
- **Customer Support**: Monitor customer satisfaction and recurring issues
- **Marketing Teams**: Extract positive testimonials and understand customer sentiment
- **Business Intelligence**: Track brand reputation and customer feedback trends

## Connect with Me

- **Website**: https://www.nofluff.online
- **YouTube**: https://www.youtube.com/@YaronBeen/videos
- **LinkedIn**: https://www.linkedin.com/in/yaronbeen/
- **Get Bright Data**: https://get.brightdata.com/1tndi4600b25 (Using this link supports my free workflows with a small commission)

#n8n #automation #trustpilot #reviewscraping #sentimentanalysis #brightdata #webscraping #customerreviews #n8nworkflow #workflow #nocode #reviewautomation #customerinsights #brandmonitoring #reviewanalysis #customerfeedback #reputationmanagement #reviewmonitoring #customersentiment #productfeedback #trustpilotscraping #reviewdata #customerexperience #businessintelligence #feedbackanalysis #reviewtracking #customervoice #aianalysis #reviewmining #customerinsights

## 📊 Basic Information

- **Workflow ID:** 5950
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 388
- **Downloads:** 38
- **Created:** 2025/7/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5950)

## 👤 Author

- **Name:** Yaron Been
- **Username:** @yaron-nofluff

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **set** 
- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **n8n-nodes-mcp.mcpClientTool** 
- **code** 
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

This workflow contains 16 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
