## Description
Automate your GoHighLevel (GHL) pipeline tracking and deal management process. This workflow fetches all opportunities, calculates the time spent in each stage, logs historical pipeline data in Google Sheets, identifies deals stuck for more than 7 days, generates HTML and text reports, and sends alerts via Gmail and Slack. It also produces a weekly pipeline velocity report for sales leadership, helping teams quickly spot bottlenecks and optimize pipeline performance. 🚀📊📈📧💬

## What This Template Does
- Triggers automatically every Monday at 8 AM ⏰
- Fetches all opportunities and stage history from GoHighLevel pipelines 🔍
- Calculates days spent in each stage, including historical and current stages 📅
- Logs historical pipeline data in Google Sheets for trend tracking 📊
- Filters deals stuck in a stage for more than 7 days ⚠️
- Generates detailed HTML and text stuck deal alert emails ✉️
- Sends Slack notifications for stuck deals 💬
- Generates weekly pipeline velocity report showing bottleneck and fastest stages 📈
- Sends weekly report via Gmail to sales leadership 🏆
- Sends error notifications via Gmail in case of workflow failures 🚨

## Key Benefits
- Saves time by automating pipeline tracking and reporting ⏱️
- Provides visibility into pipeline bottlenecks and stuck deals 🔍
- Maintains historical data for trend analysis and decision-making 📊
- Ensures consistent reporting to sales leadership and management 🤝
- Automates notifications for timely action on stuck deals ⚡
- Reduces manual errors and improves sales process efficiency 🧹

## Features
- Weekly trigger for automated execution 📆
- GHL API integration to fetch opportunities and stage history ⚡
- Code node to calculate stage durations and transform data 🛠️
- Google Sheets automation for historical data storage 📂
- If nodes to filter deals and handle errors ✅
- Automated Gmail and Slack alerts for stuck deals ✉️💬
- Weekly report generation with HTML and text formats 📊
- Bottleneck and fastest stage identification for actionable insights 🔎
- Error handling and notification for workflow reliability 🚨

## Requirements
- n8n instance (cloud or self-hosted)
- GoHighLevel account with API access 🔑
- Google Workspace (Sheets, Gmail) 📊
- Slack workspace with Bot Token & channel access 💬

## Target Audience
- Sales managers & teams using GoHighLevel for pipeline tracking 🏢
- Operations teams seeking visibility into deal progress 💼
- Leadership wanting automated weekly pipeline performance reports 📈
- Agencies managing multiple deals and pipelines efficiently 🚀
- Teams aiming to quickly identify bottlenecks and stuck deals ⚡

## Step-by-Step Setup Instructions
- Configure n8n schedule trigger → Set to run every Monday at 8 AM.
- Connect GoHighLevel OAuth2 credentials → Ensure access to opportunities & pipeline data.
- Connect Google Sheets OAuth2 → Select document ID & sheet tab for logging data.
- Configure Gmail OAuth2 → Replace hardcoded email addresses with intended recipients.
- Connect Slack API → Select channel for stuck deal notifications.
- Update stuck deal threshold in “Filter Stuck Deals” node (default 7 days).
- Import workflow into n8n → Map credentials and test nodes sequentially.
- Enable workflow → Pipeline velocity tracking, stuck deal alerts, and weekly reports are fully automated. ✅