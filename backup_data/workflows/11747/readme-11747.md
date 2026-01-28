# Generate AI website legal and accessibility compliance reports with OpenAI, Gmail and Google Drive

> # Automated Legal & Accessibility Website Compliance Checker

## Description

Automate website compliance checks in minutes using AI-powered analysis.
This workflow scans any website for essential legal and accessibility requirements, generates a professional compliance report, delivers it as a PDF, and stores it securely — helping teams identify risks early and stay audit-ready with zero manual effort.

---

## What This Workflow Does

Transforms manual website compliance reviews into a single automated flow:

🌐 **Capture Website Details** – Accepts website URL, company name, and email via webhook.

📥 **Fetch Website Content** – Securely downloads and cleans website HTML for analysis.

🧠 **AI Compliance Analysis** – Uses AI to audit the site against key compliance standards.

📊 **Scoring & Insights** – Calculates an overall compliance score and highlights gaps.

📄 **Generate Visual Report** – Builds a detailed, easy-to-read HTML compliance report.

🖨️ **Convert to PDF** – Converts the report into a downloadable, shareable PDF.

📧 **Email Delivery** – Sends the compliance report directly to the provided email.

☁️ **Secure Storage** – Saves the PDF report to Google Drive for records and audits.

---

## Key Features

🤖 **AI-Powered Compliance Audits** – Automatically checks privacy, cookies, accessibility, SSL, and more.

📊 **Compliance Scoring** – Clear numerical scores and status indicators for each section.

📄 **Professional PDF Reports** – Branded, structured reports suitable for clients or audits.

⚙️ **End-to-End Automation** – From URL submission to email delivery without manual steps.

📧 **Instant Email Notifications** – Reports delivered automatically to stakeholders.

☁️ **Google Drive Backup** – Centralized storage for compliance history and documentation.

---

## Compliance Checks Included

✔️ Privacy Policy presence & indicators
✔️ Cookie consent mechanisms
✔️ Terms of Service availability
✔️ Accessibility (WCAG-related indicators)
✔️ Contact information visibility
✔️ SSL / HTTPS verification
✔️ Critical issues & improvement recommendations

---

## Perfect For

🏢 **Startups & SaaS Companies** – Quickly assess website compliance before launch.

🧾 **Agencies & Consultants** – Deliver automated compliance audits to clients.

⚖️ **Legal & Compliance Teams** – Speed up preliminary compliance checks.

💻 **Freelancers & Web Developers** – Validate client websites post-deployment.

📈 **Operations Teams** – Maintain ongoing compliance documentation effortlessly.

---

## What You’ll Need

### Required Integrations

🌐 **Webhook** – Receive website URL and user details.

🤖 **OpenAI** – Analyze website HTML for compliance indicators.

📄 **HTMLCSS to PDF** – Convert compliance report into a PDF.

📧 **Gmail** – Send compliance report via email.

☁️ **Google Drive** – Store generated compliance reports.

🌍 **HTTP Request** – Fetch website HTML content (no authentication required).

---

## Optional Enhancements

📊 **Compliance Dashboard** – Connect Google Drive or logs to Looker Studio.

🌍 **Multi-Website Scans** – Extend webhook to accept bulk URLs.

🕒 **Scheduled Scans** – Run periodic compliance checks automatically.

📨 **Slack Alerts** – Send compliance summaries to internal channels.

📝 **Custom Branding** – Adjust HTML styling, logos, and colors.

---

## Quick Start

1️⃣ Import the workflow JSON into your n8n workspace.
2️⃣ Activate the webhook and copy the endpoint URL.
3️⃣ Connect OpenAI, Gmail, Google Drive, and HTMLCSS to PDF credentials.
4️⃣ Send a POST request with website URL, company name, and email.
5️⃣ Review the emailed PDF compliance report.
6️⃣ Check Google Drive for stored audit copies.
7️⃣ Activate the workflow for production use.

---

## Expected Results

⚡ **Minutes Instead of Hours** – Instant compliance assessments.

🤖 **AI Accuracy** – Consistent, structured compliance analysis.

📈 **Risk Visibility** – Early detection of legal and accessibility gaps.

📄 **Audit-Ready Reports** – Clean, shareable documentation.

☁️ **Centralized Storage** – Every scan archived automatically.

---

## Workflow Structure

🌐 Webhook Trigger
↓
📥 Fetch Website HTML
↓
🧹 Clean & Prepare Content
↓
🧠 AI Compliance Analysis
↓
📊 Parse Results
↓
📄 Generate HTML Report
↓
🖨️ Convert to PDF
↓
📧 Email Report
↓
☁️ Save to Google Drive

---

## Ready to Automate Website Compliance?

Import this template and turn any website URL into a complete compliance report — automatically, consistently, and professionally.
Perfect for audits, clients, and peace of mind. ✅

---


## 📊 Basic Information

- **Workflow ID:** 11747
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 16
- **Downloads:** 1
- **Created:** 2025/12/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11747)

## 👤 Author

- **Name:** Jitesh Dugar
- **Username:** @jiteshdugar

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **webhook** 
- **httpRequest** 
- **code** (×3)
- **@n8n/n8n-nodes-langchain.openAi** 
- **n8n-nodes-htmlcsstopdf.htmlcsstopdf** 
- **gmail** 
- **googleDrive** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
