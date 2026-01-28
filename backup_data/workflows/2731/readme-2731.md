# Daily birthday reminders from Google Contacts to Slack

> Ensure you never miss a birthday with this automated workflow designed by WeblineIndia. It retrieves your Google Contacts, identifies birthdays happening today, and sends personalized reminders directly to a designated Slack channel. This daily automation keeps your team informed and makes birthday celebrations effortless.

## Steps

### Set Daily Schedule (Cron Node)
- Configure a Cron node to trigger the workflow daily at a specific time (e.g., 8 AM).
- This ensures the workflow runs consistently every day to check for birthdays.

### Retrieve Contacts (Google Contacts - Get Contact Node)
- Use the Google Contacts (Get Contact) node to fetch your contact list.
- Ensure your contacts have birthday details stored for accurate filtering.

### Filter Birthdays (IF Node)
- Add an IF Node to compare the current date with each contact’s birthday.
- Only contacts whose birthdays match today’s date will move to the next step.

### Send Birthday Notifications to Slack (Slack - Send Message Node)
- Use the Slack node to send a personalized birthday message to your chosen Slack channel (e.g., #general or #birthdays).
- Customize the message to include the contact’s name, e.g., "🎉 Today is John Doe's birthday! Let’s celebrate!"
- Configure the node to target a specific Slack channel for seamless notifications.

### Activate Workflow
- Save and activate the workflow.

From now on, the workflow will automatically check for birthdays daily and send timely reminders to your Slack team.

## Outcome
This hassle-free automation keeps your team engaged and ensures no birthday goes unnoticed. Celebrate special days of your contacts effortlessly and maintain meaningful connections.

## About WeblineIndia
This workflow showcases our commitment to delivering [innovative automation solutions](https://www.weblineindia.com/process-automation-solutions.html) that enhance productivity and foster better relationships. Let us help you build the AI automation tools that make a difference.



## 📊 Basic Information

- **Workflow ID:** 2731
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 3037
- **Downloads:** 303
- **Created:** 2025/1/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2731)

## 👤 Author

- **Name:** WeblineIndia
- **Username:** @weblineindia

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **scheduleTrigger** 
- **googleContacts** 
- **if** 
- **slack** 
- **filter** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
