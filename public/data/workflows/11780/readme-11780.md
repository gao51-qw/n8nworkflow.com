# Aggregate & update documentation from Slack, Teams & GitHub with Claude Sonnet 4.5

> ## How It Works
Aggregates communication data from Slack, Microsoft Teams, Gmail, GitHub, and Confluence into a single, unified AI-powered analysis workflow designed for quality review and automated documentation updates. This solution is specifically aimed at teams managing distributed content and knowledge workflows across multiple platforms. It addresses the challenges of fragmented communication and isolated information silos that often prevent rapid content review and timely decision-making. The workflow begins with a scheduled trigger, followed by multi-source data collection, merging and normalizing inputs, Claude AI-powered analysis, validation and quality checks, formatting, and finally publishing updates to Notion and Confluence, accompanied by Slack notifications to ensure stakeholders are promptly informed.

## Setup Steps
-Connect credentials: Slack API, Teams, Gmail OAuth, GitHub PAT. 
-Confluence API, Anthropic API key, Notion Integration. 
-Configure monitored channels/repositories. 
-Set schedule frequency. 
-Map output destinations (Notion/Confluence). 
-Test merged output before enabling automation.

## Prerequisites
Slack workspace, Teams account, Gmail access, GitHub repository, Confluence space, Anthropic API key, Notion workspace, n8n instance.

## Use Cases
Content review teams processing feedback, documentation teams aggregating updates, QA teams reviewing communications 

## Customization
Add/remove source nodes, adjust Claude prompts for analysis type, modify output destinations 

## Benefits
Saves 6+ hours weekly, eliminates missed content, AI-driven quality assurance 




## 📊 Basic Information

- **Workflow ID:** 11780
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 58
- **Downloads:** 5
- **Created:** 2025/12/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11780)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** (×2)
- **slack** (×2)
- **microsoftTeams** 
- **gmail** 
- **github** 
- **httpRequest** (×2)
- **notion** (×2)
- **merge** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **if** 
- **stickyNote** (×9)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
