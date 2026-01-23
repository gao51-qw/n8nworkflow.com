# Retrieve deadlock game match statistics and send to Telegram

> Deadlock Match Stats Bot is an automated workflow for n8n designed to send detailed player statistics from the most recent Deadlock match directly to Telegram. When the user sends the /match command to the Telegram bot, the workflow performs the following steps:

Loads the HTML content of the player's profile page from deadlocktracker.gg using a preconfigured Steam ID.

Extracts the most recent match ID using a regular expression from the embedded JavaScript data.

Loads the HTML page for the specified match.

Parses the match page using cheerio to extract relevant data for each player, including their nickname, selected hero, and current rank.

Formats the collected information into a single message and sends it to the Telegram chat that issued the command.

## 📊 Basic Information

- **Workflow ID:** 4571
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 160
- **Downloads:** 16
- **Created:** 2025/6/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4571)

## 👤 Author

- **Name:** Eska
- **Username:** @eska

## 🏷️ Categories

- Miscellaneous

## 🔗 Nodes Used

- **telegram** 
- **httpRequest** (×2)
- **function** (×3)
- **telegramTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
