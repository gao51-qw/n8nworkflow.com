# Automatically create daily list of todos in Todoist

> ## Use case
Automatically create todo items in Todoist every morning. 

This workflow has two flows
1. At 5am, delete any uncompleted tasks every morning
2. At 5:10 am, copy all template tasks into Inbox

In each template task, set the due dates and days to add the task. You can do that like this `days:mon,tues; due:8pm` which will add the task every Monday and Tuesday and make it due at 8pm.


## How to setup
1. Add Todoist creds
2. Create a `template` list to copy from in Todoist. Add days and due times on each task as necessary.
3. Set the projects to copy from and to write to in each **Todoist** node



## 📊 Basic Information

- **Workflow ID:** 2149
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 2426
- **Downloads:** 242
- **Created:** 2024/2/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2149)

## 👤 Author

- **Name:** Mutasem
- **Username:** @mutasem

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **stickyNote** (×3)
- **todoist** (×4)
- **code** 
- **filter** 
- **scheduleTrigger** (×2)
- **if** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
