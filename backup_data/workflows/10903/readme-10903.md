# Automate daily workflow backups to Google Drive

> ## Daily n8n Workflow Backup
Automatically backs up all workflows to Google Drive daily.

### How it works
1. Triggers daily at 11 PM (or manually on demand)
2. Creates a timestamped backup folder in Google Drive
3. Fetches all workflows from your n8n instance
4. Converts each workflow to a JSON file
5. Uploads files to the backup folder
6. Automatically deletes old backup folders to save storage

### Setup steps
1. Ensure your n8n instance has API access enabled
2. Connect your Google Drive account (OAuth2)
3. Create a Google Drive folder for backups and copy its **Folder ID**
4. **Important:** Open the 'Cleanup Old Backups' node and paste that Folder ID into the code

## 📊 Basic Information

- **Workflow ID:** 10903
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 75
- **Downloads:** 7
- **Created:** 2025/11/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10903)

## 👤 Author

- **Name:** Panth1823
- **Username:** @panth1823

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **stickyNote** (×4)
- **convertToFile** 
- **manualTrigger** 
- **googleDrive** (×2)
- **scheduleTrigger** 
- **n8n** 
- **splitInBatches** 
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
