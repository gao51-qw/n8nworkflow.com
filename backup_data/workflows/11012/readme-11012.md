# Generate verifiable CEU certificates with Google Workspace & QR verification

> **Verified Corporate Training Certificate with CEUs – Fully Automated & Verifiable**

A production-ready, secure, and professional automation that instantly issues accredited CEU certificates the moment a training is completed.

**What it does**
- Accepts form/webhook submissions (name, email, course, CEUs, hours, etc.)
- Validates all required fields and checks email deliverability (blocks disposable/temporary emails)
- Generates a unique Certificate ID + scannable QR code for lifelong verification
- Renders a beautiful, branded PDF certificate using HTML → PDF
- Automatically uploads the certificate to Google Drive
- Sends a polished, personalized email with the PDF attached
- Notifies your team in Slack
- Logs every issuance in Google Sheets (perfect for audits & accreditation)
- Returns instant success/failure response to the caller

**Key Features**
- Real-time email validation via Verif.Email API
- Unique, tamper-proof Certificate ID (e.g., CERT-CEU-1739981234567-AB3XF9)
- Embedded QR code linking to public verification page
- High-resolution, print-ready PDF with custom branding
- Full audit trail in Google Sheets
- Slack notification for organizers
- Zero manual work – 100% automated

**Ideal for**
- Corporate training departments
- Continuing Education (CEU) providers
- Professional certification bodies
- Compliance & accreditation teams

**Required Credentials (one-time setup)**
- verifi.email API
- https://pdfmunk.com
- Google Drive + Gmail
- Google Sheets
- Slack (optional)

Deploy in under 5 minutes and start issuing trusted, verifiable certificates instantly.

Tags: certificate, CEU, training, verification, QR code, PDF, automation, compliance, education, corporate

## 📊 Basic Information

- **Workflow ID:** 11012
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 15
- **Downloads:** 1
- **Created:** 2025/11/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11012)

## 👤 Author

- **Name:** Jitesh Dugar
- **Username:** @jiteshdugar

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **webhook** 
- **if** (×2)
- **respondToWebhook** (×3)
- **googleDrive** 
- **slack** 
- **googleSheets** 
- **n8n-nodes-verifiemail.verifiEmail** 
- **n8n-nodes-htmlcsstopdf.htmlcsstopdf** 
- **httpRequest** 
- **function** 
- **gmail** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
