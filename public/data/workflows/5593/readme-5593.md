# Extract data from driver license uploads with VLM Run, Google Drive and Sheets

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.* 

## What this workflow does
1. **Monitors Google Drive** for new driver license image uploads
2. **Downloads and processes** images using VLM Run AI OCR
3. **Extracts key information** including license number, name, DOB, and dates  
4. **Saves structured data** to Google Sheets for instant access

## Setup
**Prerequisites:** Google Drive account, VLM Run API credentials, Google Sheets access, self-hosted n8n.
You need to install [VLM Run community node](https://www.npmjs.com/package/@vlm-run/n8n-nodes-vlmrun)

**Quick Setup:**
1. Configure Google Drive OAuth2 and create license upload folder
2. Add VLM Run [API credentials](https://app.vlm.run/dashboard)
3. Set up Google Sheets integration for data storage
4. Update folder/sheet IDs in workflow nodes
5. Test with sample license images and activate

## Perfect for
- Customer onboarding and identity verification
- KYC compliance and document processing
- HR employee verification and record keeping
- Insurance claim processing and validation
- Any business requiring license data extraction

## Key Benefits
- **Asynchronous processing** handles high-resolution images without timeouts
- **Multi-format support** for JPG, PNG, PDF, HEIC, WebP formats
- **Structured data output** ready for databases and integrations
- **Eliminates manual entry** saving hours of data input time
- **High accuracy OCR** with multi-state license support

## How to customize
**Extend by adding:**
* Address and additional field extraction
* Data validation and error checking
* Integration with CRM or customer databases  
* Email notifications for processing completion
* Audit trails and compliance reporting
* Duplicate detection and data deduplication

This workflow transforms manual license data entry into an automated, accurate, and compliant process, making identity verification seamless and reliable for your business operations.

## 📊 Basic Information

- **Workflow ID:** 5593
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 198
- **Downloads:** 19
- **Created:** 2025/7/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5593)

## 👤 Author

- **Name:** Mirajul Mohin
- **Username:** @mohinmirajul

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×5)
- **@vlm-run/n8n-nodes-vlmrun.vlmRun** 
- **googleDriveTrigger** 
- **webhook** 
- **googleSheets** 
- **googleDrive** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
