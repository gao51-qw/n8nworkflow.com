# Public webhook relay

> ## Disclaimer
This template only works on n8n local instances!

## How it Works
This workflow allows you to to receive webhooks from the public web and have your local workflow catch them, without any remote proxy. It is very useful for running quick tests without exposing your dev server. All you have to do is activate the workflow and use the public address as defined below.

## Set up steps
If you use the default key-value storage, there are only three steps:
1. Install the *@horka.tv/n8n-nodes-storage-kv* community node
2. Put your n8n workflow address in **Local Webhook Address**
3. Activate the workflow and, from *Executions*, note down your public webhook token from the inputs to **Get Latest Requests**. 

You can now use https://webhook.site/[YOUR TOKEN] as a webhook destination, to receive webhook requests from the public web.

## 📊 Basic Information

- **Workflow ID:** 2443
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 1513
- **Downloads:** 151
- **Created:** 2024/9/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2443)

## 👤 Author

- **Name:** Jay Hartley
- **Username:** @jay

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **scheduleTrigger** 
- **httpRequest** (×3)
- **code** (×2)
- **merge** 
- **set** 
- **stickyNote** (×5)
- **@horka.tv/n8n-nodes-storage-kv.keyValueStorage** (×4)
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
