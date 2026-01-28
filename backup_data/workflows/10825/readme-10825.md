# Automate task deadline reminders with Google Sheets and Gmail (Today/3-Day/7-Day)

> ## Task Deadline Reminder Workflow (Today / 3-Day / 7-Day)
Task deadline management manually is inefficient and leads to missed deadlines—especially when teams rely on spreadsheets and individual reminders.  
This workflow automates the entire follow-up process by reading a centralized task sheet in Google Sheets every morning, checking the deadline for each task, and sending automatic email notifications to the responsible person based on urgency.  
Tasks due **today**, **within three days**, or **within one week** are identified and routed to customized Gmail notifications, ensuring that every team member is aware of upcoming deadlines without manual checking.

## Who’s it for
This workflow is ideal for teams and organizations that manage multiple tasks across departments and need a reliable way to stay on top of deadlines. It is especially useful for:

- Project managers coordinating many deadlines  
- Back-office teams monitoring routine operational tasks  
- Organizations with distributed members  
- Anyone who relies on spreadsheets but needs automated follow-up  

By integrating Google Sheets, n8n, and Gmail, you gain a proactive notification system that keeps everyone aligned and reduces the risk of forgotten tasks.

## How it works
### 1. Daily trigger  
The workflow runs every morning at 9:00 using a Schedule Trigger.

### 2. Load task list from Google Sheets  
The workflow retrieves all rows from the designated spreadsheet, including task name, deadline, responsible person, and email address.

### 3. Process tasks individually  
A loop node evaluates each task one by one.

### 4. Evaluate deadline conditions  
- **Due today:** Deadline matches today’s date  
- **Due within 3 days:** Deadline falls between today and three days ahead  
- **Due within 7 days:** Deadline falls between today and one week ahead  

### 5. Send notifications  
Depending on urgency:  
- “本日が締め切りです” for tasks due today  
- “タスク期限が三日前となりました” for tasks due within 3 days  
- “タスクの期限が一週間以内です” for tasks due within 7 days  

Each email is automatically sent to the responsible person based on the “メールアドレス” field in the sheet.

### 6. Complete processing  
The loop continues until all task rows have been checked.

## How to set up
- Import the workflow into your n8n instance  
- Authenticate Google Sheets and select the task spreadsheet  
- Authenticate Gmail as the sender account  
- Confirm required columns: タスク, 期限, 担当, メールアドレス  
- Adjust time, message text, or conditions based on your internal rules  

## Requirements
- Active n8n instance  
- Google Sheets access with permission to read the task list  
- Gmail OAuth connection for email sending  
- Spreadsheet with at least: task name, deadline, responsible person, email address  

## How to customize
You can expand and refine this workflow to match your company’s processes:

- Add Slack, Chatwork, or LINE notifications  
- Add overdue task detection  
- Add task priority sorting (High / Medium / Low)  
- Log notifications back into the spreadsheet  
- Send daily summary reports to managers  

This workflow provides a flexible foundation for building a complete automated task governance system.


## 📊 Basic Information

- **Workflow ID:** 10825
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 178
- **Downloads:** 17
- **Created:** 2025/11/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10825)

## 👤 Author

- **Name:** Yuki Hirota
- **Username:** @yukihirota

## 🏷️ Categories

- Project Management

## 🔗 Nodes Used

- **googleSheets** 
- **splitInBatches** 
- **if** (×3)
- **scheduleTrigger** 
- **stickyNote** (×10)
- **gmail** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
