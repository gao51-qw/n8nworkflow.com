# Send one-time email alerts for urgent tasks with Google Sheets and Gmail

> ## Description

This workflow sends a personalized email when a task in a Google Sheet is marked as Urgent, but only once per task.

It prevents duplicate notifications by updating the sheet after the email is sent. Ideal for collaborative task tracking where multiple people edit the same spreadsheet.

## Context

When working with shared task lists in Google Sheets, it’s easy to miss critical updates — or worse, trigger multiple alerts for the same task.

This workflow ensures that each "Urgent" task only sends one email notification, and then marks it as “Notified” to avoid duplicates.

## Target Users
- Project Managers using Google Sheets
- Operations or support teams managing collaborative task boards
- Anyone who needs alert automation with built-in anti-spam logic

## Technical Requirements

- Google Sheets account with edit access

- Gmail account for sending notifications

- Google Sheet with columns:

	- Priority

	- Notified

	- Task

	- Owner

	- Deadline

	- Status

	- Next Step

## Workflow Steps
![image.png](fileId:2774)

- Trigger: Watches for changes in Google Sheets (e.g., edits to the "Priority" column)

- IF Node – Checks that:

- Priority = Urgent

- Notified is empty

- row exists (required for update)

- Send Email: Sends a personalized message with task details

- Update Row:  Writes “Yes” in the Notified column to avoid duplicate alerts

## Setup Instructions

To set up this workflow:

- Connect your Google Sheets and Gmail credentials in n8n.

- Copy the spreadsheet structure or use your own 

- Import the workflow, select your Sheet (and the column to check if you use a different Google Sheets template), and test by marking a task as “Urgent”.

- Check that an email is sent and the “Notified” column updates to “Yes”.-


## Key Features

✅ One email per urgent task — prevents duplicates
📧 Dynamic email content with task info
🧠 Built-in anti-spam logic
📋 Simple to configure and reuse
💬 Customizable for any team’s needs

## Expected Output

- An email alert is sent only once per task marked as Urgent
![image.png](fileId:2773)

- The Notified field is updated in the Google Sheet
![image.png](fileId:2775)

- A clean and scalable alert system with no duplicates

## Tutorial video:
[Watch the Youtube Tutorial video](https://www.youtube.com/watch?v=9e7ZCCtS5a4)

## About me :
I’m Yassin a Project & Product Manager  Scaling tech products with data-driven project management.
📬 Feel free to connect with me on [Linkedin](https://www.linkedin.com/in/yassin-zehar)

## 📊 Basic Information

- **Workflow ID:** 9324
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 76
- **Downloads:** 7
- **Created:** 2025/10/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9324)

## 👤 Author

- **Name:** Yassin Zehar
- **Username:** @yassinzehar

## 🏷️ Categories

- Project Management

## 🔗 Nodes Used

- **stickyNote** (×4)
- **googleSheetsTrigger** 
- **googleSheets** (×2)
- **if** 
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
