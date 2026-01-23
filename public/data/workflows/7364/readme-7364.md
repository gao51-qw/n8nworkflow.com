# Create a self-hosted blockchain payment processor with x402 and 1Shot API

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

![facilitatorpreview.gif](fileId:2163)

# Self-Hosted x402 Facilitator

In the [x402](https://x402.org) payment protocol, a [facilitator](https://x402.gitbook.io/x402/core-concepts/facilitator) is a role which helps sellers settle stablecoin payments onchain without dealing with blockchain complexities. This workflow allows you to run your own fully-featured, specification-compliant facilitator in n8n. You might want to do this if you want to accept payments in tokens not supported by existing facilitators or as your own business!

## Details

A facilitator supports three routes: `/verify`, `/settle`, and `/supported`. These routes are all created for you in this workflow with proper error handling and responses. 

A seller will first hit `/verify` with their payment details to ensure the payment information is correct. Next they will hit the `/settle` endpoint with the same payment information to settle the paymet on the blockchain. The `/supported` endpoint is used to indicate to sellers which blockchains you choose to support in a programatic fashion.

## Setup

1. Create a [1Shot API](https://1shotapi.com) account
2. Create 1Shot API wallets for the networks where you wish to facilitate token payments and load them with sufficient gas tokens.
3. Using [1Shot Prompts](https://app.1shotapi.com/1shot-prompts), import the `transferWithAuthorization` functions for the tokens you will settle payments for.
4. Import this workflow into n8n and create a credential to link the 1Shot API community node to your 1Shot API business account.
5. Enter the token and network information into the payment token and network configuration nodes indicated by the sticky nodes.
6. Turn on your workflow and settle payments!


## 📊 Basic Information

- **Workflow ID:** 7364
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 525
- **Downloads:** 52
- **Created:** 2025/8/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7364)

## 👤 Author

- **Name:** 1Shot API
- **Username:** @oneshotapi

## 🏷️ Categories

- Crypto Trading
- Multimodal AI

## 🔗 Nodes Used

- **n8n-nodes-1shot.oneShot** 
- **webhook** (×3)
- **respondToWebhook** (×7)
- **n8n-nodes-1shot.oneShotSynch** 
- **if** (×4)
- **stickyNote** (×8)
- **code** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
