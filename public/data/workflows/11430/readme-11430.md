# Personalize client meeting prep with GPT-4, Google Calendar, Notion & Places API to Slack

> Who is this for
This template is perfect for sales professionals, account managers, and business development teams who want to make memorable impressions on their clients. It automates the tedious task of researching gift shops and preparation spots before important meetings.
What it does
This workflow automatically prepares personalized recommendations for client visits by monitoring your Google Calendar, enriching data from Notion, and using AI to select the perfect options.
How it works

Trigger: Activates when a calendar event containing keywords like "visit," "meeting," "client," or "dinner" is created or updated
Extract: Parses company name from the event title
Enrich: Fetches customer preferences from your Notion database
Search: Google Places API finds nearby gift shops and quiet cafes
Analyze: GPT-4 recommends the best options based on customer preferences
Notify: Sends a personalized message to Slack with recommendations

Example Slack Output
Here's what the final notification looks like:
🎁 Recommended Gift Shop
Patisserie Sadaharu AOKI (★4.6)
3-5-2 Marunouchi, Chiyoda-ku
💡 Reason: The customer loves French desserts, so this patisserie's macarons would be perfect!

☕ Pre-Meeting Cafe
Starbucks Reserve Roastery (★4.5)
5 min walk from meeting location
Set up steps
Setup time: approximately 15 minutes

Google Calendar: Connect your Google Calendar account and select your calendar
Notion Database: Create a customer database with "Company Name" (title) and "Preferences" (text) fields
Google Places API: Get an API key from Google Cloud Console and add it to the Configuration node
OpenAI: Connect your OpenAI account for AI-powered recommendations
Slack: Connect your Slack workspace and update the channel ID in the final node

Requirements

Google Calendar account
Notion account with a customer database
Google Places API key (requires Google Cloud account)
OpenAI API key
Slack workspace with bot permissions

How to customize

Search radius: Adjust the searchRadius parameter in the Configuration node (default: 1000 meters)
Event keywords: Modify the Filter node conditions to match your calendar naming conventions
Notification channel: Change the Slack channel ID to your preferred channel

## 📊 Basic Information

- **Workflow ID:** 11430
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 11
- **Downloads:** 1
- **Created:** 2025/12/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11430)

## 👤 Author

- **Name:** 長谷　真宏
- **Username:** @masa0258

## 🏷️ Categories

- Lead Nurturing
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×7)
- **slack** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **httpRequest** (×2)
- **notion** 
- **code** 
- **if** 
- **set** 
- **googleCalendarTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
