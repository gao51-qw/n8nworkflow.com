# Extract structured data from medical documents with Google Gemini AI

> ## How it works
Transform medical documents into structured data using Google Gemini AI with enterprise-grade accuracy.

## Classifies document types (receipts, prescriptions, lab reports, clinical notes)
- Extracts text with 95%+ accuracy using advanced OCR
- Structures data according to medical taxonomy standards
- Supports multiple languages (English, Chinese, auto-detect)
- Tracks processing costs and quality metrics automatically

## Set up steps
### Prerequisites

Google Gemini API key (get from Google AI Studio)

### Quick setup

1. Import this workflow template
2. Configure Google Gemini API credentials in n8n
3. Test with a sample medical document URL
4. Deploy your webhook endpoint

### Usage
Send POST request to your webhook:
```json
{
  "image_url": "https://example.com/medical-receipt.jpg",
  "expected_type": "financial",
  "language_hint": "auto"
}
Get structured response:
json{
  "success": true,
  "result": {
    "documentType": "financial",
    "metadata": {
      "providerName": "Dr. Smith Clinic",
      "createdDate": "2025-01-06",
      "currency": "USD"
    },
    "content": {
      "amount": 150.00,
      "services": [...]
    },
    "quality_metrics": {
      "overall_confidence": 0.95
    }
  }
}
```

## Use cases
### Healthcare Organizations

- Medical billing automation - Process receipts and invoices automatically
- Insurance claim processing - Extract data from claim documents
- Clinical documentation - Digitize patient records and notes
- Data standardization - Consistent structured output format

### System Integrators

- EMR integration - Connect with existing healthcare systems
- Workflow automation - Reduce manual data entry by 90%
- Multi-language support - Handle international medical documents
- Quality assurance - Built-in confidence scoring and validation

## Supported Document Types

* Financial: Medical receipts, bills, insurance claims, invoices
* Clinical: Medical charts, progress notes, consultation reports
* Prescription: Prescriptions, medication lists, pharmacy records
* Administrative: Referrals, authorizations, patient registration
* Diagnostic: Lab reports, test results, screening reports
* Legal: Medical certificates, documentation forms

## 📊 Basic Information

- **Workflow ID:** 5917
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 1417
- **Downloads:** 141
- **Created:** 2025/7/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5917)

## 👤 Author

- **Name:** Louis Chan
- **Username:** @louischan

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×7)
- **webhook** 
- **set** (×4)
- **httpRequest** (×3)
- **extractFromFile** 
- **respondToWebhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
