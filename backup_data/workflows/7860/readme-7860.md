# CYBERPULSE AI GRC: Vendor risk evaluator

> Description

Automates the intake, classification, and documentation of third-party vendors.
Evaluates vendor function, data access level, certification status, and applies AI-driven risk tiering (Low, Standard, Critical).
Ensures standardized onboarding and scalable due diligence.

Who It’s For

Compliance and procurement teams onboarding vendors

GRC consultants managing supply chain risk

Security leads needing traceable vendor evidence

Audit teams validating third-party controls

How It Works

Trigger via intake form or webhook

AI engine assigns vendor risk tier based on context (certification, access type, data sensitivity)

If certifications (ISO 27001, SOC 2, IRAP, PCI DSS) are missing, status is flagged

Scorecard is formatted automatically with vendor details, risk tier, and timestamp

Logs results to Google Sheets for audit-ready evidence

Sends instant alerts for high-risk or uncertified vendors

Requirements

Google Sheets (OAuth2) connected for logging

Gmail/SMTP node for automated alerts (optional)

Intake form/webhook for vendor submissions

Mandatory fields in vendor intake:

Vendor Name

Function

Data Access

Access Type (Read/Write/API)

Certification (if any)

Owner (GRC)

File Templates

Vendor_Risk_Log.xlsx (auto-created sheet with audit-ready logs)

Intake form (customizable, connects via webhook)

Customization Tips

Modify AI prompt logic to reflect internal risk appetite

Add more certification checks (e.g., ISO 27701, FedRAMP)

Adjust alert thresholds (e.g., auto-notify only for Critical tier)

Extend integration to Slack/Teams or SIEM for escalation

Link logs to a dashboard for executive reporting

Compliance

ISO/IEC 27001: Controls A.15.1.1, A.15.1.2 (supplier relationships and information security)

SOC 2: Vendor management and risk classification

NIST 800-53: SR-3, SR-5 (supply chain risk and contractual requirements)

Essential Eight: Supports control validation via vendor documentation logging

Provides timestamped, structured logs suitable for external audits

Setup Instructions

Deploy the provided intake form or connect your own vendor submission process to the webhook.

Connect Google Sheets to store vendor logs (Vendor_Risk_Log.xlsx).

Connect Gmail/SMTP node for notifications (optional).

Customize AI prompt and certification logic if needed.

Run intake tests to validate risk tier assignment.

Confirm vendor logs and alerts are recorded correctly.

Supports

ISO 27001 Information Security

SOC 2 Compliance

PCI DSS v4.0

NIST CSF / 800-53

ACSC Essential Eight
https://cyberpulsesolutions.com

## 📊 Basic Information

- **Workflow ID:** 7860
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 83
- **Downloads:** 8
- **Created:** 2025/8/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7860)

## 👤 Author

- **Name:** Adnan Tariq
- **Username:** @adnantariq

## 🏷️ Categories

- AI Summarization
- Multimodal AI

## 🔗 Nodes Used

- **webhook** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **if** 
- **set** 
- **googleSheets** 
- **gmail** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
