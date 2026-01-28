# Generate AI reports for Meta Ads campaigns with Claude & Pipeboard MCP via Slack

> # Who's it for
Digital marketing agencies and Meta Ads managers who need to generate comprehensive performance reports across multiple client accounts automatically. Perfect for agencies handling 5+ Meta Ads accounts who want to save hours on manual reporting while delivering AI-powered insights to their teams.

# What it does
- Pulls performance data from **multiple Meta Ads accounts** for a specified time period (last 7, 14, or 30 days)
- Uses Claude AI with Pipeboard's Meta Ads MCP to **analyze campaign performance, identify trends, and generate actionable insights**
- Generates professional **reports with AI-driven recommendations for optimization**
- Automatically delivers formatted reports to your **Slack channels**
- Runs on a schedule (weekly/daily) or triggered manually

# How to set up

1. Set up Claude AI integration (requires Anthropic API key)
1. Configure Pipeboard's Meta Ads MCP connection
1. Connect Slack to n8n via OAuth2
1. Create a list of client account IDs in the workflow configuration
1. Customize your reporting template and Slack delivery settings

# Requirements
1. n8n version 1.109.2 or newer.
1. [Claude AI](https://claude.ai) API access (Anthropic)
1. [Pipeboard](https://pipeboard.co) account
1. [Slack](https://slack.com) workspace access

# How to customize the workflow

- Adjust the date range and metrics to track
- Modify the AI prompts for different types of insights
- Configure multiple Slack channels for different clients
- Set up custom scheduling intervals
- Add email delivery as an additional output channel

## 📊 Basic Information

- **Workflow ID:** 8414
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 1020
- **Downloads:** 102
- **Created:** 2025/9/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8414)

## 👤 Author

- **Name:** Yves Junqueira
- **Username:** @yves-pipeboard

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatAnthropic** 
- **splitOut** 
- **stickyNote** (×5)
- **scheduleTrigger** 
- **set** (×2)
- **@n8n/n8n-nodes-langchain.mcpClientTool** 
- **slack** 
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
