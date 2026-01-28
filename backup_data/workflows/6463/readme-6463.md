# Generate dynamic sales pipeline metrics for Slack using Airtable

> ## This n8n template generates a dynamic weekly sales report from Airtable and sends it to Slack. It calculates key sales metrics like total pipeline value, weighted pipeline (based on deal stage), top deal, closed revenue, and win rate.. all formatted in a clean Slack message.

## How it works

A schedule trigger starts the workflow (e.g., every Monday). It fetches deal data from Airtable, splits open vs closed deals, calculates all metrics with JavaScript, and formats the output. The message is then sent to Slack using Markdown for readability.

## How to use

Update the Airtable credentials and select your base and table with fields:
- Deal Name, Value, Status, etc.
Set the Slack channel in the final node to your preferred sales or ops channel.

## Requirements
- Airtable base with relevant deal data (see field structure)
- Slack webhook or token for sending messages

## Customising this workflow

You can adapt the logic to other CRMs like Salesforce or HubSpot, add charts, or tweak stage weights. You can also change the schedule or add filters (e.g., by rep or region).

## 📊 Basic Information

- **Workflow ID:** 6463
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 69
- **Downloads:** 6
- **Created:** 2025/7/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6463)

## 👤 Author

- **Name:** James Carter
- **Username:** @arioloop

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **stickyNote** (×7)
- **scheduleTrigger** 
- **airtable** (×2)
- **merge** 
- **code** (×2)
- **slack** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
