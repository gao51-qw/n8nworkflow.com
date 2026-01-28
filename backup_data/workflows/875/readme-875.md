# Send tweets every minute to Mattermost

> This workflow executes every minute and fetches the recent tweets from Twitter with the search query `n8n_io`. The workflow is built on the concept of polling.

![workflow-screenshot](fileId:369)

**Cron node:** The Cron node triggers the workflow every minute. Based on your use-case you can configure the time. You can even use the Interval node to trigger the workflow at a certain time interval.

**Twitter node:** The Twitter node searches for the tweets that contain `n8n_io` and returns the most recent tweets. You can specify a different search query based on your use-case.

**Set node:** The Set node sets the data that we pass on to the next nodes in the workflow. You can set only the values that you require in your workflow.

**Function node:** All the magic happens in this node. The Twitter node returns all the recent tweets, including the ones which were returned earlier. The Function node, using the `getWorkflowStaticData()` method, only returns the tweets that are new, i.e., the tweets that were not returned in the previous workflow.

**Mattermost node:** The Mattermost node sends the tweets from the Function node to the Twitter notifications channel. If you don't use Mattermost and want to share this data on a different platform, replace this node with the appropriate node.

## 📊 Basic Information

- **Workflow ID:** 875
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 1091
- **Downloads:** 109
- **Created:** 2021/1/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/875)

## 👤 Author

- **Name:** Harshil Agrawal
- **Username:** @harshil1712

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **twitter** 
- **cron** 
- **function** 
- **set** 
- **mattermost** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
