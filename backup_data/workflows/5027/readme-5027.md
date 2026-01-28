# Generate AI avatar videos with HeyGen and Google Sheets integration

> This template streamlines your AI Avatar Video Automation workflow by connecting Google sheets for Voice Text & AI Avatar Video Link storage, using HTTP Nodes for connecting Heygen API & AI Avatar/Voice Id for automated Video generation.

Pre-requisites
Before setting up this workflow, ensure you have:

A Google account with access to Google Sheets

A Heygen Account with API access in account's settings.



n8n.io account with workflow access

Setup Instructions

Configure Data Source
Create a Google Sheet with the following columns: Script/Voice Text & Final AI Avatar Video Link.

Connect Google Sheet
Add your Google sheet credentials in the “Google Sheet” node
Specify the folder path where your columns are stored.

Configure the node to retrieve files based on filenames from your Google Sheet

Set Up HTTP Node with Heygen API Credentials

Configure the node to generate AI Video based on Script/Voice Text.


Configure HTTP Node 2
Connect Heygen API Credentials
Set up the API node to Get the AI Avatar Video Link.

then finally setup Google sheet node again to get & upload the final AI Avatar video link in the column "the Final AI Avatar Video Link"

Workflow Automation Setup
Configure the scheduler node to run at your preferred frequency
Set up error handling to notify you of any posting failures


Execution Instructions
After completing all connections, test the workflow.

Monitor the execution in the n8n dashboard to ensure proper functioning

View the “Executions” tab to track successful  and troubleshoot any errors.

This template saves hours of manual AI Avatar video Creation Process. use this without the daily manual effort.


Details
Nodes used in workflow
Manual Trigger Node
Google Sheet Node 1
HTTP Node 1
HTTP Node 2
Google Sheets Node 2


## 📊 Basic Information

- **Workflow ID:** 5027
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 2771
- **Downloads:** 277
- **Created:** 2025/6/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5027)

## 👤 Author

- **Name:** Sagar
- **Username:** @sagarmasand9

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** (×2)
- **googleSheets** (×2)
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
