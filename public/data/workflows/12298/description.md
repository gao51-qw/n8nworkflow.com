## 📌Who is this for?
This workflow is designed for engineering teams, project managers, and IT operations who need consistent visibility into team availability across multiple projects.
It’s perfect for organizations that use Odoo for leave management and Redmine for project collaboration, and want to ensure that everyone involved gets timely, automated Slack notifications whenever a team member will be absent the next day.

## 📌The problem
When team members go dark, everything grinds to a halt. You're stuck with:
- Last-minute meeting reschedules (and frustrated stakeholders)
- Tasks assigned to people who aren't there
- No time to redistribute workload
- Bottlenecks affecting multiple projects

## 📌How it works
1. **Runs** daily at 17:15 - Set it and forget it. Executes every afternoon, giving teams time to prepare.
2. **Fetches** Tomorrow's Approved Leaves from Odoo - Pulls all leave records with tomorrow's start date and "approved" status.
3. **Maps** Employee & Project Data - Grabs the employee's details and identifies every Redmine project they're assigned to.
4. **Finds** All Teammates on the Same Projects - Deduplicates across overlapping projects to avoid notification spam.
5. **Sends** Targeted Slack Notifications - Only notifies people who actually work with the absent member, plus optional manager alerts.

## 📌Quick setup
Before you start, you’ll need:
- Odoo API key
- Redmine API key
- Slack Bot Token (or Incoming Webhook URL)
- Subflows need to be created within a new flow; the main flow will call these subflows.

## 📌Results
What changes immediately:
- Zero surprises - teams know absences 24 hours ahead
- Workload rebalancing happens before the person goes off
- Managers make proactive decisions, not reactive ones
- No more wasted Slack messages to irrelevant people
- This creates a more predictable and transparent workflow across your engineering and project teams.

## 📌Take it further
Ready to supercharge it? Add:
- Auto-assign backup owners for critical tasks
- Sync absences to Google Calendar/Outlook
- Log notifications to a database for auditing
- Conditional alerts (key roles, high-priority projects only)
- Daily summary digest of all upcoming absences

## 📌Need help customizing?
Contact me for consulting and support:
[Linkedin](https://www.linkedin.com/company/bac-ha-software/posts/?feedView=all) / [Website](https://bachasoftware.com/bhsoft-contacts)