# Create Teams notifications for new tickets in ConnectWise with Redis

> This Workflow does a HTTPs request to ConnectWise Manage through their REST API. 

It will pull all tickets in the "New" status or whichever status you like, and notify your dispatch team/personnel whenever a new ticket comes in using Microsoft Teams. 

Video Explanation https://youtu.be/yaSVCybSWbM

## 📊 Basic Information

- **Workflow ID:** 2352
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 4770
- **Downloads:** 477
- **Created:** 2024/7/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2352)

## 👤 Author

- **Name:** Gavin
- **Username:** @sniped-you-fool

## 🏷️ Categories

- Ticket Management

## 🔗 Nodes Used

- **scheduleTrigger** 
- **code** (×2)
- **redis** (×2)
- **merge** 
- **httpRequest** 
- **microsoftTeams** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
