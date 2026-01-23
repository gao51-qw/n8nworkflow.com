# Automate YouTube channel analytics reports to Telegram weekly

> Tired of manually checking your YouTube Studio every day just to see how your channel is performing? This workflow is your solution.

It automates the entire process of gathering your channel's key statistics and delivers a beautiful, easy-to-read performance report directly to your Telegram chat on a schedule you set. Stay updated on your channel's growth without lifting a finger.

## How it Works

This workflow runs on a custom schedule to give you consistent updates.

* **Scheduled Trigger**: The workflow kicks off automatically at your chosen interval (e.g., every Monday at 6 AM).
* **Fetch Channel Data**: It makes a series of requests to the **YouTube Data & Analytics APIs** to gather the latest statistics on:
    * Channel Summary (views, watch time, subscribers, etc.)
    * Top Performing Videos
    * Audience Traffic Sources
    * Audience Demographics
* **Process & Format**: The raw data from the APIs is merged and transformed into a clean, human-readable format using Markdown and emojis.
* **Send Telegram Report**: The final formatted summary is sent as a message to your specified Telegram chat, giving you an instant overview of your channel's performance.

## Setup Steps

You'll need to configure credentials for Google and Telegram to get started.

1.  **Configure Google API Credentials**:
    * Create an **OAuth 2.0 Client ID** from the [Google Cloud Console](https://console.cloud.google.com/).
    * Make sure to enable the **YouTube Analytics API** and **YouTube Data API v3**.
    * In n8n, create new Google API credentials using your Client ID and Client Secret, ensuring you add the required YouTube scopes.
2.  **Configure Telegram Credentials**:
    * Create a new Telegram bot using **BotFather** to get your API token.
    * Add the token to the Telegram node's credentials.
3.  **Customize the Workflow**:
    * Adjust the **Schedule** node to set how often you want to receive the report.
    * In the **Telegram** node, enter the **Chat ID** for the person or group you want to send the report to.

[![Watch Tutorial on YouTube](https://img.youtube.com/vi/AC_pFCm0w2Q/maxresdefault.jpg)](https://youtu.be/AC_pFCm0w2Q)

## 📊 Basic Information

- **Workflow ID:** 8554
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 432
- **Downloads:** 43
- **Created:** 2025/9/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8554)

## 👤 Author

- **Name:** Abdul Aziz Ahwan
- **Username:** @abdulazizahwan

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **httpRequest** (×5)
- **telegram** 
- **code** (×6)
- **merge** (×4)
- **scheduleTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
