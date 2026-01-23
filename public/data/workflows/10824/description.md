## 📊 Description
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
