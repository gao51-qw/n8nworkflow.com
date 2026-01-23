## Description
Automate daily KPI tracking and reporting by integrating ClickUp tasks and Google Sheets lead data into a unified dashboard. This workflow computes performance metrics, analyzes sentiment, and delivers visualized reports to Slack and Gmail for instant team insights. 📊💬📧

## What This Template Does
- Triggers automatically every day using a cron scheduler. ⏰
- Fetches project task data from ClickUp, including status, priority, and assignee metrics.
- Retrieves lead generation data and responses from Google Sheets.
- Merges both data sources to create a unified performance dataset.
- Computes detailed KPI metrics (task completion, overdue %, sentiment analysis, response trends).
- Formats data for reporting and visualization.
- Posts a concise KPI summary snapshot to a designated Slack channel.
- Sends a professionally formatted HTML report via Gmail.
- Notifies your Slack channel instantly in case of any workflow errors.

## Key Benefits
✅ Eliminates manual KPI tracking and reporting.
 ✅ Combines ClickUp and Google Sheets data into one view.
 ✅ Provides real-time insights for decision-making.
 ✅ Automates daily updates for consistent visibility.
 ✅ Delivers both quick Slack summaries and detailed email reports.
 ✅ Built-in error alerting ensures uninterrupted automation.

## Features
- Scheduled daily cron trigger for automated execution.
- OAuth2-secured integrations with ClickUp, Google Sheets, Slack, and Gmail.
- Parallel data fetching for faster performance.
- Smart KPI calculations with sentiment and trend analysis.
- Custom HTML email template with visual charts and highlights.
- Slack snapshot notifications for instant updates.
- Error-handling mechanism with Slack alerts.

## Requirements
- ClickUp account with OAuth2 credentials.
- Google Sheets access with OAuth2 credentials.
- Slack API credentials with chat:write permission.
- Gmail OAuth2 credentials for report delivery.

## Target Audience
- Project managers tracking performance KPIs.
- Operations teams needing daily performance visibility.
- Marketing and sales teams monitoring task and lead metrics.
- Automation and analytics engineers building executive dashboards.

## Step-by-Step Setup Instructions
- Connect your ClickUp, Google Sheets, Slack, and Gmail accounts. 🔑
- Replace placeholder IDs (Sheet ID, Channel ID, Email) with your actual values.
- Adjust the cron trigger time as per your timezone.
- Test with sample data to confirm correct KPI calculations.
- Enable workflow to start daily automated execution. 🚀
