# Nightly Discord channel cleanup

> # Nightly Discord Channel Cleanup
### This workflow runs every day at 9:00 p.m. and:
- Retrieves all Discord channels using your provided credentials.
- Pauses briefly to respect Discord API rate limits.
- Loops through each channel and fetches messages.
- Filters out messages older than seven days.
- Deletes those older messages, again pausing to stay within deletion rate limits.

By setting up this workflow on a schedule, you can automatically keep Discord channels tidy and compliant with retention policies.
### 👨‍🎤 Setup
1. Add your **Discord** credentials
2. Change the server in each **Discord** node to the correct one
3. Click the Test Workflow button
3. Activate the workflow to run on a schedule

## 📊 Basic Information

- **Workflow ID:** 2980
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 1476
- **Downloads:** 147
- **Created:** 2025/2/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2980)

## 👤 Author

- **Name:** Viktor
- **Username:** @qxuken

## 🏷️ Categories

- Miscellaneous

## 🔗 Nodes Used

- **splitInBatches** (×2)
- **scheduleTrigger** 
- **stickyNote** (×4)
- **wait** (×3)
- **discord** (×3)
- **filter** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
