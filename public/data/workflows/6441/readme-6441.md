# Monitor content trends across social media with AI, Slack and Google Sheets

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

# How it works

This workflow automatically monitors trending topics across multiple platforms and generates content strategy insights for marketing teams.

## Key Steps

1. **Daily Trigger** - Runs automatically every 24 hours to capture fresh trends and viral content.
2. **Multi-Platform Scraping** - Uses AI-powered scrapers to analyze trends from LinkedIn, Twitter, Instagram, Google Trends, BuzzSumo, and Reddit.
3. **Trend Analysis** - Processes collected data to identify viral patterns, engagement metrics, and content opportunities.
4. **Content Strategy Generation** - Creates actionable insights for content planning and social media strategy.
5. **Team Notifications** - Sends comprehensive reports to Slack and updates content calendars in Google Sheets.

## Set up steps

**Setup time: 10-15 minutes**

1. **Configure ScrapeGraphAI credentials** - Add your ScrapeGraphAI API key for AI-powered trend scraping.
2. **Set up Slack connection** - Connect your Slack workspace for team notifications.
3. **Configure Google Sheets** - Set up a Google Sheets connection for content calendar updates.
4. **Customize target industries** - Modify the configuration to focus on your specific industry verticals (AI, marketing, tech, etc.).
5. **Adjust monitoring frequency** - Change the trigger timing based on your content planning needs.

## What you get

- **Daily trend reports** with viral content analysis and engagement metrics
- **Content opportunity scores** for different platforms and topics
- **Automated content calendar updates** with trending topics and suggested content
- **Team notifications** with key insights and actionable recommendations
- **Competitive analysis** of viral content patterns and successful strategies


## 📊 Basic Information

- **Workflow ID:** 6441
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 1606
- **Downloads:** 160
- **Created:** 2025/7/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6441)

## 👤 Author

- **Name:** vinci-king-01
- **Username:** @vinci-king-01

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **code** (×3)
- **splitInBatches** 
- **n8n-nodes-scrapegraphai.scrapegraphAi** (×4)
- **merge** 
- **googleSheets** 
- **slack** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
