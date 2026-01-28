## Description
Automatically detect customer churn risks from Zendesk tickets, log them into Google Sheets for tracking, and send instant Slack alerts to your customer success team. This workflow helps you spot unhappy customers early and take proactive action to reduce churn. 🚨📊💬

## What This Template Does
- Fetches Zendesk tickets daily on schedule (8:00 PM). ⏰
- Processes and formats ticket data into clean JSON (priority, age, urgency). 🧠
- Identifies churn risks based on negative satisfaction ratings. ⚠️
- Logs churn risk tickets into Google Sheets for analysis and reporting. 📈
- Sends formatted Slack alerts with ticket details to the CS team channel. 📢

## Key Benefits
- Detects unhappy customers before they churn. 🚨
- Centralized churn tracking for reporting and team reviews. 🧾
- Proactive alerts to reduce response delays. ⏱️
- Clean, structured ticket data for analytics and filtering. 🔄
- Strengthens customer success strategy with real-time visibility. 🌐

## Features
- Schedule Trigger – Runs every weekday at 8:00 PM. 🗓️
- Zendesk Integration – Fetches all tickets automatically. 🎫
- Smart Data Processing – Adds ticket age, urgency, and priority mapping. 🧮
- Churn Risk Filter – Flags tickets with negative satisfaction scores. 🚩
- Google Sheets Logging – Saves churn risk details with metadata. 📊
- Slack Alerts – Sends formatted messages with ID, subject, rating, and action steps. 💬

## Requirements
- n8n instance (cloud or self-hosted).
- Zendesk API credentials with ticket read access.
- Google Sheets OAuth2 credentials with write permissions.
- Slack Bot API credentials with channel posting permissions.
- Pre-configured Google Sheet for churn risk logging.

## Target Audience
- Customer Success teams monitoring churn risk. 👩‍💻
- SaaS companies tracking customer health. 🚀
- Support managers who want proactive churn alerts. 🛠️
- SMBs improving retention through automation. 🏢
- Remote CS teams needing instant notifications. 🌐

## Step-by-Step Setup Instructions
- Connect your Zendesk, Google Sheets, and Slack credentials in n8n. 🔑
- Update the Schedule Trigger (default: daily at 8:00 PM) if needed. ⏰
- Replace the Google Sheet ID with your churn risk tracking sheet. 📊
- Confirm the Slack channel ID for alerts (default: zendesk-churn-alerts). 💬
- Adjust churn filter logic (default: satisfaction_score = "bad"). 🎯
- Run a test to fetch Zendesk tickets and validate Sheets + Slack outputs. ✅
