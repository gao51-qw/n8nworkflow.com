# Crypto exchange listing & delisting alerts to Telegram, X, and Discord

> # Purpose and Audience
This n8n workflow template is designed to provide real-time alerts on new cryptocurrency exchange listings and delistings. It caters especially to crypto traders, investors, and enthusiasts who want to stay ahead of market changes by receiving timely notifications about token availability across major exchanges like Binance, Bybit, Coinbase, OKX, Upbit, Bithumb, and Hyperliquid. The alerts are delivered via popular communication channels Telegram, X (formerly Twitter), and Discord, ensuring you never miss important updates.

## What It Does
The workflow continuously tracks new token listings announcement from Binance, Bybit, Coinbase, Bithumb, OKX, Upbit, and Hyperliquid futures exchange. It also monitors delistings announcement from Binance, Bybit, OKX, Upbit, and Coinbase. When a new listing or delisting announcement is detected, it automatically sends instant alerts to your subscribed Telegram groups or channels, X accounts, and Discord servers, helping you react quickly to market changes.

## Who Is It For
This workflow is perfect for crypto traders, portfolio managers, market analysts, and anyone active in cryptocurrency investment or community management. By automating the alert process, it saves time and ensures you receive critical exchange listing updates immediately on your preferred platforms without manual monitoring.

## How to Setup
Complete video tutorial setup guide is included with the workflow file. The step-by-step guide walks you through configuring API credentials, connecting your Telegram, X, and Discord accounts, and customizing alert preferences to fit your needs.

## 📊 Basic Information

- **Workflow ID:** 8236
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 78
- **Downloads:** 7
- **Created:** 2025/9/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8236)

## 👤 Author

- **Name:** Malik Hashir
- **Username:** @malikx

## 🏷️ Categories

- Crypto Trading

## 🔗 Nodes Used

- **scheduleTrigger** 
- **limit** (×2)
- **if** (×2)
- **supabase** (×4)
- **httpRequest** (×2)
- **code** (×2)
- **stickyNote** (×7)
- **telegram** (×2)
- **twitter** (×2)
- **discord** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
