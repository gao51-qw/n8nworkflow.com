# Automate employee onboarding with Slack, Jira, and Google Workspace integration

> ## Who is this for?

This template is ideal for **HR teams, startup founders, operations leads, remote-first companies, and freelancers** managing onboarding manually or across multiple tools.

Whether you’re hiring your first intern or streamlining onboarding for dozens of new team members, this workflow automates the entire **trigger → task creation → onboarding delivery** process using no-code tools connected via n8n.

---

## What problem does this solve?

Employee onboarding is often fragmented and error-prone — involving Jira tasks, Slack DMs, file sharing, and email templates spread across different apps.

This workflow connects it all, letting you **create tasks, notify people, share folders, and message hires instantly** — right when they’re marked as “Hired” in a Google Sheet or added to Slack.

No more bouncing between 5 tabs. This is onboarding as a system.

---

## What this workflow does

✅ Watches a Google Sheet (or Slack trigger) for new hires  
📋 Creates a Jira onboarding Epic with role-based subtasks  
📂 Generates a Google Drive folder and shares it with the new hire  
📬 Sends a personalized, HTML-formatted welcome email via Gmail  
💬 Posts a Slack message in the #onboarding channel + DM to the hire  
📊 Logs onboarding activity back to the Sheet (status, links, etc.)  
🔁 Modular subtasks based on role/team (e.g. Dev vs Marketing vs Student)  
🧠 Expressions, fallback logic, and Slack→Jira user ID mapping built-in

---

## Setup

1. Create API credentials for:
   - Slack
   - Google Sheets
   - Google Drive
   - Jira Cloud
   - Gmail (API or SMTP)

2. Import the `.json` workflow into your n8n instance (Cloud or self-hosted)  
3. Replace placeholder values (e.g. Project ID, Issue Type ID, folder path)  
4. Customize onboarding messages, email HTML, and task logic  
5. Test with included mock data (sample hire, Slack user, Jira user)  
6. Activate your flow and start onboarding with one click

---

## 🗒 Color-coded workflow notes

This workflow uses **Innovatio’s sticky note system** to guide you visually:

- 🟩 Green Notes → Main automation steps  
- 🟦 Blue Notes → What to customize (IDs, prompts, expressions)  
- 🟨 Yellow Notes → Optional logic and future upgrades  
- 🟫 Gray Notes → Welcome + final “next steps” CTA

Every group includes pre-filled nodes, dynamic expressions, and mock outputs so you can test quickly and scale confidently.

---

## How to customize this workflow?

📂 Swap Google Sheets for Airtable (better for teams or approvals)  
📅 Add 30/60/90-day check-ins via Google Calendar  
🤖 Plug in OpenAI to generate onboarding subtasks by role  
📬 Auto-assign mentors or SlackBot reminders after 7 days  
📊 Push Sheet logs into Notion or your HR dashboard

Need custom logic? Email me at **velebit@innovatio.design**

---

## Final notes

This template was created by **Velebit from Innovatio** with modularity, scalability, and team experience in mind.

All links included are official. No affiliate tracking, no sponsored content.

📜 A separate commercial license applies to the purchase via Gumroad, which includes extended rights, usage for client work, and scaling strategies.


## 📊 Basic Information

- **Workflow ID:** 3860
- **Complexity:** advanced
- **Node Count:** 77
- **Views:** 2528
- **Downloads:** 252
- **Created:** 2025/5/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3860)

## 👤 Author

- **Name:** Velebit from Innovatio
- **Username:** @innovatio

## 🏷️ Categories

- HR

## 🔗 Nodes Used

- **googleSheetsTrigger** 
- **if** (×2)
- **set** (×8)
- **jira** (×3)
- **stickyNote** (×45)
- **hubspotTrigger** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **code** (×2)
- **aggregate** (×2)
- **googleDrive** (×3)
- **slack** (×2)
- **slackTrigger** 
- **googleSheets** (×3)
- **httpRequest** 
- **merge** 
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 77 nodes with 27 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
