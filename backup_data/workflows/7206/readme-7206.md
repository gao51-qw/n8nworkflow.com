# Multi-chain token swap relayer with Li.Fi

> ![image.png](fileId:2778)

# Swap Tokens with Li.Fi 

The growing popularity of agentic payments has lead to the development of protocols like [x402](https://x402.org) where agents and humans can pay for internet resources over standard http protocols using stablecoins.

This workflow lets you run your own swap relayer where callers can provide an [x402-compatible payment header](https://1shotapi.com/tools) and a desired destination network to instantly receive gas tokens. This setup is trust minimized - user's have the following guarantees:

1. They will be the receiver of the swap.
2. Only the amount of tokens the authorized will be swapped. 

## Setup

In order to run this relayer workflow, you will need an account on [1Shot API](https://1shotapi.com). You must then import the 1Shot Gas Station contract into your business for any chain you wish to support with your relayer.

Next, follow the directions in the worflow sticky notes to update the Payment Configs for the tokens you wish to support swaps for. Lastly, distrubute your webhook api endpoint to your users. 


## 📊 Basic Information

- **Workflow ID:** 7206
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 297
- **Downloads:** 29
- **Created:** 2025/8/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7206)

## 👤 Author

- **Name:** 1Shot API
- **Username:** @oneshotapi

## 🏷️ Categories

- Crypto Trading
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×6)
- **respondToWebhook** (×6)
- **n8n-nodes-1shot.oneShotSynch** 
- **if** 
- **n8n-nodes-1shot.oneShot** 
- **webhook** 
- **httpRequest** 
- **code** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
