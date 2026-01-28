# Send a notification to Slack when a new high-quality lead is added to Hubspot

> ## Use Case
When tracking your contacts and leads in Hubspot CRM, every new contact might be a potential customer. To guarantee that you're keeping the overview you'd normally need to look at every new lead that is coming in manually to identify high-quality leads to prioritize their engagement and optimize the sales process. This workflow saves the work and does it for you.

## What this workflow does
The workflow runs every 5 minutes. On every run, it checks the Hubspot CRM for contacts that were added since the last check. It then checks if they meet certain criteria (in this case if they are making +5m annual revenue) and alerts you in Slack for every match.

## Setup
1. Add `Hubspot`, and `Slack` credentials.
2. Click on `Test workflow`.

## How to adjust this workflow to your needs
1. Change the schedule interval
2. Adjust the criteria to send alerts

## 📊 Basic Information

- **Workflow ID:** 2131
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 2177
- **Downloads:** 217
- **Created:** 2024/2/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2131)

## 👤 Author

- **Name:** Ricardo Espinozaas
- **Username:** @n8nricardoe105

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **hubspot** 
- **slack** 
- **stickyNote** (×4)
- **scheduleTrigger** 
- **filter** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
