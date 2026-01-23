# Send severe weather alerts from Visual Crossing to Telegram

> ## How it works
This workflow automates the process of fetching weather forecasts for your home location, including severe weather alerts, and sends timely notifications. It uses the Visual Crossing API for detailed weather data and integrates with Telegram (or other messaging services) for messaging and alerts.

## Step-by-step
In summary, the workflow runs every hour, grabs the current day's weather conditions for [your city/location of interest], and returns only those items that truly contain one or more weather alerts.

📅 Step 1: **Hourly Trigger**
The workflow begins with the Hourly Trigger node, which is a scheduleTrigger. This node acts as the clock that initiates the entire process at regular hourly intervals.

🌤️ Step 2: **Fetch Weather Data**
Immediately after the trigger, the workflow moves to the Meteo node, an httpRequest. This node makes an external API call to fetch weather data for your specified location.

API Used: Visual Crossing Web Services

Authentication: Uses your API key (key=[API KEY])

Response format: JSON

🌪🌀 Step 3: **Check for Severe Weather**
The JSON weather data output is analyzed, and if severe weather conditions or alerts are detected, the workflow sends the alert via your preferred communication channel(s).

## Optional
You can replace the Telegram node with email, WhatsApp, SMS notifications, or add multiple notification nodes to receive severe weather alerts across all desired channels.

## 📊 Basic Information

- **Workflow ID:** 10285
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 30
- **Downloads:** 3
- **Created:** 2025/10/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10285)

## 👤 Author

- **Name:** Razvan Bara
- **Username:** @amzneer

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **httpRequest** 
- **function** 
- **telegram** 
- **scheduleTrigger** 
- **if** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
