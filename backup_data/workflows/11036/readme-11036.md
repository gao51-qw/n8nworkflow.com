# Automate menstrual cycle tracking with GPT-4, Google Sheets and Telegram notifications

> ## Who's it for

Women and healthcare providers who want to automate menstrual cycle tracking with personalized AI-powered health insights delivered through multiple channels.

## What it does

This workflow automates the complete cycle tracking process:
- Retrieves period and symptom data from Google Sheets every morning
- Analyzes patterns using OpenAI GPT to generate personalized health insights
- Sends daily notifications via Telegram on weekdays
- Creates Google Calendar reminders for upcoming cycle events
- Generates comprehensive weekly reports sent via email on weekends

## How it works

1. **Daily Trigger**: Activates every morning at 8 AM
2. **Data Collection**: Fetches period tracking and symptom logs from Google Sheets
3. **AI Analysis**: GPT-4 analyzes your cycle data to provide personalized insights and predictions
4. **Smart Distribution**: Weekday updates go to Telegram for quick access, weekend summaries are emailed
5. **Calendar Integration**: Automatically creates events for predicted cycle phases

## Requirements

- Google account (for Sheets and Calendar)
- Telegram account and bot token
- OpenAI API key
- Gmail account for email reports

## Setup steps

1. Configure the "Configuration Settings" node with your personal IDs
2. Connect your Google Sheets with period and symptom data
3. Set up Telegram bot and add your chat ID
4. Add OpenAI credentials for AI analysis
5. Connect Gmail for weekly reports
6. Activate the workflow

## How to customize

- Adjust trigger time to your preferred schedule
- Modify AI prompts for different health focuses
- Add more notification channels (Slack, Discord, etc.)
- Customize report formatting and frequency
- Add additional data sources for more comprehensive tracking


## 📊 Basic Information

- **Workflow ID:** 11036
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 61
- **Downloads:** 6
- **Created:** 2025/11/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11036)

## 👤 Author

- **Name:** Miki Arai
- **Username:** @mikia-n8n

## 🏷️ Categories

- Personal Productivity
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×8)
- **scheduleTrigger** 
- **set** 
- **googleSheets** (×2)
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **if** 
- **telegram** 
- **googleCalendar** 
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
