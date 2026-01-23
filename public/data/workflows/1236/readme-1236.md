# Use Redis to rate-limit your low-code API

> This workflow demonstrates how to can use Redis to implement rate limits to your API.

![workflow-screenshot](fileId:538)

The workflow uses the incoming API key to uniquely identify the user and use it as a key in Redis. Every time a request is made, the value is incremented by one, and we check for the threshold using the IF node.

Duplicate the following Airtable to try out the workflow: https://airtable.com/shraudfG9XAvqkBpF

## 📊 Basic Information

- **Workflow ID:** 1236
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 2431
- **Downloads:** 243
- **Created:** 2021/9/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1236)

## 👤 Author

- **Name:** Harshil Agrawal
- **Username:** @harshil1712

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **airtable** 
- **redis** (×2)
- **set** (×4)
- **webhook** 
- **function** 
- **if** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
