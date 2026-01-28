# Daily calendar digest: Format Google Calendar events with Claude 3.5 Sonnet for Telegram

> ## How it works
Every day at 6:00 AM, the workflow pulls all events from your Google Calendar scheduled for that day.
It extracts each event’s ID, title, and start time, aggregates them into one list, and converts them into a text string.
This text is passed to an AI-powered Information Extractor (using Claude 3.5 Sonnet) to format the events into a clear daily summary.
Finally, the summary is sent as a Telegram message to your chosen chat ID, giving you a ready-to-read daily to-do list.

## How to use

Connect your Google Calendar account to the Get many events node.

Set the correct calendar in the calendar field.

Link your Telegram account and set your chatId in the Send a text message node.

Adjust the Schedule Trigger node if you want a different reminder time.

Activate the workflow — it will run daily and send your event summary to Telegram automatically.

## Customising this workflow

Reminder time: Change triggerAtHour in the Schedule Trigger node for morning, evening, or multiple reminders per day.

Calendar source: Switch to another Google Calendar or add multiple Get many events nodes for different calendars.

Message style: Edit the Information Extractor system prompt to change language, formatting, or level of detail in your summary.

Delivery channel: Replace or add another messaging node (e.g., Email, Slack, WhatsApp) if you want your to-do list in different apps.

Event filtering: Add a filter before aggregation to include only certain event types or keywords (e.g., “Meeting”, “Deadline”).

## 📊 Basic Information

- **Workflow ID:** 7266
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 254
- **Downloads:** 25
- **Created:** 2025/8/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7266)

## 👤 Author

- **Name:** Patrik Schick
- **Username:** @patrikdescodino

## 🏷️ Categories

- Personal Productivity
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatAnthropic** 
- **stickyNote** (×4)
- **scheduleTrigger** 
- **googleCalendar** 
- **set** (×2)
- **aggregate** 
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **telegram** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
