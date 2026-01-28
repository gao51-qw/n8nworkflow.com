# 📍 Daily nearby garage sales alerts via Telegram

> Get a personalized list of garage sales happening today, based on your current location, directly in Telegram each morning! This n8n workflow integrates Home Assistant and [Brocabrac.fr](Brocabrac.fr )to:
- Automatically detect your location every day
- Scrape and parse garage sale listings from Brocabrac
- Filter for high-quality and nearby events
- Send a neatly formatted message to your Telegram account

Perfect for treasure hunters and second-hand enthusiasts who want to stay in the loop with zero effort!

## 📊 Basic Information

- **Workflow ID:** 4649
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 1006
- **Downloads:** 100
- **Created:** 2025/6/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4649)

## 👤 Author

- **Name:** Thibaud
- **Username:** @tderouze

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** 
- **splitOut** 
- **splitInBatches** 
- **scheduleTrigger** 
- **homeAssistant** 
- **set** (×4)
- **html** (×3)
- **filter** 
- **if** 
- **telegram** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
