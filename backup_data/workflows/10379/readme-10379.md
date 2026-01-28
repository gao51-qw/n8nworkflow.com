# Gold market prediction system with Perplexity Sonar-Pro, FRED data, and WordPress reporting

> ## **Introduction**
Automates gold market tracking using AI forecasting by collecting live prices, financial news, and macro indicators (inflation, interest rates, employment) to produce real-time insights and trend predictions for analysts and investors.

## **How It Works**
Every 6 hours, the system fetches market data and news → runs AI sentiment and trend analysis → generates a concise forecast report → publishes it to WordPress → and alerts users via Slack or email.

## **Workflow Template**
**Trigger → Fetch → Format → Merge → AI Analyze → Report → Publish → Notify**

## **Workflow Steps**
1. **Schedule:** Executes automatically every **6 hours** using a Cron trigger.
2. **Fetch:** Retrieves **live gold prices (MetalPriceAPI)**, **financial headlines (NewsAPI)**, and **macroeconomic indicators (FRED)**.
3. **Format & Merge:** Cleans, normalizes, and merges all data into a single structured dataset for AI analysis.
4. **AI Analyze (OpenAI):** Performs **sentiment, trend, and correlation analysis** to forecast short-term gold price movements.
5. **Report Generation:** Creates a concise **summary report** with forecasts, insights, and confidence metrics.
6. **Publish & Notify:** Automatically **posts to WordPress** and sends **alerts via Slack and Email** to keep analysts updated.

## **Setup**
* Add API keys: **MetalPrice, NewsAPI, FRED, OpenAI, WordPress, Slack, Gmail**.
* Configure **scheduling interval**, **API endpoints**, and **authentication** in **n8n**.
* Predefine **WordPress post format** and **Slack message templates** for smooth automation.

## Prerequisites
n8n v1.0+, API keys, OAuth credentials, and internet access.

## Use Cases
Investment forecasting, financial newsletter automation, or market monitoring dashboards.

## Customization
Add cryptocurrency or stock tracking, modify AI prompts, or route summaries to Telegram, Notion, or Google Sheets.

## Benefits
Saves analyst time, ensures consistent insights, enhances accuracy, and delivers timely, AI-driven financial intelligence.

## 📊 Basic Information

- **Workflow ID:** 10379
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 581
- **Downloads:** 58
- **Created:** 2025/10/31
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10379)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Crypto Trading
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **httpRequest** (×5)
- **set** (×7)
- **merge** 
- **@n8n/n8n-nodes-langchain.agent** 
- **wordpress** 
- **slack** 
- **emailSend** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
