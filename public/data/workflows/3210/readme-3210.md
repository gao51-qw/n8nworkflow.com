# Create ticket for duplicate devices in Syncro

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

Using the serial number for assets, this workflow will create a ticket with the subject "Found duplicate Serial Numbers" with a list of all of the duplicate assets for a technician to review and merge.

Duplicate assets causes incorrect billing (if customers are billed based on asset counts), and additional overhead when reviewing the history of assets when that history is spread across multiple instances.

*Note: Due to limitations of the Syncro API, automatically merging duplicate assets is not possible.*

## How it works:
* Get a list of all assets in Syncro and summarize the list based on the Customer ID, Asset Type, and Asset Serial
* Create a new ticket listing all of the duplicate assets

## Set up steps:
* Install the [Syncro RMM community node](https://www.npmjs.com/package/n8n-nodes-syncrormm)
* Connect a Syncro RMM account*
* Open the "Create a ticket" node and update the customer ID

**See [Syncro RMM Community Node documentation](https://www.npmjs.com/package/n8n-nodes-syncrormm#credentials) for details about how to get a Syncro API key and what permissions the Syncro API key needs* 

## 📊 Basic Information

- **Workflow ID:** 3210
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 51
- **Downloads:** 5
- **Created:** 2025/3/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3210)

## 👤 Author

- **Name:** Dave Long
- **Username:** @davejlong

## 🏷️ Categories

- Ticket Management

## 🔗 Nodes Used

- **n8n-nodes-syncrormm.syncroRmm** (×2)
- **filter** (×2)
- **summarize** 
- **scheduleTrigger** 
- **set** 
- **code** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
