# Linear to Productboard feature sync

> ### Linear Project/Issue Status and End Date to Productboard feature Sync

Sync project and issue data between Linear and Productboard to keep teams aligned. This workflow updates Productboard features with the status and end date from Linear projects or due date from Linear issues. It ensures consistent data and sends a Slack notification whenever changes are made.

## Features
1. Listens for updates in Linear projects/issues.
2. Maps Linear statuses to Productboard feature statuses.
3. Updates Productboard feature details including timeframe.
4. Sends a Slack notification summarizing the updates.

## Setup
1. **Linear Credentials**: Add your Linear API credentials in n8n.  
2. **Productboard Credentials**: Configure the Productboard API credentials in n8n.  
3. **Linear Projects or Issues**: Select the Linear project(s) or Issue(s) you want to monitor for updates.  
4. **Productboard Custom Field**: Create a custom field in Productboard named *"Linear"*. This field should store the URL of the Linear project or issue you want to sync. Retrieve the UUID of the custom field in Productboard and set it up in the "Get Productboard Feature ID" node.
5. **Slack Notification**: Update the Slack node with the desired Slack channel ID.  
6. **Activate the Workflow**: Enable the workflow to automatically sync data when triggered by updates in Linear.

## 📊 Basic Information

- **Workflow ID:** 2578
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 627
- **Downloads:** 62
- **Created:** 2024/11/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2578)

## 👤 Author

- **Name:** Romain Jouhannet
- **Username:** @rjouhann

## 🏷️ Categories

- Project Management

## 🔗 Nodes Used

- **httpRequest** (×4)
- **splitOut** 
- **slack** (×2)
- **linearTrigger** (×7)
- **if** (×7)
- **code** 
- **set** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 22 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
