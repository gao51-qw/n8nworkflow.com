# Selective forex factory calendar import & cleanup for Google Calendar

> ## Import Forex Factory Calendar To Google Calendar
### Purpose of this n8n Template
1. Import Forex Factory Calendar events into Google Calendar.
2. Delete past Forex Factory Calendar events from Google Calendar.

### Use Cases:
* Get reminders for important economic data releases — especially High Impact news.
* Use as a trigger for opening trading positions.

### How It Works (Adding Next Week’s Events to Google Calendar)
* Every Sunday, the workflow fetches the next week’s events (.ics file) using the HTTP node.
* The file is parsed with the Extract From File node.
* Events are split using the Split Out node so each event is processed separately.
* Events are classified into three categories — High, Medium, and Low Impact — using the Switch node.
* High Impact news is added to Google Calendar with a popup reminder set 30 minutes before release.
* Medium Impact news is added to Google Calendar without a reminder.
* Low Impact news is ignored.

### How It Works (Deleting Past Events from Google Calendar)
* The workflow retrieves events from the past 10 days using the Google Calendar node.
* If an event is related to Forex Factory, it will be deleted.
* If it is not related, it will be left untouched.

### How to Use
* Enter your credentials for all Google Calendar nodes.

### Requirements
* A valid Google Calendar credential.

### Need Help?
Join the [Discord](https://discord.gg/n8n) or ask in the [Forum](https://community.n8n.io/)!

Thank you!

## 📊 Basic Information

- **Workflow ID:** 8327
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 358
- **Downloads:** 35
- **Created:** 2025/9/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8327)

## 👤 Author

- **Name:** Harry Gunadi Permana
- **Username:** @harrygp

## 🏷️ Categories

- Crypto Trading

## 🔗 Nodes Used

- **httpRequest** 
- **extractFromFile** 
- **splitOut** 
- **googleCalendar** (×4)
- **switch** 
- **scheduleTrigger** 
- **if** 
- **noOp** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
