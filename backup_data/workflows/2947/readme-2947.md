# National Weather Service 7-day forecast in Slack

> # Weather via Slack 🌦️💬

## Overview
This workflow provides real-time weather updates via Slack using a **custom Slack command**:  
`/weather [cityname]`

Users can type this command in Slack (e.g., `/weather New York`), and the workflow will fetch and post the latest forecast, including temperature, wind conditions, and a short weather summary.

While this workflow is designed for Slack, users can modify it to send weather updates via **email, Discord, Microsoft Teams, or any other communication platform**.

## How It Works
1. **Webhook Trigger** – The workflow is triggered when a user runs `/weather [cityname]` in Slack.
2. **Geocoding with OpenStreetMap** – The city name is converted into latitude and longitude coordinates.
3. **Weather Data from NOAA** – The coordinates are used to retrieve detailed weather data from the **National Weather Service (NWS)** API.
4. **Formatted Weather Report** – The workflow extracts relevant weather details, such as:
   - Temperature (°F/°C)
   - Wind speed and direction
   - Short forecast summary
5. **Slack Notification** – The weather forecast is posted back to the Slack channel in a structured format.

## Requirements
- A **custom Slack app** with:
  - The ability to create a **Slash Command (`/weather`)**
  - OAuth permissions to post messages in Slack
- An **n8n instance** to host and execute the workflow

## Customization
- Replace Slack messaging with **email, Discord, Microsoft Teams, Telegram, or another service**.
- Modify the weather data format for different output preferences.
- Set up scheduled weather updates for specific locations.

## Use Cases
- Instantly check the weather for any location directly in Slack.
- Automate weather reports for team members or projects.
- Useful for remote teams, outdoor event planning, or general weather tracking.

## Setup Instructions
1. **Create a custom Slack app**:
   - Go to [api.slack.com/apps](https://api.slack.com/apps) and create a new app.
   - Add a **Slash Command** (`/weather`) with the webhook URL from n8n.
   - Enable OAuth scopes for sending messages.
2. **Deploy the webhook** – Ensure it can receive and process Slack commands.
3. **Run the workflow** – Type `/weather [cityname]` in Slack and receive instant weather updates.


## 📊 Basic Information

- **Workflow ID:** 2947
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 1951
- **Downloads:** 195
- **Created:** 2025/2/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2947)

## 👤 Author

- **Name:** Alex Kim
- **Username:** @alexk1919

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **webhook** 
- **slack** 
- **httpRequest** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
