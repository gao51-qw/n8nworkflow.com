# AI-powered invoice data extraction & approval workflow with ScrapeGraphAI & Telegram

> # How it works

This workflow automatically extracts data from invoice documents (PDFs and images) and processes them through a comprehensive validation and approval system.

## Key Steps

1. **Multi-Input Triggers** - Accepts invoices via email attachments or direct file uploads through webhook.
2. **AI-Powered Extraction** - Uses ScrapeGraphAI to extract structured data from invoice documents.
3. **Data Cleaning & Validation** - Processes and validates extracted data against business rules.
4. **Approval Workflow** - Routes invoices requiring approval through a multi-stage approval process.
5. **System Integration** - Automatically sends validated invoices to your accounting system.

## Set up steps

**Setup time: 10-15 minutes**

1. **Configure ScrapeGraphAI credentials** - Add your ScrapeGraphAI API key for invoice data extraction.
2. **Set up Telegram connection** - Connect your Telegram account for approval notifications.
3. **Configure email trigger** - Set up IMAP connection for processing emailed invoices.
4. **Customize validation rules** - Adjust business rules, amount thresholds, and vendor lists.
5. **Set up accounting system integration** - Configure the HTTP request node with your accounting system's API endpoint.
6. **Test the workflow** - Upload a sample invoice to verify the extraction and approval process.

## Features

- **Multi-format support**: PDF, PNG, JPG, JPEG, TIFF, BMP
- **Intelligent validation**: Business rules, duplicate detection, amount thresholds
- **Approval automation**: Multi-stage approval workflow with role-based routing
- **Data quality scoring**: Confidence levels and completeness analysis
- **Audit trail**: Complete processing history and metadata tracking


## 📊 Basic Information

- **Workflow ID:** 6628
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 443
- **Downloads:** 44
- **Created:** 2025/7/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6628)

## 👤 Author

- **Name:** vinci-king-01
- **Username:** @vinci-king-01

## 🏷️ Categories

- Invoice Processing
- AI Summarization

## 🔗 Nodes Used

- **emailReadImap** 
- **webhook** 
- **code** (×4)
- **n8n-nodes-scrapegraphai.scrapegraphAi** 
- **switch** 
- **telegram** 
- **httpRequest** 
- **stickyNote** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
