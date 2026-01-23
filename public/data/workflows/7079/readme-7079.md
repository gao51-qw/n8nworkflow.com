# CYBERPULSE AI GRC: automate compliance audit documentation

> Description
Automatically packages audit-ready evidence files matched to control IDs from ISO 42001 or other frameworks.
Fetches logs from Google Sheets, finds corresponding files in Google Drive, compresses them into a ZIP archive, and sends via email — no manual formatting required.

Who’s It For:

Compliance teams preparing audit documentation

GRC consultants managing multiple clients

Internal auditors requiring traceable evidence

How It Works:

Trigger manually or on schedule (e.g., daily)

Reads audit logs from Google Sheets

Searches Google Drive for files matching control_id

Downloads matched files

Zips them into an archive

Sends the archive via email (Gmail or SMTP)

Requirements:

Gmail or SMTP node for email delivery

Google Sheets connected (OAuth2)

Google Drive connected (OAuth2)

Google Sheet Requirements:

Columns: control_id, description, evidence_status, last_updated

One row per control ID or log entry

Headers must be in the first row

Log sheet must be shared with your service account or n8n-connected user

File Templates:

Audit_AutoPack_Sheet_Template.xlsx

Evidence files in Google Drive named using control ID (e.g., ISO42001-5.1.pdf)

Customization Tips:

Adjust ZIP archive name in the “Zip Files” node

Customize email subject, body, and recipient

Use a different Drive folder per client or audit phase

Ethics & Compliance:

Ensures audit trail and evidence traceability

Prevents unauthorized edits or file mismatches

Setup Instructions

Copy the provided Google Sheet template (linked in File Templates).

Fill in your audit logs (columns: control_id, description, status, last_updated).

Connect Google Sheets node using OAuth credentials.

In the Gmail node:

Set recipient email (e.g., your_email@example.com)

Choose “Send binary data” and attach ZIP

Trigger via Cron node (e.g., daily) or manually

(Optional) Connect Drive or S3 node to store a backup copy

Supports:

ISO 42001 AI Governance

PCI DSS v4.0

NIST CSF / SOCI Act

ACSC Essential Eight


https://cyberpulsesolutions.com

## 📊 Basic Information

- **Workflow ID:** 7079
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 97
- **Downloads:** 9
- **Created:** 2025/8/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7079)

## 👤 Author

- **Name:** Adnan Tariq
- **Username:** @adnantariq

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **manualTrigger** 
- **googleSheets** 
- **googleDrive** (×2)
- **merge** 
- **set** 
- **compression** 
- **gmail** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
