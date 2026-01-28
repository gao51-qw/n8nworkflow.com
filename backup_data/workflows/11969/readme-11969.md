# Schedule and optimize Twitter and LinkedIn posts from Google Sheets with OpenAI GPT-4o-mini

> # Schedule and optimize social media posts to Twitter and LinkedIn using AI


This workflow automates the entire lifecycle of social media management—from fetching draft content to AI-driven optimization and multi-platform publishing.


## Who’s it for
Social media managers, marketing teams, and content creators who use Google Sheets to plan their content but want to leverage AI for better engagement and automate the repetitive task of cross-platform posting.


## How it works
The workflow is triggered either hourly or manually via a webhook. It fetches scheduled content from a designated Google Sheet and identifies posts ready for publication. 


An AI Agent (OpenAI) then analyzes the raw content to generate two optimized versions: a punchy, character-limited post for Twitter and a more professional, detailed version for LinkedIn. After generating relevant hashtags and engagement tips, the workflow publishes the posts simultaneously. Finally, it logs the live URLs back to your spreadsheet and sends a performance summary to a Slack channel for easy tracking.


## How to set up
1. **Google Sheet**: Create a sheet with columns for `status`, `content`, `platforms`, `scheduled_time`, `hashtags`, and `tone`.
2. **Credentials**: Connect your Google Sheets, OpenAI, Twitter (X), LinkedIn, and Slack accounts.
3. **Node Configuration**: Select your specific spreadsheet and worksheet in both the "Fetch Content" and "Update Content" nodes.
4. **Slack**: Specify the channel name or ID in the Slack node to receive notifications.
5. **Activation**: Test with the Manual Webhook, then toggle the workflow to "Active."


## Requirements
- **Google Sheets OAuth2**
- **OpenAI API Key** (using GPT-4o-mini or higher)
- **Twitter (X) OAuth2**
- **LinkedIn OAuth2**
- **Slack Bot Token**


## How to customize the workflow
- **AI Tone**: Modify the "System Message" in the AI Content Optimizer node to match your brand's unique voice.
- **Additional Platforms**: Extend the branching logic after the AI Parse node to include platforms like Discord, Facebook, or Mastodon.
- **Advanced Scheduling**: Adjust the Filter node's JavaScript code if you use a different date format or status labels in your spreadsheet.

## 📊 Basic Information

- **Workflow ID:** 11969
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 46
- **Downloads:** 4
- **Created:** 2025/12/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11969)

## 👤 Author

- **Name:** yu-ya
- **Username:** @yyuyayamanaka

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×5)
- **scheduleTrigger** 
- **webhook** 
- **merge** (×2)
- **googleSheets** (×2)
- **code** (×3)
- **if** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.agent** 
- **twitter** 
- **linkedIn** 
- **aggregate** 
- **slack** 
- **set** 
- **respondToWebhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
