## 📘 Description
This workflow automates dependency update risk analysis and reporting using Jira, GPT-4o, Slack, and Google Sheets.
It continuously monitors Jira for new package or dependency update tickets, uses AI to assess their risk levels (Low, Medium, High), posts structured comments back into Jira, and alerts the DevOps team in Slack — all while logging historical data into Google Sheets for visibility and trend analysis.
This ensures fast, data-driven decisions for dependency upgrades, improved code stability, and reduced security risks — with zero manual triage.

## ⚙️ What This Workflow Does (Step-by-Step)

🟢 When Clicking “Execute Workflow”
Manually triggers the dependency risk analysis sequence for immediate review or scheduled monitoring.

📋 Fetch All Active Jira Issues
Retrieves all active Jira issues to identify tickets related to dependency or package updates.
 Provides the complete dataset — including summary, status, and assignee information — for AI-based risk evaluation.

✅ Validate Jira Query Response
Verifies that Jira returned valid issue data before proceeding.
 If data exists → continues filtering dependency updates.
 If no data or API error → logs the failure to Google Sheets.
 Prevents workflow from continuing with empty or broken datasets.

🔍 Identify Dependency Update Issues
Filters Jira issues to find only dependency-related tickets (keywords like “update,” “bump,” “package,” or “library”).
 This ensures only relevant version update tasks are analyzed — filtering out unrelated feature or bug tickets.

🏷️ Extract Relevant Issue Metadata
Extracts essential fields such as key, summary, priority, assignee, status, and created date for downstream AI processing.
 Simplifies the data payload and ensures accurate, structured analysis.

📢 Alert DevOps Team in Slack
Immediately notifies the assigned DevOps engineer via Slack DM about any new dependency update issue.
 Includes formatted details like summary, key, status, priority, and direct Jira link for quick access.
 Ensures rapid visibility and faster response to potential risk tickets.

🤖 AI-Powered Risk Assessment Analyzer
Uses GPT-4o (Azure OpenAI) to intelligently evaluate each dependency update’s risk level and impact summary.
 Considers factors such as:
- Dependency criticality
- Version change type (major/minor/patch)
- Security or EOL indicators
- Potential breaking changes
 
Outputs a clean JSON with fields:

{"risk_level": "Low | Medium | High","impact_summary": "Short human-readable explanation"}
Helps DevOps teams prioritize updates with context.

🧠 GPT-4o Language Model Configuration
Configures the AI reasoning engine for precise, context-aware DevOps assessments.
 Optimized for consistent technical tone and cost-efficient batch evaluation.

📊 Parse AI Response to Structured Data
Safely parses the AI’s JSON output, removing markdown artifacts and ensuring structure.
 Adds parsed fields — risk_level and impact_summary — back to the Jira context.
 Includes fail-safes to prevent crashes on malformed AI output (fallbacks to “Unknown” and “Failed to parse”).

💬 Post AI Risk Assessment to Jira Ticket
Automatically posts the AI’s analysis as a comment on the Jira issue:
- Displays 🤖 AI Risk Assessment Report header
- Shows Risk Level and Impact Summary
- Includes a checklist of next steps for developers
-  Creates a permanent audit trail for each dependency decision inside Jira.

📈 Log Dependency Updates to Tracking Dashboard
Appends all analyzed updates into Google Sheets, recording:
- Date
- Jira Key & Summary
- Risk Level & Impact Summary
- Assignee & Status
This builds a historical dependency risk database that supports:
- Trend monitoring
- Security compliance reviews
- Dependency upgrade metrics
- DevOps productivity tracking

📊 Log Jira Query Failures to Error Sheet
If the Jira query fails, the workflow automatically logs the error (API/auth/network) into a centralized error sheet for troubleshooting and visibility.

## 🧩 Prerequisites
Jira Software Cloud API credentials
Azure OpenAI (GPT-4o) access
Slack API connection
Google Sheets OAuth2 credentials

## 💡 Key Benefits
 ✅ Automated dependency risk assessment
 ✅ Instant Slack alerts for update visibility
 ✅ Historical tracking in Google Sheets
 ✅ Reduced manual triage and faster decision-making
 ✅ Continuous improvement in release reliability and security

## 👥 Perfect For
- DevOps and SRE teams managing large dependency graphs
- Engineering managers monitoring package updates and risks
- Security/compliance teams tracking vulnerability fix adoption
- Product teams aiming for stable CI/CD pipelines