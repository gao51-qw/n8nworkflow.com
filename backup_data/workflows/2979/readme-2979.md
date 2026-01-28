# Bulk file upload to Google Drive with folder management

> # 🗂️ Bulk File Upload to Google Drive with Folder Management

## How it works
1. User submits files and target folder name via form
2. Workflow checks if folder exists in Drive
3. Creates folder if needed or uses existing one
4. Processes and uploads all files maintaining structure

## Set up steps (Est. 10-15 mins)
1. Set up Google Drive credentials in n8n
2. Replace parent folder ID in search query with your Drive folder ID
3. Configure form node with:
   - Multiple file upload field
   - Folder name text field
4. Test workflow with sample files

💡 Detailed configuration steps and patterns are documented in sticky notes within the workflow.

Perfect for:
- Bulk file organization
- Automated Drive folder management
- File upload automation
- Maintaining consistent file structures


## 📊 Basic Information

- **Workflow ID:** 2979
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 6649
- **Downloads:** 664
- **Created:** 2025/2/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2979)

## 👤 Author

- **Name:** Julian Kaiser
- **Username:** @jksr

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **formTrigger** 
- **set** 
- **googleDrive** (×4)
- **if** 
- **code** (×2)
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
