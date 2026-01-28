# Receive updates of the position of the ISS and add it to a table in TimescaleDB

> This workflow allows you to receive updates about the positiong of the ISS and add it to a table in TimescaleDB.

![workflow-screenshot](fileId:398)

**Cron node:** The Cron node triggers the workflow every minute. You can configure the time based on your use-case.

**HTTP Request node:** This node makes an HTTP Request to an API that returns the position of the ISS. Based on your use-case you may want to fetch data from a different URL. Enter the URL in the ***URL*** field.

**Set node:** In the Set node we set the information that we need in the workflow. Since we only need the timestamp, latitude, and longitude we set this in the node. If you need other information, you can set them in this node.

**TimescaleDB node:** This node stores the information in a table named `iss`. You can use a different table as well.

## 📊 Basic Information

- **Workflow ID:** 917
- **Complexity:** beginner
- **Node Count:** 4
- **Views:** 648
- **Downloads:** 64
- **Created:** 2021/2/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/917)

## 👤 Author

- **Name:** Harshil Agrawal
- **Username:** @harshil1712

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **timescaleDb** 
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
