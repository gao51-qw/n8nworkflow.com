![image.png](fileId:3484)

# Get Paid in Stablecoins for Reposting from your X Account

The [x402](https://x402.org) payment standard is growing in popularity and has enabled new monetization opportunities for internet resources. This workflow lets you automate the monetization of your followers on X by receiving payment in the form of stablecoins in return for reposting content from your X account via the X API node. 

Selling impressions can be good business, its whats powered the largest internet companies in the world so far. This workflow gives you a starting point to sell impressions from your social media following you worked hard to build over time.

## Setup

### 1Shot API
1. Create a free [1Shot API](https://1shotapi.com) account, provision a wallet on your target network and fund it will some gas tokens.
2. Import into your 1Shot API account the stablecoin you want to get paid in. Use the 1Shot Prompts tab to find x402 compatible tokens. 
3. Configure the x402 Gateway node in the workflow to use the stablecoin you imported from step 2. 
4. Configure the refund nodes to point to the `transfer` function of the stablecoin you selected.

### X API 
1. Create a [X Developer](https://docs.x.com/x-api/introduction) account and generate an API Key and Secret.
2. Use the key and secret to authenticate the X node in the workflow

### Telegram
1. Create a Telegram Bot and use its API key to authenticate the Telegram nodes in the workflow. 
2. Get the Chat ID with your bot and put input it into the telegram nodes so that you can receive moderation requests. 
