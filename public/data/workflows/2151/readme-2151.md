# Automatically document n8n workflows directly in Notion database

> ## Use case
n8n workflows can go out of hand when you're automating as much as we do at n8n. We needed a place to document them and keep track of who owns and maintains them. To facilitate this we use this n8n workflow to automatically sync workflows directly to a Notion database if it has the tag `sync-to-notion`.

![Screenshot 20240228 at 21.03.27.png](fileId:756)![Screenshot 20240228 at 21.03.21.png](fileId:757)

## How to setup
1. Add your n8n api creds
2. Add your Notion creds 
3. Create notion database with fields `env id` as `text`, `isActive (dev)` as `boolean`, `URL (dev)` as `url`, `Workflow created at` as `date`, `Workflow updated at` as `date`, `Error workflow setup` as `boolean` 
 (Make sure page is connected)
4. Add tag `sync-to-notion` to some workflows

## 📊 Basic Information

- **Workflow ID:** 2151
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 4761
- **Downloads:** 476
- **Created:** 2024/2/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2151)

## 👤 Author

- **Name:** Mutasem
- **Username:** @mutasem

## 🏷️ Categories

- Internal Wiki

## 🔗 Nodes Used

- **scheduleTrigger** 
- **n8n** 
- **set** (×2)
- **httpRequest** 
- **if** 
- **notion** (×2)
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
