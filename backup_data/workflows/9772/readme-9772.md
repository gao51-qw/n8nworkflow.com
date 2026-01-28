# Automatic invoice generation and email with Airtable and CustomJS PDF generator

> 
&gt; ⚠️ **Notice:**  
&gt; This workflow uses the **CustomJS Invoice Generator node** from [customjs.space](https://www.customjs.space), which requires a self-hosted n8n instance and a CustomJS API key.

---

# Google Spreadsheet → Invoice Generation → Email Workflow

This workflow demonstrates how to:

1. Pull **invoices ready to be sent** from Airtable.  
2. Retrieve **client details** and **invoice items** from Airtable.  
3. Generate a **professional invoice PDF** using CustomJS Invoice Generator.  
4. Send the completed invoice via **email** to the client.  
5. Update the invoice status in Airtable automatically.

![InvoiceGeneratorWorkflow.png](fileId:2981)
[Public Airtable Example](https://airtable.com/apphyDa3uYAq0VOMW/shrSe39NZYrqm4gtE)

---

## Workflow Overview

### 1. Trigger Workflow
- **Node:** `When clicking ‘Execute workflow’` (Manual Trigger)  
- Starts the workflow when executed manually in n8n.

### 2. Get Ready Invoices
- **Node:** `Get Ready Invoices` (Airtable)  
- Retrieves all invoices from Airtable where `Status = 'Ready'`.

### 3. Loop Over Items
- **Node:** `Loop Over Items` (Split In Batches)  
- Processes each invoice individually.

### 4. Get Clients
- **Node:** `Get Clients` (Airtable)  
- Fetches client details for the current invoice:  
  - Name  
  - Address  
  - Tax ID  

### 5. Get Invoice Items
- **Node:** `Get Invoice Items` (Airtable)  
- Retrieves all items associated with the invoice and passes them for aggregation.

### 6. Map Fields
- **Node:** `Map Fields` (Set)  
- Maps the invoice items into a structured format for the invoice generator:  
  - Description  
  - Quantity / Hours  
  - Unit Price  
  - Invoice ID  

### 7. Aggregate
- **Node:** `Aggregate`  
- Aggregates all invoice items into a single JSON array for the invoice.

### 8. Set Company Details
- **Node:** `Set Company Details` (Set)  
- Defines issuer and payment information:  
  - Company Name  
  - Address  
  - Tax ID  
  - Email & Phone  
  - Bank Details  

### 9. Generate Invoice
- **Node:** `Generate Invoice` (CustomJS Invoice Generator)  
- Generates a **PDF invoice** using all collected data:  
  - Issuer / Company information  
  - Recipient / Client information  
  - Invoice items  
  - Billing information (Invoice number, date, currency, tax, notes)  

### 10. Send Email With Attachment
- **Node:** `Send Email With Attachment` (Email Send)  
- Sends the generated invoice PDF to the client:  
  - From: `{{ $json.InvoiceEmail }}`  
  - To: `info@yourcomp.org`  
  - Subject: `Your Invoice for Last Month`  
  - Body Text:

    ```
    Hello,

    Please find attached your invoice for the last month. Thank you very much for your cooperation.

    Best regards,
    Henrik
    ```

- Uses SMTP credentials for sending emails.

### 11. Update Record
- **Node:** `Update record` (Airtable)  
- Marks the invoice as `Sent` in Airtable.

---


## Requirements

- Self-hosted n8n instance  
- CustomJS API key  
- SMTP credentials  
- Airtable API key and base access  

---



## 📊 Basic Information

- **Workflow ID:** 9772
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 157
- **Downloads:** 15
- **Created:** 2025/10/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9772)

## 👤 Author

- **Name:** CustomJS
- **Username:** @customjs

## 🏷️ Categories

- Invoice Processing

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** (×7)
- **airtable** (×4)
- **aggregate** 
- **splitInBatches** 
- **@custom-js/n8n-nodes-pdf-toolkit.invoiceGenerator** 
- **set** (×2)
- **emailSend** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
