# Backup all n8n workflows to Google Drive every 4 hours

> This workflow takes off the task of backing up workflows regularly on Github and uses Google Drive as the main tool to host these. 

This can be a good way to keep track of your workflows so that you never lose any workflows in case your n8n goes down.

## How does it work

1. Creates a new folder within a specified folder with the time its backed up
2. Loops around all workflows, converts them to a JSON file and uploads them to the created folder
3. Gets the previous backups and deletes them

This has a clean feel and look as it simplifies the backup while not keeping a cache of workflows on your drive.


## Setup

1. Create a new folder
2. Create new service account credentials
3. Share the folder with the `service account` email
4. Upload this workflow to your canvas and map the credentials
5. Set the schedule that you need your workflows to run and manage your backups
6. Activate the workflow

Happy Productivity!

[@Imperol](https://www.linkedin.com/in/zacharia-kimotho/)

## 📊 Basic Information

- **Workflow ID:** 2886
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 36513
- **Downloads:** 3651
- **Created:** 2025/2/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2886)

## 👤 Author

- **Name:** Zacharia Kimotho
- **Username:** @imperolq

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **manualTrigger** 
- **n8n** 
- **splitInBatches** 
- **googleDrive** (×4)
- **convertToFile** 
- **scheduleTrigger** 
- **filter** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
