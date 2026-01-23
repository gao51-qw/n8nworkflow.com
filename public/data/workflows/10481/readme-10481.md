# Automated trip weather forecasts from Google Calendar to Telegram

> ## How it works
This workflow for trip weather forecasting is event-driven, starting when a calendar event is created or updated, and provides timely weather alerts and forecasts tailored to your travel dates and locations.

Overall, this workflow efficiently integrates calendar travel plans with real-time and updated weather intelligence for ultimate travel preparedness and peace of mind.

## From the creator
If you’re jetting off frequently, bouncing between time zones, juggling meetings, and squeezing every drop of life out of travel, you need this flow. This ain’t your grandma’s weather app. It’s a bulletproof system that scans your calendar, mines your trips, and delivers laser-targeted weather intel and urgent alerts, right when you need it. 
- **No more surprises**. 
- **No more scrambling**. 

Just real-time weather mastery that saves your schedule.

**You’re not just traveling: you’re dominating.**
This flow makes sure the only thing you worry about is your next move, not whether the weather’s gonna ruin it. Time to upgrade from a tourist to a boss.

## Step-by-step

📅 **Google Calendar Triggers** (Event Created/Updated): 
The workflow starts immediately upon creation or update of any calendar event, enabling real-time detection of new or changed travel plans.

✈ **Identify Trips**: 
Filters these calendar events to detect travel-related trips by matching keywords such as "trip," "flight," or "vacation" in titles or descriptions.

📍**Extract Locations**: 
Parses each trip event’s details to extract start and end dates and the trip destination from the summary/description/location fields.

🌐 **Build interrogation URL**: 
Constructs a Visual Crossing API request URL dynamically based on the extracted trip location and dates, including daily forecasts and alerts.
Fetches the detailed weather forecast and alert data for the trip location and duration right after detecting the event.
Formats the raw weather data into a readable summary 🌤️🌪🌀 including temperatures, precipitation probabilities, conditions, and eventual severe weather alerts.

📲 📧 **Send Forecast**: 
Sends the forecast summary with alerts via Telegram to keep the user informed instantly.

⌛**One day before the trip**: 
Pauses the workflow until exactly one day before the trip start date, ensuring a timely second fetch when more accurate or updated weather data is available and the updated forecast is sent.

## Optional
You can replace the Telegram node with email, WhatsApp, Slack, SMS notifications, or add multiple notification nodes to receive them across all desired channels.

## 📊 Basic Information

- **Workflow ID:** 10481
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 37
- **Downloads:** 3
- **Created:** 2025/11/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10481)

## 👤 Author

- **Name:** Razvan Bara
- **Username:** @amzneer

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **if** 
- **code** (×4)
- **wait** 
- **stickyNote** (×6)
- **googleCalendarTrigger** (×2)
- **telegram** 
- **httpRequest** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
