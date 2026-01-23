# Rss feed reader that saves the feeds of the last 3 days in Google Sheets

> ++**How it Works:**++
This RSS reader retrieves links from a Google Sheets file and goes through each link to retrieve the messages that are younger than 3 days, then saves them in a second Google Sheets file and then deletes all older entries in the second Google Sheets file!

***==The retrieval can take a while due to the Google API block prevention, depending on the number of news feeds that were retrieved!==***

***Detailed Description is in the sticky Notes from the Workflow!***

## 📊 Basic Information

- **Workflow ID:** 3463
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 1488
- **Downloads:** 148
- **Created:** 2025/4/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3463)

## 👤 Author

- **Name:** Holger
- **Username:** @capa

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** 
- **code** (×2)
- **markdown** 
- **splitInBatches** (×3)
- **wait** (×3)
- **rssFeedRead** 
- **stickyNote** (×7)
- **googleSheets** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
