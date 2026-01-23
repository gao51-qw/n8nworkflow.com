# Monetize workflows with x402 Payment Protocol and 1Shot API

> ![image.png](fileId:2684)

# Monetize Your n8n Workflow with x402

This workflow lets you monetize any n8n workflow with the [x402](https://x402.org) payment protocol. 

It uses [1Shot API](https://1shotapi.com) as the onchain transaction fascilitator role.

Check out the [tutorial](https://youtu.be/sqLUpR6t--0?si=sDbLTyLCS3nY4Fk0) video for a complete walkthrough. 

## Setup

1. Create a free [1Shot API](https://1shotapi.com) account, then go to the [API Keys](https://1shotapi.com/api-keys) tab and generate a new API key & secret. 
2. Click on one of the 1Shot API nodes and use the API key & secret from step 1 to create a credentail. You'll need you 1Shot API business ID as well which is located in the top right-hand corner of the 1Shot API dashboard. 
3. Click on the `Payment Token Configs` box and enter in the required token information for the x402-compatible tokens you want to accept as payment. Import the x402-compatible tokens you want to accept as payments into your 1Shot API (must be an ERC-20 token with a `transferWithAuthorization` method) account using the [1Shot Prompts](https://1shotapi.com/1shot-prompts) directory. 
4. Click on the webhook trigger node and set the route. 

## 📊 Basic Information

- **Workflow ID:** 5389
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 385
- **Downloads:** 38
- **Created:** 2025/6/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5389)

## 👤 Author

- **Name:** 1Shot API
- **Username:** @oneshotapi

## 🏷️ Categories

- Crypto Trading

## 🔗 Nodes Used

- **webhook** 
- **if** 
- **respondToWebhook** (×4)
- **stickyNote** (×4)
- **code** (×2)
- **n8n-nodes-1shot.oneShotSynch** 
- **n8n-nodes-1shot.oneShot** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
