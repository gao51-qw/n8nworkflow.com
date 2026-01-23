## Automated Crypto Forecast Pipeline using Decodo and Gmail

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
