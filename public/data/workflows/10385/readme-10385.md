# Telegram multi-language translation bot with GPT-3.5

> SmartPoll Automator is an n8n-powered workflow that automatically creates and publishes polls in Telegram. It helps teams, communities, and businesses run polls without manual work.

You simply send a command or submit a form — the workflow creates the poll and posts it in your selected Telegram group/channel.

### **Key Features**

* Create polls automatically from a webhook or form input
* Support for single-choice and multi-vote polls
* Option to schedule polls
* Logs all poll requests and results
* Sends confirmation and status updates
* Works across multiple Telegram groups/channels

### **Use Cases**

* Daily team check-in polls
* Customer feedback polls
* Community/Q&A voting
* Training/quiz polls
* Opinion surveys for Telegram groups
* Marketing campaign polls

### **Workflow Steps**

| Step | Action                 | Description                                     |
| ---- | ---------------------- | ----------------------------------------------- |
| 1    | Webhook Trigger        | Receives poll request data (question + options) |
| 2    | Data Validation        | Checks if poll question & options are valid     |
| 3    | Poll Formatting        | Structures poll text and options                |
| 4    | Telegram API Poll Send | Sends poll to selected Telegram group/channel   |
| 5    | Optional Scheduler     | Delay or schedule poll time                     |
| 6    | Logging                | Stores poll details for logs                    |
| 7    | Confirmation           | Sends success message to user or admin          |

### **Input Format**

Example JSON input via webhook:

```json
{
  "poll_question": "Which feature should we build next?",
  "options": [
    "AI Email Assistant",
    "Scraper Automation",
    "DevOps Bot"
  ],
  "multiple_answers": false,
  "target_chat_id": "123456789",
  "schedule_time": ""
}
```

### **Output**

* Poll posted in Telegram group
* Confirmation message returned
* Log entry stored

Example confirmation response:

```
Poll successfully created and posted to Telegram!
```

### **Requirements**

* Telegram Bot Token
* Telegram Chat ID
* n8n instance
* Webhook URL or Google Form/CRM connection

### **Benefits**

* Saves time
* Ensures consistent poll format
* Improves engagement in Telegram communities
* Enables automated market research & internal feedback
* No coding required after setup

### **Enhancement Ideas**

* Add AI to generate poll questions
* Add Google Sheets poll request form
* Add analytics dashboard
* Trigger polls from Slack/CRM

### **Status**

✅ Fully Automated
✅ Multi-group support
✅ Real-time logging
🕒 Optional scheduling



## 📊 Basic Information

- **Workflow ID:** 10385
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 117
- **Downloads:** 11
- **Created:** 2025/10/31
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10385)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **webhook** 
- **stickyNote** (×12)
- **code** (×6)
- **httpRequest** (×3)
- **respondToWebhook** 
- **wait** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
