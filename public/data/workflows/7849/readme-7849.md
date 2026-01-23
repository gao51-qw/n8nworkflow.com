# Extract and process healthcare claims with VLM Run, Google Drive and Sheets

> **Automatically process healthcare claims into structured Google Sheets entries with VLM Run extraction**

## What this workflow does

* Monitors Google Drive for new files in a target folder
* Downloads the file inside n8n for processing
* Sends the file to VLM Run for AI transcription or analysis
* Fetches extra details from the healthcare.claims-processing domain as JSON
* Appends normalized fields to a Google Sheet as a new row

## Setup

**Prerequisites:** Google account, VLM Run API credentials, Google Sheets access, n8n. Install the verified VLM Run node by searching for VLM Run in the node list, then click Install. Once installed, you can start using it in your workflows.

**Quick Setup:**

1. Create the Drive folder you want to watch and copy its Folder ID
2. Create a Google Sheet with headers like: timestamp, file\_name, file\_id, mime\_type, size\_bytes, uploader\_email, form\_type, carrier\_name, patient\_name, patient\_birth\_date, patient\_sex, patient\_address, insurance\_type, insurance\_id, insured\_name, total\_charge, amount\_due, amount\_paid, hospitalization\_from, hospitalization\_to, referring\_physician\_name, processing\_notes, …other claim fields as needed
3. Configure Google Drive OAuth2 for the trigger and download nodes
4. Add VLM Run API credentials from [https://app.vlm.run/dashboard](https://app.vlm.run/dashboard) to the VLM Run node
5. Configure Google Sheets OAuth2 and set Spreadsheet ID and target sheet tab
6. Test by uploading a sample file to the watched Drive folder and activate

## Perfect for

* Centralized intake of healthcare claim documents with instant AI summaries
* Claims and operations teams collecting structured claim insights
* Customer support attachments that need quick triage to a Sheet
* Compliance and audit logs for claim documents

## Key Benefits

* End to end automation from Drive to Sheets
* Accurate AI output via VLM Run with optional timestamps
* Domain enrichment from healthcare.claims-processing JSON
* Clean, searchable logs in Google Sheets
* No manual steps after activation

## How to customize

**Extend by adding:**

* OCR tuning and field validation for claim forms
* Per type routing for PDFs, images, or scanned forms
* Slack notifications on each new Sheet append
* Keyword extraction and auto tagging for claim categories
* Error branch that records failures to a second Sheet


## 📊 Basic Information

- **Workflow ID:** 7849
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 520
- **Downloads:** 52
- **Created:** 2025/8/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7849)

## 👤 Author

- **Name:** Shahrear
- **Username:** @shahrear

## 🏷️ Categories

- AI Summarization
- Multimodal AI

## 🔗 Nodes Used

- **@vlm-run/n8n-nodes-vlmrun.vlmRun** 
- **googleSheets** 
- **googleDrive** 
- **stickyNote** (×4)
- **googleDriveTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
