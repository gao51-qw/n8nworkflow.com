# Qualys vulnerability trigger scan subWorkflow

> ## This workflow is triggered by a parent workflow initiated via a Slack shortcut. Upon activation, it collects input from a modal window in Slack and initiates a vulnerability scan using the Qualys API.

## Key Features
- **Trigger:** Launched by a parent workflow through a Slack shortcut with modal input.
- **API Integration:** Utilizes the Qualys API for vulnerability scanning.
- **Data Conversion:** Converts XML scan results to JSON for further processing.
- **Loop Mechanism:** Continuously checks the scan status until completion.
- **Slack Notifications:** Posts scan summary and detailed results to a specified Slack channel.

## Workflow Nodes
1. **Start VM Scan in Qualys:** Initiates the scan with specified parameters.
2. **Convert XML to JSON:** Converts the scan results from XML format to JSON.
3. **Fetch Scan Results:** Retrieves scan results from Qualys.
4. **Check if Scan Finished:** Verifies whether the scan is complete.
5. **Loop Mechanism:** Handles the repetitive checking of the scan status.
6. **Slack Notifications:** Posts updates and results to Slack.


Relevant Links
- [Qualys API Documentation](https://qualysguard.qg2.apps.qualys.com/qwebhelp/fo_portal/api_doc/scans/index.htm#t=vm_scans%2Flaunch_vm_scan.htm)
- [Qualys Platform Documentation](https://www.qualys.com/platform-identification/)
- [Parent workflow link](https://n8n.io/workflows/2510-enhance-security-operations-with-the-qualys-slack-shortcut-bot/)
- [Link to Report Generator Subworkflow](https://n8n.io/workflows/2512-qualys-scan-slack-report-subworkflow/)


## 📊 Basic Information

- **Workflow ID:** 2511
- **Complexity:** advanced
- **Node Count:** 28
- **Views:** 2901
- **Downloads:** 290
- **Created:** 2024/10/31
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2511)

## 👤 Author

- **Name:** Angel Menendez
- **Username:** @djangelic

## 🏷️ Categories

- SecOps

## 🔗 Nodes Used

- **httpRequest** (×2)
- **xml** (×2)
- **splitInBatches** 
- **stickyNote** (×9)
- **wait** 
- **if** 
- **executeWorkflowTrigger** 
- **slack** (×4)
- **set** (×3)
- **merge** (×2)
- **manualTrigger** 
- **noOp** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 28 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
