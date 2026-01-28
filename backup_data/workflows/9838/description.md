Description:
 Guarantee that only fully compliant stories and tasks make it into your release with this n8n automation template.
 The workflow monitors Jira for issue updates and link changes, validates whether each story meets the Definition of Done (DoD), and automatically flags non-compliant items. It also creates a tracking record in Monday.com for unresolved blockers and sends Slack alerts summarizing readiness status for every version.
Perfect for release managers, QA leads, and engineering teams who need an automated guardrail for production readiness.

## ✅ What This Template Does (Step-by-Step)
- 🎯 Jira Webhook Trigger: Activates automatically when an issue is updated or linked in Jira — ideal for continuous readiness validation.
- 📋 Fetch Full Issue Details: Retrieves the complete issue payload, including custom fields, status, and Definition of Done flags.
- 🔄 Batch Processing (1-by-1): Ensures each issue is validated individually, allowing precise error handling and clean audit trails.
- ✅ Check Definition of Done (DoD): Evaluates whether the customfield_DoD field is marked as true — a key signal of readiness for release.
- ⚠️ Flag Non-Compliant Issues: If DoD isn’t met, marks the issue as “Non-Compliant” with the reason “Definition of Done not met.”
- 📊 Create Tracking Record in Monday.com: Logs non-compliant issues to a dedicated Release Issues board for visibility and coordination with cross-functional teams.
- 📢 Send Slack Notifications: Posts to the #release-updates channel summarizing compliant vs non-compliant items per version, helping the team take timely action.

## 🧠 Key Features
 🚦 Real-time Jira readiness validation
 ✅ Automated DoD enforcement before release

📊 Monday.com tracker for all non-compliant issues
 📢 Slack summary notifications for release teams
 ⚙️ Batch-wise validation for scalable QA

## 💼 Use Cases
 🚀 Enforce Definition of Done across linked Jira stories
 📦 Automate pre-release checks for every version increment
🧩 Provide visibility into blockers via Monday.com dashboard
 📢 Keep engineering and QA teams aligned on release status

## 📦 Required Integrations
Jira Software Cloud API – to monitor issue updates and retrieve details
Monday.com API – to log and track non-compliant items
Slack API – for real-time release alerts

## 🎯 Why Use This Template?
 ✅ Eliminates manual pre-release validation
 ✅ Reduces release delays due to missed criteria
 ✅ Keeps all stakeholders aligned on readiness status
 ✅ Creates a transparent audit trail of compliance
