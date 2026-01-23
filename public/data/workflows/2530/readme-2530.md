# Automated work attendance with location triggers

> his workflow automates time tracking using location-based triggers.

## How it works
- Trigger: It starts when you enter or exit a specified location, triggering a shortcut on your iPhone.
- Webhook: The shortcut sends a request to a webhook in n8n.
- Check-In/Check-Out: The webhook receives the request and records the time and whether it was a "Check-In" or "Check-Out" event.
- Google Sheets: This data is then logged into a Google Sheet, creating a record of your work hours.

## Set up steps
1. Google Drive: Connect your Google Drive account.
2. Google Sheets: Connect your Google Sheets account.
3. Webhook: Set up a webhook node in n8n.
4. iPhone Shortcuts: Create two shortcuts on your iPhone, one for "Check-In" and one for "Check-Out."
5. Configure Shortcuts: Configure each shortcut to send a request to the webhook with the appropriate "Direction" header.

It's easy to setup, around 5 minutes.

## 📊 Basic Information

- **Workflow ID:** 2530
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 5477
- **Downloads:** 547
- **Created:** 2024/11/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2530)

## 👤 Author

- **Name:** Rui Borges
- **Username:** @rpb-dev

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **webhook** 
- **stickyNote** (×3)
- **googleDrive** 
- **googleSheets** (×2)
- **code** 
- **if** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
