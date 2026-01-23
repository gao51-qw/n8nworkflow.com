# Aggregate crypto and stock market news feed from multiple sources

> ## This n8n template helps in making informed decisions for Crypto and Stocks Trading by helping you keep track of breaking changes in the market.

## How it works

- Collects crypto and/or stock market headlines from multiple sources: CoinDesk, CoinTelegraph, Google News, and X (via an RSS proxy).
- Normalizes all items into a consistent structure with fields like `source`, `kind`, `title`, `url`, `publishedAt`, `matchedKeywords`, `media[]`, and `topic`.
- Uses topic-specific keyword lists to keep relevant items and a small spam blacklist to drop giveaways / airdrops / obvious noise.
- Deduplicates items across runs by tracking previously seen links.
- Bundles everything into a compact `{ topic, items[] }` JSON payload and sends it to your own backend or UI via HTTP.

## Set up steps

- Import the template JSON into a new n8n workflow.
- In the **Init RunConfig** code node, choose a default `topic` (`crypto` or `stocks`), which platforms to use (CoinDesk / CoinTelegraph / Google News / X), and optionally adjust tickers and keywords.
- Open the final **HTTP Request - Send to your backend** node and:
  - Replace the example URL with your own API endpoint.
  - Either set a `x-webhook-secret` header that your backend validates, or remove this header entirely if you don’t use it.
- Create any required credentials (for the webhook header auth and for HTTP requests, if needed) – the template does **not** contain real API keys.
- Enable either the **Schedule Trigger** for periodic runs or the **Webhook** trigger for on-demand runs from your app.
- Expect roughly 10–20 minutes to import, configure, and test the first run; detailed per-node notes are available as sticky notes inside the workflow canvas.


## 📊 Basic Information

- **Workflow ID:** 11103
- **Complexity:** advanced
- **Node Count:** 40
- **Views:** 610
- **Downloads:** 61
- **Created:** 2025/11/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11103)

## 👤 Author

- **Name:** Mohammad Abubakar
- **Username:** @m7abr

## 🏷️ Categories

- Crypto Trading

## 🔗 Nodes Used

- **scheduleTrigger** 
- **rssFeedRead** (×4)
- **set** (×4)
- **merge** (×4)
- **code** (×12)
- **webhook** 
- **if** (×5)
- **splitInBatches** 
- **stickyNote** (×6)
- **httpRequest** 
- **noOp** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 40 nodes with 33 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
