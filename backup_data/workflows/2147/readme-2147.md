# Snooze Todoist tasks until 3 days before due date

> ## Use case
This workflow snoozes any Todoist tasks, by moving them into a Snoozed todoist list and unsnoozes them 3 days before due date. Helps keep inbox clear only of tasks you need to worry about soon.
![Screenshot 20240228 at 19.40.42.png](fileId:754)

## How to setup
1. Add your Todoist creds
2. Create a Todoist project called `snoozed`
3. Set the project ids in the relevant nodes
4. Add due dates to your tasks in Inbox. Watch them disappear to `snoozed`. Set their date to tomorrow, watch it return to inbox.

## How to adjust this template
Adjust the timeline.. Maybe 3 days is too close for you. Works mostly for me :)

## 📊 Basic Information

- **Workflow ID:** 2147
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 835
- **Downloads:** 83
- **Created:** 2024/2/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2147)

## 👤 Author

- **Name:** Mutasem
- **Username:** @mutasem

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **if** (×3)
- **scheduleTrigger** (×2)
- **todoist** (×2)
- **dateTime** 
- **stickyNote** (×4)
- **set** (×3)
- **filter** 
- **crypto** 
- **itemLists** 
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
