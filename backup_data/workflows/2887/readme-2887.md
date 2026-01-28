# Export PDF invoices from SmartBill to Google Drive

> This workflow automates the retrieval of invoice PDFs from the Smartbill API and saves them to Google Drive in a dynamically created folder based on last month’s date. It also generates a range of invoice numbers, ensuring proper formatting, and uploads each PDF with a structured filename.

## Overview

1. **Trigger and Data Setup:**  
   The workflow is manually triggered. It sets the invoice range (start and end numbers), invoice series, the parent Google Drive folder ID and the folder where to save the PDF files.

2. **Folder Handling:**  
   - **Folder Name Calculation:** Calculates a default folder name based on last month’s date (formatted as `YYYY-MM`).

3. **Invoice Generation:**  
   A code node generates invoice items by iterating over a specified range of numbers. Each invoice number is padded to custom number of digits (e.g., `0013`), and the invoice series and folder ID are attached to each item.

4. **Retrieving Invoice PDFs:**  
   For each generated invoice, the Smartbill API is called (using an HTTP Request node) to retrieve the corresponding invoice PDF.


## How to Use

- **Credentials:**  
  Ensure you have configured the Smartbill API (HTTP Basic Auth) and Google API credentials correctly.
  
- **Parameter Adjustment:**  
  Modify the `SetData` node if you need to change the invoice range, series, or target parent folder.
  
- **Execution:**  
  Click **Execute Workflow** to run the workflow manually.


## 📊 Basic Information

- **Workflow ID:** 2887
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 1089
- **Downloads:** 108
- **Created:** 2025/2/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2887)

## 👤 Author

- **Name:** Codez & AI
- **Username:** @codez

## 🏷️ Categories

- Invoice Processing

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** 
- **set** (×2)
- **code** (×3)
- **stickyNote** (×2)
- **googleDrive** (×3)
- **if** 
- **splitInBatches** 
- **wait** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
