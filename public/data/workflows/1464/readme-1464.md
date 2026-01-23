# Find and share mentions from Twitter and Slack

> This workflow searches for mentions of a company's name on Twitter and shares the tweets that mention it in a Slack channel.

## Prerequisites

- A Slack account and [credentials](https://docs.n8n.io/integrations/credentials/slack/)
- A Twitter account and [credentials](https://docs.n8n.io/integrations/credentials/twitter/)

## Nodes

- [Cron node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.cron/) executes the workflow every 10 minutes. Note that if you change the Mode from "Every X" you will need to manually update the Date & Time node to subtract the interval you are using.
- [Set nodes](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.set/) set the required values (name of the Slack channel, name of the Twitter account to search for, the tweet text and URL).
- [Date & Time node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.datetime/) subtracts 10 minutes from the workflow execution time.
- [Twitter node](https://docs.n8n.io/integrations/nodes/n8n-nodes-base.twitter/) gets the latest 50 tweets that mention the specified account.
- [IF node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.if/) filters tweets posted in the past 10 minutes.
- [Slack node](https://docs.n8n.io/integrations/nodes/n8n-nodes-base.slack/) posts tweets in a Slack channel.

## 📊 Basic Information

- **Workflow ID:** 1464
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 3747
- **Downloads:** 374
- **Created:** 2022/2/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1464)

## 👤 Author

- **Name:** Jonathan
- **Username:** @jon-n8n

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **set** (×2)
- **cron** 
- **dateTime** 
- **twitter** 
- **if** 
- **slack** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
