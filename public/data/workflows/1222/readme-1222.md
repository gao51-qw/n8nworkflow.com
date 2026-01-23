# Backup workflows to GitHub

> **Note:** This workflow uses the internal API which is not official. This workflow might break in the future.

The workflow executes every night at 23:59. You can configure a different time bin the Cron node.

Configure the GitHub nodes with your username, repo name, and the file path.

In the HTTP Request nodes (making a request to `localhost:5678`), create Basic Auth credentials with your n8n instance username and password.


## 📊 Basic Information

- **Workflow ID:** 1222
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 9732
- **Downloads:** 973
- **Created:** 2021/9/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1222)

## 👤 Author

- **Name:** Harshil Agrawal
- **Username:** @harshil1712

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **github** (×3)
- **function** (×2)
- **merge** (×2)
- **httpRequest** (×3)
- **cron** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
