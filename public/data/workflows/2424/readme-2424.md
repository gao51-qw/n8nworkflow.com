# Manipulate PDF with Adobe developer API

> ## Adobe developer API

Did you know that Adobe provides an API to perform all sort of manipulation on PDF files : 

- Split PDF, Combine PDF
- OCR
- Insert page, delete page, replace page, reorder page
- Content extraction (text content, tables, pictures)
- ...

The free tier allows up to 500 PDF operation / month. As it comes directly from Adobe, it works often better than other alternatives.

Adobe documentation: 

- [https://developer.adobe.com/document-services/docs/overview/pdf-services-api/howtos/](https://developer.adobe.com/document-services/docs/overview/pdf-services-api/howtos/)
- [https://developer.adobe.com/document-services/docs/overview/pdf-extract-api/gettingstarted/](https://developer.adobe.com/document-services/docs/overview/pdf-extract-api/gettingstarted/)

## What does this workflow do

The API is a bit painful to use. To perform a transformation on a PDF it requires to 

- Authenticate and get a temporal token
- Register a new asset (file)
- Upload you PDF to the registered asset
- Perform a query according to the transformation requested
- Wait for the query to be proccessed by Adobe backend
- Download the result

This workflow is a generic wrapper to perform all these steps for any transformation endpoint. I usually use it from other workflow with an `Execute Workflow` node.

Examples are given in the workflow.

## Example use case

This service is useful for example to **clean PDF data for an AI / RAG system**. 

My favorite use-case is to extract table as images and forward images to an AI for image recognition / description which is often more accuarate than feedind raw tabular data to a LLM.

## 📊 Basic Information

- **Workflow ID:** 2424
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 4581
- **Downloads:** 458
- **Created:** 2024/9/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2424)

## 👤 Author

- **Name:** digi-stud.io
- **Username:** @valerian

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** (×5)
- **executeWorkflowTrigger** 
- **stickyNote** (×6)
- **set** (×2)
- **dropbox** 
- **merge** (×2)
- **wait** 
- **switch** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
