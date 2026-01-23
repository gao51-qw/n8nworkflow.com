# Generate PDF documents from HTML with PDF Generator API, Gmail and Supabase

> ## Who’s this for 💼
This template is designed for teams and developers who need to generate PDF documents automatically from HTML templates. It’s suitable for use cases such as invoices, confirmations, reports, certificates, or any custom document that needs to be created dynamically based on incoming data.
## What this workflow does ⚙️
This workflow automates the full lifecycle of document generation, from request validation to delivery and storage. It is triggered by a POST webhook that receives structured JSON data describing the requested document and client information.

Before generating the document, the workflow validates the client’s email address using Hunter Email Verification to prevent invalid or mistyped emails. If the email is valid, the workflow loads the appropriate HTML template from a Postgres database, fills it with the incoming data, and converts it into a PDF using PDF Generator API.

Once the PDF is generated, it is sent to the client via Gmail, uploaded to Supabase Storage, and the transaction is recorded in the database for tracking and auditing purposes.
## How it works 🛠️
1. Receives a document generation request via a POST webhook.
2. Validates the client’s email address using Hunter.
3. Generates a PDF document from an HTML template using PDF Generator API.
4. Sends the PDF via Gmail and uploads it to Supabase Storage.
5. Stores a document generation record in the database.
## How to set up 🖇️
Before activating the workflow, make sure all required services and connections are prepared and available in your n8n environment.
- Create a POST webhook endpoint that accepts structured JSON input.
- Add Hunter API credentials for email verification.
- Add PDF Generator API credentials for HTML to PDF conversion.
- Prepare a Postgres database with tables for HTML templates and document generation records.
- Set up Gmail or SMTP credentials for email delivery.
- Configure Supabase Storage for storing generated PDF files.
## Requirements ✅
- PDF Generator API account
- Hunter account
- Postgres database
- Gmail or SMTP-compatible email provider
- Supabase project with Storage enabled
## How to customize the workflow 🤖
This workflow can be adapted to different document generation scenarios by extending or modifying its existing steps:
- Add extra validation steps before document generation if required.
- Extend delivery options by sending the generated PDF to additional services or webhooks.
- Enhance security by adding document encryption or access control.
- Add support for additional document types by storing more HTML templates in the database.
- Modify the database schema or queries to store additional metadata related to generated documents.
- Adjust the data mapping logic in the Code node to match your input structure.


## 📊 Basic Information

- **Workflow ID:** 12554
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 87
- **Downloads:** 8
- **Created:** 2026/1/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12554)

## 👤 Author

- **Name:** Marián Današ
- **Username:** @marian

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **if** 
- **hunter** 
- **respondToWebhook** 
- **code** 
- **@pdfgeneratorapi/n8n-nodes-pdf-generator-api.pdfGeneratorApi** 
- **gmail** 
- **postgres** (×2)
- **httpRequest** 
- **webhook** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
