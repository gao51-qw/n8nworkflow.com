# Check dependencies before completing Awork tasks (workaround)

> Awork currently does not support a check for open subtasks or open dependencies when setting a task status to done. This workflow offers you a simple workaround to add this functionality to Awork and notifies users when triggered. Multiple configuration options available.

**How it works**
* Triggered via Awork Webhook call on status change of tasks
* If task is marked as done, subtasks and/or dependent tasks are checked for their status
* If unfinished tasks are found, a status rollback to previous status is performed and user gets notified 

**Set up steps**
* Add webhook call to Awork
* Configure Awork API credentials
* Set up workflow configuration via setup node, e.g. user notification text, restrict to subtasks/dependency checks etc.



## 📊 Basic Information

- **Workflow ID:** 4350
- **Complexity:** advanced
- **Node Count:** 44
- **Views:** 166
- **Downloads:** 16
- **Created:** 2025/5/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4350)

## 👤 Author

- **Name:** Gregor
- **Username:** @gregorg

## 🏷️ Categories

- Project Management

## 🔗 Nodes Used

- **httpRequest** (×7)
- **aggregate** (×3)
- **set** (×2)
- **splitOut** 
- **filter** (×2)
- **if** (×8)
- **stickyNote** (×19)
- **webhook** 
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 44 nodes with 23 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
