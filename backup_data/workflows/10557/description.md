## 📊 Description
Streamline Facebook Messenger inbox management with an AI-powered categorization and response system. 💬⚙️
 This workflow automatically classifies new messages as Lead, Query, or Spam using GPT-4, routes them for approval via Slack, responds on Facebook once approved, and logs all interactions into Google Sheets for tracking. Perfect for support and marketing teams managing high volumes of inbound DMs. 🚀📈

## What This Template Does
1️⃣ Trigger – Runs hourly to fetch new Facebook Page messages. ⏰
 2️⃣ Extract & Format – Collects sender info, timestamps, and message content for analysis. 📋
 3️⃣ AI Categorization – Uses GPT-4 to identify message type (Lead, Query, Spam) and suggest replies. 🧠
 4️⃣ Slack Approval Flow – Sends categorized leads and queries to Slack for quick team approval. 💬
 5️⃣ Facebook Response – Posts AI-suggested replies back to the original sender once approved. 💌
 6️⃣ Data Logging – Records every message, reply, and approval status into Google Sheets for analytics. 📊
 7️⃣ Error Handling – Automatically alerts via Slack if the workflow encounters an error. 🚨

## Key Benefits
✅ Reduces manual message triage on Facebook Messenger
 ✅ Ensures consistent and professional customer replies
 ✅ Provides full visibility via Google Sheets logs
 ✅ Centralizes team approvals in Slack for faster response times
 ✅ Leverages GPT-4 for accurate categorization and natural replies

## Features
- Hourly Facebook message fetch with Graph API
- GPT-4 powered text classification and reply suggestion
- Slack-based dual approval flow
- Automated Facebook replies post-approval
- Google Sheets logging for all categorized messages
- Built-in error detection and Slack alerting

## Requirements
Facebook Graph API credentials with page message permissions
OpenAI API key for GPT-4 processing
Slack API credentials with chat:write permission
Google Sheets OAuth2 credentials

## Environment Variables:
FACEBOOK_PAGE_ID
GOOGLE_SHEET_ID
GOOGLE_SHEET_NAME
SLACK_CHANNEL_ID

## Target Audience
- Marketing and lead-generation teams using Facebook Pages 📣
- Customer support teams managing Messenger queries 💬
- Businesses seeking automated lead routing and CRM sync 🧾
- Teams leveraging AI for customer engagement optimization 🤖

## Step-by-Step Setup Instructions
1️⃣ Connect Facebook Graph API credentials and set your page ID.
 2️⃣ Add OpenAI API credentials for GPT-4.
 3️⃣ Configure Slack channel ID and credentials.
 4️⃣ Link your Google Sheet for message logging.
 5️⃣ Replace environment variable placeholders with your actual IDs.
 6️⃣ Test the workflow manually before enabling automation.
 7️⃣ Activate the schedule trigger for ongoing hourly execution. ✅
