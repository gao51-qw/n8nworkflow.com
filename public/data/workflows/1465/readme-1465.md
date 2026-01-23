# Collect absences from Google Calendars

> This workflow checks a Google Calendar at 8am on the first of each month to get anything that has been marked as a Holiday or Illness. It then merges the count for each person and sends an email with the list.

To use this workflow you will need to set the credentials to use for the Google Calendar node and Send Email node. You will also need to select the calendar ID and fill out the information in the send email node.

This workflow searches for Events that contain "Holiday" or "Illness" in the summary. If you want to change this you can modify it in the Switch node.

## 📊 Basic Information

- **Workflow ID:** 1465
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 3845
- **Downloads:** 384
- **Created:** 2022/2/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1465)

## 👤 Author

- **Name:** Jonathan
- **Username:** @jon-n8n

## 🏷️ Categories

- HR

## 🔗 Nodes Used

- **dateTime** 
- **cron** 
- **switch** 
- **noOp** (×2)
- **set** (×2)
- **merge** 
- **googleCalendar** 
- **emailSend** 
- **code** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
