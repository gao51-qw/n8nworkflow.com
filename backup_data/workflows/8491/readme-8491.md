# Track Forex Factory news releases with MyFxBook, Telegram & Google Sheets

> ## Get Forex Factory News Release to Telegram, Google Sheets. Record News Data and Live Price from MyFxBook for Affected Currency Pairs.
### This n8n template demonstrates how to capture Actual Data Releases as quickly as possible for trading decisions.

### Use cases:
1. Get notified if the actual data release is positive or negative for the relevant currency.
2. Use the Telegram chat message about the news release as a trigger to open a trading position in MetaTrader 4.
3. Record news data and live price to google sheets for analysis.

### Currency Pairs
EURUSD, GBPUSD, AUDUSD, NZDUSD, USDJPY, USDCHF, USDCAD, XAUUSD

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
* Record news data and live price from MyFxBook to Google Sheets.

### How to use
* Enter all required credentials.
* Create or Download Google Sheets file like this in your Google Drive: https://docs.google.com/spreadsheets/d/1OhrbUQEc_lGegk5pRWWKz5nrnMbTZGT0lxK9aJqqId4/edit?usp=drive_link
* Run the workflow.

### Requirements
* Google Calendar credentials
* Airtop API key
* Telegram Chat ID
* Telegram Bot API token
* Enable Google Drive API in Google Cloud Console
* Google Sheets credentials

### Need Help?
Join the [Discord](https://discord.gg/n8n) or ask in the [Forum](https://community.n8n.io/)!

Thank you!

### Update Sept 26, 2025:
* Add new edit node

## 📊 Basic Information

- **Workflow ID:** 8491
- **Complexity:** advanced
- **Node Count:** 35
- **Views:** 704
- **Downloads:** 70
- **Created:** 2025/9/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8491)

## 👤 Author

- **Name:** Harry Gunadi Permana
- **Username:** @harrygp

## 🏷️ Categories

- Crypto Trading

## 🔗 Nodes Used

- **googleCalendarTrigger** 
- **if** (×9)
- **set** (×12)
- **noOp** (×2)
- **airtop** 
- **stickyNote** 
- **wait** (×2)
- **telegram** (×2)
- **splitOut** 
- **httpRequest** (×2)
- **googleSheets** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 35 nodes with 32 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
