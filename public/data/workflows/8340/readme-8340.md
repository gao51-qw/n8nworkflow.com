# Automated forex news alert system with Forex Factory and Telegram

> ## Get Forex Factory News Release to Telegram
### This n8n template demonstrates how to capture Actual Data Releases as quickly as possible for trading decisions.

### Use cases:
1. Get notified if the actual data release is positive or negative for the relevant currency.
2. Use the Telegram chat message about the news release as a trigger to open a trading position in MetaTrader 4.

### How it works
* A news release event acts as the trigger.
* Only news with a numerical Forecast value will be processed. Events that cannot be measured numerically (e.g., speeches) are ignored.
* Extract news details: currency, impact level (high/medium), release date, and news link.
* Wait 10 seconds to ensure the Actual value is available on the news page.
* Scrape the Actual value from the news link using Airtop.
* If the Actual value is not available, wait another 5 seconds and retry scraping.
* Extract both Actual and Forecast values from the scraped content.
* Remove non-numeric characters (%, K, M, B, T) and convert values to numbers.
* Determine the effect:
If the Actual value is lower than the Forecast value (and lower is better), send it to the True branch.
Otherwise, send it to the False branch.

### How to use
* Enter all required credentials.
* Run the workflow.

### Requirements
* Google Calendar credentials
* Airtop API key
* Telegram Chat ID
* Telegram Bot API token

### Need Help?
Join the [Discord](https://discord.gg/n8n) or ask in the [Forum](https://community.n8n.io/)!

Thank you!

### Update Sept 26, 2025:
* Add new edit node

## 📊 Basic Information

- **Workflow ID:** 8340
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 885
- **Downloads:** 88
- **Created:** 2025/9/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8340)

## 👤 Author

- **Name:** Harry Gunadi Permana
- **Username:** @harrygp

## 🏷️ Categories

- Crypto Trading

## 🔗 Nodes Used

- **stickyNote** 
- **set** (×7)
- **wait** (×2)
- **if** (×5)
- **googleCalendarTrigger** 
- **noOp** (×2)
- **airtop** 
- **telegram** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
