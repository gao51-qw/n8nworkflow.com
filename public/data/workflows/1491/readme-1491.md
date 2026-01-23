# Triage alerts from Syncro and submit to OpsGenie

> This workflow will take an alert from Syncro, determine if it's an agent_offline_trigger type, then determine if it's a new alert or a close to an existing alert, and then submit it to OpsGenie. New alerts will create a new alert in OpsGenie and resolved alerts will close the alert in OpsGenie. It doesn't require any kind of Google Sheets because OpsGenie allows you to submit a unique ID (known as an alias) along with the alert, which can be referenced later when closing the alert. The trigger type can be changed to suit your needs. You will need to create an API integration in OpsGenie. In Syncro, in addition to setting up the appropriate notification to webhook, you will also need a script that closes the agent_offline_trigger alert and an automated remediation to trigger that script when the asset goes offline (the script is queued and run when the asset comes back online).

&gt; This workflow is part of an MSP collection, The original can be found here: https://github.com/bionemesis/n8nsyncro

## 📊 Basic Information

- **Workflow ID:** 1491
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 1417
- **Downloads:** 141
- **Created:** 2022/2/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1491)

## 👤 Author

- **Name:** Jonathan
- **Username:** @jon-n8n

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **webhook** 
- **set** 
- **httpRequest** (×2)
- **noOp** 
- **if** 
- **switch** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
