# Manage User Authentication with Telegram, Redis Cache and Google Sheets

> How It Works

- Telegram bot listens for messages and uses chat ID as the unique user identifier.
- Checks Google Sheets for existing users; registers new users if not found.
- Caches active sessions in Redis for fast lookup and login-state handling.
- Stores and retrieves user data (UserID, Name, Telegram Chat ID) in Google Sheets.
- Can be triggered by other n8n workflows to fetch or update user/session data.

Setup Steps

- Obtain Telegram Bot token, Google Sheets “Users” sheet with API credentials, and a Redis instance.
- Import the n8n workflow and configure Redis, Telegram Bot, and Google Sheets credentials.
- Expect 30–45 minutes to complete workflow import, Redis setup, and API wiring.
- Refer to sticky notes inside the workflow for exact field mappings and node configurations.

## 📊 Basic Information

- **Workflow ID:** 4548
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 334
- **Downloads:** 33
- **Created:** 2025/6/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4548)

## 👤 Author

- **Name:** Archit Jain
- **Username:** @architjn

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **telegramTrigger** 
- **googleSheets** (×3)
- **switch** (×2)
- **code** 
- **merge** (×2)
- **redis** (×2)
- **stickyNote** 
- **executeWorkflowTrigger** 
- **set** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
