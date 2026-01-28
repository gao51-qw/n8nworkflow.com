## 📘 Description:
This workflow automates sales performance tracking and motivational updates by integrating HighLevel CRM, Notion, GPT-4o, and Slack. It pulls all deals from HighLevel, cleans and summarizes sales data per representative, creates performance dashboards in Notion, and uses GPT-powered AI to generate personalized motivational Slack messages.
It eliminates manual leaderboard tracking and boosts sales engagement with real-time insights and daily motivation — ensuring every sales rep stays informed, recognized, and inspired.

## What This Workflow Does (Step-by-Step)
🟢 Manual Trigger – Starts the automation manually for data refresh or testing.

📦 Fetch All Deals from HighLevel CRM – Retrieves all opportunities from HighLevel CRM, including deal names, reps, values, and stages for full visibility.

🔍 Validate Deal Fetch Success (IF Node) – Verifies that fetched data contains valid deal IDs.
- ✅ True Path: Continues to data cleaning.
- ❌ False Path: Logs failed records to Google Sheets for debugging.

🧹 Clean & Structure Deal Data – Normalizes raw deal data into a consistent schema (deal ID, rep ID, client name, value, status). Ensures clean inputs for analytics.

📊 Summarize Sales by Representative – Aggregates deals per sales rep and computes:
- Total deals handled
- Total deal value
- Total deals won
- Average deal value

🧾 Generate Notion Performance Dashboard – Creates personalized Notion dashboards for each rep with daily updated performance summaries and motivation metrics.

⚙️ Transform Data for AI Input – Converts summarized data into AI-readable format for GPT-4o processing.

🧠 GPT-4o Model Configuration – Sets up Azure OpenAI GPT-4o model to generate motivational and contextual Slack messages.

🤖 AI-Generated Motivational Slack Messages – Uses LangChain + GPT-4o to create energetic, emoji-filled messages that celebrate rep achievements and encourage improvement.

💬 Notify Sales Team in Slack – Sends the AI-generated performance summaries and motivational blurbs directly to each rep or the team Slack channel for transparency and engagement.

🚨 Log Fetch or Validation Errors (Error Handling) – Records any fetch or validation failures in the Google Sheets “error log sheet” for easy review and error management.

## Prerequisites
- HighLevel CRM API credentials
- Google Sheets for “Error Log” tracking
- Notion API integration for dashboards
- Azure OpenAI (GPT-4o) credentials
- Slack API connection for notifications


## Key Benefits
 ✅ Fully automated daily performance tracking
 ✅ Personalized AI-powered motivation in Slack
 ✅ Transparent visibility for managers and reps
 ✅ Improved accountability and sales performance
 ✅ Seamless integration across CRM, Notion, and Slack

## 👥 Perfect For
- Sales teams seeking real-time motivation and transparency
- Managers who want automated performance dashboards
- Teams using HighLevel CRM and Slack for daily operations
- Companies aiming to gamify sales productivity