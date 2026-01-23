# Generate AI stock buy/no-buy signals using GPT‑4.1, Google Sheets and EODHD

> ## What this workflow does
This workflow automates **end-to-end stock analysis** using real market data and AI:

- Reads a list of stock tickers from **Google Sheets**
![image.png](fileId:3859)

- Fetches **fundamental data** (valuation, growth, profitability) and **OHLCV price data** from **EODHD APIs**
- Computes key **technical indicators** (RSI, SMA 20/50/200, volatility, support & resistance)
- Uses an **AI model** to generate:
  - Buy / Watch / Sell recommendation
  - Entry price, stop-loss, and take-profit levels
  - Investment thesis, pros & cons
  - Fundamental quality score (1–10)
- Stores the final structured analysis back into **Google Sheets**

This creates a **repeatable, no-code stock analysis pipeline** ready for decision-making or dashboards.

![eodhd_ouput.png](fileId:3860)

### Data source
Market data is powered by  
**[EODHD APIs](https://eodhd.com/pricing-special-10?via=kmg&ref1=Meneses)**

## How to configure this workflow

### 1. Google Sheets (Input)
Create a sheet with a column called:
- `ticker` (e.g. MSFT, AAPL, AMZN)

Each row represents one stock to analyze.

---

### 2. EODHD APIs
- Create an EODHD account
- Get your API token
- Add it to the HTTP Request nodes as:
  - `api_token=YOUR_API_KEY`

[EODHD APIs](https://eodhd.com/pricing-special-10?via=kmg&ref1=Meneses)

---

### 3. AI Model
- Configure your AI provider (OpenAI / compatible model)
- The AI receives:
  - Fundamentals
  - Technical indicators
  - Growth potential score
- It returns structured JSON with recommendations and trade levels


### 4. Google Sheets (Output)
Results are appended to a `Signals` tab with:
- Signal (BUY / WATCH / SELL)
- Entry, Stop Loss, Take Profit
- Fundamental score (1–10)
- Investment thesis and risk notes

## 📊 Basic Information

- **Workflow ID:** 12333
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 81
- **Downloads:** 8
- **Created:** 2025/12/31
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12333)

## 👤 Author

- **Name:** Kevin Meneses 
- **Username:** @pythonia-kevin

## 🏷️ Categories

- Crypto Trading
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **googleSheets** (×2)
- **splitInBatches** 
- **merge** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **code** (×4)
- **stickyNote** (×9)
- **httpRequest** (×2)
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
