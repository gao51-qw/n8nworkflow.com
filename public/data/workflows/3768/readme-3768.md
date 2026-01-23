# Automatically create Google Tasks from Gmail labeled emails

> ### Automatically create Google Tasks from new Gmail emails labeled "To-Do".

**Who is this for?**
- This template is perfect for individuals and teams who want to boost their productivity by automatically converting important emails into actionable tasks in Google Tasks.

**What problem is this workflow solving**?
- Manually managing emails and creating tasks can be tedious. This workflow ensures you never miss a follow-up by instantly turning important emails into tasks without switching between apps.

**What this workflow does?**
- Watches for new emails in Gmail with the label "To-Do".
- Creates a new Google Task with the email subject as the task title and the email snippet as notes.
- Sets the task due date to 24 hours after the email is received.

**Setup**
- Create a label "To-Do" in your Gmail account if it doesn't already exist.
- Connect your Gmail and Google Tasks accounts to n8n using OAuth2 credentials.
- Import the workflow into n8n and activate it.

**How to customize this workflow to your needs?**
- Change the Gmail label to a different one (e.g., "Important", "Follow-up").
- Modify the due date logic in the expression if you want more/less time to complete tasks:
{{ $now.add(2, 'days').toISOString() }}
- Add additional Gmail filters (like only unread emails) to refine which emails create tasks.



## 📊 Basic Information

- **Workflow ID:** 3768
- **Complexity:** beginner
- **Node Count:** 4
- **Views:** 1234
- **Downloads:** 123
- **Created:** 2025/4/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3768)

## 👤 Author

- **Name:** Aayushman Sharma
- **Username:** @ajstyle0411

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **gmailTrigger** 
- **googleTasks** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 4 nodes with 1 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
