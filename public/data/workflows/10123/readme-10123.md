# Automated invoice-PO matching with Google Gemini AI and email notifications

> ## Automated Invoice-Processing AI Agent for n8n
Overview
The Automated Invoice-Processing AI Agent in n8n is designed to streamline and optimize invoice management for finance teams and accounts payable (AP) professionals. This solution addresses the common challenge of verifying invoice data manually, cross-checking it against purchase orders (POs), and ensuring compliance before releasing payments. By intelligently fetching invoices from Google Drive, extracting key details, validating them against PO records from Google Sheets, and automating the next actions, this system reduces human intervention, minimizes errors, and accelerates the payment process.

### Target Audience
This automation primarily serves finance and AP teams responsible for managing large volumes of vendor invoices. It also supports finance managers, procurement departments, and auditors who require accuracy in payment reconciliation, ensuring that invoices align with approved POs before processing.

### Business Problem Addressed
Organizations frequently struggle with time-consuming manual invoice verification and data entry. Discrepancies between invoices and purchase orders can lead to payment delays, compliance risks, or duplicate payments. This n8n-based AI agent automates that process—ensuring that every invoice is validated, exceptions are flagged to the finance team promptly, and payments of smaller value (under defined thresholds) are processed automatically.

### Prerequisites

Active n8n account or self-hosted instance

Google Drive and Google Sheets connected via n8n credentials

LLM (AI node) configured for document extraction (optional but recommended)

A Google Sheet set up with existing PO data (including PO Number, Amount, and Date fields)

### Setup Instructions

Connect Google Drive and Google Sheets integrations within n8n.

Configure the workflow trigger to monitor a designated "Invoices" folder.

Add a document-parsing node to extract invoice details such as PO Number, Invoice Date, and Amount.

### Implement conditional logic:

If the invoice amount &gt; 5000, the agent cross-references PO details from the Google Sheet.

If it matches, it updates the PO sheet status to “Process Payment.”

If not, an automated email notifies the finance team.

If the amount ≤ 5000, the workflow marks it for direct payment.

Test the workflow with sample invoices before full deployment.

### Customization Options

Adjust the payment threshold value (e.g., 10,000 instead of 5,000).

Customize the email notification template and recipient list.

Integrate with accounting systems such as QuickBooks or SAP for end-to-end automation.

Add audit logging nodes to create traceability for every action taken.

This AI-driven automation brings speed, accuracy, and scalability to invoice verification—empowering finance professionals to focus on analytical and strategic tasks rather than repetitive manual work.

## 📊 Basic Information

- **Workflow ID:** 10123
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 1103
- **Downloads:** 110
- **Created:** 2025/10/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10123)

## 👤 Author

- **Name:** Abdul Matheen
- **Username:** @matheen

## 🏷️ Categories

- Invoice Processing
- AI Summarization

## 🔗 Nodes Used

- **googleDriveTrigger** 
- **googleDrive** 
- **extractFromFile** 
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **switch** 
- **@n8n/n8n-nodes-langchain.agent** 
- **googleSheetsTool** (×2)
- **if** 
- **googleSheets** 
- **microsoftOutlook** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
