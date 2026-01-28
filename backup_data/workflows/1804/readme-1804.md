# Sync your GitHub issues to your Notion database

> 
This workflow syncs your GitHub issues to your Notion database. Whenever a new issue is opened in your GitHub repository, it will be shown in your Notion database, syncing the status property (opened/edited/closed/deleted). In case there’s no Notion database existing yet, a new one will be created automatically.

## Prerequisites
- Notion account and [Notion credentials](https://docs.n8n.io/integrations/builtin/credentials/notion/) 
- GitHub account and [GitHub credentials](https://docs.n8n.io/integrations/builtin/credentials/github/)

## How it works

1. Github trigger starts the workflow when a new issue is created in a GitHub repository.
2. If node splits the workflow conditionally, showing whether the issue is new or an update of an existing issue. 
3. If data is new, the Notion node will create a new database page in Notion.
4. If the data is not new, the Function node will create a Notion filter that will find its specific database page by issue ID.
5. Switch node will then conditionally route the data into the appropriate Notion page, based on the update made upon it.


## 📊 Basic Information

- **Workflow ID:** 1804
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 4903
- **Downloads:** 490
- **Created:** 2022/10/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1804)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- Project Management

## 🔗 Nodes Used

- **notion** (×6)
- **stickyNote** 
- **switch** 
- **if** 
- **function** 
- **githubTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
