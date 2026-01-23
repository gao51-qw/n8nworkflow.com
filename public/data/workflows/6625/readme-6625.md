# Monitor commercial real estate opportunities from LoopNet with ScrapeGraphAI & Telegram

> # How it works

This workflow automatically scrapes commercial real estate listings from LoopNet and sends opportunity alerts to Telegram while logging data to Google Sheets.

## Key Steps

1. **Scheduled Trigger** - Runs every 24 hours to collect fresh CRE market data
2. **AI-Powered Scraping** - Uses ScrapeGraphAI to extract property information from LoopNet
3. **Market Analysis** - Analyzes listings for opportunities and generates market insights
4. **Smart Notifications** - Sends Telegram alerts only when investment opportunities are found
5. **Data Logging** - Stores daily market metrics in Google Sheets for trend analysis

## Set up steps

**Setup time: 10-15 minutes**

1. **Configure ScrapeGraphAI credentials** - Add your ScrapeGraphAI API key for web scraping
2. **Set up Telegram connection** - Connect your Telegram bot and specify the target channel
3. **Configure Google Sheets** - Set up Google Sheets integration for data logging
4. **Customize the LoopNet URL** - Update the URL to target specific CRE markets or property types
5. **Adjust schedule** - Modify the trigger timing based on your market monitoring needs

**Keep detailed configuration notes in sticky notes inside your workflow**


## 📊 Basic Information

- **Workflow ID:** 6625
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 535
- **Downloads:** 53
- **Created:** 2025/7/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6625)

## 👤 Author

- **Name:** vinci-king-01
- **Username:** @vinci-king-01

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×6)
- **scheduleTrigger** 
- **httpRequest** 
- **code** 
- **if** 
- **telegram** 
- **googleSheets** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
