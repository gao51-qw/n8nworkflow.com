# Send Google Sheets data as a message to a Discord channel

> This workflow sends a message to a Discord channel when a new row is added or a row is updated in a Google Sheet. The message will send all data rows in the Google Sheet.

## Prerequisites
- Discord account and [Discord credentials](https://docs.n8n.io/integrations/builtin/credentials/discord/).
- Google account and [Google credentials](https://docs.n8n.io/integrations/builtin/credentials/google/).

## How it works
Using a code node, we can use the obtained Google Sheet data to create a custom message that will be sent to Discord. The message will be sent to the Discord channel specified in the Discord node.

### Setup
This workflow requires that you set up a Discord webhook and have an existing Google Sheet with data. See [how to set up a Discord webhook here](https://docs.n8n.io/integrations/builtin/credentials/discord/#creating-a-webhook-in-discord).

## 📊 Basic Information

- **Workflow ID:** 1941
- **Complexity:** beginner
- **Node Count:** 0
- **Views:** 3295
- **Downloads:** 329
- **Created:** 2023/8/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1941)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **googleSheetsTrigger** 
- **discord** 
- **code** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 4 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
