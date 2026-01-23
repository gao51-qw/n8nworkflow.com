# Sync tasks automatically from Todoist to Notion

> This workflow checks if the task in Todoist has a specific label and based on that creates a new database page in Notion.

## Prerequisites

- Todoist account and [Todoist credentials](https://docs.n8n.io/integrations/builtin/credentials/todoist/)
- Notion account and [Notion credentials](https://docs.n8n.io/integrations/builtin/credentials/notion/)

## How it works

1. To start the workflow add a task to Todoist and mark it with a label, e.g. “send-to-n8n”.
2. Wait a maximum of 30 seconds.
3. Todoist node identifies the tasks marked as “send-to-n8n”.
4. Notion node creates a new Notion database page. Notice Notion has a new task now with the same name as in Todoist.

## 📊 Basic Information

- **Workflow ID:** 1778
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 6070
- **Downloads:** 607
- **Created:** 2022/8/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1778)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **scheduleTrigger** 
- **todoist** (×2)
- **notion** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 4 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
