# Auto-send Zillow real estate listings to Telegram using ScrapeGraphAI

> 
## How it works

This workflow automatically scrapes real estate listings from Zillow and sends them to a Telegram channel.

## Key Steps

1. **Scheduled Trigger** - Runs the workflow at specified intervals to find new listings.
2. **AI-Powered Scraping** - Uses ScrapeGraphAI to extract property information from Zillow.
3. **Data Formatting** - Processes and structures the scraped data for Telegram messages.
4. **Telegram Integration** - Sends formatted listing details to your specified Telegram channel.

## Set up steps

**Setup time: 5-10 minutes**

1. **Configure ScrapeGraphAI credentials** - Add your ScrapeGraphAI API key.
2. **Set up Telegram connection** - Connect your Telegram account and specify the target channel.
3. **Customize the Zillow URL** - Update the URL to target specific locations or search criteria.
4. **Adjust schedule** - Modify the trigger timing based on how frequently you want to check for new listings.


## 📊 Basic Information

- **Workflow ID:** 6310
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 1362
- **Downloads:** 136
- **Created:** 2025/7/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6310)

## 👤 Author

- **Name:** vinci-king-01
- **Username:** @vinci-king-01

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **n8n-nodes-scrapegraphai.scrapegraphAi** 
- **code** 
- **stickyNote** (×4)
- **telegram** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
