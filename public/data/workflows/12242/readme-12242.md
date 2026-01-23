# Back up self-hosted workflows to Google Drive daily with change detection

> This workflow creates a **daily, automated backup** of all workflows in a self-hosted n8n instance and stores them in Google Drive. Instead of exporting every workflow on every run, it uses **content hashing** to detect meaningful changes and only updates backups when a workflow has actually been modified.

To keep Google Drive clean and predictable, the workflow intentionally **deletes the existing backup file before uploading the updated version**. This avoids duplicate files and ensures there is always *one authoritative backup per workflow*.

A **Data Table** is used as an index to track workflow IDs, hash values, and timestamps. This allows the workflow to quickly determine whether a workflow already exists, whether its content has changed, or whether it should be skipped entirely.

### How it works
- Runs daily using a Cron Trigger.
- Fetches all workflows from the n8n API.
- Processes workflows one-by-one for reliability.
- Generates a SHA-256 hash for each workflow.
- Compares hashes against a stored Data Table.
- Deletes existing Google Drive backups when changes are detected.
- Uploads updated workflows and skips unchanged ones.
- Store new or updated workflows details in Data Table.
-  Filters workflows based on the configured backup scope (all | active | tagged ). Backs up all workflows, only active workflows, or only workflows matching a specific tag.
- Applies the scope filter before hashing and comparison, ensuring only relevant workflows are processed.

### Setup steps
- **Set the Cron schedule**
Open the Cron Trigger node and choose the time you want the backup to run (for example, once daily during off-peak hours).

- **Create a Data Table**
Create a new n8n Data Table with the title defined in dataTableTitle. This table stores workflowId, workflowName, hashCode,  and DriveFiveId.

- **Configure the Set node**
In the Set Backup Configuration node, provide the following values:
{
  "n8nHost": "https://your-n8n-domain",
  "apiKey": "your-n8n-api-key",
  "backupFolder": "/n8n/workflow-backups",
  "hashAlgorithm": "sha256",
  "dataTableTitle": "n8n_workflow_backup_index",
 "backupScope" : "",  
  "requiredTag" : ""
}

- In the Set Backup Configuration node, choose how workflows should be selected for backup:
**all** – backs up every workflow (default)
**active** – backs up only enabled workflows
**tagged** – backs up only workflows containing a specific tag
If using the tagged option, provide the required tag name to match.
{
  "backupScope": "tagged",
  "requiredTag": "production"
}

- **Connect Google Drive credentials**
Authorize your Google Drive account and ensure the backup folder exists.

- **Activate the workflow**
Once enabled, backups run automatically with no further action required.

## 📊 Basic Information

- **Workflow ID:** 12242
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 4
- **Downloads:** 0
- **Created:** 2025/12/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12242)

## 👤 Author

- **Name:** Chandan Singh
- **Username:** @coolchandan62

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** 
- **httpRequest** 
- **code** (×2)
- **if** (×6)
- **googleDrive** (×2)
- **dataTable** (×2)
- **splitOut** 
- **splitInBatches** 
- **crypto** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
