# Send location updates of the ISS to a topic in MQTT

> This workflow allows you to send position updates of the ISS every minute to a topic in MQTT using the MQTT node.

![workflow-screenshot](fileId:490)

**Cron node:** The Cron node will trigger the workflow every minute.

**HTTP Request node:** This node will make a GET request to the API `https://api.wheretheiss.at/v1/satellites/25544/positions` to fetch the position of the ISS. This information gets passed on to the next node in the workflow.

**Set node:** We will use the Set node to ensure that only the data that we set in this node gets passed on to the next nodes in the workflow.

**AWS SQS:** This node will send the data from the previous node to the `iss-position` topic. If you have created a topic with a different one, you can use that topic instead.

## 📊 Basic Information

- **Workflow ID:** 1069
- **Complexity:** beginner
- **Node Count:** 4
- **Views:** 2525
- **Downloads:** 252
- **Created:** 2021/5/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1069)

## 👤 Author

- **Name:** Harshil Agrawal
- **Username:** @harshil1712

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **cron** 
- **httpRequest** 
- **set** 
- **mqtt** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 4 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
