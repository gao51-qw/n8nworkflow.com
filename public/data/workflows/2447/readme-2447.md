# Time tracking with Notion and iOS shortcut

> ## Who might benfit from this workflow?
Do you have to record your working hours yourself? Then this n8n workflow in combination with an iOS shortcut will definitely help you. Once set up, you can use a shortcut, which can be stored as an app icon on your home screen, to record the start, end and duration of your break.

## How it works
Once setup you can tap the iOS shortcut on your iPhone. You will see a menu containing three options: "Track Start", "Track Break" and "Track End". After time is tracked iOS will display you a notification about the successful operation.

## How to set it up
1. Copy the [notion database](https://unitize.notion.site/1117f2f5baf98054b33befb4d8a3c7ab?v=9b428f93c7d2451095728c1aeddbcb16) to your notion workspace (Top right corner).
2. Copy the n8n workflow to your n8n workspace
3. In the notion nodes in the n8n workflow, add your notion credentials and select the copied notion database.
4. Download the iOS Shortcut from our [documentation page](https://unitize.notion.site/Time-Tracking-with-Notion-and-iOS-shortcut-1137f2f5baf9807f85fdf3f542da2427)
5. Edit the shortcut and paste the url of your n8n Webhook trigger node to the first "Text" node of the iOS shortcut flow.
6. It is a best practice to use authentication. You can do so by adding "Header" auth to the webhook node and to the shrotcut.

---
### You need help implementing this or any other n8n workflow?
Feel free to contact me via LinkedIn or [my business website](https://www.nodemation.de).

### You want to start using n8n?
Use this link to [register for n8n](https://n8n.partnerlinks.io/edr9c63lw12z)
(This is an affiliate link)

---


## 📊 Basic Information

- **Workflow ID:** 2447
- **Complexity:** advanced
- **Node Count:** 30
- **Views:** 1616
- **Downloads:** 161
- **Created:** 2024/10/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2447)

## 👤 Author

- **Name:** David
- **Username:** @unitize

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **notion** (×7)
- **if** (×5)
- **set** (×9)
- **switch** 
- **stickyNote** (×6)
- **respondToWebhook** 
- **webhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 30 nodes with 23 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
