# Analyze real estate market sentiment with ScrapeGraphAI and Telegram

> # How it works

This workflow automatically analyzes real estate market sentiment by scraping investment forums and news sources, then provides AI-powered market predictions and investment recommendations.

## Key Steps

1. **Scheduled Trigger** - Runs on a cron schedule to regularly monitor market sentiment.
2. **Multi-Source Scraping** - Uses ScrapeGraphAI to extract discussions from BiggerPockets forums and real estate news articles.
3. **Sentiment Analysis** - JavaScript nodes analyze text content for bullish/bearish keywords and calculate sentiment scores.
4. **Market Prediction** - Generates investment recommendations (buy/sell/hold) based on sentiment analysis with confidence levels.
5. **Timing Optimization** - Provides optimal timing recommendations considering seasonal factors and market urgency.
6. **Investment Advisor Alerts** - Formats comprehensive reports with actionable investment advice.
7. **Telegram Notifications** - Sends formatted alerts directly to your Telegram channel for instant access.

## Set up steps

**Setup time: 10-15 minutes**

1. **Configure ScrapeGraphAI credentials** - Add your ScrapeGraphAI API key for web scraping.
2. **Set up Telegram bot** - Create a bot via @BotFather and add your bot token and chat ID.
3. **Customize data sources** - Update the URLs to target specific real estate forums or news sources.
4. **Adjust schedule frequency** - Modify the cron expression based on how often you want sentiment updates.
5. **Test sentiment analysis** - Run manually first to ensure the analysis logic works for your market.
6. **Configure alert preferences** - Customize the alert formatting and priority levels as needed.

## Technologies Used

- **ScrapeGraphAI** - For extracting structured data from real estate forums and news sites
- **JavaScript Code Nodes** - For sentiment analysis, market prediction, and timing optimization
- **Schedule Trigger** - For automated execution using cron expressions
- **Telegram Integration** - For instant mobile notifications and team alerts
- **JSON Data Processing** - For structured sentiment analysis and market intelligence


## 📊 Basic Information

- **Workflow ID:** 6627
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 597
- **Downloads:** 59
- **Created:** 2025/7/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6627)

## 👤 Author

- **Name:** vinci-king-01
- **Username:** @vinci-king-01

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **n8n-nodes-scrapegraphai.scrapegraphAi** (×2)
- **code** (×4)
- **telegram** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
