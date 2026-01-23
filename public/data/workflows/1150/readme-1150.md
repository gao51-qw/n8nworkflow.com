# Backup n8n workflows to Google Drive

> Temporary solution using the undocumented REST API for backups using Google drive.

Please note that there are issues with this workflow. It does not support versioning, so please know that it will create multiple copies of the workflows so if you run this daily it will make the folder grow quickly. Once I figure out how to version in Gdrive I'll update it here. 

## 📊 Basic Information

- **Workflow ID:** 1150
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 23419
- **Downloads:** 2341
- **Created:** 2021/7/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1150)

## 👤 Author

- **Name:** Angel Menendez
- **Username:** @djangelic

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **manualTrigger** 
- **merge** 
- **moveBinaryData** 
- **function** 
- **httpRequest** (×2)
- **functionItem** 
- **googleDrive** 
- **cron** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
