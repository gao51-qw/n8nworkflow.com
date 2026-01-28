# Financial Insight Automation: Market Cap to Telegram via Bright Data

## 📊 Description

An automated n8n workflow that scrapes financial data from Yahoo Finance using Bright Data, processes market cap information, generates visual charts, and sends comprehensive financial insights directly to Telegram for instant notifications.

---

## 🚀 How It Works

This workflow operates through a simple three-zone process:

### 1. Data Input & Trigger
User submits a keyword (e.g., "AI", "Crypto", "MSFT") through a form trigger that initiates the financial data collection process.

### 2. Data Scraping & Processing  
Bright Data API discovers and scrapes comprehensive financial data from Yahoo Finance, including market cap, stock prices, company profiles, and financial metrics.

### 3. Visualization & Delivery
The system generates interactive market cap charts, saves data to Google Sheets for record-keeping, and sends visual insights to Telegram as PNG images.

---

## ⚡ Setup Steps

&gt; **⏱️ Estimated Setup Time: 15-20 minutes**

### Prerequisites
- Active n8n instance (self-hosted or cloud)
- Bright Data account with Yahoo Finance dataset access
- Google account for Sheets integration
- Telegram bot token and chat ID

### Step 1: Import the Workflow
1. Copy the provided JSON workflow code
2. In n8n: Go to **Workflows → + Add workflow → Import from JSON**
3. Paste the JSON content and click **Import**

### Step 2: Configure Bright Data Integration

#### Set up Bright Data Credentials:
1. In n8n: Navigate to **Credentials → + Add credential → HTTP Header Auth**
2. Add Authorization header with value: `Bearer BRIGHT_DATA_API_KEY`
3. Replace `BRIGHT_DATA_API_KEY` with your actual API key
4. Test the connection to ensure it works properly

&gt; **Note:** The workflow uses dataset ID `gd_lmrpz3vxmz972ghd7` for Yahoo Finance data. Ensure you have access to this dataset in your Bright Data dashboard.

### Step 3: Set up Google Sheets Integration

#### Create a Google Sheet:
- Go to Google Sheets and create a new spreadsheet
- Name it "Financial Data Tracker" or similar
- Copy the Sheet ID from the URL

#### Configure Google Sheets credentials:
- In n8n: **Credentials → + Add credential → Google Sheets OAuth2 API**
- Complete OAuth setup and test connection

#### Update the workflow:
- Open the "📊 Filtered Output & Save to Sheet" node
- Replace `YOUR_SHEET_ID` with your actual Sheet ID
- Select your Google Sheets credential

### Step 4: Configure Telegram Bot

#### Set up Telegram Integration:
1. Create a Telegram bot using @BotFather
2. Get your bot token and chat ID
3. In n8n: **Credentials → + Add credential → Telegram API**
4. Enter your bot token
5. Update the "📤 Send Chart on Telegram" node with your chat ID
6. Replace `YOUR_TELEGRAM_CHAT_ID` with your actual chat ID

### Step 5: Test and Activate

#### Test the workflow:
- Use the form trigger with a test keyword (e.g., "AAPL")
- Monitor the execution in n8n
- Verify data appears in Google Sheets
- Check for chart delivery on Telegram

#### Activate the workflow:
- Turn on the workflow using the toggle switch
- The form trigger will be accessible via the provided webhook URL

---

## 📋 Key Features

- 🔍 **Keyword-Based Discovery:** Search companies by keyword, ticker, or industry
- 💰 **Comprehensive Financial Data:** Market cap, stock prices, earnings, and company profiles
- 📊 **Visual Charts:** Automatic generation of market cap comparison charts
- 📱 **Telegram Integration:** Instant delivery of insights to your mobile device
- 💾 **Data Storage:** Automatic backup to Google Sheets for historical tracking
- ⚡ **Real-time Processing:** Fast data retrieval and processing with Bright Data

---

## 📊 Output Data Points

| Field | Description | Example |
|-------|-------------|---------|
| Company Name | Full company name | "Apple Inc." |
| Stock Ticker | Trading symbol | "AAPL" |
| Market Cap | Total market capitalization | "$2.89T" |
| Current Price | Latest stock price | "$189.25" |
| Exchange | Stock exchange | "NASDAQ" |
| Sector | Business sector | "Technology" |
| PE Ratio | Price to earnings ratio | "28.45" |
| 52 Week Range | Annual high and low prices | "$164.08 - $199.62" |

---

## 🔧 Troubleshooting

### Common Issues

#### Bright Data Connection Failed:
- Verify your API key is correct and active
- Check dataset permissions in Bright Data dashboard
- Ensure you have sufficient credits

#### Google Sheets Permission Denied:
- Re-authenticate Google Sheets OAuth
- Verify sheet sharing settings
- Check if the Sheet ID is correct

#### Telegram Not Receiving Messages:
- Verify bot token and chat ID
- Check if bot is added to the chat
- Test Telegram credentials manually

### Performance Tips
- Use specific keywords for better data accuracy
- Monitor Bright Data usage to control costs
- Set up error handling for failed requests
- Consider rate limiting for high-volume usage

---

## 🎯 Use Cases

- **Investment Research:** Quick financial analysis of companies and sectors
- **Market Monitoring:** Track market cap changes and stock performance
- **Competitive Analysis:** Compare financial metrics across companies
- **Portfolio Management:** Monitor holdings and potential investments
- **Financial Reporting:** Generate automated financial insights for teams

---

## 🔗 Additional Resources

- [n8n Documentation](https://docs.n8n.io)
- [Bright Data Datasets](https://brightdata.com/datasets)
- [Google Sheets API](https://developers.google.com/sheets/api)
- [Telegram Bot API](https://core.telegram.org/bots/api)

---
For any questions or support, please contact:  
[info@incrementors.com](mailto:info@incrementors.com)  
or fill out this form: [https://www.incrementors.com/contact-us/](https://www.incrementors.com/contact-us/)
