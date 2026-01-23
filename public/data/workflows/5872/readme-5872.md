# Automated Telegram UserBot session monitoring & recovery with TelePilot

> ![image.png](fileId:1786)
**Disclaimer:** *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

**Important distinction:** This template manages **Telegram Copilot**'s UserBots (client accounts), not Telegram Bots.
# UserBot vs. Bot: Key Differences
## 🔹 Telegram Copilot's UserBots
- Authenticate as real user accounts (phone number required)
- Can join groups/channels without "Bot" label
- Subject to Telegram's client API limits
- Require manual login (MFA supported)
## 🔹 Telegram Bots
- Use @BotFather-created tokens
- Limited to bot API functionality
- Can't initiate chats with unbidden users
- No phone number required
This template solves the unique challenges of **UserBot** management through:
# Core Functionality
## 🛡️ Session Reliability
- Automatic crash recovery (5-step restart sequence)
- Persistent session monitoring (checks every 6h)
- Database cleanup via /clear command
## 📱 Multi-Device Support
- Manages sessions independently from mobile clients
- Tracks active devices via /stat command
- Isolates session data per credential

## 🔔 Smart Notifications
- Real-time alerts to admin chat
- Detailed error context with authState snapshots
- Success confirmations with session metadata
# Setup Guide
## Prerequisites
- Self-hosted n8n instance (community node required)
- Valid Telegram account for UserBot
- Telegram bot token for notifications
- TelePilot credentials with api_id/api_hash
## Configuration Steps
### Credential Setup
- Add TelePilot credentials in n8n
- Configure Telegram bot token in notification nodes
- Set admin chat ID for alerts
### Monitoring Customization
- Adjust check frequency in Schedule Trigger
- Modify alert thresholds in Filter nodes
- Configure retry logic in recovery sequence
### Session Management
- Test /start command flow
- Verify /stat output format
- Confirm notification delivery

## Workflow Customization
### Advanced Options
- Add secondary notification channels (Email, Slack)
- Implement escalating alert system
- Integrate with monitoring dashboards
- Customize recovery attempt limits
### Compliance Notes
- UserBots must comply with Telegram's Terms of Service
- Not intended for bulk messaging or spam
- Recommended for legitimate automation use cases


**Note:** UserBots must comply with Telegram ToS. Not for spam/mass messaging.

**Why This Matters:** UserBots enable automation scenarios impossible with regular bots (e.g., group management as normal user, reacting as human account). This workflow keeps them reliably online 24/7.

## 📊 Basic Information

- **Workflow ID:** 5872
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 636
- **Downloads:** 63
- **Created:** 2025/7/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5872)

## 👤 Author

- **Name:** IvanCore
- **Username:** @ivancore

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **stickyNote** (×3)
- **scheduleTrigger** 
- **@telepilotco/n8n-nodes-telepilot.telePilot** (×4)
- **set** (×3)
- **filter** (×2)
- **telegram** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
