# Upload files to Dropbox and generate direct download links

> **How It Works**
This sub-workflow uploads files to Dropbox and returns a direct download link:

Upload file - Receives file from parent workflow and uploads to Dropbox
Check for existing link - Queries Dropbox API to see if a shared link already exists for this file
Create or reuse link - If no link exists, creates a new public shared link; otherwise uses existing one
Convert to direct link - Transforms Dropbox's standard sharing URL (dropbox.com) into a direct download URL (dl.dropboxusercontent.com)
Return URL - Outputs the final direct download link for use in other workflows

**Important:** File names must be unique, or you'll get links to old files with the same name.

**Setup Steps
Time estimate: ~25-30 minutes (first time)**

**Create Dropbox app** - Register at https://www.dropbox.com/developers/apps and get App Key + App Secret. Grant "Files and folders" + "Collaboration" permissions
Configure OAuth2 credentials - Add Dropbox OAuth2 credentials in n8n (2 places: "Upload a file" and "List Shared Links" nodes). Set redirect URI to your n8n instance

Create data table - Make a table called "cred-Dropbox" with columns: id (value: 1) and token (your access token)

Set up token refresh - Deploy the companion "Dropbox Token Refresher" workflow (referenced but not included as its a paid workflow) to auto-refresh tokens

Customize upload path - Update the path in "Upload a file" node (currently /Automate/N8N/host/)

Test with form - Use the included test workflow to verify everything works

Pro tip: Generate your first access token manually in the Dropbox app console to test uploads before setting up auto-refresh.

## 📊 Basic Information

- **Workflow ID:** 10299
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 346
- **Downloads:** 34
- **Created:** 2025/10/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10299)

## 👤 Author

- **Name:** Anthony
- **Username:** @usascholar

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **executeWorkflowTrigger** 
- **set** (×5)
- **stickyNote** (×5)
- **httpRequest** (×2)
- **if** 
- **dropbox** 
- **dataTable** 
- **formTrigger** 
- **noOp** 
- **executeWorkflow** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
