# Construction blueprint to Google Sheets automation with VLM Run and Google Drive

> **Automatically process Construction Blueprints into structured Google Sheets entries with VLM extraction**

**What this workflow does**

1. **Monitors Google Drive** for new blueprints in a target folder  
2. **Downloads the file** inside n8n for processing  
3. **Sends the file to VLM Run** for VLM analysis  
4. **Fetches details** from the `construction.blueprint` domain as JSON  
5. **Appends normalized fields** to a Google Sheet as a new row

## Setup

**Prerequisites:** Google account, VLM Run API credentials, Google Sheets access, n8n. Install the verified **VLM Run** node by searching for **VLM Run** in the node list, then click **Install**. Once installed, you can start using it in your workflows.

**Quick Setup:**

1. Create the Drive folder you want to watch and copy its Folder ID  
2. Create a Google Sheet with headers like: `timestamp, file_name, file_id, mime_type, size_bytes, uploader_email, document_type, document_number, issue_date, author_name, drawing_title_numbers, revision_history, job_name, address, drawing_number, revision, drawn_by, checked_by, scale_information, agency_name, document_title, blueprint_id, blueprint_status, blueprint_owner, blueprint_url`

3. Configure Google Drive OAuth2 for the trigger and download nodes  
4. Add VLM Run API credentials from https://app.vlm.run/dashboard to the VLM Run node  
5. Configure Google Sheets OAuth2 and set Spreadsheet ID and target sheet tab  
6. Test by uploading a sample file to the watched Drive folder and activate

## Perfect for

- Converting uploaded construction blueprint documents into clean text  
- Organizing extracted blueprint details into structured sheets  
- Quickly accessing key attributes from technical files  
- Centralized archive of blueprint-to-text conversions  

## Key Benefits

- **End to end automation** from Drive upload to structured Sheet entry  
- **Accurate text extraction** of construction blueprint documents  
- **Organized attribute mapping** for consistent records  
- **Searchable archives** directly in Google Sheets  
- **Hands-free processing** after setup  

## How to customize

**Extend by adding:**

* Version control that links revisions of the same drawing and highlights superseded rows
* Confidence scores per extracted field with threshold-based routing to manual or AI review
* Auto-generate a human-readable summary column for quick scanning of blueprint details
* Split large multi-sheet PDFs into per-drawing rows with individual attributes
* Cross-system sync to Procore, Autodesk Construction Cloud, or BIM 360 for project-wide visibility


## 📊 Basic Information

- **Workflow ID:** 7956
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 140
- **Downloads:** 14
- **Created:** 2025/8/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7956)

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
