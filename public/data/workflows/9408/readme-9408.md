# Automated workflow test runner with Google Drive, Sheets & ClickUp result logging

> ## Description
This workflow acts as a CI/CD-style test harness for validating other n8n workflows. It executes a target workflow (here: Archive Payment Receipts), evaluates pass/fail outcomes, and generates structured reports. Results are automatically archived to Google Drive, logged in Google Sheets, and synced with ClickUp for visibility. Both success and failure scenarios are handled with standardized formatting.

## What This Template Does (Step-by-Step)
1. ⚡ Manual Trigger – Start the test run manually.
2.  ▶️ Execute Target Workflow Under Test – Calls the specified workflow (Archive Payment Receipts) and captures its output, even if it errors.
3.  ✅ Test Result Evaluation (If Node) – Checks if the output contains errors.
- Pass Path → success formatting + archival.
- Fail Path → failure formatting + logging.
-  📄 Format Success Test Result (Set Node) – Creates a structured result object with:
- Status: ✅ Passed
- Workflow Name
- Timestamp
-  📄 Format Failed Test Result (Set Node) – Same as above, but with ❌ Failed status.
-  📝 Generate Success/Failure Report Text (Code Node) – Converts structured data into a human-readable report string.
-  📦 Convert Report to Text File – Transforms the text into a .txt file for archiving.
-  ☁️ Archive Reports to Google Drive – Saves .txt files (success/failure) into the resume store folder with timestamped filenames.
-  ✏️ Update ClickUp Task (Success/Failure) – Posts results directly into a ClickUp task for visibility.
-  📊 Log Error Details to Error Tracking Sheet (Google Sheets) – Appends raw error objects to an error log sheet for debugging and trend analysis.

## Prerequisites
- Target workflow to test (e.g., Archive Payment Receipts)
- Google Drive folder for report storage
- Google Sheets (Error Log tab)
- ClickUp API credentials
- n8n instance

## Key Benefits
 ✅ Automates workflow regression testing
 ✅ Captures pass/fail outcomes with full audit trail
 ✅ Maintains error logs for debugging and reliability improvements
 ✅ Keeps stakeholders updated via ClickUp integration
 ✅ Supports compliance with archived test reports

## Perfect For
- Teams running workflow QA & testing
- Organizations needing audit-ready test reports
- DevOps pipelines with continuous validation of automations
- Stakeholders requiring real-time visibility into workflow health

## 📊 Basic Information

- **Workflow ID:** 9408
- **Complexity:** advanced
- **Node Count:** 27
- **Views:** 92
- **Downloads:** 9
- **Created:** 2025/10/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9408)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** (×13)
- **if** 
- **set** (×2)
- **code** (×2)
- **convertToFile** (×2)
- **googleDrive** (×2)
- **clickUp** (×2)
- **googleSheets** 
- **executeWorkflow** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 27 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
