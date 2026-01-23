# CoinGecko crypto price forecasting pipeline with Gemini AI, Decodo, and Gmail

> ## Automated Crypto Forecast Pipeline using Decodo and Gmail

Sign Up for Decodo [HERE](https://visit.decodo.com/discount) for discount

This template scrapes CoinGecko pages for selected coins, converts metrics into clean JSON, stores them in an n8n Data Table, generates 24-hour direction forecasts with Gemini, and emails a concise report.

## Who’s it for?
Crypto watchers who want automated snapshots, forecasts, and a daily email—without managing a full data stack.

## How it works
1. 30-min schedule loops coins, scrapes CoinGecko (Decodo), parses metrics, and upserts to Data Table.
2. 18:00 schedule loads last 48h data.
3. Gemini estimates next-24h direction windows.
4. Email is rendered (HTML + plain text) and sent.

## How to set up
- Add [Decodo](https://visit.decodo.com/discount), Gmail, and Gemini credentials.
- Open **Configure Coins** to edit tickers.
- Set Data Table ID.
- Replace recipient email.
- (Self-host only) Community node **Decodo** required. @decodo/n8n-nodes-decodo (community)


## 📊 Basic Information

- **Workflow ID:** 9964
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 105
- **Downloads:** 10
- **Created:** 2025/10/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9964)

## 👤 Author

- **Name:** Fahmi Fahreza
- **Username:** @fahmiiireza

## 🏷️ Categories

- Crypto Trading

## 🔗 Nodes Used

- **code** (×4)
- **dataTable** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **scheduleTrigger** (×2)
- **set** (×2)
- **splitInBatches** 
- **@decodo/n8n-nodes-decodo.decodo** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **gmail** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
