# Competitor LinkedIn monitor with Airtop

> # Automating LinkedIn Competitive Monitoring

## Use Case

Automatically track and summarize LinkedIn posts from key executives at competitor companies. This agent provides structured insights into hiring trends, product announcements, strategic shifts, and thought leadership, helping teams stay informed and responsive without manual monitoring.

## What This Automation Does

This automation monitors and summarizes LinkedIn posts from competitor profiles and shares the results on Slack. It uses the following input parameters:

* **Airtop Profile**: A browser profile authenticated to LinkedIn. [Create one](https://portal.airtop.ai/browser-profiles)
* **Google Sheet**: A document listing LinkedIn profile URLs of competitors, [copy this one](https://docs.google.com/spreadsheets/d/1TknyHS8ie0KONgF4-KFGR76I74egHLt7-M9sIxjQXGY/edit?usp=sharing).
* **Slack Channel**: The destination for sharing summarized post insights.

## How It Works

1. **Trigger**: The workflow is scheduled to run weekly at a specific time.
2. **Data Collection**: Retrieves the list of competitor LinkedIn URLs from a Google Sheet.
3. **Browser Automation**: Uses Airtop to navigate to each LinkedIn profile and analyze up to 5 recent posts.
4. **Summarization**: Summarizes number of recent posts, main topics, and engagement levels using Airtop’s AI.
5. **Slack Notification**: Posts a formatted summary to a predefined Slack channel.

## Setup Requirements

1. [Airtop API Key](https://portal.airtop.ai/api-keys) — free to generate.
2. An [Airtop Profile](https://portal.airtop.ai/browser-profiles) authenticated to LinkedIn.
3. Google Sheet with competitor post URLs, [copy this one](https://docs.google.com/spreadsheets/d/1TknyHS8ie0KONgF4-KFGR76I74egHLt7-M9sIxjQXGY/edit?usp=sharing).
4. Slack Bot credentials with access to the target channel.

## Next Steps

* **Expand Coverage**: Add more competitor profiles to the Google Sheet to scale monitoring.
* **Integrate with CRM**: Feed summarized insights into your CRM for competitor tracking.
* **Enhance Analysis**: Include post-level engagement metrics over time for trend analysis.

Read more about [competitve analysis using Linkedin](https://www.airtop.ai/automations/competitor-linkedin-monitor-n8n)

## 📊 Basic Information

- **Workflow ID:** 5167
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 881
- **Downloads:** 88
- **Created:** 2025/6/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5167)

## 👤 Author

- **Name:** Airtop
- **Username:** @cesar-at-airtop

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **stickyNote** (×2)
- **googleSheets** 
- **slack** 
- **airtop** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
