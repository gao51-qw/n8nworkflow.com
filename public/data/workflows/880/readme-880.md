# Receive updates of the position of the ISS every minute

> This workflow demonstrates the use of static data in n8n. The workflow is built on the concept of polling.

![workflow-screenshot](fileId:371)

**Cron node:** The Cron node triggers the workflow every minute. You can configure the time based on your use-case.

**HTTP Request node:** This node makes an HTTP Request to an API that returns the position of the ISS.

**Set node:** In the Set node we set the information that we need in the workflow. Since we only need the timestamp, latitude, and longitude we set this in the node. If you need other information, you can set them in this node.

**Function node:** The Function node, checks if the incoming data is similar to the data that was returned in the previous execution or not. If the data is different the Function node returns this new node, otherwise, it returns a message 'No New Items'. The data is also stored as static data with the workflow.

Based on your use-case, you can build the workflow further. For example, you can use it send updates to Mattermost or Slack

## 📊 Basic Information

- **Workflow ID:** 880
- **Complexity:** beginner
- **Node Count:** 4
- **Views:** 603
- **Downloads:** 60
- **Created:** 2021/1/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/880)

## 👤 Author

- **Name:** Harshil Agrawal
- **Username:** @harshil1712

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **function** 
- **set** 
- **httpRequest** 
- **cron** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 4 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
