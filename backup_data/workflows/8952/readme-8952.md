# Automated Stripe dispute alert & case tracking with Slack + ClickUp

> ## Description:
Stay ahead of payment disputes with this automated n8n workflow that integrates Stripe, Slack, and ClickUp. Perfect for finance teams, payment ops specialists, and SaaS businesses, this template fetches disputes directly from Stripe, analyzes urgency, and instantly notifies your team with rich, formatted alerts.

High-priority disputes are flagged, pushed into Slack for immediate visibility, and tracked in ClickUp with due dates aligned to Stripe evidence deadlines—ensuring no dispute ever slips through the cracks. For lower-priority or resolved cases, the workflow provides concise updates and maintains an audit trail.

No more manual Stripe checks, late responses, or missed deadlines—this workflow turns dispute management into a proactive, structured process.

## What This Template Does (Step-by-Step):
 🟢 Trigger: Manual or Scheduled Execution
 Run the workflow on demand or schedule it (e.g., every 4 hours).

📥 Fetch Stripe Disputes
 Calls the Stripe API to retrieve all active disputes in your account.

📊 Validate & Format Data
 Ensures disputes exist, then enriches data with formatted amounts, deadlines, and customer info.

⚖️ Priority Logic
 Determines urgency based on dispute status, evidence deadlines, and transaction amount.

🚨 High Priority Path
 • Sends urgent Slack alert with full dispute details
 • Creates a high-priority ClickUp task with due dates
 • Flags immediate action required

📋 Standard Path
 • Sends standard Slack alert for non-urgent cases
 • Creates a ClickUp task with appropriate priority levels

ℹ️ No Disputes Path
 Sends a Slack summary confirming no new disputes, maintaining a clear audit trail.

✅ Workflow Completion
 Confirms all disputes are processed, logged, and assigned—ready for your team to take action.

## Required Integrations:
✅ Stripe API (for dispute data)
✅ Slack API (for team alerts)
✅ ClickUp API (for task management)

## Perfect For:
 💳 FinOps and payment operations teams monitoring transactions
 🏢 SaaS platforms or e-commerce handling large payment volumes
 🛡️ Risk and compliance teams tracking disputes and deadlines
 📈 Businesses scaling customer payment handling and case management

## Why Use This Template?
 ✔️ Never miss a dispute deadline
 ✔️ Automated priority assessment saves hours of manual checks
 ✔️ Seamlessly integrates alerts + task tracking
 ✔️ Provides full visibility and accountability for dispute resolution


## 📊 Basic Information

- **Workflow ID:** 8952
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 53
- **Downloads:** 5
- **Created:** 2025/9/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8952)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** (×8)
- **httpRequest** 
- **if** (×2)
- **slack** (×3)
- **clickUp** (×2)
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
