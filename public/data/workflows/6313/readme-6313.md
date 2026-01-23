# Track real-time stock prices with Yahoo Finance, ScrapegraphAI, and Google Sheets

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## How it works

This automated workflow monitors stock prices by scraping real-time data from Yahoo Finance. It uses a scheduled trigger to run at specified intervals, extracts key stock metrics using AI-powered extraction, formats the data through a custom code node, and automatically saves the structured information to Google Sheets for tracking and analysis.

## Key Steps:
- **Scheduled Trigger**: Runs automatically at specified intervals to collect fresh stock data
- **AI-Powered Scraping**: Uses ScrapeGraphAI to intelligently extract stock information (symbol, current price, price change, change percentage, volume, and market cap) from Yahoo Finance
- **Data Processing**: Formats extracted data through a custom Code node for optimal spreadsheet compatibility and handles both single and multiple stock formats
- **Automated Storage**: Saves all stock data to Google Sheets with proper column mapping for easy filtering, analysis, and historical tracking

# Set up steps

**Setup Time: 5-10 minutes**

1. **Configure Credentials**: Set up your ScrapeGraphAI API key and Google Sheets OAuth2 credentials
2. **Customize Target**: Update the website URL in the ScrapeGraphAI node to your desired stock symbol (currently set to AAPL)
3. **Configure Schedule**: Set your preferred trigger frequency (daily, hourly, etc.) for stock price monitoring
4. **Map Spreadsheet**: Connect to your Google Sheets document and configure column mapping for the stock data fields

**Pro Tips:**
- Keep detailed configuration notes in the sticky notes within the workflow
- Test with a single stock first before scaling to multiple stocks
- Consider modifying the Code node to handle different stock symbols or add additional data fields
- Perfect for building a historical database of stock performance over time
- Can be extended to track multiple stocks by modifying the ScrapeGraphAI prompt


## 📊 Basic Information

- **Workflow ID:** 6313
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 2878
- **Downloads:** 287
- **Created:** 2025/7/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6313)

## 👤 Author

- **Name:** vinci-king-01
- **Username:** @vinci-king-01

## 🏷️ Categories

- Crypto Trading
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **n8n-nodes-scrapegraphai.scrapegraphAi** 
- **googleSheets** 
- **code** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
