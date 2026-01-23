# Automated stock technical analysis with xAI Grok & multi-channel notifications

> ## Who is this for?
This workflow is designed for stock traders, financial analysts, investment enthusiasts, and anyone interested in automated stock market analysis. It's particularly useful for those who want to make data-driven trading decisions based on technical indicators without spending hours manually analyzing charts and data.

## Who is this for?
This workflow is designed for:
- **Stock traders** who want automated technical analysis
- **Investment enthusiasts** seeking data-driven insights
- **Financial analysts** who need daily market summaries
- **Portfolio managers** tracking multiple stocks
- **Anyone interested** in algorithmic trading signals

## What this Workflow Does / Key Features
- Automatically triggers daily at 9 PM to analyze stock market data
- Checks if the market is open before proceeding with analysis
- Fetches historical price data for major tech stocks (GOOGL, NVDA, META, AMZN, TSLA, MSFT)
- Calculates technical indicators:
  - RSI (Relative Strength Index) to identify overbought/oversold conditions
  - MACD (Moving Average Convergence Divergence) to identify trend changes
- Generates Buy/Sell/Hold signals based on technical indicators
- Uses AI (xAI's Grok model) to analyze and interpret the technical data
- Distributes analysis results through multiple channels:
  - Email via Gmail
  - Personal Telegram chat
  - Telegram channel
  - WhatsApp via Rapiwa
  - Google Sheets for historical tracking
- Fetches market news via RSS feed to enhance analysis

## Requirements
- Alpaca API credentials (for market data)
- xAI API credentials (for AI analysis)
- Gmail OAuth2 credentials (for email notifications)
- Telegram Bot API credentials (for Telegram notifications)
- Rapiwa API credentials (for WhatsApp notifications)
- Google Sheets OAuth2 credentials (for data storage)

## How to Use — step-by-step Setup
### 1. Configure Credentials
- **Alpaca API**: Add your Alpaca API credentials to n8n (named "Custom Auth account" in the example)
- **xAI API**: Add your xAI API credentials to n8n (named "xAI account" in the example)
- **Gmail OAuth2**: Set up Gmail OAuth2 credentials (named "Gmail account" in the example)
- **Telegram Bot API**: Configure Telegram Bot API credentials (named "Telegram account" in the example)
- **Rapiwa API**: Add Rapiwa API credentials (named "Rapiwa account 2" in the example)
- **Google Sheets OAuth2**: Set up Google Sheets OAuth2 credentials (named "Google Sheets" in the example)

### 2. Configure Stock Symbols
- In the "Currency/Symble List" node, modify the JSON to include your preferred stock symbols
- Default symbols are: "GOOGL, NVDA, META, AMZN, TSLA, MSFT"


## Useful Links
- **n8n Documentation**: [docs](https://docs.n8n.io)
- **Alpaca API Documentation**: [docs](https://docs.alpaca.markets/)
- **xAI API Documentation**: [docs)
- **Telegram Bot API**: [docs](https://core.telegram.org/bots/api)
- **Technical Analysis Concepts**: [docs](https://www.investopedia.com/terms/t/technicalanalysis.asp)

## Support & Help
- **WhatsApp**: [Chat on WhatsApp](https://wa.me/8801322827799)
- **Discord**: [SpaGreen Community](https://discord.gg/SsCChWEP)
- **Facebook Group**: [SpaGreen Support](https://www.facebook.com/groups/spagreenbd)
- **Website**: [https://spagreen.net](https://spagreen.net)
- **Developer Portfolio**: [Codecanyon SpaGreen](https://codecanyon.net/user/spagreen/portfolio)

## 📊 Basic Information

- **Workflow ID:** 11621
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 179
- **Downloads:** 17
- **Created:** 2025/12/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11621)

## 👤 Author

- **Name:** SpaGreen Creative
- **Username:** @spagreen

## 🏷️ Categories

- Crypto Trading
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **code** 
- **n8n-nodes-rapiwa.rapiwa** 
- **gmail** 
- **httpRequest** (×2)
- **telegram** (×3)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.agent** 
- **if** 
- **set** 
- **rssFeedReadTool** 
- **@n8n/n8n-nodes-langchain.lmChatXAiGrok** 
- **stickyNote** (×8)
- **googleSheets** 
- **manualTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
