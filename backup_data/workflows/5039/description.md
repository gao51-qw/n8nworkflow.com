**How it works**

1. Listens to Telegram messages to detect stock-related queries.
2. Extracts company name and identifies its exact stock ticker symbol.
3. Searches Yahoo Finance for stock info using the ticker.
4. Fetches and formats the latest stock data like price and key stats.
5. Sends a clean, simplified reply back to the user on Telegram.

**Set up steps**
- Requires Telegram Bot Token and Apify API credentials.
- Import workflow to n8n and link both Apify actors (Google Search + Yahoo Finance).
- Link OpenRouter for AI and enable Telegram trigger.
- Takes ~10–15 min to connect services and test.
- Includes sticky notes with setup links and tutorial videos.