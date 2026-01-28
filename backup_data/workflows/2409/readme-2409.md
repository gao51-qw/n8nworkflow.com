# Weekly reminder on your notion tasks with a deadline

> ## Who might benfit from this workflow?
Everyone organizing him/herself by using a notion database for tasks but losing track on some important tasks having a deadline. The weekly reminder helps you to not forget about your notion tasks.

## How it works:
- The workflow fetches all your notion tasks from a desired database but the closed ones
- It generates a html template for each tasks containing a headline and a short list of key data (prio, status deadline, tags)
- It creates two groups based on the deadline date if a task is already overdue or not
- It generates a complete html email containing both groups and some sugar around them
- It sends the email to your desired email
- It uses Pushover to send you a push notification to your phone
- It is scheduled by the beginning of each week

## How to set it up:
- Fill out the "Set Workflow vars" node with your data
- Connect your notion account and select the database your tasks are stored at
- define the status filters to the ones you are using for your tasks
- Setup your email server to enable the email node to deliver your html email
- Create a Pushover account and setup the authentication for the Pushover node
- Adjust the last html node to change email style for your desire

## How to customize this workflow for your needs?
- You might adjust the filtering of the notion fetch node to filter for other statuses than provided in the example.
- You apply your custom design to the html email
- You could remove the filter which is filtering for tasks having a deadline and just send yourself a reminder for all tasks

---
### You need help implementing this or any other n8n workflow?
Feel free to contact me via LinkedIn or [my business website](https://www.unitize.de).

### You want to start using n8n?
Use this link to [register for n8n](https://n8n.partnerlinks.io/edr9c63lw12z)
(This is an affiliate link)

---

## 📊 Basic Information

- **Workflow ID:** 2409
- **Complexity:** advanced
- **Node Count:** 27
- **Views:** 2191
- **Downloads:** 219
- **Created:** 2024/9/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2409)

## 👤 Author

- **Name:** David
- **Username:** @unitize

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **manualTrigger** 
- **notion** 
- **sort** 
- **filter** 
- **emailSend** 
- **html** (×4)
- **aggregate** (×3)
- **pushover** 
- **scheduleTrigger** 
- **if** 
- **merge** (×2)
- **stickyNote** (×9)
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 27 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
