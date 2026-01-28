# Push Dialpad call information to Syncro

> This workflow takes Dialpad call information for an answered call and pushes it into Syncro as either a ticket or an update to an existing ticket. You will need to have a workflow for each technician at this time. It also saves call/ticket information to a Google Sheet to be queried by the dialpad_to_syncro_timer.json workflow. This will match to inbound and outbound calls, so if that's not desired you need to add in an IF to only proceed on either inbound or outbound calls.

&gt; This workflow is part of an MSP collection, The original can be found here: https://github.com/bionemesis/n8nsyncro

## 📊 Basic Information

- **Workflow ID:** 1490
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 1156
- **Downloads:** 115
- **Created:** 2022/2/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1490)

## 👤 Author

- **Name:** Jonathan
- **Username:** @jon-n8n

## 🏷️ Categories

- Ticket Management

## 🔗 Nodes Used

- **httpRequest** (×5)
- **webhook** 
- **if** (×4)
- **googleSheets** (×3)
- **set** (×4)
- **noOp** (×3)
- **function** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
