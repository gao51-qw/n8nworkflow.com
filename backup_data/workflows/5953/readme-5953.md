# Automate email campaign analysis & smart follow-ups with Bright Data & OpenAI

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

This workflow automatically tracks email campaign performance metrics and triggers smart follow-up actions based on engagement data. It saves you time by eliminating the need to manually monitor campaign reports and provides intelligent re-engagement strategies for improving email marketing ROI.

## Overview

This workflow automatically scrapes email service provider (ESP) reports to extract campaign performance metrics like open rates, click-through rates, and bounce rates. It uses AI to analyze the data and automatically sends targeted follow-up emails to re-engage subscribers who opened but didn't click, maximizing campaign effectiveness.

## Tools Used

- **n8n**: The automation platform that orchestrates the workflow
- **Bright Data**: For scraping ESP campaign reports without being blocked
- **OpenAI**: AI agent for intelligent campaign data analysis and decision making
- **Gmail**: For sending automated follow-up engagement emails

## How to Install

1. **Import the Workflow**: Download the .json file and import it into your n8n instance
2. **Configure Bright Data**: Add your Bright Data credentials to the MCP Client node
3. **Set Up OpenAI**: Configure your OpenAI API credentials
4. **Configure Gmail**: Connect your Gmail account for sending follow-up emails
5. **Customize**: Set ESP report URLs and define engagement thresholds for triggering follow-ups

## Use Cases

- **Email Marketing**: Automatically optimize campaign performance with smart follow-ups
- **Marketing Automation**: Trigger re-engagement campaigns based on behavior data
- **Performance Tracking**: Monitor email metrics without manual ESP login
- **Customer Retention**: Re-engage subscribers who showed interest but didn't convert

## Connect with Me

- **Website**: https://www.nofluff.online
- **YouTube**: https://www.youtube.com/@YaronBeen/videos
- **LinkedIn**: https://www.linkedin.com/in/yaronbeen/
- **Get Bright Data**: https://get.brightdata.com/1tndi4600b25 (Using this link supports my free workflows with a small commission)

#n8n #automation #emailmarketing #campaigntracking #brightdata #webscraping #emailautomation #n8nworkflow #workflow #nocode #emailcampaigns #marketingautomation #emailperformance #campaignanalysis #emailmetrics #reengagement #marketingdata #emailoptimization #campaignmonitoring #emailanalytics #digitalmarketing #performancetracking #emailstrategy #conversionoptimization #marketinganalytics #emailroi #campaigninsights #emailengagement #marketingefficiency #automatedemail

## 📊 Basic Information

- **Workflow ID:** 5953
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 4771
- **Downloads:** 477
- **Created:** 2025/7/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5953)

## 👤 Author

- **Name:** Yaron Been
- **Username:** @yaron-nofluff

## 🏷️ Categories

- Social Media
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **n8n-nodes-mcp.mcpClientTool** 
- **if** 
- **gmail** 
- **noOp** 
- **stickyNote** (×6)
- **@n8n/n8n-nodes-langchain.outputParserAutofixing** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
