# Generate, encrypt, and send invoices with PDF Generator API & Google Suite

> ## Why
Creating and sending invoices manually is a major administrative bottleneck. It's not only slow but also prone to human error, such as creating duplicate invoice numbers or sending sensitive financial data in an unsecured format. This workflow solves these problems by creating a robust, end-to-end automation. It ensures every invoice has a unique ID, is professionally generated, is password-protected, and is delivered to your customer automatically.

## What
This workflow provides a complete, secure solution for automated invoicing. It is designed to be triggered by a **Webhook** (e.g., from your e-commerce store, CRM, or billing platform) that provides customer and order details.

The workflow then executes the following steps:

1.  **Generate & Verify ID:** It first generates a new invoice ID. It then performs a critical check by reading your master **Google Sheet** to ensure this ID is unique, preventing duplicate invoices.
2.  **Generate PDF:** Once the ID is verified, it passes the data to the **PDF Generator API**. This service dynamically populates your custom invoice template. ([PDF Generator API](https://pdfgeneratorapi.com/) makes it incredibly easy to build and manage your document templates via their web-based editor).
3.  **Encrypt Document:** For enhanced security, the workflow uses a **PDF Generator API** operation to encrypt the newly generated invoice with a password, protecting your client's sensitive data.
4.  **Store & Deliver:** Finally, it uploads the secure PDF to a specified **Google Drive** folder for your records and then automatically sends it to the customer as an attachment using **Gmail**.

## How
1.  **Prerequisites:** You will need active accounts for:
    * [PDF Generator API](https://pdfgeneratorapi.com/) (for both generation and encryption)
    * Google Suite (for Sheets, Drive, and Gmail)
2.  **PDF Generator API Setup:**
    * Log in to your PDF Generator API account and use their template builder to create your invoice design.
    * Note your **Template ID**, **API Key**, and **API Secret**.
    * In the n8n `PDFGeneratorAPI` node (`Generate a PDF document`), create new credentials using your Key and Secret. In the node's parameters, select your **Template ID** from the list.
3.  **Google Sheets Setup:**
    * Create a Google Sheet to act as your master list of invoices.
    * In the `Check If ID Already Exists` node, authenticate your Google Sheets account. Set the **Spreadsheet ID** and **Sheet Name**. In the "Columns to Return" field, enter the name of the column where you store your invoice IDs.
4.  **Security & Delivery Setup:**
    * **Encrypt Node:** In the `Encrypt PDF document` node, authenticate your **PDF Generator API** credentials (the same ones from Step 2). You can set a static password, or for better security, use an expression to set a dynamic password from the webhook data (e.g., the customer's postal code or order ID).
    * **Google Drive Node:** Authenticate the `Upload file` node and specify the Drive and Folder ID where invoices should be stored.
    * **Gmail Node:** Authenticate the `Send a message + file` node. Use an expression to map the customer's email from the trigger data into the "To" field.
5.  **Test & Activate:**
    * The `Webhook` node has pinned test data. You can click "Test workflow" to run the entire process with this sample data.
    * Once you confirm the file is generated, encrypted, and sent, connect your live app (e.g., Shopify, Stripe, etc.) to the production Webhook URL.
    * Activate the workflow.

## 📊 Basic Information

- **Workflow ID:** 10387
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 205
- **Downloads:** 20
- **Created:** 2025/10/31
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10387)

## 👤 Author

- **Name:** Marián Današ
- **Username:** @marian

## 🏷️ Categories

- Invoice Processing

## 🔗 Nodes Used

- **code** 
- **googleSheets** 
- **if** 
- **stickyNote** (×5)
- **webhook** 
- **@pdfgeneratorapi/n8n-nodes-pdf-generator-api.pdfGeneratorApi** (×2)
- **googleDrive** 
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
