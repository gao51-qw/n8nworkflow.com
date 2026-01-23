# Validate shipments & generate freight documents with GPT-4o, Google Sheets & Drive

> ## ✅ What problem does this workflow solve?

Logistics teams spend hours manually validating shipment data, checking compliance, generating freight documents, and emailing stakeholders. Errors in HSN codes, weights, or carrier details can lead to shipment delays, penalties, and rework.

This workflow **automates the entire shipment validation and documentation process** using AI, ensuring compliance, reducing errors, and generating professional freight documents automatically.

---

## ⚙️ What does this workflow do?

* Validates shipment details using AI before documentation.
* Detects mismatches in HSN codes, weights, ports, and carrier data.
* Automatically notifies shippers when issues are found.
* Generates compliant freight documents in PDF format.
* Emails shipment PDFs to both sender and receiver.
* Stores documents securely in Google Drive.
* Tracks shipment status and document links in Google Sheets.

---

## 💡 Main Use Cases

* Automate freight document generation for export/import shipments.
* Perform AI-based compliance checks on shipment data.
* Instantly flag and notify incorrect or missing shipment details.
* Maintain a centralized audit trail of shipment documents.
* Reduce manual validation effort and paperwork.

---

## 🧠 How It Works – Step-by-Step

### 1. Google Sheets Trigger

The workflow starts when **new shipment data** is added to a shared Google Sheet.
Each row represents a shipment with details like:

* Shipment ID
* Shipper & Receiver information
* Carrier details
* Ports
* Goods description
* Quantity, weight, and HSN codes

---

### 2. AI-Powered Shipment Validation

An **AI agent (OpenAI)** validates each shipment against defined rules:

* Valid HSN codes for goods
* Export/import compliance
* Quantity vs. weight consistency
* Carrier name matched against an active carrier reference list
* Proper formatting of ports and addresses

The AI returns a structured result:

* `valid: true/false`
* `reason`: Explanation of the first detected issue

---

### 3. Mismatch Handling (If Validation Fails)

If the shipment is **invalid**:

* An email is sent to the shipper with detailed mismatch information.
* The shipment status is updated in Google Sheets as **Mismatch_Details**.
* No documents are generated until corrections are made.

---

### 4. Freight Document Generation (If Validation Passes)

If the shipment is **valid**:

* A dynamic HTML shipment report is created.
* The HTML is converted into a professional **PDF** using ConvertAPI.
* The PDF includes:

  * Shipment summary
  * Goods information
  * Quantity, weight, and HSN details

---

### 5. Email Distribution

The generated shipment PDF is automatically emailed to:

* 📤 The Shipper
* 📥 The Receiver

Each email includes shipment reference details and a download link.

---

### 6. Storage & Tracking

* The shipment PDF is uploaded to a dedicated **Google Drive** folder.
* Google Sheets is updated with:

  * Shipment status (`shipment_pdf_dispatch`)
  * Google Drive document link
* This creates a complete audit trail for compliance and tracking.

---

## 🗂 Integrations Used

* **Google Sheets** – Shipment input, status tracking, carrier reference data
* **OpenAI** – AI-based shipment validation and compliance checks
* **ConvertAPI** – HTML-to-PDF freight document generation
* **Gmail** – Automated email notifications
* **Google Drive** – Secure document storage

---

## 👤 Who can use this?

This workflow is ideal for:

* 🚢 Freight forwarders
* 📦 Logistics & supply chain teams
* 🏢 Export-import companies
* 📑 Compliance and documentation teams

If your shipping process involves repetitive checks, document creation, and manual emails—this automation can save **hours per shipment**.

---

## 🚀 Benefits

* ✅ Automated compliance validation
* ✅ Reduced shipment errors and delays
* ✅ Faster document turnaround
* ✅ Centralized storage and tracking
* ✅ Audit-ready logistics process

## 📊 Basic Information

- **Workflow ID:** 11913
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 69
- **Downloads:** 6
- **Created:** 2025/12/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11913)

## 👤 Author

- **Name:** InfyOm Technologies
- **Username:** @infyom

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **googleSheetsTrigger** 
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **gmail** (×3)
- **extractFromFile** 
- **httpRequest** (×2)
- **code** 
- **if** 
- **googleSheets** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **googleDrive** 
- **googleSheetsTool** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
