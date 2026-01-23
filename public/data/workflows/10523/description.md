## Description

This workflow sends an instant email alert when a task in a Google Sheet is marked as Urgent, and then sends a Telegram reminder notification after 2 hours if the task still hasn’t been updated. Then a Jira ticket is created so the task enters in the formal workflow and another Telegram message is sent with the details of the issue created.

It helps teams avoid missed deadlines and ensures urgent tasks get attention — without requiring anyone to refresh or monitor the sheet manually.

## Context

In shared task lists, urgent items can be overlooked if team members aren't actively checking the spreadsheet.
This workflow solves that by:

- Sending an email as soon as a task becomes Urgent

- Waiting 2 hours

- Checking if the task is still open

- Sending a Telegram reminder only if action has not been taken

- Creating a Jira issue

- Sending a Telegram message with the details of the issue created


- This prevents both silence and spam, creating a smart and reliable alert system.

## Target Users
- Project Managers using Google Sheets

- Team leads managing shared task boards

- Remote teams needing lightweight coordination

- Anyone who wants escalation notifications without complex systems

## Technical Requirements
- Google Sheets credential
- Gmail credential
- Telegram Bot + Chat ID
- Google Sheet with a column named Priority
- Jira credential

## Workflow Steps
![image.png](fileId:3300)
- Trigger: Google Sheets Trigger (on update in the “Priority” column)
- IF Node – Checks if Priority = Urgent
- Send Email – Sends alert email with task name, owner, status, deadline
- Mark Notified = Yes in the sheet
- Wait 2 hours
- IF Status is still not resolved
- Send Telegram reminder
- create an Issue on Jira based on the information provided
- Send Telegram message with the details of the ticket

## Key Features

- Real-time alerts on critical tasks
- Simple logic (no code required)
- Custom email body with dynamic fields
- Works on any Google Sheet with a “Priority” column
- Telegram notification ensures the task doesn’t get forgotten

## Expected Output
![image.png](fileId:3173)

![image.png](fileId:3171)

![image.png](fileId:3246)

- Personalized email alert when a task is marked as "Urgent"
- Email includes task info: title, owner, deadline, status, next step
- Telegram message after 2 hours if the task is still open
- Automatic creation of a Jira issue with the higgest priority
- Telegram message to notify about the new Jira ticket

## How it works

Trigger: Watches for “Priority” updates
🔍 Check: If Priority = Urgent AND Notified is empty
📧 Email: Sends a personalized alert
✏️ Sheet Update: Marks the task as already notified
⏳ Wait: 2-hour delay
🤖 Check Again: If Status hasn’t changed → send Telegram reminder, create Jira ticket and send the details.


## Tutorial video:
[Watch the Youtube Tutorial video](https://www.youtube.com/watch?v=2iFMqQSjq7U)

## About me :
I’m Yassin a Project & Product Manager  Scaling tech products with data-driven project management.
📬 Feel free to connect with me on [Linkedin](https://www.linkedin.com/in/yassin-zehar)