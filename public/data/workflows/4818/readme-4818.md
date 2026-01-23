# Send Telegram notification for new WooCommerce orders

> 🔧 How it works:
• The workflow triggers when a new order is created in WooCommerce.
• It extracts order details including ID, status, total, and products list.
• Sends a formatted message via Telegram to the store admin.
• Includes a clickable button that links directly to the order view page.

⚙️ Set up steps:
• Estimated setup time: 5–10 minutes.
• Requires active WooCommerce REST API credentials.
• Requires a Telegram bot and your admin chat ID.
• Replace the Telegram `chatId` and WooCommerce credentials in the workflow.
• Make sure your WooCommerce site allows external API access.


## 📊 Basic Information

- **Workflow ID:** 4818
- **Complexity:** beginner
- **Node Count:** 3
- **Views:** 2193
- **Downloads:** 219
- **Created:** 2025/6/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4818)

## 👤 Author

- **Name:** Mohammadreza azari
- **Username:** @mrazari

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **wooCommerceTrigger** 
- **telegram** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 3 nodes with 1 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
