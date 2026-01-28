# AI-powered document processing & organization with Gemini, VLM Run & Google Sheets

> **Automate multi-document handling with AI-powered extraction that adapts to any format and organizes it instantly.**

## What this workflow does

1. **Monitors Google Drive** for new uploads (receipts, resumes, claims, physician orders, blueprints, or any doc type)
2. **Automatically downloads and prepares** files for analysis
3. **Identifies the document type** using Google Gemini
4. **Parses structured data** via the trusted [VLM Run node](https://www.npmjs.com/package/@vlm-run/n8n-nodes-vlmrun) with OCR + layout parsing
5. **Stores records in Google Sheets** — AI Agent maps values to the correct sheet dynamically

## Setup

**Prerequisites:** Google Drive & Google Sheets accounts, VLM Run API credentials, n8n instance.

Install the verified [VLM Run node](https://www.npmjs.com/package/@vlm-run/n8n-nodes-vlmrun) by searching for **VLM Run** in the node list, then click **Install**. Once installed, you can integrate it directly for high-accuracy data extraction.

**Quick Setup:**

1. Configure Google Drive OAuth2 and select a folder for uploads

2. Add [VLM Run API credentials](https://app.vlm.run/dashboard)

3. Create a **Master Reference Google Sheet** with the following structure:

   | Document_Name          | Spreadsheet_ID                |
   | ---------------------- | ----------------------------- |
   | Receipt                | your-receipt-sheet-id         |
   | Resume                 | your-resume-sheet-id          |
   | Physician Order        | your-physician-order-sheet-id |
   | Claims Processing      | your-claims-sheet-id          |
   | Construction Blueprint | your-blueprint-sheet-id       |

   The **first column** holds the document type, and the **second column** holds the target sheet ID where extracted data should be appended.

4. In the **AI Agent node**, edit the **agent prompt** to:

   * Analyze the JSON payload from VLM Run
   * Look up the document type in the Master Reference Sheet
   * If a matching sheet exists → fetch headers, then append data accordingly
   * If headers don’t exist → create them from JSON keys, then insert values
   * If no sheet exists → add the new type to the Master Reference with an empty Spreadsheet ID

5. Test with a sample upload and activate the workflow

## How to customize this workflow to your needs

**Extend functionality by:**

* Adjusting the AI Agent prompt to support any new document schema (just update field mappings)
* Adding support for multi-language OCR or complex layouts in VLM Run
* Linking Sheets data to BI dashboards or reporting tools
* Triggering notifications when new entries are stored

This workflow leverages the **VLM Run node for flexible, precision extraction** and the **AI Agent for intelligent mapping**, creating a powerful system that adapts to any document type with minimal setup changes.


## 📊 Basic Information

- **Workflow ID:** 8788
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 332
- **Downloads:** 33
- **Created:** 2025/9/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8788)

## 👤 Author

- **Name:** Atik
- **Username:** @atik

## 🏷️ Categories

- Document Extraction
- AI RAG

## 🔗 Nodes Used

- **stickyNote** (×4)
- **googleDriveTrigger** 
- **googleDrive** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **httpRequestTool** 
- **googleSheetsTool** 
- **@vlm-run/n8n-nodes-vlmrun.vlmRun** 
- **webhook** 
- **@n8n/n8n-nodes-langchain.googleGemini** 
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
