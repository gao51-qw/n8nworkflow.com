# Import Productboard notes, companies and features into Snowflake

> This workflow imports Productboard data into Snowflake, automating data extraction, mapping, and updates for features, companies, and notes. It supports scheduled weekly updates, data cleansing, and Slack notifications summarizing the latest insights.

## Features
- Fetches data from Productboard (features, companies, notes).
- Maps and processes data for Snowflake tables.
- Automates table creation, truncation, and updates.
- Summarizes new and unprocessed notes.
- Sends weekly Slack notifications with key insights.

## Setup
- Configure Productboard and Snowflake credentials in n8n.
- Update Snowflake table schemas to match your setup.
- Replace Slack channel ID and dashboard URL in the notification node.
- Activate the workflow and set the desired schedule.

## 📊 Basic Information

- **Workflow ID:** 2576
- **Complexity:** advanced
- **Node Count:** 35
- **Views:** 924
- **Downloads:** 92
- **Created:** 2024/11/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2576)

## 👤 Author

- **Name:** Romain Jouhannet
- **Username:** @rjouhann

## 🏷️ Categories

- Engineering
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×2)
- **set** (×8)
- **httpRequest** (×3)
- **splitOut** (×4)
- **snowflake** (×13)
- **splitInBatches** (×3)
- **scheduleTrigger** 
- **slack** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 35 nodes with 28 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
