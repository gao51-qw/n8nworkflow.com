## Description:
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
