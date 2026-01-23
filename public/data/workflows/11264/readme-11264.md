# Create and manage ERC-20 tokens with a Telegram bot and 1Shot API wallets

> ![image.png](fileId:3483)

## Launch ERC-20 Tokens with Telegram Bot and 1Shot API Custodial Wallets

Find the full walk-through tutorial video for this workflow on [YouTube](https://youtu.be/bKRvt2DuVKA?si=u_Myb07cxyDvlFtx). 

This Telegram bot template demonstrates some useful patterns for creating crypto-powered multi-user bot applications like: 

- How to create custodial wallets tied to specific telegram users. 
- How submit onchain transactions from a specific user's wallet when they interact with your bot.
- Storing transaction logs in n8n data tables
- Settings up inline keyboards for use triggering specific onchain actions.

Starting with this workflow, you can extend it for many different crypto/onchain applications as well as introduce fees to generate revenue in return for performing onchain actions for your users. 

NOTE: This is somewhat advanced setup as it requires the use of datatables, you will need to self-host this workflow.

![image.png](fileId:3463)

## Setup

You'll need to perform the following steps to get this Telegram bot workflow up and running:

1. Create a free [1Shot API](https://1shotapi.com) account & generate an API Key & Secret. Use the API credentials to authenticate the 1Shot API nodes.
2. Create a new Telegram bot using the [@BotFather](https://t.me/BotFather) bot to get an api key. Use the bot API key to authenticate the Telegram nodes.
3. Create a two Data Tables in your n8n account: `User Table` & `Token Table`. The `User Table` should have `chatid`, `wallet` and `walletid` as columns. The `Token Table` should have `wallet`, `token`, `name` and `chatid` as columns. These tables are used to the mappings between your bot users and their wallets and tokens. 
4. Import the 1Shot API Token Factory contract into your 1Shot API account. This smart contract is needed to deploy ERC-20 tokens on behalf of your bot users. 

You can also watch the associated [YouTube](https://youtu.be/bKRvt2DuVKA?si=u_Myb07cxyDvlFtx) tutorial for a step-by-step walkthrough of these points.




## 📊 Basic Information

- **Workflow ID:** 11264
- **Complexity:** advanced
- **Node Count:** 36
- **Views:** 0
- **Downloads:** 0
- **Created:** 2025/11/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11264)

## 👤 Author

- **Name:** 1Shot API
- **Username:** @oneshotapi

## 🏷️ Categories

- Crypto Trading
- AI Chatbot

## 🔗 Nodes Used

- **telegramTrigger** 
- **n8n-nodes-1shot.oneShot** (×2)
- **telegram** (×14)
- **switch** (×2)
- **stickyNote** (×7)
- **dataTable** (×5)
- **if** (×2)
- **code** 
- **n8n-nodes-1shot.oneShotSynch** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 36 nodes with 22 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
