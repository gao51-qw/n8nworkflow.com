# Monitor NASA asteroid threats with AI fact-check and multi-channel alerts

> ## Who Is This For?

This workflow is designed for space enthusiasts, science educators, journalists, fact-checkers, and researchers who want to stay informed about near-Earth asteroid threats while filtering out media sensationalism. It's also valuable for anyone studying how different regions cover space-related news.

## What It Does

This workflow creates an automated planetary defense monitoring system that:

- Scans NASA's Near Earth Object database for potentially hazardous asteroids over a 7-day window
- Searches news coverage across three regions (US, Japan, EU) to compare media reporting
- Uses AI (GPT-4o-mini) to fact-check news claims against official NASA data
- Detects misinformation and measures media sensationalism levels
- Generates visual charts comparing actual threat levels vs media panic
- Sends alerts through multiple channels (Slack, Discord, Email)
- Logs all alerts to Google Sheets for historical analysis

## How It Works

1. **Trigger**: Runs daily at 9 AM or on-demand via webhook
2. **NASA Data Fetch**: Retrieves 7-day asteroid forecast from NASA NeoWs API
3. **Threat Analysis**: Identifies potentially hazardous asteroids and assigns alert levels (LOW/MEDIUM/HIGH)
4. **News Search**: Searches news in US, Japan, and EU using Apify's Google Search Scraper
5. **AI Fact-Check**: GPT-4o-mini compares news claims against NASA data, detecting misinformation
6. **Visualization**: Generates gauge charts for threat level and media panic, plus regional comparison bar chart
7. **Multi-Channel Alerts**: Sends formatted reports to Slack, Discord, Email, and logs to Google Sheets

## Set Up Steps

Estimated time: 15-20 minutes

1. **NASA API** (Required): Get your free API key at [api.nasa.gov](https://api.nasa.gov/)
2. **Apify** (Required): Create account and connect via OAuth
3. **OpenAI** (Required): Add your API key from [platform.openai.com](https://platform.openai.com/)
4. **Notification Channels** (Choose at least one):
   - Slack: Create OAuth app and connect
   - Discord: Create webhook URL
   - Email: Configure SMTP settings
5. **Google Sheets** (Optional): Create a sheet for logging with columns: Date, Alert Level, Hazardous Count, Threat Score, Media Panic Score, Misinformation Detected, Top Asteroid, Most Accurate Region

## Requirements

- NASA API key (free)
- Apify account (free tier available)
- OpenAI API key (paid)
- At least one notification channel configured
- n8n version 1.0+

## How to Customize

- **Change scan frequency**: Modify the Schedule Trigger node
- **Add more regions**: Edit the "Configure Regional Search" code node
- **Adjust alert thresholds**: Modify lunar distance threshold (currently 10) in "Analyze Asteroid Threats"
- **Disable channels**: Simply remove connections to notification nodes you don't need
- **Customize messages**: Edit the "Format Multi-Channel Messages" node

## 📊 Basic Information

- **Workflow ID:** 11289
- **Complexity:** advanced
- **Node Count:** 27
- **Views:** 70
- **Downloads:** 7
- **Created:** 2025/11/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11289)

## 👤 Author

- **Name:** Asuka
- **Username:** @asuka-ai

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×7)
- **scheduleTrigger** 
- **webhook** 
- **merge** 
- **nasa** 
- **code** (×6)
- **if** 
- **splitInBatches** 
- **@apify/n8n-nodes-apify.apify** 
- **aggregate** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **slack** 
- **discord** 
- **emailSend** 
- **respondToWebhook** 
- **googleSheets** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 27 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
