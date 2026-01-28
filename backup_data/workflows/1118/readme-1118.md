# Sync Google Calendar tasks to Trello every day

> This workflow will allow you at the beginning of each day to copy your google calendar events into Trello so you can take notes, label, or automate your tasks. 

When deploying this, don't forget to change:
- Label ID for meeting type under "Create Trello Cards". You should be able to find instructions [Here](https://stackoverflow.com/questions/42713100/trello-label-id-in-microsoft-flow#:~:text=Go%20to%20any%20board%20and,info%20should%20be%20right%20there.) on how to find the label ID. 
- Description for Trello cards under "Create Trello Cards". I currently pull in notes but it should be simple to change to pull the Gcal description instead.
- You can change the trigger time to fire at a different time. 

## 📊 Basic Information

- **Workflow ID:** 1118
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 3982
- **Downloads:** 398
- **Created:** 2021/6/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1118)

## 👤 Author

- **Name:** Angel Menendez
- **Username:** @djangelic

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **function** 
- **set** 
- **if** 
- **googleCalendar** 
- **splitInBatches** 
- **trello** 
- **noOp** 
- **cron** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
