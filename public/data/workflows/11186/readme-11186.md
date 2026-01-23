# Automate real estate client folder creation with Google Sheets and Drive

> ## What this workflow does

This workflow automates backend setup tasks for real estate client portals. When a new property transaction is added to your Google Sheets database with a buyer email but no document folder assigned, the workflow automatically creates a dedicated Google Drive folder, updates the spreadsheet with the folder URL, and adds an initial task prompting the client to upload documents.

This automation eliminates manual folder creation and task assignment, ensuring every new transaction has its documentation infrastructure ready from day one. Your clients can access their dedicated folder directly from the portal, keeping all property-related documents organized and accessible in one place.

## Key benefits

- **Eliminate manual setup**: No more creating folders and tasks individually for each transaction
- **Consistent client experience**: Every buyer gets the same professional onboarding process
- **Organized documentation**: Each transaction has its own Google Drive folder automatically shared with the client
- **Time savings**: Focus on closing deals instead of administrative setup

## Setup requirements

**Important:** You must make a copy of the [reference Google Sheets spreadsheet](https://docs.google.com/spreadsheets/d/1UJPaBd_qHsNgInA2mrYaq7wgXLHzFw9jcTUoSpTxMDk/edit?usp=sharing) to your own Google account before using this workflow.

Your spreadsheet needs at minimum two tabs:
- **Transactions tab**: Columns for ID, Buyer Email, Documents URL, Property Address, and Status
- **Tasks tab**: Columns for Transaction ID, Task Name, Task Description, and Status

## Configuration steps

1. Authenticate your Google Sheets and Google Drive accounts in n8n
2. Update the Google Sheets trigger node to point to your copied spreadsheet
3. Set the parent folder ID in the "Create Client Documents Folder" node (where transaction folders should be created)
4. Customize the initial task name and description in the "Add Initial Upload Task" node
5. Verify all sheet names match your spreadsheet tabs

The workflow triggers every minute checking for new transactions that meet the criteria (has buyer email, missing documents URL).

## 📊 Basic Information

- **Workflow ID:** 11186
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 190
- **Downloads:** 19
- **Created:** 2025/11/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11186)

## 👤 Author

- **Name:** Milan Vasarhelyi - SmoothWork
- **Username:** @vasarmilan

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **stickyNote** (×2)
- **googleSheetsTrigger** 
- **filter** 
- **googleDrive** 
- **googleSheets** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
