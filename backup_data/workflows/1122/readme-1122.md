# Database alerts with Notion and SIGNL4

> ## Objective
In industry and production sometimes machine data is available in databases. That might be sensor data like temperature or pressure or just binary information.
In this sample flow reads machine data and sends an alert to your SIGNL4 team when the machine is down. When the machine is up again the alert in [SIGNL4](https://www.signl4.com/) will get closed automatically.
## Setup
We simulate the machine data using a Notion table.

![image.png](fileId:511)
When we un-check the Up box we simulate a machine-down event. In certain intervals n8n checks the database for down items. If such an item has been found an alert is send using SIGNL4 and the item in Notion is updates (in order not to read it again).

![workflow-screenshot](fileId:509)

Status updates from SIGNL4 (acknowledgement, close, annotation, escalation, etc.) are received via webhook and we update the Notion item accordingly.

This is how the alert looks like in the [SIGNL4](https://www.signl4.com/) app.

![image.png](fileId:510)

The flow can be easily adapted to other database monitoring scenarios.


## 📊 Basic Information

- **Workflow ID:** 1122
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 965
- **Downloads:** 96
- **Created:** 2021/6/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1122)

## 👤 Author

- **Name:** Ron
- **Username:** @rons4

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **function** (×2)
- **notionTrigger** 
- **webhook** 
- **notion** (×5)
- **interval** 
- **signl4** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
