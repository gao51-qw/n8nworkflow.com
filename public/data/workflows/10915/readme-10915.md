# Automatically send daily Nikkei 225 closing price to LINE

> ## About This Template
This workflow automatically fetches the Nikkei 225 closing price every weekday and sends a formatted message to a list of users on LINE.

This is perfect for individuals or teams who need to track the market's daily performance without manual data checking.

## How It Works
1.  **Schedule Trigger:** Runs the workflow automatically every weekday at 4 PM JST (Tokyo time), just after the market closes.
2.  **Get Data:** An HTTP Request node fetches the latest Nikkei 225 data (closing price, change, %) from a data API.
3.  **Prepare Payload:** A Code node formats this data into a user-friendly message and prepares the JSON payload for the LINE Messaging API, including a list of user IDs.
4.  **Send to LINE:** An HTTP Request node sends the formatted message to all specified users via the LINE multicast API endpoint.

## Who It’s For
* Anyone who wants to receive daily stock market alerts.
* Teams that need to share financial data internally.
* Developers looking for a simple example of an API-to-LINE workflow.

## Requirements
* An n8n account.
* A LINE Official Account & Messaging API access token.
* An API endpoint to get Nikkei 225 data. (The one in the template is a temporary example).

## Setup Steps
1.  **Add LINE Credentials:** In the "Send to LINE via HTTP" node, edit the "Authorization" header to include your own LINE Messaging API Bearer Token.
2.  **Add User IDs:** In the "Prepare LINE API Payload" (Code) node, edit the `userIds` array to add all the LINE User IDs you want to send messages to.
3.  **Update Data API:** The URL in the "Get Nikkei 225 Data" node is a temporary example. Replace it with your own persistent API URL (e.g., from a public provider or your own server).

## Customization Options
* **Change Schedule:** Edit the "Every Weekday at 4 PM JST" node to run at a different time. (Note: 4 PM JST is 07:00 UTC, which is what the Cron `0 7 * * 1-5` means).
* **Change Message Format:** Edit the `message` variable inside the "Prepare LINE API Payload" (Code) node to change the text of the LINE message.

## 📊 Basic Information

- **Workflow ID:** 10915
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 70
- **Downloads:** 7
- **Created:** 2025/11/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10915)

## 👤 Author

- **Name:** Masaki Go
- **Username:** @pippi

## 🏷️ Categories

- Crypto Trading

## 🔗 Nodes Used

- **scheduleTrigger** 
- **httpRequest** (×2)
- **set** 
- **code** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
