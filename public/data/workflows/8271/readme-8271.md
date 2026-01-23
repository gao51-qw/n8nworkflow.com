# Automated trending cryptocurrency updates from CoinGecko to Telegram

> **This workflow fetches the latest trending cryptocurrency searches from CoinGecko and automatically sends them to your Telegram group/channel.**


✅ No account or API key required
✅ Uses CoinGecko’s free public API
✅ Sends formatted daily updates to Telegram
✅ Easy to customize schedule with a Cron node

Perfect for community managers, traders, or anyone who wants to keep their Telegram group updated with the hottest crypto trends.

# How it works


- Manual Trigger (for testing) & Schedule Trigger (runs automatically at set times)

- Uses CoinGecko API https://api.coingecko.com/api/v3/search/trending

- Extracts coin name, symbol, price (if available), and market cap rank

- Formats into a readable Telegram message & 
sends the message to your configured group/channel

# How to use

 - Import the workflow: Download the JSON file and import it into your n8n instance.

- Connect your Telegram account: Add Telegram credentials in n8n using your Bot Token.

- Replace the placeholder Telegram Chat ID (chatId) with your group/channel ID.

- Adjust schedule (optional): By default, the workflow runs at 8:30 AM and 8:30 PM IST. You can change this in the Schedule Trigger node.

- Activate the workflow: Once configured, activate it, and your Telegram group will start receiving daily trending coin updates.

# Requirements

- An n8n instance (self-hosted or cloud)

- A Telegram Bot Token (create via BotFather)

- Telegram Group or Channel ID where messages should be sent


## 📊 Basic Information

- **Workflow ID:** 8271
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 453
- **Downloads:** 45
- **Created:** 2025/9/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8271)

## 👤 Author

- **Name:** CryptooChai
- **Username:** @cryptoochai

## 🏷️ Categories

- Crypto Trading

## 🔗 Nodes Used

- **httpRequest** 
- **function** 
- **telegram** 
- **manualTrigger** 
- **stickyNote** 
- **scheduleTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
