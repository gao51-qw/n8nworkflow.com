# ETL pipeline for text processing

> This workflow allows you to collect tweets, store them in MongoDB, analyse their sentiment, insert them into a Postgres database, and post positive tweets in a Slack channel.

![workflow-screenshot](fileId:481)

**Cron node:** Schedule the workflow to run every day

**Twitter node**: Collect tweets

**MongoDB node:** Insert the collected tweets in MongoDB

**Google Cloud Natural Language node:** Analyse the sentiment of the collected tweets

**Set node:** Extract the sentiment score and magnitude

**Postgres node:** Insert the tweets and their sentiment score and magnitude in a Posgres database

**IF node:** Filter tweets with positive and negative sentiment scores

**Slack node:** Post tweets with a positive sentiment score in a Slack channel

**NoOp node:** Ignore tweets with a negative sentiment score



## 📊 Basic Information

- **Workflow ID:** 1045
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 9678
- **Downloads:** 967
- **Created:** 2021/4/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1045)

## 👤 Author

- **Name:** Lorena
- **Username:** @lorenanda

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **twitter** 
- **postgres** 
- **mongoDb** 
- **slack** 
- **if** 
- **noOp** 
- **googleCloudNaturalLanguage** 
- **set** 
- **cron** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
