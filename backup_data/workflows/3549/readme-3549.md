# Audit Google Drive file permissions for access control management

> ### This n8n template reviews and audits recently active Google Drive files and reports on files with excessively open permissions. This shows how you can automate simple compliance tasks for access control management.

File Sharing Permissions are routinely abused when access needs and scopes expand to many colleagues, clients and users. Often, granting excessively open permissions means you can get back to work rather than deal with numerous access request notifications. Whilst sometimes justified, the problem is that the permissions are rarely reverted to a safer setting at a later date when it is no longer needed.

This template serves to improve your security posture by giving frequent reminders of these open files so that they can be actioned and not forgotten about.

**See example Audit Report here:** [https://docs.google.com/spreadsheets/d/1V2aiLhp3_nH7EBniMn7D0kFHg7-A5NjpDZXMhb4F5UI/edit?gid=503992967](https://docs.google.com/spreadsheets/d/1V2aiLhp3_nH7EBniMn7D0kFHg7-A5NjpDZXMhb4F5UI/edit?gid=503992967)

### How it works
* A scheduled trigger runs everyday to generate a new audit report. A new sheet is created in a designated Google Sheets document to store the day's results.
* The Google Drive node is used with Advanced Search params to fetch recently modified files for the user with each file result containing the current permission settings.
* The results are filtered for those with publicly accessible "anyone with link" and sharing with external users via domain.
* The results are then manipulated into rows so that we can append them to the Sheet we created earlier.
* The audit Google Sheet is updated with the results and an audit report is sent to the user to action.

### How to use
* Set the scheduled trigger to a more appropriate interval which works for you or your organisation.
* Consider using allowlists for organisations you frequently share with to reduce the number of false positives.
* The results can be forwarded to other security or analytical products as required.

### Requirements
* Google Drive for Document Management
* Google Sheet for Reports and Data Collection
* Gmail to Email Reports

### Customising the workflow
* Not using Google? Apply the same approach using Microsoft Sharepoint or Dropbox.
* If your security policies require it, you could automate fixing the file permissions as a proactive action instead and notify the user later.

## 📊 Basic Information

- **Workflow ID:** 3549
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 2430
- **Downloads:** 243
- **Created:** 2025/4/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3549)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- SecOps

## 🔗 Nodes Used

- **filter** (×2)
- **googleSheets** (×2)
- **set** (×2)
- **splitInBatches** 
- **noOp** 
- **splitOut** (×2)
- **aggregate** 
- **gmail** 
- **googleDrive** 
- **stickyNote** (×5)
- **scheduleTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
