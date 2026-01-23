# E-commerce price monitor with Firecrawl, Claude-Sonnet AI & Telegram alerts

> ## Introduction
Automate price monitoring for e-commerce competitors—ideal for retailers, analysts, and pricing teams. Scrapes competitor sites, 
extracts pricing/stock data via AI, detects changes, and sends instant alerts for dynamic pricing strategies.
## How It Works
Scrapes competitor URLs via Firecrawl and Apify, extracts data with AI, detects price/stock changes, logs to Google Sheets, and sends Telegram alerts.
## Workflow Template
Trigger → Scrape URL → AI Extract → Parse → Merge Historical → Detect Changes → Update Sheets + Send Telegram Alert
## Workflow Steps
1. **Trigger & Scrape** → Manual/scheduled trigger → Firecrawl + Apify fetch competitor data
2. **AI Processing** → Claude extracts product details → Parses and structures data
3. **Change Detection** → Reads historical prices → Merges with current data → Identifies updates
4. **Output** → Logs alerts to Sheets → Updates historical data → Sends Telegram notification
## Setup Instructions
**1. Firecrawl API**
Get key from dashboard → Add to n8n
**2. Apify API**
Get key from console → Add to n8n → Configure actors
**3. AI Model (Claude/OpenAI)**
Get API key → Add to n8n
**4. Google Sheets OAuth2**
Create OAuth2 in Google Cloud Console → Authorize in n8n → Enable API
**5. Telegram Bot**
Create via BotFather → Get token & chat ID → Add to n8n
**6. Spreadsheet Setup**
Create Sheet with required columns → Copy ID → Paste in workflow
## Prerequisites
Self-hosted n8n, Firecrawl account, Apify account, Claude/OpenAI API key,
Google account (Sheets OAuth2),Telegram bot
## Customization
Add more URLs, adjust scraping intervals, change detection thresholds, switch to Slack/email alerts,
integrate databases
## Benefits
Saves 2+ hours daily, real-time tracking, automated alerts, historical analysis, multi-source scraping

## 📊 Basic Information

- **Workflow ID:** 10216
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 245
- **Downloads:** 24
- **Created:** 2025/10/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10216)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **@mendable/n8n-nodes-firecrawl.firecrawl** 
- **perplexity** 
- **splitOut** 
- **httpRequest** (×2)
- **code** (×2)
- **merge** (×2)
- **googleSheets** (×3)
- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.anthropic** 
- **telegram** 
- **stickyNote** (×2)
- **wait** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
