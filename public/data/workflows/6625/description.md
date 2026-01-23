# How it works

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
