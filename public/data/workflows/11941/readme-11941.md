# Automated employee offboarding: lock Redmine & GitLab accounts using Odoo 18

> ## 📌 Who is This For?
IT Ops, HR, and Security teams automating employee offboarding. Zero manual work: Disable access to Redmine, GitLab, and more- right after their last day. Boost security, cut risks, and stay compliant.

## 📌 The Problem It Solves
Offboarding is messy and slow:

- HR flags ending contracts.
- IT hunts down accounts manually (Redmine, GitLab, etc.).
- Misses happen, risks linger.

This n8n workflow queries Odoo 18 daily, spots offboardees, and locks accounts automatically.

## 📌 What It Does

- **Triggers** daily (e.g., 5 PM weekdays).
- **Queries** Odoo 18 for employees ending today.
- **Filters** active users needing offboarding.
- **Checks & Locks** Redmine accounts via API.
- **Checks & Revokes** GitLab access via API.
- **Notifies** via Slack/Teams/email with summary.
- **Handles Errors**: Retries failures, logs issues.

## 📌 Quick setup

1. Odoo 18 API (read employee end dates/last shifts).
2. Redmine Admin API key.
3. GitLab Admin token (for locking users).
4. Slack/Teams webhook or SMTP for alerts.
5. Cron schedule (e.g., daily 5 PM weekdays, skip weekends).

## 📌 Customize It

- **Add Systems**: Jira, Confluence, LDAP—easy toggles.
- **Notification**: Full reports or alerts-only.
- **Error Rules**: Retries, escalations.
- **Audit Logs**: Save to DB, S3, Sheets, or dashboard.

## 📌 Results

100% automated: Accounts locked on exit day. No orphans, no workload, full compliance.

## 📌 Workflow in Action

1. Schedule trigger fires.
2. Pull Odoo offboardees.
3. API checks & disables Redmine/GitLab.
4. Logs + summary notification.

## 📊 Basic Information

- **Workflow ID:** 11941
- **Complexity:** advanced
- **Node Count:** 37
- **Views:** 19
- **Downloads:** 1
- **Created:** 2025/12/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11941)

## 👤 Author

- **Name:** BHSoft
- **Username:** @bhsoft

## 🏷️ Categories

- HR

## 🔗 Nodes Used

- **noOp** (×2)
- **code** (×5)
- **set** 
- **if** (×9)
- **stickyNote** (×6)
- **scheduleTrigger** 
- **splitInBatches** (×2)
- **httpRequest** (×11)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 37 nodes with 30 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
