# Automate random chore assignments with Google Sheets and Gmail notifications

> This workflow automates the assignment of household chores. It reads tasks and a list of people from Google Sheets, pairs each task with someone, updates the spreadsheet with the assignments and emails each person their chores. 

Each run makes a random assignment so you don’t have to decide who does what. By running on a schedule, it keeps your chore rotation automated.

## Who is it for?
Designed for families, roommates, flat‑shares or property managers who want to keep track of recurring chores without endless group chats or arguments. It’s also helpful for anyone coordinating a team of cleaners or volunteers and wishing to automate a fair distribution of tasks.

## How it works
1.	A Schedule Trigger starts the workflow at a regular interval (default every seven days).
2.	Google Sheets node reads the “Tasks” sheet from your spreadsheet. Each row contains a chore with a task.
3.	Another Google Sheets node reads the “Persons” sheet to obtain the list of people available to do chores.
4.	Next a Code node filters out any people without an email address and any tasks without a task name, then selects a random person for each task.
5.	A Gmail node sends each person an email summarising the chore they’ve been assigned.
6.	The last Google Sheets node updates the “Tasks” sheet, writing the assigned person’s name into the assigned_to column.

## Setup steps
1.	Spreadsheet – Create a Google Sheets document with two sheets. The first sheet “Tasks” should have columns for task, description, assigned_to and a “hidden row_number”. The second sheet “Persons” should have columns for name and email and “hidden row_number”. Fill them with your current chores and household members.
2.	Connect your Google account – In the Get Tasks and Get People nodes, select the credential for your Google account and search for your sheets.
3.	Configure the Schedule Trigger – Set the trigger interval (for example, every seven days on a Sunday evening).
4.	Edit the assignment logic (optional) – The Code node is preconfigured to filter data and assign tasks randomly. You can modify this script if you prefer a round‑robin approach, weighting by difficulty, or any other logic.
5.	Configure Gmail – In the Send a message node, select your Gmail credential. If you want you can customise the subject and body of the email.
6.	Update sheet mapping – In the Update assign_to node, ensure the assigned_to column mapping writes the assigned person’s name back to the correct row. The workflow uses the row_number to match the row being updated.
7.	Test and activate – Run the workflow manually to verify it reads your sheets, assigns tasks and sends emails. Once satisfied, activate the schedule so it runs automatically.

## Requirements
·	A Google account with access to Google Sheets and Gmail.
·	A spreadsheet containing two sheets as described above (see images), with headers matching the field names used in the workflow.

## How to customise it

Change the schedule interval to suit your rotation, edit the email template to include due dates or motivational messages, or modify the assignment script to weight tasks by difficulty. You could also send notifications via Slack or Telegram. 

## 📊 Basic Information

- **Workflow ID:** 9409
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 42
- **Downloads:** 4
- **Created:** 2025/10/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9409)

## 👤 Author

- **Name:** Adrian
- **Username:** @nafri

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **scheduleTrigger** 
- **googleSheets** (×3)
- **gmail** 
- **code** 
- **stickyNote** (×9)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
