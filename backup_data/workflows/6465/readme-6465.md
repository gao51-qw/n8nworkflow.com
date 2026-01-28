# Send daily weather reports to email with OpenWeatherMap and Gmail

> ## Overview

This n8n workflow automates the process of sending a daily weather report for a specified city directly to your email inbox. It's a simple yet effective way to stay informed about the weather without manually checking.

## How It Works
This workflow operates in four main steps:

**Daily Schedule Trigger**:

The workflow begins with a Cron node, which acts as a scheduler.

It's configured to trigger the workflow automatically at a specific time each day (e.g., every morning at 8:00 AM).

Fetch Weather Data:

Next, an HTTP Request node is used to interact with the OpenWeatherMap API.

This node constructs a URL to query the API for current weather conditions in a specified city (e.g., "London").

It includes parameters like units=metric (for Celsius temperatures) and your unique appid (API key) for authentication with OpenWeatherMap.

**Format Weather Report**:

A Code node receives the raw JSON weather data from the OpenWeatherMap API.

Inside this node, JavaScript code extracts relevant information such as city name, weather description, temperature (current and "feels like"), humidity, and wind speed.

It then formats this information into a human-readable text string, creating the actual weather report message.

**Send Email Report**:

Finally, a Gmail node takes the formatted weather report from the Code node.

It uses your configured Gmail credentials to send an email to your specified recipient address.

The email's subject line dynamically includes the city name, and the body contains the full formatted weather report.

## Setup Steps
To get this workflow up and running, follow these instructions:

Step 1: Get Your OpenWeatherMap API Key

Go to the OpenWeatherMap website.

Sign up for a free account if you don't already have one.

Once logged in, navigate to the "API keys" section of your profile.

Copy your unique API key. You will need this in Step 4.

Step 2: Create Gmail Credentials in n8n

In your n8n instance, click on Credentials in the left sidebar.

Click New Credential.

Search for and select "Gmail OAuth2 API" or "Gmail API" (OAuth2 is generally preferred).

Follow the on-screen instructions to connect your Gmail account. This usually involves clicking an "Authenticate with Google" button and granting n8n the necessary permissions. Save the credential.

Make note of the Credential Name (e.g., "My Gmail Account").

## 📊 Basic Information

- **Workflow ID:** 6465
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 460
- **Downloads:** 46
- **Created:** 2025/7/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6465)

## 👤 Author

- **Name:** David Olusola
- **Username:** @dae221

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **cron** 
- **httpRequest** 
- **code** 
- **gmail** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
