# Daily morning briefing with Google Calendar, weather, and news to Slack

> ## Personal Daily Morning Briefing Automation

### Who’s it for
Busy professionals who want a quick daily update combining their calendar, weather, and top news.

### How it works
Every morning at 7 AM, this workflow gathers:
- Today’s Google Calendar events
- Current weather for Tokyo
- Top 3 news headlines (from Google News RSS)
Then it formats everything into a single Slack message.

### How to set up
1. Connect your **Google Calendar** and **Slack** accounts in the Credentials section.
2. Update `rssUrl` or `weatherApiUrl` if you want different sources.
3. Set your Slack channel in the "Post to Slack" node.

### Requirements
- Google Calendar and Slack accounts
- RSS feed and weather API (no authentication required)

### How to customize
You can modify:
- The trigger time (in the Schedule Trigger node)
- City for the weather
- RSS feed source
- Message format in the “Format Briefing Message” node

## 📊 Basic Information

- **Workflow ID:** 9819
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 305
- **Downloads:** 30
- **Created:** 2025/10/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9819)

## 👤 Author

- **Name:** higashiyama 
- **Username:** @kazushi

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** (×2)
- **googleCalendar** 
- **httpRequest** 
- **rssFeedRead** 
- **slack** 
- **merge** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
