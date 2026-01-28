# Convert HTML to PDF and compress files with CustomJS API

> ![workflow.png](fileId:1268)
This n8n template demonstrates how to convert HTML into a PDF, compress the generated PDF, and return it as a binary response using the PDF Toolkit from www.customjs.space.

### Notice

Community nodes can only be installed on self-hosted instances of n8n.

[@custom-js/n8n-nodes-pdf-toolkit](https://www.npmjs.com/package/@custom-js/n8n-nodes-pdf-toolkit)

### What this workflow does

- **Convert** the requested HTML to PDF.
- **Compress** the PDF file.
- **Use** a Code node to handle URLs pointing to PDF files if they exceed 6MB.
- **Compress** the PDF pages.

### Requirements

- **Self-hosted** n8n instance
- **CustomJS API key** for compressing PDF files.
- **HTML** Data to convert PDF files
- **Code node** for handling URL that indicates PDF file.

### Workflow Steps:

1. **Manual Trigger**:

   - Runs with user interaction.

2. **HTML to PDF**:

   - Request HTML Data
   - Convert HTML to PDF
   - Request PDF from URL.

3. **Compress Pages from PDF**:
   - Compress PDF as a binary file.

---

### Usage

### Get API key from [customJS](https://www.customjs.space)

- Sign up to customJS platform.
- Navigate to your profile page
- Press "Show" button to get API key
![1.png](fileId:1269)

### Set Credentials for CustomJS API on n8n

Copy and paste your API key generated from CustomJS here.
![2.png](fileId:1267)

### Design workflow

- A Manual Trigger for starting workflow.
- HTTP Request Nodes for downloading PDF files.
- Code node for handling URL that indicates PDF file.
- Compress PDF files.

You can replace logic for triggering and returning results.
For example, you can trigger this workflow by calling a webhook and get a result as a response from webhook. Simply replace Manual Trigger and Write to Disk nodes.


## 📊 Basic Information

- **Workflow ID:** 3869
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 1872
- **Downloads:** 187
- **Created:** 2025/5/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3869)

## 👤 Author

- **Name:** CustomJS
- **Username:** @customjs

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **@custom-js/n8n-nodes-pdf-toolkit.html2Pdf** 
- **@custom-js/n8n-nodes-pdf-toolkit.CompressPDF** (×2)
- **manualTrigger** 
- **code** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
