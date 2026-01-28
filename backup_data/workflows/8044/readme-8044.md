# Automate token purchases with dollar cost averaging on Uniswap V3 & 1Shot API

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

![DCAdemo.gif](fileId:2287)
# Dollar Cost Averaging with Uniswap V3

This workflow lets you set up an scheduled workflow to dollar cost average (DCA) into any token on a custom schedule using [1Shot API](https://1shotapi.com) and the [Uniswap V3](https://app.uniswap.org/) protocol. Choose your schedule input token and output token and optionally configure the workflow to send you notifications in Telegram everytime your workflow completes a swap. 

## YouTube Tutorial

You can watch the full [end-to-end tutorial](https://youtu.be/JiyLR5NtU7I) for this workflow on our [YouTube channel](https://www.youtube.com/@1shotapi). 

## Wallet Delegation

Importantly, this workflow uses Metamasks [Delegation Framework](https://metamask.io/developer/delegation-toolkit) which lets you DCA from an account you custody whithout ever exporting your private key or giving up control of your assets. 

## Setup

1. Create a free [1Shot API](https://1shotapi.com) account, provision a [server wallet](https://app.1shotapi.com/wallets) to relay transactions, and generate an API key to connect to n8n.  
2. Import the following [Uniswap contracts](https://docs.uniswap.org/contracts/v3/reference/deployments/) into your 1Shot API account for the chain you want to swap on: QuoterV2, SwapRouter02, and the token pool (needed to compute time-weighted average price (TWAP). 
3. Import the `approve` function for the ERC-20 token you want to use to purchase your target asset (this should be the `token0` or `token1` of the pool you imported in step 2).
4. Click on the server wallet details you created, fund it with enough gas tokens to pay for your transactions, then generate a delegation for the SwapRouter02 contract and the ERC-20 token from steps 2 and 3. 
5. Import the DCA workflow and use your 1Shot API key/secret to create a credential.
6. Point the 1Shot API nodes at the appropriate smart contract functions you imported in steps 2 and 3. 
7. In the `Swap Configs` node, set the amount of the *in* token you want to spend on each purchase - for example, if you are using USDC (which has 6 decimals) and you want to purchase $10 every purchase, then `amountDCA` should be `10000000`. Also set the correct addresses for the SwapRouterV2, `token0`, `token1` and `fee` of the pool you are using. 
8. Lastly, set the frequency of your DCA in the trigger node and activate!

## Optional Telegram Notifications

You can configure a Telegarm bot to notifiy you everytime the workflow completes to send you a transaction has and you remaining balance in your purchasing funds. 

## 📊 Basic Information

- **Workflow ID:** 8044
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 181
- **Downloads:** 18
- **Created:** 2025/8/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8044)

## 👤 Author

- **Name:** 1Shot API
- **Username:** @oneshotapi

## 🏷️ Categories

- Crypto Trading
- Multimodal AI

## 🔗 Nodes Used

- **code** (×2)
- **n8n-nodes-1shot.oneShot** (×3)
- **n8n-nodes-1shot.oneShotSynch** (×2)
- **scheduleTrigger** 
- **telegram** (×2)
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
