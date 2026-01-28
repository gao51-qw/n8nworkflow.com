# Send alert when data is created in app/database

> This template shows how you can take any event from any service, transform its data and send an alert to your desired app. 

Specifically, this example monitors a **Linear project** for new bug submissions. Then it only sends a **Slack notification** to a channel if a new bug is urgent. You can swap the Linear trigger for another Task Management app such as Jira or Asana; or an entirely different usecase.

Setup instructions are located inside the workflow template. 

## 📊 Basic Information

- **Workflow ID:** 1932
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 2942
- **Downloads:** 294
- **Created:** 2023/7/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1932)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- Project Management

## 🔗 Nodes Used

- **stickyNote** (×4)
- **linearTrigger** 
- **manualTrigger** 
- **code** 
- **filter** 
- **set** 
- **slack** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
