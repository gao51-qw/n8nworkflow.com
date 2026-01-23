# Automated Multi-Platform Game Deals Tracker with Deku Deals & Gmail Alerts

> **How it works**

This advanced workflow keeps you informed about the hottest game deals across multiple platforms (Nintendo Switch, PlayStation, Xbox, PC, etc.), aggregated by Deku Deals. No more manual checking for price drops – it automatically:

- Scans Deku Deals daily for popular game deals.

- Extracts key information like game title, platforms, current price, original price, discount, and direct links.

- Intelligently tracks previously seen deals using a local database, guaranteeing you only get notified about genuinely new price drops or added games.

- Delivers a clear and concise notification to your email (or preferred service) summarizing the best new deals.

Stay ahead of the sales, save money, and never miss a great game deal again!

**Set up steps**

Setting up this workflow involves web scraping, local database management, and understanding some web element selectors. It typically takes around 20-35 minutes. You'll need to:

- Authenticate your preferred notification service (e.g., Gmail, Telegram).

- Understand how to use your browser's developer tools to find CSS Selectors (detailed instructions provided within the workflow).

- No external database setup required, as it uses n8n's built-in SQLite database.

All detailed setup instructions and specific configuration guidance are provided within the workflow itself using sticky notes.

## 📊 Basic Information

- **Workflow ID:** 6666
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 132
- **Downloads:** 13
- **Created:** 2025/7/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6666)

## 👤 Author

- **Name:** Piotr Sobolewski
- **Username:** @piotrsobolewski

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **cron** 
- **httpRequest** 
- **htmlExtract** 
- **function** (×2)
- **sqlite** (×3)
- **itemLists** 
- **if** 
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
