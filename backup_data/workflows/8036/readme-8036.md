# Track play store app rankings with SerpApi, Baserow & Slack alerts

> ## Automatically track your Android app’s keyword rankings on Google Play. This workflow checks ranks via SerpApi, updates a Baserow table, and posts a heads-up in Slack so your team can review changes quickly.

## 💡 Perfect for

- ASO teams tracking daily keyword positions

- Growth & marketing standups that want quick rank visibility

- Lightweight historical logging without a full BI stack

## 🧠 What it does

- Runs on a schedule (e.g., weekly)

- Queries SerpApi for each keyword’s Play Store ranking

- Saves results to Baserow: Current Rank, Previous Rank, Last modified

- Sends a Slack alert: “Ranks updated — review in Baserow”

## ⚡ Requirements

- SerpApi account & API key

- Baserow account + API token

- Slack connection (bot/app or credential in n8n)

## ⚙️ Setup Instructions
1) **Create a Baserow table**

Create a new table (any name). Add user-field names exactly:

- Keywords (text)

- Current Rank (number)

- Previous Rank (number)

- Last modified (date/time)

Optional fields you can add later: Notes, Locale, Store Country, App Package ID.

2) **Connect credentials in n8n**

- Baserow: add your API token and select your Database and Table in the Baserow nodes.

- Slack: connect your Slack account/workspace in the Slack node.

- SerpApi: open the HTTP Request node and put your API key under Query Parameters → api_key = YOUR_KEY.

3) **Verify field mapping**

- In the Baserow (Update Row) node, map:

- Row ID → {{$json.id}}

- Current Rank → {{$json["Current Rank"]}}

- Previous Rank → your code node should set this (the template copies the old “Current Rank” into “Previous Rank” before writing the new one)

- Last modified → {{$now}} (or the timestamp you compute)

## 🛟 Notes & Tips

If you prefer a single daily Slack summary instead of multiple pings, add a Code node after updates to aggregate lines and send one message.

Treat 0 or missing ranks as “not found” and flag them in Slack if helpful.

For multi-country tracking, include hl/gl (locale/country) in your SerpApi query params and store them as columns.

## 🤝 Need a hand?

I’m happy to help you get this running smoothly—or tailor it to your brand.

Reach out to me via email: imarunavadas@gmail.com



## 📊 Basic Information

- **Workflow ID:** 8036
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 98
- **Downloads:** 9
- **Created:** 2025/8/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8036)

## 👤 Author

- **Name:** Arunava
- **Username:** @arunava

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** 
- **slack** 
- **stickyNote** (×9)
- **baserow** (×2)
- **code** (×2)
- **httpRequest** 
- **merge** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
