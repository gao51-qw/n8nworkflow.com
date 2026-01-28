# Track crypto prices & FX rates with CoinGecko & ExchangeRate-API to Notion

> # 📊 Log BTC/ETH Prices and USD Exchange Rates to Notion (Hourly)

## 📌 Overview
This workflow automatically logs live **crypto prices (Bitcoin & Ethereum)** and **fiat exchange rates (USD→EUR / USD→NGN)** into a Notion database every hour. Each entry becomes a new row in your Notion dashboard, letting you visualize currency and crypto trends side by side.  

It’s perfect for traders, analysts, and anyone who wants a **single source of truth in Notion** without needing multiple apps open. With hourly updates, you’ll have a clean data history for building rollups, trend graphs, or financial dashboards.

---

## ⚙️ How it works
1. **Schedule Trigger** — runs every hour (adjustable via cron).  
2. **HTTP Request (ExchangeRate-API)** — fetches USD-base FX rates (no API key required).  
3. **HTTP Request (CoinGecko)** — fetches BTC & ETH prices + 24h % change (no API key required).  
4. **Merge** — combines both payloads.  
5. **Code (v2)** — formats a Notion-ready JSON payload with the correct fields.  
6. **Notion Node** — creates a new page in your database with mapped properties.

**Example Row in Notion:**  
Title: *Crypto+FX — 2025-09-08 09:00*  
BTC: 112,417 | BTC_24h: +1.22%  
ETH: 4,334.57 | ETH_24h: +1.33%  
USD→EUR: 0.854 | USD→NGN: ₦1,524.54  

---

## 🛠 Setup Guide

### 1) Create the Notion database
- In Notion, create a new **database (Table view)**.  
- Add these columns with matching property types:

| Column     | Property Type |
|------------|---------------|
| Title      | Title         |
| BTC        | Number        |
| BTC_24h    | Number        |
| ETH        | Number        |
| ETH_24h    | Number        |
| USD_EUR    | Number        |
| USD_NGN    | Number        |

### 2) Connect Notion in n8n
- In the **Notion “Create Page” node**, connect with your **Notion OAuth2 credentials**.  
- On first use, you’ll be redirected to authorize n8n with your Notion workspace.  
- Copy your **Database ID** (from the Notion URL) and paste it into the node.

### 3) Map the Code output
- The Code node outputs JSON fields: `BTC`, `BTC_24h`, `ETH`, `ETH_24h`, `USD_EUR`, `USD_NGN`.  
- In the Notion node, map each property:  
  - `BTC` → `{{$json.BTC}}`  
  - `BTC_24h` → `{{$json.BTC_24h}}`  
  - `ETH` → `{{$json.ETH}}`  
  - `ETH_24h` → `{{$json.ETH_24h}}`  
  - `USD_EUR` → `{{$json.USD_EUR}}`  
  - `USD_NGN` → `{{$json.USD_NGN}}`

### 4) Test
- Run the workflow once.  
- Confirm that a new page is added to your Notion database with all values filled.

---

## 🎛 Customization
- **Cadence:** change the schedule to 10 minutes, 4 hours, or daily depending on your needs.  
- **Extra coins:** add more IDs (e.g., `solana`, `bnb`) in the CoinGecko call and update the Code node.  
- **Extra FX pairs:** expand from ExchangeRate-API (e.g., USD→GBP, USD→ZAR).  
- **Notion dashboards:** use rollups, charts, and linked databases for trend visualization.  
- **Formatting:** add emojis, colors, or sections in your Notion view for clarity.  

---

## 🧩 Troubleshooting
- **Page not created:** verify Database ID and ensure the Notion API integration has access.  
- **Empty fields:** check that property names in Notion exactly match those used in the Code node.  
- **Wrong data type:** make sure properties are set as **Number**, not Text.  
- **Rate limits:** CoinGecko and ExchangeRate-API are free but may rate-limit if called too often; keep cadence reasonable (hourly recommended).

---



## 📊 Basic Information

- **Workflow ID:** 8387
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 234
- **Downloads:** 23
- **Created:** 2025/9/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8387)

## 👤 Author

- **Name:** David Olusola
- **Username:** @dae221

## 🏷️ Categories

- Crypto Trading

## 🔗 Nodes Used

- **scheduleTrigger** 
- **httpRequest** (×2)
- **merge** 
- **code** 
- **notion** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
