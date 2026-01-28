# Adjust morning alarms based on weather and train delays using Google Gemini

> **Description:** An intelligent alarm system that wakes you up early only when necessary. 🛡️🤖

This workflow monitors your local weather and train status every morning at 5:00 AM. It uses Google Gemini to analyze the situation. If there is heavy rain or a train delay, it sends an emergency alert immediately (and can trigger smart home devices). If everything is normal, it waits until your usual wake-up time to send a calm briefing.

## Key Features:

AI Context Awareness: Uses Gemini to intelligently judge "Emergency" situations based on weather descriptions and news headlines.

Dynamic Notification:

Emergency Mode: Immediate Email alert + Optional SwitchBot trigger (e.g., turn on lights).

Normal Mode: Delays notification until your scheduled wake-up time (90 mins later).

Targeted Monitoring: Searches specific train lines via Google News RSS.

## How it works:

Trigger: Runs daily at 5:00 AM.

Fetch: Gets weather from OpenWeatherMap and train news from Google News RSS.

Judge: Gemini analyzes the data.

Action: Routes the notification based on the status (Emergency/Normal).

## Setup Requirements:

Credentials: OpenWeatherMap API, Google Gemini API, Gmail.

Config: Open the "1. Configuration" node to set your Location, Train Line, and Email.

## 📊 Basic Information

- **Workflow ID:** 12514
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 1
- **Downloads:** 0
- **Created:** 2026/1/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12514)

## 👤 Author

- **Name:** NODA shuichi
- **Username:** @shuichi

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **stickyNote** (×5)
- **scheduleTrigger** 
- **set** 
- **httpRequest** (×2)
- **rssFeedRead** 
- **@n8n/n8n-nodes-langchain.googleGemini** 
- **code** 
- **if** 
- **gmail** (×2)
- **wait** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
