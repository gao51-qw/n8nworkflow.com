# Service health monitoring with double-verification & Slack alerts

> ## How it works  
This workflow checks the health of your web services or APIs on a schedule, prevents false alerts with a second verification, and sends confirmed failure alerts directly to Slack.  

- Performs scheduled HTTP health checks  
- Waits and retries before confirming failure  
- Sends alerts only if the service fails twice in a row  
- Reduces false positives and avoids alert fatigue  

## Setup steps  
1. Add your service URL(s) in the HTTP Request nodes  
2. Configure your Slack Bot Token in n8n  
3. Deploy the workflow  
4. Get real-time Slack alerts when services go down 🚨  

## Use case  
Perfect for IT teams, DevOps engineers, and developers who need reliable uptime monitoring without noise.  

![Slack Example](https://raw.githubusercontent.com/TuguiDragos/Service-Health-Monitor/refs/heads/main/Slack.png)

## 📊 Basic Information

- **Workflow ID:** 8130
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 123
- **Downloads:** 12
- **Created:** 2025/9/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8130)

## 👤 Author

- **Name:** Țugui Dragoș
- **Username:** @tuguidragos

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **scheduleTrigger** 
- **httpRequest** (×2)
- **if** (×2)
- **wait** 
- **slack** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
