# Nightly n8n backup to Dropbox

> This template will create a nightly backup of all your n8n workflows to a Dropbox folder. Each night, the previous night's backups are moved into an "old" folder, and renamed with the date they were taken.

Backups over a specified age are deleted. (this is disabled by default for safety until you manually enable and verify it with your own setup)

Prerequisites
- Dropbox account and credentials
- A destination folder for backups

Setup
- Update all dropbox nodes with your credential
- Edit the **Schedule Trigger** node with the desired time to run the backup
- Edit the **DESTINATION FOLDER** node to specify the path in dropbox to upload to. This should be a folder and *include* the trailing /
- If you want to automatically purge old backups
	- Edit the **PURGE DAYS** node to specify the age to purge
	- Enable the **PURGE DAYS** node, and the 3 subsequent nodes
- Enable the workflow to run on the specified schedule



## 📊 Basic Information

- **Workflow ID:** 2075
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 7096
- **Downloads:** 709
- **Created:** 2024/1/31
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2075)

## 👤 Author

- **Name:** Joey D’Anna
- **Username:** @jdana

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **scheduleTrigger** 
- **dateTime** (×2)
- **dropbox** (×5)
- **stickyNote** (×3)
- **n8n** 
- **moveBinaryData** 
- **set** 
- **merge** 
- **filter** 
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
