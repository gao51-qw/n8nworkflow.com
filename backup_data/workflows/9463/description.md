## Description
Automatically generate and distribute detailed End-of-Day (EOD) reports combining task progress from ClickUp and opportunity data from GoHighLevel. This workflow uses AI to analyze daily performance, summarize key metrics, identify blockers, and deliver polished reports directly to Slack, Email, and Google Drive. ⚙️📊💬

## What This Template Does
- Triggers automatically every weekday at 6:00 PM (Mon–Fri). ⏰
- Fetches all completed ClickUp tasks and won GoHighLevel opportunities for the day. 📥
- Merges and transforms both datasets into a unified structure. 🔄
- Uses Azure OpenAI GPT-4 to analyze performance and generate structured summaries. 🤖
- Formats three output versions — Slack (Markdown), Email (HTML), and Google Drive (Text). 🧾
- Routes and sends reports automatically to connected channels. 📤
- Uploads the generated text report to Google Drive with timestamped filenames. ☁️

## Key Benefits
✅ Saves time by automating daily performance reporting.
 ✅ Unifies task and deal data into a single AI-generated summary.
 ✅ Provides real-time visibility into productivity and outcomes.
 ✅ Delivers beautifully formatted, channel-specific reports.
 ✅ Maintains historical reports in Google Drive for reference.
 ✅ Helps managers identify wins, blockers, and next steps quickly.

## Features
- Automated scheduling via cron (Mon–Fri, 6 PM).
- ClickUp task and GHL opportunity integration for daily data sync.
- AI-powered analysis for contextual, actionable summaries.
- Dynamic formatting for Slack, Email, and Drive outputs.
- Parallel routing for simultaneous delivery across platforms.
- No manual steps — runs fully hands-free after setup.

## Requirements
- ClickUp OAuth2 credentials for task retrieval.
- GoHighLevel OAuth2 credentials for deal data.
- Azure OpenAI GPT-4 API credentials.
- Slack Bot credentials for message posting.
- SMTP (Gmail/Outlook) credentials for email reports.
- Google Drive OAuth2 credentials for report upload.

## Target Audience
🎯 Sales, marketing, and operations teams tracking daily performance.
 📈 Project managers monitoring team productivity and blockers.
 🤝 Client success teams summarizing EOD outcomes for leadership.
 🧠 Business automation teams seeking end-of-day visibility.

## Step-by-Step Setup Instructions
- Connect ClickUp, GoHighLevel, Slack, Gmail/SMTP, and Google Drive credentials. 🔑
- Set your team, space, folder, and list IDs in the ClickUp node. 📋
- Update your Slack channel ID in the Slack node configuration. 💬
- Configure your email sender and recipients in the email node. 📧
- (Optional) Modify the cron expression for different reporting times. ⏰
- Test the workflow manually once, then activate for automated EOD execution. ✅