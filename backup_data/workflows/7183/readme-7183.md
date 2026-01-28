# Auto-analyze Google Analytics data with Gemini AI & smart Gmail/Telegram routing

> # Who’s it for
This workflow is ideal for marketing teams, growth analysts, and business owners who need regular Google Analytics insights without manually digging through data. It’s also perfect for organizations that want to ensure positive performance updates reach stakeholders quickly while negative trends get immediate attention from the internal team.

# How it works / What it does
The workflow runs weekly on a set schedule, pulls key performance metrics from Google Analytics, and aggregates the data into a clean summary.
An AI Agent (powered by Google Gemini and connected to Simple Memory for historical context) analyzes the data, generates actionable insights, and classifies the sentiment as Positive, Negative, or Neutral.
- Positive sentiment → Automatically emailed to stakeholders via Gmail.
- Negative sentiment → Sent instantly to a designated Telegram group for faster response.

This ensures wins are celebrated, and issues are addressed promptly.

# How to set up
- Configure the Schedule Trigger for your preferred reporting day/time.
- Connect the Google Analytics node with your property ID and metrics/dimensions.
- Set up the AI Agent with Google Gemini/others model API credentials.
- Connect Gmail and Telegram accounts to their respective nodes.
- Adjust sentiment routing rules.

# Requirements
- Google Analytics account with API access
- Google Gemini API key
- Gmail account with OAuth connection
- Telegram bot token and group chat ID

# How to customize the workflow
- Modify the AI prompt to include custom KPIs or industry-specific recommendations.
- Change the schedule frequency (daily, monthly, or on-demand).
- Add Neutral sentiment handling (e.g., log to Google Sheets).
- Extend with Slack, Discord, or other notification channels.



## 📊 Basic Information

- **Workflow ID:** 7183
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 1083
- **Downloads:** 108
- **Created:** 2025/8/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7183)

## 👤 Author

- **Name:** Rully Saputra
- **Username:** @rullysaputra15

## 🏷️ Categories

- Market Research
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **aggregate** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **googleAnalytics** 
- **telegram** 
- **@n8n/n8n-nodes-langchain.sentimentAnalysis** 
- **gmail** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
