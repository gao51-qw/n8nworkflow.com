# Automate daily signup stats from PostgreSQL to Slack, Teams & Telegram

> ## How it works
This workflow automatically pulls daily signup stats from your PostgreSQL database and shares them with your team across multiple channels. Every morning, it counts the number of new signups in the last 24 hours, formats the results into a concise report, and posts it to Slack, Microsoft Teams, and Telegram. This ensures your entire team stays updated on customer growth without manual queries or reporting.

## Step-by-step

**Daily Trigger & Data Fetching**

- The Daily Report Trigger runs at 9:00 AM each day.

- The Fetch Signup Count node queries the customers table in PostgreSQL.

- It calculates the number of new signups in the last 24 hours using the created_at timestamp column.

**Report Preparation**

- The Prepare Report Message node formats the results into a structured message:

  - Report date

  - Signup count

  - A clear summary line:
Daily Signup Report – New signups in the last 24h: X

**Multi-Channel Delivery**

- The prepared message is sent to multiple platforms simultaneously:

  - Slack

  - Microsoft Teams

  - Telegram

 - This ensures all teams receive the update in their preferred communication tool.

## Why use this?

- Automates daily customer growth reporting.

- Eliminates manual SQL queries and report sharing.

- Keeps the whole team aligned with real-time growth metrics.

- Delivers updates across Slack, Teams, and Telegram at once.

- Provides simple, consistent reporting every day.

## 📊 Basic Information

- **Workflow ID:** 8362
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 166
- **Downloads:** 16
- **Created:** 2025/9/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8362)

## 👤 Author

- **Name:** Avkash Kakdiya
- **Username:** @itechnotion

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **stickyNote** (×3)
- **scheduleTrigger** 
- **postgres** 
- **set** 
- **slack** 
- **microsoftTeams** 
- **telegram** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
