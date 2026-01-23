# Monitor competitor prices with Firecrawl, GPT-4.1, Sheets & Gmail alerts

> ## Introduction
Automate price monitoring for e-commerce competitors—ideal for retailers, analysts, and pricing teams.
**⚠️ Self-Hosted Only:** Requires self-hosted n8n instance.
## How It Works
Scrapes competitor URLs, extracts data via AI, detects price/stock changes, logs to Google Sheets with email alerts.
## Workflow Template
Trigger → Scrape → AI Extract → Parse → Compare → Detect Changes → Update Sheets + Alert
## Workflow Steps
1. **Scraping:** Firecrawl fetches Nike, Adidas, Sneaker data
2. **AI Extraction:** Processes product details
3. **Parsing:** Structures response
4. **Historical Check:** Reads Sheets data
5. **Change Detection:** Identifies price/stock updates
6. **Dual Output:** Updates Sheets + sends alerts
## Setup Instructions
**1. Firecrawl API**
Get key from dashboard → Add to n8n
**2. OpenAI API**
Get key from platform → Add to n8n
**3. Google Sheets OAuth2**
Create OAuth2 in Google Cloud Console → Authorize in n8n → Enable API
**4. Gmail OAuth2**
Use same project → Authorize in n8n → Enable API
**5. Spreadsheet Setup**
Create Sheet with required columns → Copy ID from URL → Paste in workflow
## Prerequisites
Self-hosted n8n, Firecrawl account, OpenAI key, Google account (Sheets + Gmail OAuth2)
## Customization
Add URLs, adjust thresholds, integrate Slack
## Benefits
Saves 2+ hours daily, real-time tracking, automated alerts
## Google Sheets Structure
**Required Columns:**
- **Product Name** (Column A)
- **Current Price** (Column B)
- **Previous Price** (Column C)
- **Stock Status** (Column D)
- **Last Updated** (Column E)
- **URL** (Column F)
- **Change Detected** (Column G)

## 📊 Basic Information

- **Workflow ID:** 10154
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 216
- **Downloads:** 21
- **Created:** 2025/10/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10154)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **googleSheets** (×3)
- **merge** 
- **code** (×3)
- **@mendable/n8n-nodes-firecrawl.firecrawl** (×3)
- **manualTrigger** 
- **gmail** 
- **stickyNote** (×2)
- **openAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
