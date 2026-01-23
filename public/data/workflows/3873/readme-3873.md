# Merge multiple PDF files with CustomJS API

> ![workflow.png](fileId:1280)
This n8n template demonstrates how to download multiple PDF files from public URLs and merge them into a single PDF using the PDF Toolkit from www.customjs.space.

[@custom-js/n8n-nodes-pdf-toolkit](https://www.npmjs.com/package/@custom-js/n8n-nodes-pdf-toolkit)

### Notice

Community nodes can only be installed on self-hosted instances of n8n.

### What this workflow does

- **Downloads** each PDF using an HTTP Request.
- **Populates** files into an array with **Merge** node from n8n.
- **Merges** all downloaded PDFs using the Merge PDF node from the @custom-js/n8n-nodes-pdf-toolkit.
- **Writes** the final merged PDF to disk.

### Requirements

- **Self-hosted** n8n instance
- **CustomJS API key** for merging multiple PDF files.
- **PDF files to be merged** to be converted into a PDF

### Workflow Steps:

1. **Manual Trigger**:

   - Runs with user interaction.

2. **HTTP Request Node For PDF Download**:

   - Pass urls for PDF files to merge.

3. **Merge Node For Array Population**:

   - Just populates two files into an array.

4. **Merge PDF files**:
   - Uses the **CustomJS** node to merge the incoming PDF files into a single PDF file.
   - If size of PDF files exceeds 6MB, you can simply pass an array of URLs for PDF files.

---

### Usage

### Get API key from [customJS](https://www.customjs.space)

- Sign up to customJS platform.
- Navigate to your profile page
- Press "Show" button to get API key
![1.png](fileId:1281) 

### Set Credentials for CustomJS API on n8n

Copy and paste your API key generated from CustomJS here.
![2.png](fileId:1279)

### Design workflow

- A Manual Trigger for starting workflow.
- Two HTTP Request Nodes for downloading PDF files.
- A Merge Node for populating files as an array.
- Merge PDFs node for merging files
- Write to Disk node for saving merged PDF file.

You can replace logic for triggering and returning results.
For example, you can trigger this workflow by calling a webhook and get a result as a response from webhook. Simply replace Manual Trigger and Write to Disk nodes.

### Perfect for

- Bundling reports or invoices.
- Generating document sets from external sources.
- Automating PDF handling without writing custom code


## 📊 Basic Information

- **Workflow ID:** 3873
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 1001
- **Downloads:** 100
- **Created:** 2025/5/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3873)

## 👤 Author

- **Name:** CustomJS
- **Username:** @customjs

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** (×2)
- **merge** 
- **@custom-js/n8n-nodes-pdf-toolkit.mergePdfs** 
- **readWriteFile** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
