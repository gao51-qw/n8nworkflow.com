# Monitor commodity markets with Apify, DeepL translation & sector impact analysis

> Stay ahead of commodity market movements with automated news collection, translation, and sector impact analysis. This workflow monitors Oil, Gold, and Grain markets from global English sources, translates them to Japanese using DeepL, and delivers categorized alerts showing which business sectors are affected.

## Who is this for

- Trading company staff and procurement managers affected by raw material prices
- CFD and commodity futures traders
- Economists and market researchers tracking inflation indicators
- Anyone who needs early warning on geopolitical risks affecting commodities

## What this workflow does

1. Fetches latest news every 4 hours for three commodity categories using Apify
2. Categorizes news and identifies impacted business sectors automatically
3. Translates headlines and summaries from English to Japanese using DeepL
4. Adds unit conversion notes (barrel, troy ounce, bushel) for easier understanding
5. Formats a comprehensive report with sector impact tags
6. Delivers alerts to Discord, Telegram, and Gmail simultaneously

## How to set up

1. Get your Apify API token from apify.com (Settings → Integrations → API)
2. Replace the token placeholder in all HTTP Request nodes
3. Add DeepL API credentials (free tier: 500,000 chars/month)
4. Configure at least one notification channel
5. Set your Telegram Chat ID and email address
6. Activate the workflow

## Requirements

- Apify account (free tier available)
- DeepL API key (free tier available)
- At least one notification channel (Discord, Telegram, or Gmail)

## 📊 Basic Information

- **Workflow ID:** 11514
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 45
- **Downloads:** 4
- **Created:** 2025/12/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11514)

## 👤 Author

- **Name:** suzuki
- **Username:** @kaori

## 🏷️ Categories

- Miscellaneous

## 🔗 Nodes Used

- **scheduleTrigger** 
- **httpRequest** (×3)
- **code** (×5)
- **if** (×2)
- **merge** 
- **discord** 
- **telegram** 
- **gmail** 
- **set** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
