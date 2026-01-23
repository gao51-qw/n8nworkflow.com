# Generate weekly Twitter & Facebook performance reports with GPT-4o analysis

> ## Description
Automate your weekly cross-platform social media analytics workflow with AI-powered insights. 📊🤖
 This system retrieves real-time Twitter (X) and Facebook data, validates and merges the metrics, formats them via custom JavaScript, generates a visual HTML summary with GPT-4o, stores structured analytics in Notion, and broadcasts key results through Gmail and Slack — all in one seamless flow. Perfect for marketing, social media, and growth teams tracking weekly engagement trends. 🚀💬

## What This Template Does
 1️⃣ Starts on manual execution to fetch the latest performance data. 🕹️
 2️⃣ Collects live metrics from both Twitter (X API) and Facebook Graph API. 🐦📘
 3️⃣ Merges API responses into one unified dataset for analysis. 🧩
 4️⃣ Validates data completeness before processing; logs missing or invalid data to Google Sheets. 🔍
 5️⃣ Uses JavaScript to normalize data into clean JSON structures for AI analysis. 💻
 6️⃣ Leverages Azure OpenAI GPT-4o to generate a professional HTML analytics report. 🧠📈
 7️⃣ Updates Notion’s “Growth Chart” database with historical metrics for record-keeping. 🗂️
 8️⃣ Sends the HTML report via Gmail to the marketing or analytics team. 📧
 9️⃣ Posts a summarized Slack message highlighting key insights and platform comparisons. 💬

## Key Benefits
 ✅ Eliminates manual social media reporting with full automation.
 ✅ Ensures clean, validated data before report generation.
 ✅ Delivers visually engaging HTML performance summaries.
 ✅ Centralizes analytics storage in Notion for trend tracking.
 ✅ Keeps teams aligned with instant Slack and Gmail updates.

## Features
- Dual-platform analytics integration (Twitter X + Facebook Graph).
- Custom JavaScript node for data normalization and mapping.
- GPT-4o model integration for HTML report generation.
- Real-time error logging to Google Sheets for transparency.
- Notion database update for structured performance tracking.
- Slack notifications with emoji-rich summaries and insights.
- Gmail automation for formatted weekly performance emails.
- Fully modular — easy to scale to other social platforms.

## Requirements
- Twitter OAuth2 API credentials for fetching X metrics.
- Facebook Graph API credentials for retrieving page data.
- Azure OpenAI credentials for GPT-4o AI report generation.
- Notion API credentials with write access to “Growth Chart.”
- Slack Bot Token with chat:write permission for updates.
- Google Sheets OAuth2 credentials for error logs.
- Gmail OAuth2 credentials to send HTML reports.

## Environment Variables
- TWITTER_API_KEY
- FACEBOOK_GRAPH_TOKEN
- AZURE_OPENAI_KEY
- NOTION_GROWTH_DB_ID
- SLACK_ALERT_CHANNEL_ID
- GOOGLE_SHEET_ERROR_LOG_ID
- GMAIL_MARKETING_RECIPIENTS

## Target Audience
 📈 Marketing and growth teams analyzing engagement trends.
 💡 Social media managers tracking cross-channel performance.
 🧠 Data and insights teams needing AI-based summaries.
 💬 Brand strategists and content teams monitoring audience health.
 🧾 Agencies and operations teams automating weekly reporting.

## Step-by-Step Setup Instructions
 1️⃣ Connect all required API credentials (Twitter, Facebook, Azure OpenAI, Notion, Gmail, Slack, Sheets).
 2️⃣ Replace the username and page IDs in the HTTP Request nodes for your brand handles.
 3️⃣ Verify the JavaScript node output structure for correct field mapping.
 4️⃣ Configure the Azure GPT-4o prompt with your preferred tone and formatting.
 5️⃣ Link your Notion database and confirm property names match (followers, likes, username).
 6️⃣ Add recipient email(s) in the Gmail node.
 7️⃣ Specify your Slack channel ID for automated alerts.
 8️⃣ Test run the workflow manually to validate end-to-end execution.
 9️⃣ Activate or schedule the workflow for regular weekly reporting. ✅


## 📊 Basic Information

- **Workflow ID:** 10556
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 34
- **Downloads:** 3
- **Created:** 2025/11/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10556)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatAzureOpenAi** 
- **gmail** 
- **httpRequest** 
- **facebookGraphApi** 
- **code** (×3)
- **merge** 
- **if** 
- **googleSheets** 
- **@n8n/n8n-nodes-langchain.agent** 
- **stickyNote** (×10)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
