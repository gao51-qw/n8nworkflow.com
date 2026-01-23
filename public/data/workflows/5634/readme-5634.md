# Track top meme coin prices with Telegram Bot and CoinGecko API

> Platform: n8n (Telegram Bot Integration)
Purpose: Let users fetch top meme coin prices in real-time using a simple /memecoin Telegram command 
 How It Works (Logic Breakdown)
This flow listens for a Telegram command and fetches data from the CoinGecko API to respond with live memecoin prices.

🔹 1. Telegram Trigger Node
Listens for incoming Telegram messages from users.

Activated when a message is sent in a Telegram chat connected to the bot.

Passes the raw message (e.g., /memecoin) to the next node.

🔹 2. IF Node – Check if Message is /memecoin
Condition: {{$json["message"]["text"]}} === "/memecoin"

If true ➝ continue to fetch data from CoinGecko.

If false ➝ nothing happens.

🔹 3. HTTP Request – Fetch Meme Coins from CoinGecko
API: https://api.coingecko.com/api/v3/coins/markets?...category=meme-token

Fetches top 5 meme tokens by market cap.

Data includes:

Name

Symbol

Current price (USD)

Coin ID (for URL linking)

🔹 4. Function Node – Format the Message
Parses the JSON response from CoinGecko.

Builds a clean message like:

ruby
Copy
Edit
🚀 Dogecoin (DOGE)
💰 Price: $0.123
🔗 More: https://www.coingecko.com/en/coins/dogecoin
Loops through top 5 meme coins and adds line breaks.

🔹 5. Telegram Send Node – Reply to User
Sends the formatted message to the original chat.

Uses chat_id from the trigger to ensure correct user receives it.

🖼 Sample User Flow
👤 User types /memecoin in Telegram bot

🤖 Bot fetches meme coin prices

📬 Bot replies with live prices + links

## 📊 Basic Information

- **Workflow ID:** 5634
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 1278
- **Downloads:** 127
- **Created:** 2025/7/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5634)

## 👤 Author

- **Name:** Muhammad Zeeshan Ahmad
- **Username:** @connectedwithaiagents

## 🏷️ Categories

- Crypto Trading

## 🔗 Nodes Used

- **telegramTrigger** 
- **if** 
- **httpRequest** 
- **function** 
- **telegram** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
