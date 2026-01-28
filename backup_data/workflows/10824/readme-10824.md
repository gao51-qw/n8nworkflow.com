# Automate Instagram engagement & sentiment analysis with GPT-4 and Slack reports

> ## 📊 Description
Automatically analyze your Instagram posts’ engagement and audience sentiment using GPT-4 to uncover top-performing content and improvement opportunities. 💬📈
 This workflow fetches your latest Instagram posts using the Facebook Graph API, evaluates likes, comments, and tone, then generates structured performance insights. The results are logged into Google Sheets, shared via Slack alerts, and emailed through Outlook — empowering your social media team with daily, AI-powered engagement intelligence. 🚀

## What This Template Does
1️⃣ Trigger – Runs daily at 10 AM to fetch the latest Instagram posts. ⏰
 2️⃣ Data Fetching – Uses the Facebook Graph API to extract post data, captions, likes, and comments. 📲
 3️⃣ Formatting – Cleans and structures post and comment data for analysis. 🧩
 4️⃣ AI Evaluation – GPT-4 analyzes engagement metrics and comment sentiment to score post performance. 🤖
 5️⃣ Decision Routing – Flags high- and low-performing posts for separate processing. ⚙️
 6️⃣ Notifications – Sends positive performance summaries or negative alerts to Slack. 💬
 7️⃣ Logging – Records engagement metrics, sentiment labels, and AI recommendations in Google Sheets. 📊
 8️⃣ Reporting – Emails detailed performance summaries to the marketing team via Outlook. 💌

## Key Benefits
✅ Automates social performance tracking across Instagram posts
 ✅ Provides AI-driven sentiment and engagement insights
 ✅ Flags top or underperforming content for immediate action
 ✅ Delivers Slack and email reports for team visibility
 ✅ Centralizes analytics in Google Sheets for trend tracking

## Features
- Facebook Graph API integration for Instagram post and comment retrieval
- GPT-4 sentiment and engagement evaluation
- Structured JSON insights and recommendations
- Slack alerts for both positive and negative performance
- Google Sheets data logging with trend metrics
- Outlook email reporting for management visibility
- Customizable scheduling and thresholds

## Requirements
- Facebook Graph API credentials connected to your Instagram Business account
- OpenAI API key for GPT-4 or GPT-4o-mini
- Slack Bot token with chat:write permissions
- Google Sheets OAuth2 credentials with edit rights
- Microsoft Outlook OAuth2 credentials for email delivery
- Optional environment variables for IDs:
- SHEET_ID, SLACK_CHANNEL_ID, OUTLOOK_EMAIL

## Target Audience
1. Marketing and social media teams optimizing engagement 📣
2. Agencies managing multiple Instagram accounts 🧑‍💼
3. Analysts tracking performance metrics and audience tone 📊
4. Brands automating daily performance reports 📅

## Step-by-Step Setup Instructions
1️⃣ Connect your Facebook Graph API to your Instagram Business Account.
 2️⃣ Add OpenAI API credentials (use GPT-4 model for best results).
 3️⃣ Configure Slack for team notifications and specify the channel ID.
 4️⃣ Link Google Sheets and set your sheet ID for data logging.
 5️⃣ Connect Microsoft Outlook for daily performance email reports.
 6️⃣ Adjust the schedule (default: 10 AM daily) to suit your workflow.
 7️⃣ Run a test once, verify data mapping, and enable automation. ✅


## 📊 Basic Information

- **Workflow ID:** 10824
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 170
- **Downloads:** 17
- **Created:** 2025/11/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10824)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **facebookGraphApi** 
- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **stickyNote** (×7)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **code** (×2)
- **slack** (×2)
- **microsoftOutlook** 
- **switch** 
- **googleSheets** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
