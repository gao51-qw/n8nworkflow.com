# Clone nested folder structures in Google Drive with custom naming

> # Google Drive Nested Folder Structure Cloner

## How it works
* Takes any Google Drive folder structure and creates an exact copy with custom naming
* Perfect for agencies, consultants, or anyone who needs identical folder structures for multiple projects
* Creates folder hierarchy only (no files are copied)
* Handles nested folders automatically with level-by-level processing

## Set up steps
* Get your source and destination folder IDs from Google Drive URLs
* Edit the 3 variables in the CONFIG node (takes 30 seconds)
* Connect your Google Drive credentials in n8n
* Run the workflow and watch it create your folder structure
* For deeply nested folders, run multiple times to process each level

## What you'll need
* Google Drive account with API access configured in n8n
* Read permissions on source folder, write permissions on destination folder

## Pro tips
* Create a "Templates" folder in Google Drive for your reusable structures
* The workflow intelligently skips folders that already exist
* Each run processes the next level down for nested structures
* Check the final report to see exactly what was created, skipped, or failed

## 📊 Basic Information

- **Workflow ID:** 4349
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 155
- **Downloads:** 15
- **Created:** 2025/5/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4349)

## 👤 Author

- **Name:** Jagged Frontiersman
- **Username:** @jagged-frontiersman

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **manualTrigger** 
- **code** (×3)
- **httpRequest** (×2)
- **if** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
