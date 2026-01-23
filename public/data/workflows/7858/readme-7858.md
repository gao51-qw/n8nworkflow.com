# Automate risk treatment tasks with Google Sheets for GRC compliance

> Description

Automatically assigns and escalates risk treatment tasks based on severity, organizational unit, and asset class.
Removes manual owner-assignment steps, ensures consistent routing, speeds up escalations, and provides a complete audit trail of tasks and status changes.

Who It’s For

Compliance teams preparing audit documentation

GRC consultants managing multiple clients

Internal auditors requiring traceable evidence

How It Works

Trigger manually or on schedule (e.g., daily)

Reads risk register logs from Google Sheets

Applies severity logic to assign owners and due dates

Logs assigned treatment tasks to an “Assigned_Tasks” sheet

Escalates overdue or critical risks within SLA thresholds

Requirements

Gmail or SMTP node for notifications (optional)

Google Sheets connected (OAuth2)

Google Drive connected (OAuth2)

Google Sheet Requirements:

Columns: Risk ID, Severity, Status, Created At

One row per control ID or risk entry

Headers must be in the first row

Sheet must be shared with your n8n service account

File Templates

Risk_Treatment_Register.xlsx

Assigned_Tasks (Google Sheet auto-created via workflow)

Customization Tips

Adjust SLA timelines (High = 3 days, Medium = 7 days, Low = 14 days)

Modify owner mapping per department (CISO, IT Security, Department Head)

Change escalation recipients in the Gmail/SMTP node

Extend workflow to SIEM, Slack, or Teams notifications

Compliance

Ensures audit trail and traceability of risk treatment

Prevents risks being missed or misrouted

Aligns with ISO 27001 A.5.1.1 and NIST CSF ID.RA

Supports audit evidence for PCI DSS, SOCI Act, and ACSC Essential Eight

Setup Instructions

Copy the provided Google Sheet template (Risk_Treatment_Register.xlsx).

Enter your risks with Risk ID, Severity, Status, and Created At.

Connect Google Sheets node using OAuth2.

Connect Gmail/SMTP for escalation emails (optional).

Run manually or schedule daily with a Cron trigger.

Review task allocations in the “Assigned_Tasks” sheet.

Supports

ISO 27001 Information Security

PCI DSS v4.0

NIST CSF / SOCI Act

ACSC Essential Eight

## 📊 Basic Information

- **Workflow ID:** 7858
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 53
- **Downloads:** 5
- **Created:** 2025/8/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7858)

## 👤 Author

- **Name:** Adnan Tariq
- **Username:** @adnantariq

## 🏷️ Categories

- SecOps
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×2)
- **scheduleTrigger** 
- **googleSheets** (×4)
- **if** 
- **switch** 
- **set** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
