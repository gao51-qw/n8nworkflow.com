# Send daily weather updates to a phone number via Plivo

> This workflow allows you to send daily weather updates via an SMS message using the Plivo node.

![workflow-screenshot](fileId:460)

**Cron node:** The Cron node will trigger the workflow daily at 9 AM.

**OpenWeatherMap node:** This node will return data about the current weather in Berlin. To get the weather updates for your city, you can enter the name of your city instead.

**Plivo node:** This node will send an SMS with the weather update, which was sent by the previous node.


## 📊 Basic Information

- **Workflow ID:** 1005
- **Complexity:** beginner
- **Node Count:** 3
- **Views:** 1353
- **Downloads:** 135
- **Created:** 2021/3/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1005)

## 👤 Author

- **Name:** Harshil Agrawal
- **Username:** @harshil1712

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **plivo** 
- **openWeatherMap** 
- **cron** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 3 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
