# Parse PDF with LlamaParse and save to Airtable

> ### Video Guide

I prepared a comprehensive guide detailing how to automate the parsing of invoices using n8n and LlamaParse, seamlessly capturing and storing vital billing information.

[![Youtube Thumbnail](https://cflobdhpqwnoisuctsoc.supabase.co/storage/v1/object/public/my_storage/Video%2010%20-%20Parser%20invoices%20Blur.png)](https://youtu.be/E4I0nru-fa8)

[Youtube Link](https://youtu.be/E4I0nru-fa8)

### Who is this for?
This workflow is ideal for finance teams, accountants, and business operations managers who need to streamline invoice processing. It is particularly helpful for organizations seeking to reduce manual entry errors and improve efficiency in managing billing information.

### What problem does this workflow solve?
Manually processing invoices can be time-consuming and error-prone. This automation eliminates the need for manual data entry by capturing invoice details directly from uploaded documents and storing structured data efficiently. This enhances productivity and accuracy across financial operations.

### What this workflow does
The workflow leverages n8n and LlamaParse to automatically detect new invoices in a designated Google Drive folder, parse essential billing details, and store the extracted data in a structured format. The key functionalities include:
- Real-time detection of new invoices via Google Drive triggers.
- Automated HTTP requests to initiate parsing through Lama Cloud.
- Structured storage of invoice details and line items in a database for future reference.

1. **Google Drive Integration**: Monitors a specific folder in Google Drive for new invoice uploads.
2. **Parsing with LlamaParse**: Automatically sends invoices for parsing and processes results through webhooks.
3. **Data Storage in Airtable**: Creates records for invoices and their associated line items, allowing for detailed tracking.

### Setup

#### N8N Workflow
1. **Google Drive Trigger**: 
   - Set up a trigger to detect new files in a specified folder dedicated to invoices.

2. **File Upload to LlamaParse**: 
   - Create an HTTP request that sends the invoice file to LlamaParse for parsing, including relevant header settings and webhook URL.

3. **Webhook Processing**: 
   - Establish a webhook node to handle parsed results from LlamaParse, extracting needed invoice details effectively.

4. **Invoice Record Creation**: 
   - Create initial records for invoices in your database using the parsed details received from the webhook.

5. **Line Item Processing**: 
   - Transform string data into structured line item arrays and create individual records for each item linked to the main invoice.

## 📊 Basic Information

- **Workflow ID:** 2661
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 11280
- **Downloads:** 1128
- **Created:** 2024/12/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2661)

## 👤 Author

- **Name:** Mark Shcherbakov
- **Username:** @lowcodingdev

## 🏷️ Categories

- Invoice Processing
- AI Summarization

## 🔗 Nodes Used

- **googleDrive** 
- **httpRequest** (×2)
- **googleDriveTrigger** 
- **airtable** (×2)
- **set** 
- **code** 
- **webhook** 
- **stickyNote** (×9)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
