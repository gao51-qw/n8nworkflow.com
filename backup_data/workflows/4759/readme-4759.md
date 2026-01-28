# Send cryptocurrency price threshold alerts from CoinGecko to Discord

> # Crypto Price Alert – n8n Workflow

A simple and effective crypto alert system for anyone who wants to stay up to date with coin price changes — without refreshing charts all day. This workflow checks the current price of your chosen cryptocurrency (via CoinGecko) and sends you an alert on Discord if it goes above or below your target range.

It’s lightweight, easy to set up, and runs on autopilot.

---

### What the Workflow Does
- Checks the live price of a selected coin using the CoinGecko API.
- Compares it to the max/min prices you define manually.
- Decides if the price is too high or too low.
- Sends an alert message to Discord depending on the result.

---

### How It Works
- The flow is triggered manually or on a schedule (your choice).
- It pulls the current price of the coin you set.
- Compares that price with your min and max values.
- Sends a “high” or “low” message to your Discord webhook.

---

### Setup Steps
- Enter your coin ID and price thresholds in the “Set Low and High” node.
- Paste your Discord webhook URLs in the "Message High" and "Message Low" nodes.
- Optional: Adjust the schedule trigger to run every X minutes/hours.
- Run once manually to test — takes under 1 minutes.

Full instructions and config tips are in sticky notes inside the workflow.


## 📊 Basic Information

- **Workflow ID:** 4759
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 1822
- **Downloads:** 182
- **Created:** 2025/6/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4759)

## 👤 Author

- **Name:** LukaszB
- **Username:** @lukaszb

## 🏷️ Categories

- Crypto Trading

## 🔗 Nodes Used

- **coinGecko** 
- **manualTrigger** 
- **scheduleTrigger** 
- **set** 
- **if** (×2)
- **discord** (×2)
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
