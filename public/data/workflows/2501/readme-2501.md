# Replace images in Google Docs documents and download as PDF/Docx

> ## Use Case
Automate image replacement in Google Docs:
- You need to update document images dynamically
- You want to create multiple versions of a template with different images
- You need to batch process document images from a URL database
- You want to generate shareable documents with custom images

## What this Workflow Does
The workflow automates image replacement in Google Docs:
- Accepts image URLs from your database
- Finds and replaces images in template documents
- Creates new document copies with updated images
- Optionally converts to PDF and makes documents shareable

## Setup
1. Connect your image URL database (column name must be "url")
2. Set up [Google Docs OAuth 2 API credentials](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googledocs/)
3. Optional: Create a template document in Google Drive with placeholder images
4. Optional: Configure [Google Drive authentication](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googledrive/) for additional features

## How to Adjust it to Your Needs
- Remove template copying for single document processing
- Adjust image ID selection for documents with multiple images
- Configure sharing settings and download formats
- Customize file naming and storage location


More templates and n8n workflows &gt;&gt;&gt; [@simonscrapes](https://www.youtube.com/@simonscrapes?sub_confirmation=1)

## 📊 Basic Information

- **Workflow ID:** 2501
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 1737
- **Downloads:** 173
- **Created:** 2024/10/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2501)

## 👤 Author

- **Name:** simonscrapes
- **Username:** @simonscrapes

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** (×9)
- **httpRequest** (×2)
- **googleDrive** (×4)
- **set** 
- **noOp** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
