# FinnHub API and Slack template

> ## Daily Company News Bot
### This n8n template demonstrates how to use Free FinnHub API to retrieve the company news from a list stock tickers and post messages in Slack channel with a pre-scheduled time.

### How it works
* We firstly define the list of stock tickers you are interested
* Loop over items to call FinnHub API to get the latest company news for the ticker
* Then we format the company news as a markdown text content which could be sent to Slack
* Post a new message in Slack channel
* Wait for 5 seconds, then move to the next ticker

### How to use
* Simply setup a scheduler trigger to automatically trigger the workflow

### Requirements
* FinnHub API Key
* Slack channel webhook


### Need Help?
Contact me via [My Blog](https://fans-ai-lab.com/contact) or ask in the [Forum](https://community.n8n.io/)!

Happy Hacking!

## 📊 Basic Information

- **Workflow ID:** 5418
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 414
- **Downloads:** 41
- **Created:** 2025/6/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5418)

## 👤 Author

- **Name:** Fan Luo
- **Username:** @luofan189

## 🏷️ Categories

- Crypto Trading

## 🔗 Nodes Used

- **scheduleTrigger** 
- **httpRequest** 
- **splitInBatches** 
- **wait** 
- **slack** 
- **code** (×2)
- **noOp** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
