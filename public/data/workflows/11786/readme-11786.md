# Daily Google Analytics report with GPT-4 mini summaries, WhatsApp alerts & ClickUp tasks

> ## How it Works.

The workflow runs automatically every day and collects analytics data for both today and yesterday. It cleans and standardizes both datasets in the same way so they are easy to compare. After that, it measures how performance has changed from one day to the next and interprets those changes to understand trends and context. Once all calculations are finished, the AI creates a clear, easy-to-read summary of what happened. This summary is then formatted and sent through the required communication channels, while the final data is saved for tracking over time and for creating follow-up tasks if needed.

## Key Features:
- Trigger runs once per day recommended (11: 57 PM).
- Fetch seperate data for today and yesterday in node.
- Compare the two days data and highlight if traffic is less
- Add the trend `lowTraffic` for low traffic identification.
- Using GPT-4 Mini for human readable summary to suit different communication channels.
- Sending report to WhatsApp / Email
- Stored the final structure data to Google Sheet for future analytics and historical record

## Setup Steps

#### 1. Connect Required Credentials
You must connect the following credentials:
Google Analytics API
Google Sheets
OpenAi API
Email SMTP
WhatsApp API
ClickUp API

#### 2. Replace Defalut Values
Update the workflow with:
Your Google Analytics Id's
Your Google Sheet Tabs
Replace SMTP Credentials, sender and recipients
Change with your OpenAi API key
Create your WhatApi API Credentials
ClickUp API Key's

#### 3. Customize Email Template
Modify subject, message body, or formatting style based on your reporting standards.

#### 4. Adjust Trigger
You may choose:
Manual Trigger
Cron Trigger for daily/weekly report
Webhook Trigger integrated with your system


## Detailed Process Flow

#### Schedule Trigger

- Node Type: Trigger Node
- Purpose: Automates the start of the workflow.
- Details:
Runs every day (or every hour if real-time monitoring is needed).
Eliminates manual data collection and ensures consistent reporting.

#### Analytics Reports

- Node Type :- Google Analytics Node
- Purpose: Fetch website performance data
- Metrics includes: users, sessions, page views

#### Combine the Data


- Node Type: Merge Node (Append)
- Purpose: Combines today’s and yesterday’s datasets into a single item for comparison.
- Details:
Prepares data for calculating percentage changes.
Maintains proper structure for further nodes.

#### Calculate Percent Changes

- Node Type: Function Node
- Purpose: Computes day-over-day percentage changes for users, sessions, and page views.
- Details:
Formula: ((today - yesterday) / yesterday) * 100
Handles increases and decreases correctly.
Outputs values used for trend indicators and alerts.

#### Generate AI Summary

- Node Type: OpenAI Node
- Purpose: Produces human-readable, professional insights about the daily analytics.
- Details:
Summarizes key changes, trends, and recommendations.
Provides context such as low-traffic warnings.
Text output is used in emails, WhatsApp, and ClickUp tasks.

#### Send Email or Whatsapp to Dedicated Person / Marketing Team

- Node Type: Email Node / Whatspp
- Purpose: Sends daily alert or report emails or whatsapp.
- Details:
Includes formatted metrics and AI summary.
Email subject and body clearly indicate trends and recommendations.

## Workflow Benefits

- Fully automated daily GA reporting
- AI-generated summaries for clear insights
- Alerts only triggered when necessary
- Historical logging for trends and dashboards
- Actionable tasks automatically created in ClickUp
- Multi-channel delivery via Email and WhatsApp
Handles low-traffic scenarios gracefully

## 📊 Basic Information

- **Workflow ID:** 11786
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 158
- **Downloads:** 15
- **Created:** 2025/12/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11786)

## 👤 Author

- **Name:** Mohamed Abubakkar
- **Username:** @mohamed-abubakkar

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **googleAnalytics** (×2)
- **@n8n/n8n-nodes-langchain.toolCalculator** 
- **merge** 
- **code** (×4)
- **@n8n/n8n-nodes-langchain.openAi** 
- **set** 
- **whatsApp** 
- **if** 
- **emailSend** (×2)
- **googleSheets** (×3)
- **clickUp** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
