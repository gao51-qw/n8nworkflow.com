# Manage contact form submissions with Google Sheets, Slack alerts & Gmail replies

> ## How it works

This workflow is triggered when the contact form is submitted.

It automatically saves the inquiry details to Google Sheets and sends a notification to Slack.
You can then review the inquiry and reply directly from Slack using the `Contact` button.

## How to use

* Open the `Gmail` node and set up the Credential.
* Open the `Google Sheets` node and set up the Credential.
* Open the `Slack` node and set up the Credential to allow sending messages.
    * You can create a new Slack App [here](https://api.slack.com/apps).
* Open the `ContactWebhook` node and configure Basic Auth.
* Open the `Config` node and update the `contactWebhookUrl` parameter to match the Production URL from the `ContactWebhook` node.

## Customizing this workflow

* You can customize the Slack notification message in the `Config` node.
* You can modify the reply email body in the `Gmail` node.
    * We recommend including a scheduling link (e.g., to book a meeting).

## 📊 Basic Information

- **Workflow ID:** 11643
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 70
- **Downloads:** 7
- **Created:** 2025/12/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11643)

## 👤 Author

- **Name:** Hirokazu Kawamoto
- **Username:** @h-kawamoto

## 🏷️ Categories

- Ticket Management

## 🔗 Nodes Used

- **formTrigger** 
- **slack** 
- **googleSheets** 
- **set** 
- **code** (×2)
- **gmail** 
- **form** 
- **webhook** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
