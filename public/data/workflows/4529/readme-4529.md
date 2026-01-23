# Track Partnerstack affiliate events with Google Sheets & Telegram notifications

> This n8n workflow captures Partnerstack events via a webhook, logs the event data into a Google Sheet, and sends a Telegram notification.

### How it Works:

1.  **Webhook Node (Trigger)**: Listens for incoming POST requests. When an event occurs in Partnerstack (e.g., a new referral signs up), the workflow is triggered, capturing the event data.

2.  **Append Row in Sheets Node**: Takes the received Partnerstack event data and appends it as a new row to a designated Google Sheet. This creates a historical log of all captured events.

3.  **Set Chat ID Node**: Defines the specific Telegram chat ID where notifications will be sent.

4.  **Send Notification Node (Telegram)**: Sends a message to the specified Telegram chat. The message content includes details from the Partnerstack event, providing real-time alerts.

### Setup Requirements:

* **Partnerstack Postback**: Configure a postback in Partnerstack (`My account &gt; Postbacks &gt; Create a postback`). Paste the URL provided by n8n's **Webhook** node. Select the Partnerstack events you wish to track.
* **Google Sheets Authentication**: Provide n8n with Google credentials that have write access to your target Google Sheet. Specify the sheet name.
* **Telegram Integration**: You'll need a Telegram bot token (from BotFather) and the specific chat ID for the destination Telegram chat/channel.

#### Additional Notes:

This workflow efficiently automates logging of Partnerstack activities and provides immediate team awareness through Telegram notifications, streamlining event monitoring and response.

### 👉 Need Help?
Feel free to contact us at [1 Node](https://1node.ai).
Get instant access to a library of [free resources](https://1node.ai/resources) we created.

## 📊 Basic Information

- **Workflow ID:** 4529
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 369
- **Downloads:** 36
- **Created:** 2025/5/31
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4529)

## 👤 Author

- **Name:** Aitor | 1Node
- **Username:** @aitoralonso

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **webhook** 
- **googleSheets** 
- **telegram** 
- **stickyNote** (×2)
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
